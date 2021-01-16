import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ImLocation } from 'react-icons/im';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaRegLightbulb } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby';

const Testimonials = () => {

    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["testimonial1", "testimonial2"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)


    return (
        <TestimonialContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What People are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`color: #3fffa8; font-size: 2rem; margin-bottom: 1rem;`}/>
                        <h3>JohnXX3240</h3>
                        <p><ImLocation /> Cabo San Lucas, Mexico</p>
                        <p>Great beach, this is where the party begins in Cabo San Lucas!! Mango Deck and many other great bars are here and the view is 
                        spectacular!! (You get to see the arch just in front of you!!), We would also like to give you a tip for your transportation at your 
                        arrival from Cabo airport: Médano beach is located in Cabo San Lucas and most hotels are there, you arrival will be in 
                        San José del Cabo (Cabo airport is there), We strongly recommend you to book your transportation from Cabo Airport to 
                        your resort with Cape Transfers, booking on Cape Transfers is very easy and the shuttle to Cabo San Lucas is only $18 or 
                        the private suburban $85 (in case you travel with family or friends), that would save you A LOT of money, what’s even better 
                        is that they even offer shuttle roundtrip.</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb css={`color: #e6e600; font-size: 2rem; margin-bottom: 1rem;`}/>
                        <h3>t&c_forever30</h3>
                        <p><ImLocation /> Santorini, Greece</p>
                        <p>I walked all the stairs down to the bay in Oia and walked them all back which is a serious workout, but I believe there is a road 
                        if you wanted to drive instead. The bay is very pretty with lots of fish restaurants lining the edge. If you keep walking along, 
                        there is a trail over the rocks that takes you to Ammoudi Beach (though not a beach at all, but just a space on the rocks to go swimming 
                        from). There is a small island a short distance from shore that you can swim to and cliff jump from. Perhaps 20-25 ft. high. 
                        Lots of fun and great to cool off after all the stairs!</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialContainer>
    )
}

export default Testimonials;

const TestimonialContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
`


const TopLine = styled.p`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`


const Description = styled.p`
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


const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p {
        color: #3b3b3b;
        padding: 10px;
    }
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

const Images = styled(Img)`
    border-radius: 10px;
    height: 100%;
`



