import React, { Component } from 'react'
import { Styled } from './index.styled'

  
  interface ILoginProps {
    code: string;
  }
    
  class LoginForm extends Component<ILoginProps> {
    render = () => {
        return (
            <Styled.div>
                <h2>Formulaire d'authentification</h2>
                <Styled.form action="">
                    <Styled.Label>
                        Code
                    </Styled.Label>
                    <Styled.input type="text" name="code" placeholder="code" />
                    <Styled.Button__Text>Valider</Styled.Button__Text>
                </Styled.form>
            </Styled.div>
        )
    }
  }



export default LoginForm;