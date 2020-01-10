import React, { Component } from 'react'
import { Styled } from './index.styled'
import { connect } from 'react-redux';
import { login } from '../../../store/Login/actions';
import { ApplicationState } from '../../../store';
import _ from 'lodash';

interface ILoginProps {
  login: Function;
}

  
  interface ILoginStateProps {
  code: string;
  isLoggedIn: boolean;
  error: string;
  isLoading: boolean;
}
    
type IProps = ILoginProps & ILoginStateProps;

  class LoginForm extends Component<IProps> {
    handleSubmit = (
     event: React.FormEvent<HTMLFormElement>
    ) => {

      const loginField = document.querySelector('.code') as HTMLInputElement;
        let loginCode: string = (loginField) ? loginField.value : '';
        if (!_.isEmpty(loginCode)) {
            this.props.login(loginCode);
        }
   
      
    event.preventDefault();
    };

   
    
    render = () => {
        return (
            <Styled.div>
                <h2>Formulaire d'authentification</h2>
                <Styled.form onSubmit={this.handleSubmit}>
                { this.props.error &&
                <Styled.error>{this.props.error}</Styled.error>
            }
               
                    <Styled.Label>
                        Code
                    </Styled.Label>
                    <Styled.input type="text" name="code" className="code" placeholder="code" />
                    {this.props.isLoading && <Styled.Button__Text type="submit" disabled>Loading.. </Styled.Button__Text>}
                    {!this.props.isLoading && <Styled.Button__Text type="submit">Valider</Styled.Button__Text>}
                    
                </Styled.form>
            </Styled.div>
        )
    }
  }
  const mapStateToProps = ({ login }: ApplicationState) => ({
    code: login.code,
    isLoggedIn: login.isLoggedIn,
    error: login.error,
    isLoading: login.isLoading
  });
  
  const mapActionsToProps = { login };


export default connect(mapStateToProps, mapActionsToProps)(LoginForm);
