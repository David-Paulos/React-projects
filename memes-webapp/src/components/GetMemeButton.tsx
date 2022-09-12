import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    margin-top:2.5rem;
    align-items: center;
    appearance: none;
    background-image: radial-gradient(100% 100% at 100% 0, rgba(252,176,69,1) 0, rgba(255,89,89,1) 100%);
    border: 0;
    border-radius: 6px;
    box-shadow: #42382366 0 2px 4px,#4236234c 0 7px 13px -3px,#6f5b3a7f 0 -3px 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Righteous', cursive;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 18px;

    &:focus{
        box-shadow: rgba(252,176,69,1) 0 0 0 1.5px inset, #42342366 0 2px 4px, #4233234c 0 7px 13px -3px, rgba(255,89,89,1) 0 -3px 0 inset;
    }
    &:hover{
        box-shadow: #42332366 0 4px 8px, #4232234c 0 7px 13px -3px, rgba(255,89,89,1) 0 -3px 0 inset;
        transform: translateY(-2px);
    }
    &:active{
        box-shadow: rgba(255,89,89,1) 0 3px 7px inset;
        transform: translateY(2px);
    }
`
interface ButtonProps{
    numGenerator:()=> void
}
export default function GetMemeButton({ numGenerator}: ButtonProps){
    return (
        <Button onClick={numGenerator}>Generate Meme</Button>
    )
}

