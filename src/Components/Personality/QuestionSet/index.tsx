import React, { Component } from 'react'
import { Styled } from './index.styled'
import { questionSet,titles,letters } from '../data';


interface surveyState {
    survey: Array<number>[]
}

  class QuestionSet extends Component<{},surveyState> {

      constructor(props: any){
        super(props);
        let arr = Array(8);
        for(var i = 0 ; i < arr.length; i++){
            arr[i] = Array<number>(10).fill(0);
        }        
        this.state = {
            survey: arr
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
         this.calculateScore();
         //this.props.login(code);
       event.preventDefault();
       };
   
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
     
        return (
            <div>
                
            <Styled.div>
            <Styled.form onSubmit={this.handleSubmit}>
                    <h2>Repondez au questionnaire suivant :</h2>
                    {
                        content
                    }
                
                <Styled.Button__Text type="submit">Valider</Styled.Button__Text>
               </Styled.form>
            </Styled.div>

            </div>

        )
    }
  }



export default QuestionSet;