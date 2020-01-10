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
margin: 40px auto
`;

const title = styled.h2`margin: 40px auto;`;
const letter = styled.h3`margin-left: 30px ;`;
const innerdiv = styled.div`
border: 3px solid #f1f1f1;
padding: 20px;
margin: 10px auto`;

const checkbox = styled.input`
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;`;
const checkmark = styled.span` position: absolute;
top: 0;
left: 0;
height: 25px;
width: 25px;
background-color: #eee;
&:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}`;

const container = styled.label`

display: block;
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 22px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
&:hover ${checkbox} ~ ${checkmark}  {
  background-color: #ccc;
}
& ${checkbox}:checked ~ ${checkmark}  {
  background-color:  #1abc9c;
}
& inp${checkbox}ut:checked ~ ${checkmark}:after {
  display: block;
}
& ${checkmark}:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
`;




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

const form = styled.form`
border: 3px solid #f1f1f1;
padding: 50px`;






  

export const Styled = {
  input,
  div,
  innerdiv,
  Button__Text,
  Label,
  checkmark,
  container,
  checkbox,
  title,
  letter,
  form,
};