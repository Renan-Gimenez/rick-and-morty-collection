import React from "react";
import styled from "styled-components"

const StyledDiv = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    gap: 32px;

    padding: 0 5vw;
    /* border: 1px solid red; */
`

export default function Div(props) {
    return(
        <StyledDiv>
            {props.children}
        </StyledDiv>
    );
}