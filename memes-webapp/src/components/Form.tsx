import React from 'react'
import styled from 'styled-components'
import { FormProps } from '../interfaces'


const FormTag = styled.form`
  max-width:100%;
  display:flex;
  align-items: center;
  justify-content: center; 
`
const Ul = styled.ul`
  margin-top: 2rem;
  width:900px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`
const Li = styled.li`
  width:300px;
  height:100px;
  margin-top:1rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-around;
`
const Label = styled.label`
  font-size:1.6rem;
`
const Input = styled.input`
  width:250px;
  height: 50px;
  border: 2px solid rgb(252,176,69);
  border-radius:5px;
  text-indent: .5rem;
  font-family: 'Ubuntu', sans-serif;
  &:focus{
      border: 2px solid #fd6e00;
  }
`
export default function Form({ formValues, handleChange }: FormProps): JSX.Element{
    return (
        <FormTag>
            <Ul>
                <Li>
                    <Label htmlFor='topText'>Top Text</Label>
                    <Input
                        type="text"
                        name="topText"
                        id="topText"
                        maxLength={120}
                        value={formValues.topText}
                        onChange={handleChange}
                        >   
                    </Input>
                </Li>
                <Li>
                    <Label htmlFor='bottomText'>Bottom Text</Label>
                    <Input
                        type="text"
                        name="bottomText"
                        id="bottomText"
                        maxLength={120}
                        value={formValues.bottomText}
                        onChange={handleChange}
                        >   
                    </Input>
                </Li>
            </Ul>
        </FormTag>
    )
}