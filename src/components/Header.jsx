import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    height: 64px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);

    padding: 0 5vw;

    /* border-bottom: 1px solid #777; */
`

export default function Header(props) {
    return(
        <StyledHeader>
            <h2>Rick and Morty Collection</h2>
        </StyledHeader>
    );
}
