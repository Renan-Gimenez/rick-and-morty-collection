import React from "react";
import styled from "styled-components";

const StylizedCard = styled.div`
    height: 220px;
    width: 550px;

    /* margin: 24px; */

    display: flex;
    
    border-radius: 16px;
    
    background-color: #2e2d3f;
    box-shadow: 0 15px 15px rgba(0, 0, 0, .1);
    
    img {
        height: 100%;
        width: auto;

        border-radius: 16px 0 0 16px;
    }
`

const StylizedInfo = styled.div`
    /* height: 100%; */
    width: 100%;

    padding: 16px;
    
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .circle {
        height: 10px;
        width: 10px;

        border-radius: 100%;

        background-color: red;

    }

    .description {
        color: #777;
    }

    .name {
        font-size: 24px;
        font-weight: 500;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        color: orange;
    }

    .status span div {
        display: inline-block;
        margin-right: 8px;
    }

    /* .status, .location, .first-seen {
        border: 1px solid red;
    } */
`

export default function Card(props) {
    if (props.name == null) {
        console.log("Name Missing");
    }

    return(
        <>
            <StylizedCard>
                <img src={props.image} alt="character" />
                <StylizedInfo>
                    <div className="status">
                        <a className="name" href="#">
                            {props.name == null ? "Name missing" : props.name}
                        </a>
                        <br />
                        <span href="#">
                            <div className="circle" 
                                style={
                                    props.status == "Alive" ? {backgroundColor: "#38cd51"} : 
                                    props.status == "Dead" ? {backgroundColor: "#df3d34"} : 
                                    {backgroundColor: "#9e9e9e"}}>
                            </div> 
                            {props.status == null ? "Status missing" : `${props.status} - ${props.species}`}
                        </span>
                    </div>
                    <div className="location">
                        <span className="description">Last known location:</span>
                        <br />
                        <a href="#">
                            {props.location == null ? "Location missing" : props.location}
                        </a>
                    </div>
                    <div className="first-seen">
                        <span className="description">First seen in:</span>
                        <br />
                        <a href="#">
                            {props.firstSeen == null ? "First seen missing" : props.firstSeen}
                        </a>
                    </div>
                </StylizedInfo>
            </StylizedCard>
        </>
    );
}
