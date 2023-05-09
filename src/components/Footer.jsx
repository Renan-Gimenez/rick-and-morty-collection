import React from "react";
import styled from "styled-components";
import { BsGithub, BsTwitter } from "react-icons/bs"
import { DiCode } from "react-icons/di"

const StyledFooter = styled.footer`
    height: 30vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: auto;
    padding: 32px 0;

    box-shadow: 0 -10px 10px rgba(0, 0, 0, .1);

    svg {
        fill: #f5f5f5;
        font-size: 1.5em;

        line-height: 100%;

        /* border: 1px solid blue; */
    }

    svg:hover {
        fill: orange;
    }

    .social-media {
        height: min-content;
        width: min-content;

        display: flex;
        align-items: center;
        gap: 16px;

        margin: 0 auto 8px;

        /* border: 1px solid red; */
    }

    .social-media a {
        height: 24px;
    }

    .dev-by-renan a {
        transition: 200ms;
    }

    .dev-by-renan a:hover {
        color: orange;
    }
`

export default function Footer(props) {
    return(
        <StyledFooter>
            <div>
                <span>Social medias:</span>
                <div className="social-media">
                    <a href="https://github.com/renan-gimenez" target="_blank">
                        <BsGithub />
                    </a>
                    <a href="https://twitter.com/renansgimenez" target="_blank">
                        <BsTwitter />
                    </a>
                </div>
            </div>
            
            <span className="dev-by-renan">❮❯ by <a href="https://github.com/renan-gimenez" target={"_blank"}>Renan Gimenez</a></span>
        </StyledFooter>
    );
}
