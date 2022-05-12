import React from 'react';
import './training.css';
import TrainingInput from './TrainingInput.js';
import styled from 'styled-components';


function Training({ title }) {
  return (
    <Wrapper>
      <BoxTitle>{title}</BoxTitle>
      <InputCont>
        <TrainingInput title={"DockerHub image slug"} placeholder={"DockerHub_username/image_name"} />
        <TrainingInput title={"Volume"} placeholder={"/output"} />
        <ButtonCont>
          <button className='submitButton'>Submit</button>
        </ButtonCont>
      </InputCont>
    </Wrapper>
  );
}

export default Training



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 55vh;
  width: 40vw;
  box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.25);
  padding: 30px;
`;

const BoxTitle = styled.h2`
  margin-left: auto;
  margin-right: auto;
  font-family: 'poppins', sans-serif;
  font-style: normal;
  font-size: 36px;
  font-weight: 600;
  line-height: 28px;
  `;

const InputCont = styled.div`
  display:flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-between;
  margin-top: 80px;
  `;

const ButtonCont = styled.div`
  height: 80px;
  width: 140px;
  align-self: flex-end;
`