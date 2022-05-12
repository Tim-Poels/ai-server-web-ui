import React from 'react'
import styled from 'styled-components'
import '../Pages/dashboard.css';

const NavbarButton = (props) => {
    const buttonText = props.text;
    //the button text comes in via props
    //state for clicked button ? and change the color of the button that is used
    let thisClass = "tab" + props.nmbr;
    return (
		<NavBtn className={thisClass}>
			<p>{buttonText}</p>
		</NavBtn>
     );
}

export default NavbarButton;

const NavBtn = styled.div`
height: 50px;
border-radius: 10px;
color: #B0B0B0;
background-color: #F5F5F5;
font-family: 'Poppins', sans-serif;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
`