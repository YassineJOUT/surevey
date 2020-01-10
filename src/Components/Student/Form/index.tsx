import React, { Component } from 'react'
import { Styled } from './index.styled'
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import { register } from '../../../store/Student/actions';
import { ICredentials } from '../../../store/Student/types';
import _ from 'lodash';
interface IStudentProps {
  register: Function;
}
  
  interface IStudentStateProps {
    error: string;
    isLoading: boolean
  }
    
type IProps = IStudentProps & IStudentStateProps;

  class StudentForm extends Component<IProps> {
    handleSubmit = (
      event: React.FormEvent<HTMLFormElement>
     ) => {
      const nomField = document.querySelector('.nom') as HTMLInputElement;
      let nom: string = (nomField) ? nomField.value : '';
      const prenomField = document.querySelector('.prenom') as HTMLInputElement;
      let prenom: string = (prenomField) ? prenomField.value : '';
      const emailField = document.querySelector('.email') as HTMLInputElement;
      let email: string = (emailField) ? emailField.value : '';
      const telField = document.querySelector('.tel') as HTMLInputElement;
      let tel: string = (telField) ? telField.value : '';
      if (!_.isEmpty(nom) && !_.isEmpty(prenom) && !_.isEmpty(email) && !_.isEmpty(tel)) {
        const user: ICredentials = {
          email,
          nom,
          prenom,
          tel,
        };
        this.props.register(user);
      }
       //const code = event.target.
       
      
     event.preventDefault();
     };
    render = () => {
        return (
            <Styled.div>
                <h2>Saisir vos informations</h2>
                <Styled.form onSubmit={this.handleSubmit}>
                { this.props.error &&
                <Styled.error>{this.props.error}</Styled.error>
            }
                    <Styled.input type="text" className="nom" name="nom" placeholder="nom" />
                    <Styled.input type="text" className="prenom" name="prenom" placeholder="prenom" />
                    <Styled.input type="text" className="email" name="email" placeholder="email" />
                    <Styled.input type="text" className="tel" name="tel" placeholder="phone number" />
                    {this.props.isLoading && <Styled.Button__Text type="submit" disabled>Loading.. </Styled.Button__Text>}
                    {!this.props.isLoading && <Styled.Button__Text type="submit">Valider</Styled.Button__Text>}
                    
                </Styled.form>
            </Styled.div>
        )
    }
  }


  const mapStateToProps = ({ student }: ApplicationState) => ({
    error: student.error,
    isLoading: student.isLoading
  });
  
  const mapActionsToProps = { register };


export default connect(mapStateToProps, mapActionsToProps)(StudentForm);

