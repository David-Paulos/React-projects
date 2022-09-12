import React from "react";
import styled from 'styled-components'

const Navbar = styled.nav`
    width:100%;
    height:100px;
    background: rgb(252,176,69);
    background: -moz-linear-gradient(24deg, rgba(252,176,69,1) 4%, rgba(255,89,89,1) 9%, rgba(252,176,69,1) 15%, rgba(255,89,89,1) 20%, rgba(252,176,69,1) 27%, rgba(255,89,89,1) 32%, rgba(252,176,69,1) 38%, rgba(255,89,89,1) 44%, rgba(252,176,69,1) 50%, rgba(255,89,89,1) 56%, rgba(252,176,69,1) 62%, rgba(255,89,89,1) 68%, rgba(252,176,69,1) 73%, rgba(255,89,89,1) 79%, rgba(252,176,69,1) 85%, rgba(255,89,89,1) 90%, rgba(252,176,69,1) 95%);
    background: -webkit-linear-gradient(24deg, rgba(252,176,69,1) 4%, rgba(255,89,89,1) 9%, rgba(252,176,69,1) 15%, rgba(255,89,89,1) 20%, rgba(252,176,69,1) 27%, rgba(255,89,89,1) 32%, rgba(252,176,69,1) 38%, rgba(255,89,89,1) 44%, rgba(252,176,69,1) 50%, rgba(255,89,89,1) 56%, rgba(252,176,69,1) 62%, rgba(255,89,89,1) 68%, rgba(252,176,69,1) 73%, rgba(255,89,89,1) 79%, rgba(252,176,69,1) 85%, rgba(255,89,89,1) 90%, rgba(252,176,69,1) 95%);
    background: linear-gradient(24deg, rgba(252,176,69,1) 4%, rgba(255,89,89,1) 9%, rgba(252,176,69,1) 15%, rgba(255,89,89,1) 20%, rgba(252,176,69,1) 27%, rgba(255,89,89,1) 32%, rgba(252,176,69,1) 38%, rgba(255,89,89,1) 44%, rgba(252,176,69,1) 50%, rgba(255,89,89,1) 56%, rgba(252,176,69,1) 62%, rgba(255,89,89,1) 68%, rgba(252,176,69,1) 73%, rgba(255,89,89,1) 79%, rgba(252,176,69,1) 85%, rgba(255,89,89,1) 90%, rgba(252,176,69,1) 95%);
    background-size: 800% 800%;
    animation: animate 60s linear infinite; 
    @keyframes animate {
      0%{
        background-position: 0 50%;
      }
      50%{
        background-position: 100% 50%;
      }
      100%{
        background-position: 0 50%;
      }
    }
`
const Div = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items:center;
    justify-content:center;
    background: rgba(255, 255, 255, 0.352);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
`
const H1 = styled.h1`
    font-size:1.8rem;
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
` 
export default function Nav(): JSX.Element {
    return (
      <Navbar>
        <Div>
          <H1>MEME CREATOR</H1> 
        </Div>
      </Navbar>
    );
}