import React from "react";
import styled from "styled-components";
import { MemeProps } from "../interfaces";

const Displayer = styled.div`
    margin-top: 2.5rem;
    width:80%;
    height:300px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width:600px){
        height:500px;
    }
    @media (min-width: 1125px){
        width:890px;
    }
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
`
const TopText = styled.p`
    width: 90%;
    text-align: center;
    position: absolute;
    top: 5px;
    font-size: 1.2rem;
    color: white;
    letter-spacing: 3px;
    text-shadow:
        2px 2px 0 #000,
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        0 2px 0 #000,
        2px 0 0 #000,
        0 -2px 0 #000,
        -2px 0 0 #000,
        2px 2px 5px #000;
    
    @media (min-width:600px){
        font-size: 1.9rem;
        top: 10px;
    }
    @media (min-width: 1125px){
        font-size: 2.8rem;
        top: 20px;
    }
`
const BottomText = styled.p`
    width: 90%;
    text-align: center;
    position: absolute;
    bottom: 5px;
    font-size: 1.2rem;
    color: white;
    letter-spacing: 3px;
    text-shadow:
        2px 2px 0 #000,
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        0 2px 0 #000,
        2px 0 0 #000,
        0 -2px 0 #000,
        -2px 0 0 #000,
        2px 2px 5px #000;

    @media (min-width:600px){
        font-size:1.9rem;
        bottom: 10px;
    }
    @media (min-width: 1125px){
        font-size: 2.8rem;
        bottom: 20px;
    }
`
export default function MemeDisplayer({ imgSrc, formValues }: MemeProps){
    return (
        <Displayer>
            <Image src={imgSrc}/>
            <TopText>{formValues.topText}</TopText>
            <BottomText>{formValues.bottomText}</BottomText>
        </Displayer>
    )
}