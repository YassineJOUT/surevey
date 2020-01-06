import React, { Component } from 'react'
import { Styled } from './index.styled'

  
  interface ILoginProps {
    nom: string;
    prenom: string;
    email: string;
    tel: string;
  }
    
  class StudentForm extends Component<ILoginProps> {
    render = () => {
        return (
            <Styled.div>
                <h2>Saisir vos informations</h2>
                <Styled.form action="">
                    <Styled.Label>
                        Code
                    </Styled.Label>
                    <Styled.input type="text" name="nom" placeholder="nom" />
                    <Styled.input type="text" name="prenom" placeholder="prenom" />
                    <Styled.input type="text" name="email" placeholder="email" />
                    <Styled.input type="text" name="tel" placeholder="tel" />
                    <Styled.Button__Text>Valider</Styled.Button__Text>
                </Styled.form>
            </Styled.div>
        )
    }
  }



export default StudentForm;