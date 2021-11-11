import styled from "styled-components";
import nintendoLogo from "../../../assets/images/nintendo-logo.png";
import Input from "./Input";
import DropdownNavbar from "./DropdownNavbar";
import NavbarLink from "./NavbarLink";
import heartIcon from "../../../assets/images/heart-solid.svg";
import questionIcon from "../../../assets/images/question-solid.svg";
import userIcon from "../../../assets/images/user-solid.svg";
import NavbarExpanded from "./NavbarExpanded";
import { useState } from "react";

const StyledLogo = styled.img`
  height: 55px;
  width: 105px;
  object-fit: cover;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  background-color: var(--color-primary);
  padding: 0 15px;
  z-index: 5;
`;

const StyledNavbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const StyledNavButtonsWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  position: relative;
  margin-right: 2px;
`;

const StyledIcon = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 8px;
  margin-bottom: 4px;
  margin-top: 4px;
  margin-left: 4px;
  opacity: 0.7;
`;

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <StyledNavbar>
        <StyledLogoWrapper>
          <StyledLogo src={nintendoLogo} alt="nintendo-logo" />
        </StyledLogoWrapper>
        <Input active={expanded} setActive={setExpanded} />
        <NavbarExpanded active={expanded} />
        <StyledNavButtonsWrapper>
          <NavbarLink>
            <StyledIcon src={questionIcon} alt="question-icon" />
            Support
          </NavbarLink>
          <NavbarLink>
            <StyledIcon src={heartIcon} alt="heart-icon" />
            Wish List
          </NavbarLink>
          <NavbarLink>
            <StyledIcon src={userIcon} alt="user-icon" />
            Log in / Sign up
          </NavbarLink>
        </StyledNavButtonsWrapper>
      </StyledNavbar>
      <DropdownNavbar />
    </>
  );
};

export default Navbar;
