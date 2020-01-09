import React, { Component } from 'react'
import { Styled } from './index.styled'
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import { register } from '../../../store/Student/actions';
import { ICredentials } from '../../../store/Student/types';
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
       //const code = event.target.
       const user: ICredentials = {
         email: 'es',
         nom: 'es',
         prenom: 'es',
         tel: 'es',
       };
       this.props.register(user);
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
                    <Styled.input type="text" name="nom" placeholder="nom" />
                    <Styled.input type="text" name="prenom" placeholder="prenom" />
                    <Styled.input type="text" name="email" placeholder="email" />
                    <Styled.input type="text" name="tel" placeholder="tel" />
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

