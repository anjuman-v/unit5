
import styled from "styled-components";

export const Button = styled.button`
color:${({ color})=>color};
font-size:42px;
padding: 20px;
border:2px solid red;
border-radius:1px;
margin:10px;
background:${({ bgcolor })=>bgcolor};
`

