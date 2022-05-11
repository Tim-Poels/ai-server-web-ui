import React from 'react';
import '../training.css';
import Input from './TrainingInput';
import styled from 'styled-components';


function Training({ title }) {
  return (
    <Wrapper>
      <BoxTitle>{title}</BoxTitle>
      <InputCont>
        <Input title={"DockerHub image slug"} placeholder={"DockerHub_username/image_name"} />
        <Input title={"Volume"} placeholder={"/output"} />
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
  height: 450px;
  width: 550px;
  box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const BoxTitle = styled.h2`
  margin-left: auto;
  margin-right: auto;
  font-family: 'poppins', sans-serif;
  font-style: normal;
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
  `;

const InputCont = styled.div`
  display:flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
  `;

const ButtonCont = styled.div`
  height: 80px;
  width: 140px;
  align-self: flex-end;
`