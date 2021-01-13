import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi'
import { menuData } from '../data/MenuData';
import { Button } from './Button';

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">TRVLR <Airplane /></NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="https://expedia.com" target="_blank">Book a Flight</Button>
      </NavBtn>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1330px) /2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #FFFBFC;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Ubuntu Condensed', sans-serif;
  font-size: 1.3rem;
`

const Airplane = styled(GiCommercialAirplane)`
  color: #FFFBFC;
`

const Bars = styled(FaBars)`
  display: none;
  color: #FFFBFC;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`