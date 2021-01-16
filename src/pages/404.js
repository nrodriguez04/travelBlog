import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from '../components/Button';
import styled from 'styled-components';
import Video2 from '../assets/videos/beach.mp4';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <FourContainer>
      <FourBg>
        <VideoBack src={Video2} type="video/mp4" autoPlay loop muted playsInline />
      </FourBg>
      <FourContent>
        <FourItems>
          <FourH1>404: Sorry, this page is still under development</FourH1>
          <FourP>Please check back at a later date</FourP>
          <Button primary="true" big="true" round="true" to="/">Back to the real world</Button>
        </FourItems>
      </FourContent>
    </FourContainer>
  </Layout>
)

export default NotFoundPage;

const FourContainer = styled.div`
  background: #0C0C0C;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #FFFBFC;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
  }
`

const FourContent = styled.div`
    z-index: 3;
    height: calc(100vh-80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`


const FourItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #FFFBFC;
    line-height: 1.1;
    font-weight: bold;
`


const FourH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
    font-family: 'Playfair Display', serif;
`


const FourP = styled.p`
    font-size: clamp(.5rem, 2vw, 2rem);
    margin-bottom: 2rem;
    font-weight: 300;
    font-family: 'Spartan', sans-serif;
`

const FourBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`


const VideoBack = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
