import styled from 'styled-components'
// Button.styles.ts
const input = styled.input`
width: 100%;

padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
box-sizing: border-box;`;
const div = styled.div`
font-family: Arial, Helvetica, sans-serif;
width: 60%;

margin: 14% auto;
`;
const form = styled.form`
border: 3px solid #f1f1f1;
padding: 50px`;



const Button__Text = styled.button`
background-color:  #1abc9c;
color: white;
padding: 14px 20px;
border: none;
margin: auto 30%;
cursor: pointer;
width: 40%;
`;

const Label = styled.label`
font-weight: bold,
text-align: left;
`;

export const Styled = {
  input,
  div,
  form,
  Button__Text,
  Label
};