import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter,  AiFillYoutube, AiOutlineMail } from 'react-icons/ai';
import { GiCommercialAirplane } from 'react-icons/gi';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDescription>
                    <h1>TRVLR <Airplane /></h1>
                    <p>We strive to create the best experience for our customers</p>
                </FooterDescription>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/">Contact</FooterLink>
                    <FooterLink to="/">Support</FooterLink>
                    <FooterLink to="/">Destinations</FooterLink>
                    <FooterLink to="/">FAQ</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                <FooterLinkItems>
                <FooterLinkTitle>About</FooterLinkTitle>
                <FooterLink to="/">Sponsorships</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Influencers</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/"><Insta /> Instagram</FooterLink>
                <FooterLink to="/"><Twitter />Twitter</FooterLink>
                <FooterLink to="/"><Facebook />Facebook</FooterLink>
                <FooterLink to="/"><Youtube />Youtube</FooterLink>
                <FooterLink to="/"><Email />Email</FooterLink>
            </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`


const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`


const FooterDescription = styled.div`
    padding: 0 2rem;

    h1 {
        margin-bottom: 3rem;
        color: #62BBC1;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`


const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flext-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`


const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`


const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover {
        color: #f26a3e;
        transition: 0.3s ease-out;
    }
`

const Airplane = styled(GiCommercialAirplane)`
  color: #62BBC1;
`

const Insta = styled(AiOutlineInstagram)`
    margin-right: 8px;
    font-size: 14px;
`


const Facebook = styled(AiFillFacebook)`
    margin-right: 8px;
    font-size: 14px;
`


const Twitter = styled(AiOutlineTwitter)`
    margin-right: 8px;
    font-size: 14px;
`


const Youtube = styled(AiFillYoutube)`
    margin-right: 8px;
    font-size: 14px;
`


const Email = styled(AiOutlineMail)`
    margin-right: 8px;
    font-size: 14px;
`
