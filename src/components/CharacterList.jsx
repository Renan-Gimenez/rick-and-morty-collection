import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

import Div from "./Div";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;

    margin: 32px;
`

const StyledButton = styled.button`
    min-width: 148px;

    border: none;
    outline: none;

    border-radius: 99px;
    padding: 10px 20px;
    
    background-color: dodgerblue;

    transition: 200ms;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    :disabled {
        opacity: 0.5;
    }

    :hover {
        transform: scale(1.1);
        /* letter-spacing: 1px; */
    }
`

export default function CharacterList(props) {
    const [charactersList, setCharactersList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterPage, setFilterPage] = useState(1);

    const [hasResults, setHasResults] = useState(true);

    const [disabledPrev, setDisabledPrev] = useState(false);
    const [disabledNext, setDisabledNext] = useState(false);

    let endPoint = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
  
    useEffect(() => {
        console.log("<------------------------->")
        if (props.inputValue === "") {
            endPoint = `https://rickandmortyapi.com/api/character?page=${currentPage}`
            setFilterPage(1);
        } else {
            endPoint = `https://rickandmortyapi.com/api/character/?name=${props.inputValue}&page=${filterPage}`
            setCurrentPage(1);
        }

        fetch(endPoint)
        .then(res => res.json())
        .then(data => {
            if (data.results.length == 0) {
                setHasResults(false)
                return <p>Loading...</p>
            } else {
                setHasResults(true)
            }
            
            setCharactersList(data.results);

            console.log(data.results.length);
            console.log(`Has results: ${hasResults}`);
            
            data.info.prev == null ? setDisabledPrev(true) : setDisabledPrev(false);
            data.info.next == null ? setDisabledNext(true) : setDisabledNext(false);
            
            console.log(charactersList);
        })
        .catch(error => {
            setHasResults(false)

            console.log(error);
            return;
        })

        console.log(`==> Array Length: ${charactersList.length}`);

        console.log(`==> Current page: ${currentPage}`);
        console.log(endPoint);
        setLoading(false);
        
    }, [currentPage, props.inputValue])

    useEffect(() => {
        console.log(`Loading: ${loading}`);
    }, [loading])
  
    const handlePrevPage = () => {
        setLoading(true);
        setCurrentPage(currentPage - 1);
        setFilterPage(filterPage - 1);
    }
    
    const handleNextPage = () => {
        setLoading(true);
        setCurrentPage(currentPage + 1);
        setFilterPage(filterPage + 1);
    }
  
    if (loading) {
        return (
            <p>Loading...</p>
        ) 
    }

    // !hasResults && <h3 style={{margin: "20px"}}>{`No results for "${props.inputValue}"`}</h3>

    if (!hasResults) {
        return (
            <h3 style={{margin: "20px"}}>{`No results for "${props.inputValue}"`}</h3>
        )
    }
    
    return(
        <>
            {hasResults && <Div>
                {
                    charactersList.map((e) => (
                        <Card
                            key={e.id}
                            image={e.image} 
                            name={e.name} 
                            status={e.status} 
                            species={e.species}
                            location={e.origin.name} 
                            firstSeen={e.location.name} 
                        />)
                    )
                }
            </Div>}

            <StyledDiv>
                <StyledButton disabled={disabledPrev ? true : false} 
                onClick={() => {
                    handlePrevPage()
                }}>Previous page</StyledButton>
                
                <StyledButton disabled={disabledNext ? true : false}
                onClick={() => {
                    handleNextPage()
                }}>Next page</StyledButton>
            </StyledDiv>
        </>
    );
}
