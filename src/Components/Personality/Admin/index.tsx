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
        const nbr = document.querySelector('.nbr') as HTMLInputElement;
        let nbrr: number = (nbr) ? parseInt(nbr.value)  : 0;
        
         console.log(nbrr);
         this.getgroupes(nbrr);
         console.log();
       event.preventDefault();
       };
    getgroupes = (nbr: number) => {
       /* let array = ['INFJ', 'ISFP', 'ESFP', 'ESFJ', 
                     'ENFP', 'INFP', 'ENTP', 'ENTJ',
                     'ENFP', 'ESTP', 'ENFP', 'ISFJ', 
                     'ISTJ', 'ISTP', 'INTJ', 'ESFJ'];

        const result = new Array(nbr);
        for()
        const grp1 = array.filter(e => e.includes("L"));
        const grp2 = array.filter(e => e.includes("S"));
        const grp3 = array.filter(e => e.includes("P"));
        const grp5 = array.filter(e => e.includes("J"));
        const grp4 = array.filter(e => e.includes("E"));
        const notgrp4 = array.filter(e => !e.includes("E"));
        const grp6 = array.filter(e => e.includes("I"));

        console.log(grp1);
        console.log(grp2);*/

    }
    render = () => {
        return (
            <div>
                <Styled.div>
                <h3> Bonjour Admin</h3>
        
                <Styled.form onSubmit={this.handleSubmit}>
                <h5>{this.props.students.length} Etudiants sont enregistrés</h5>
                    <Styled.input type="number" name="nbr" className="nbr" placeholder="Nombre de groupes" />
                    <Styled.Button__Text type="submit">Voir les groupes</Styled.Button__Text>
                </Styled.form>
                </Styled.div>
            </div>
        );
    }
  }

  const mapStateToProps = ({ student }: ApplicationState) => ({
    students: student.students,
    error: student.error,
    isLoading: student.isLoading
  });
  
  const mapActionsToProps = { doSurvey };


export default connect(mapStateToProps, mapActionsToProps)(Admin);
