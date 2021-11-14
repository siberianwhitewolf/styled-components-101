import styled from "styled-components";
import nintendoLogo from "../../../assets/images/nintendo-logo.png";
import Input from "./Input";
import DropdownNavbar from "./DropdownNavbar";
import NavbarExpanded from "./NavbarExpanded";
import { useState } from "react";

const StyledLogo = styled.img`
  height: 55px;
  width: 105px;
  object-fit: cover;
`;

const StyledLogoWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: var(--color-primary);
  padding: 0 15px;
  z-index: 15;
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
  margin-right: 20px;
`;

const StyledIcon = styled.svg`
  height: 18px;
  width: 18px;
  margin-right: 8px;
  margin-bottom: 4px;
  margin-top: 4px;
  margin-left: 4px;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-text);
  margin-right: 20px;
  transition: all 0.15s linear;

  &:hover {
    opacity: 1;
    fill: var(--color-hover);
    color: var(--color-hover);
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <StyledNavbar>
        <a href="https://www.nintendo.com/">
          <StyledLogoWrapper>
            <StyledLogo src={nintendoLogo} alt="nintendo-logo" />
          </StyledLogoWrapper>
        </a>
        <Input active={expanded} setActive={setExpanded} />
        <NavbarExpanded active={expanded} />
        <StyledNavButtonsWrapper>
          <StyledLink href="http://support.nintendo.com/nin-nav-en/home">
            <StyledIcon
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="question"
              className="svg-inline--fa fa-question fa-w-12"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"></path>
            </StyledIcon>
            Support
          </StyledLink>
          <StyledLink href="https://www.nintendo.com/wish-list/">
            <StyledIcon
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              className="svg-inline--fa fa-heart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M472.1 270.5l-193.1 199.7c-12.64 13.07-33.27 13.08-45.91 .0107l-193.2-199.7C-16.21 212.5-13.1 116.7 49.04 62.86C103.3 15.88 186.4 24.42 236.3 75.98l19.7 20.27l19.7-20.27c49.95-51.56 132.1-60.1 187.3-13.12C525.1 116.6 528.2 212.5 472.1 270.5z"
              ></path>
            </StyledIcon>
            Wish List
          </StyledLink>
          <StyledLink href="https://accounts.nintendo.com/authorize_guide?type=mixed&redirect_uri=https%3A%2F%2Faccounts.nintendo.com%2Fconnect%2F1.0.0%2Fauthorize%3Fclient_id%3De56201e414c97a10%26display%3Dtouch%26interacted%3D1%26prompt%3Dconsent%26redirect_uri%3Dhttps%253A%252F%252Fwww.nintendo.com%26response_mode%3Dweb_message%26response_type%3Dcode%2Bid_token%2Btoken%26scope%3DeshopAlps%2BmissionStatus%2BmissionStatus%253Aprogress%2Bopenid%2BpointWallet%2Buser%2Buser.birthday%2Buser.links%255B%255D.id%2Buser.mii%2Buser.wishlist%2BuserNotificationMessage%253AanyClients%2BuserNotificationMessage%253AanyClients%253Awrite%26state%3D9fd191932f2d0f4b9577c0640237ed92%26web_message_target%3Dop-frame%26web_message_uri%3Dhttps%253A%252F%252Faccounts.nintendo.com">
            <StyledIcon
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              className="svg-inline--fa fa-user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
              ></path>
            </StyledIcon>
            Log in / Sign up
          </StyledLink>
        </StyledNavButtonsWrapper>
      </StyledNavbar>
      <DropdownNavbar />
    </>
  );
};

export default Navbar;
