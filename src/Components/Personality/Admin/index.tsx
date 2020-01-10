import React, { Component } from 'react'
import { Styled } from './index.styled'
import { questionSet,titles,letters } from '../data';
import { ApplicationState } from '../../../store';
import { connect } from 'react-redux';
import { doSurvey } from '../../../store/Survey/actions';
import { history } from '../../../utilities/history';
import { ICredentials } from '../../../store/Student/types';

interface ISurveyProps {
    doSurvey: Function;
  }
    interface ISurveyStateProps {
        students: ICredentials[],
        error: string,
        isLoading: boolean
  }
      
  type IProps = ISurveyProps & ISurveyStateProps;


  class Admin extends Component<IProps> {
    
    handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
       ) => {
         //this.props.login(code);
       event.preventDefault();
       };
    render = () => {
        
      
        return (
            <div>
            
            <Styled.div>
            <h3> Bonjour Admin</h3>
            <Styled.form onSubmit={this.handleSubmit}>
            <h5>{this.props.students.length} Etudiants sont enregistrés</h5>
          
                <Styled.table >
                    <tr>
                        <Styled.th>T</Styled.th>
                        <Styled.td>T</Styled.td>
                        <Styled.td>T</Styled.td>
                        <Styled.td>T</Styled.td>
                        <Styled.td>T</Styled.td>
                    </tr>
                    <tr>
                        <Styled.td>T</Styled.td>
                        <Styled.td>T</Styled.td>
                        <Styled.td>T</Styled.td>
                        <Styled.td>T</Styled.td>
                        <Styled.td>T</Styled.td>
                    </tr>
                    <tr>
                        <Styled.td>T</Styled.td>
                        <Styled.td>T</Styled.td>
                        <Styled.td>T</Styled.td>
                        <Styled.td>T</Styled.td>
                        <Styled.td>T</Styled.td>
                    </tr>
                
                  
                </Styled.table>
              <Styled.Button__Text type="submit">Voir les groupes</Styled.Button__Text>
               </Styled.form>
            </Styled.div>

            </div>

        )
    }
  }


  const mapStateToProps = ({ student }: ApplicationState) => ({
    students: student.students,
    error: student.error,
    isLoading: student.isLoading
  });
  
  const mapActionsToProps = { doSurvey };


export default connect(mapStateToProps, mapActionsToProps)(Admin);
