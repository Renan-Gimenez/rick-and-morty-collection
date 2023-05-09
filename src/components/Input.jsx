import React, { useRef } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import userEvent from "@testing-library/user-event";

const StyledLabel = styled.label`
    height: 48px;
    border-radius: 99px;

    display: flex;
    align-items: center;

    padding: 0 16px;
    gap: 8px;

    background-color: rgba(0, 0, 0, .2);
    /* border: 1px solid red; */

    svg {
        cursor: pointer;
    }
`

const StyledInput = styled.input`
    height: 100%;
    width: 98px;

    outline: none;
    border: none;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    
    background-color: transparent;

    transition: 200ms;

    /* border: 1px solid blue; */

    :focus {
        width: 168px;
    }
`

export default function Input(props) {
    const inputRef = useRef();
    const myInput = inputRef.current;
    // const myInput = document.querySelector("#input");
    
    return(
        <StyledLabel htmlFor="input">
            <BiSearch className="input-img" />
            <StyledInput 
                id="input" 
                type="text" 
                ref={inputRef}
                value={props.value} 
                onChange={props.onChange} 
                onKeyDown={(e) => {
                    if (e.key === "Escape") {
                        myInput.blur();
                    }
                }} 
                />
        </StyledLabel>
    );
}
