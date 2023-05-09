import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io"
import { CgClose } from "react-icons/cg"

const StyledBackground = styled.div`
    height: 100vh;
    width: 100vw;

    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    /* background-color: rgba(0, 0, 0, .5); */
    backdrop-filter: blur(2px);
`

const StyledContainer = styled.div`
    height: 400px;
    width: 500px;

    padding: 16px;

    background-color: #21202f;
    border-radius: 24px;

    box-shadow: 0 5px 15px rgba(0, 0, 0, .35);
`

const StyledButton = styled.button`
    height: 32px;
    width: 32px;

    background-color: transparent;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: auto;

    border: none;
    outline: none;

    transition: 100ms;

    cursor: pointer;

    svg {
        height: 40px;
    }

    :hover {
        background-color: rgba(0, 0, 0, .1);
    }
`

export default function Modal(props) {
    return(
        <StyledBackground onCLick={() => {
            console.log("FECHOU")
        }}>
            <StyledContainer>
                <StyledButton onCLick={() =>{
                    console.log("IJIJIJI");
                }}>
                    {/* <IoMdClose /> */}
                    <CgClose />
                </StyledButton>
                <h3>{props.name}</h3>
            </StyledContainer>
        </StyledBackground>
    );
}
