import React, { Component } from 'react'
import { Styled } from './index.styled'
import { questionSet,titles,letters,descriptions } from '../data';
import { ApplicationState } from '../../../store';
import { connect } from 'react-redux';
import { doSurvey } from '../../../store/Survey/actions';
import { history } from '../../../utilities/history';

interface ISurveyProps {
    doSurvey: Function;
  }
    interface ISurveyStateProps {
        result: string;
        score: [];
        isLoading: boolean;
        nom: string,
        prenom: string
  }
      
  type IProps = ISurveyProps & ISurveyStateProps;

interface surveyState {
    survey: Array<number>[];
    isResult: boolean,
    result: string
}

  class QuestionSet extends Component<IProps,surveyState> {

      constructor(props: any){
        super(props);
        let arr = Array(8);
        for(var i = 0 ; i < arr.length; i++){
            arr[i] = Array<number>(10).fill(0);
        }        
        this.state = {
            survey: arr,
            isResult: false,
            result:''
        }
    }

    handleCheck = (event : React.ChangeEvent<HTMLInputElement>,key: number,k: number) => {
        const newValue = event.target.checked;
        let arr = this.state.survey;
        arr[key][k] = 1 - arr[key][k];
        this.setState({
            survey: arr
        });
        console.log(this.state);
    }
    calculateScore = () => {
        let arr = this.state.survey;
        let result = arr.map(item => item.reduce((a, b) => a + b));
        let res = [];
        for(var i = 0 ; i < result.length; i = i+2){
            if(Math.max(result[i],result[i+1]) === result[i])
               res.push(letters[i]);
            else
                res.push(letters[i+1]);
        } 
        return res.join('');
    }
    
    handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
       ) => {
         //const code = event.target.
         const result = this.calculateScore();
         this.setState({

            result,
            isResult: true
         });
         //this.props.login(code);
       event.preventDefault();
       };
       logout = () => {
        this.props.doSurvey(this.state.result);
        history.push('/login');
       }
    render = () => {
        let t = 0;
        let c = 0;
        const content = questionSet.map((element,key )=> {
            {t = 1 - t}
            return (
            <Styled.div key={'b'+key}>
                {
                    t ? <Styled.title>{titles[key/2]}</Styled.title>  : <h2></h2>
                }
                <Styled.letter>{letters[key]}</Styled.letter>
                <div >
                    {
                    element.map((elem,k )=> {
                        c++; 
                        return (
                        <Styled.innerdiv  key={'a'+k} >
                            <Styled.container >{elem}
                           
                                <Styled.checkbox type="checkbox" onChange={ (e) => {
                                    
                                    this.handleCheck(e,key,k)}
                                    }/>
                                <Styled.checkmark> </Styled.checkmark >
                            </Styled.container>
                            <Styled.input type="checkbox"/>
                            
                        </Styled.innerdiv>
                    )})
                    }
                </div> 
        </Styled.div>
         )        
        }  
     );
     const e = this.state.result;
        return (
            <div>
            
            <Styled.div>
            <h3> Bonjour {this.props.nom +" "+ this.props.prenom}</h3>
            <Styled.form onSubmit={this.handleSubmit}>
                {console.log(this.state)}
            {this.state.isResult===false ? <div> <h2>Repondez au questionnaire suivant :</h2>
                    {
                        content
                    }
                     <Styled.Button__Text type="submit">Valider</Styled.Button__Text>
                    </div> : <span>
                        <h2>Le resultat do votre teste de personnalité est :</h2>
                        {
                    this.state.result 
                    }
    <p>{
       
    descriptions[e]}</p>
                     <Styled.Button__Text type="button" onClick={this.logout}>Logout</Styled.Button__Text>
                     </span>}
                   
                
               
               </Styled.form>
            </Styled.div>

            </div>

        )
    }
  }


  const mapStateToProps = ({ survey,student }: ApplicationState) => ({
    result: survey.result,
    score: survey.score,
    isLoading: survey.isLoading,
    nom: student.students[student.students.length-1].nom,
    prenom: student.students[student.students.length-1].prenom
  });
  
  const mapActionsToProps = { doSurvey };


export default connect(mapStateToProps, mapActionsToProps)(QuestionSet);
