import React, { Component } from 'react'
import { Styled } from './index.styled'
import { questionSet,titles,letters } from '../data';
 
    
  class QuestionSet extends Component {
      
    render = () => {
        let t = 0;
        const content = questionSet.map((element,key )=> {
            {t = 1 - t}
            return (
            <div>
                {
                    t ? <h2>{titles[key/2]}</h2>  : <h2></h2>
                }
                <h3>{letters[key]}</h3>
                <Styled.div key={key}>
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
                </Styled.div> 
        </div>
         )
        
        }
        
     );
     console.log(content)
        return (

            <Styled.div>
                <h2>Repondez au questionnaire suivant</h2>
                {
                    content
                }
             
               <Styled.Button__Text>Valider</Styled.Button__Text>
            </Styled.div>
        )
    }
  }



export default QuestionSet;