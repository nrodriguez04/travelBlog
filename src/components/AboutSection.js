import React from 'react';
import styled from 'styled-components';

const About = () => {

    return (
        <AboutContainer>
            <AboutDescription>
                About Us
            </AboutDescription>
            <ContentWrapper>
                <ColumnOne>
                    <h1>I can't talk right now I'm doing hot girl shit...</h1>
                </ColumnOne>
                <ColumnTwo>
                    <h5>Y'all ever wonder what kind of brakes Greg Abbot has on his wheel chair?</h5>
                </ColumnTwo>
            </ContentWrapper>
        </AboutContainer>
    )
}

export default About;

const AboutContainer = styled.div`
    width: 100%;
    background: #62bbc1;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100vh;
`

const AboutDescription = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weigfht: bold;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

`

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`



