import React, { Component } from 'react'
import { Styled } from './index.styled'
import { questionSet,titles,letters } from '../data';
import { Header } from '../../Shared/Header'
    
  class QuestionSet extends Component {
      
    render = () => {
        let t = 0;
        const content = questionSet.map((element,key )=> {
            {t = 1 - t}
            return (
            <Styled.div>
                {
                    t ? <Styled.title>{titles[key/2]}</Styled.title>  : <h2></h2>
                }
                <Styled.letter>{letters[key]}</Styled.letter>
                <div key={key}>
                    {
                    element.map((elem,k )=> (
                        <Styled.innerdiv  key={k} >
                            <Styled.container >{elem}
                                <Styled.checkbox type="checkbox" />
                                <Styled.checkmark> </Styled.checkmark >
                            </Styled.container>
                            <Styled.input type="checkbox"/>
                            
                        </Styled.innerdiv>
                    ))
                    }
                </div> 
        </Styled.div>
         )
        
        }
        
     );
     console.log(content)
        return (
            <div>
                
                            <Styled.div>
                <h2>Repondez au questionnaire suivant :</h2>
                {
                    content
                }
             
               <Styled.Button__Text>Valider</Styled.Button__Text>
            </Styled.div>

            </div>

        )
    }
  }



export default QuestionSet;