import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    height: 30vh;
    width: 100%;

    box-shadow: 0 -10px 10px rgba(0, 0, 0, .1);
`

export default function Footer(props) {
    return(
        <StyledFooter>
            {props.children}
        </StyledFooter>
    );
}
