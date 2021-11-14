import styled from "styled-components";
import salesIcon from "../../../assets/images/tag-solid.svg";
import calendarIcon from "../../../assets/images/calendar-days-solid.svg";
import switchIcon from "../../../assets/images/nintendo-switch-icon.svg";
import { useEffect, useState } from "react";

const StyledExpandedContainer = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0px;
  display: flex;
  height: ${(props) => (props.active ? "260px" : "0px")};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  width: 100%;
  padding-top: 55px;
  background-color: white;
  z-index: 2;
  transition: all 0.3s ease-in-out;
`;

const StyledContentWrapper = styled.div<{ active: boolean }>`
  position: relative;
  display: flex;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.1s ease-in-out;
`;

const StyledSuggestionsContainer = styled.div`
  display: flex;
  max-height: 85%;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-left: 200px;
  margin-top: 15px;
`;

const StyledGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
  margin-top: 15px;
`;

const StlyedGamesItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 770px;
  text-align: center;
  align-items: initial;
  justify-content: space-between;
  margin-top: 5px;
`;

const StlyedGameItem = styled.div<{ color?: string }>`
  display: flex;
  height: 145px;
  width: 245px;
  background-color: ${(props) => (props.color ? props.color : "#ffd412")};
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid #dadada;
  transition: all 0.2s linear;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transform: scale(1.005);
    border: 1px solid ${(props) => (props.color ? props.color : "#ffd412")};
    text-decoration: underline;
  }
`;

const StlyedGameItemTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 95px;
  width: 100%;
  background-color: white;
  margin: auto;
`;

const StyledTextTitle = styled.p`
  margin-bottom: 5px;
  font-size: 15px;
  color: var(--color-text);
`;

const StyledTextItemTitle = styled.a`
  font-size: 22px;
  max-width: 180px;
  line-height: 30px;
  color: var(--color-text);
  text-decoration-color: ${(props) => (props.color ? props.color : "#ffd412")};
  margin: auto;
`;

const StyledImageIconCircle = styled.div<{ color?: string }>`
  position: absolute;
  margin: -20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: white;
  border: 1px solid ${(props) => (props.color ? props.color : "#ffd412")};
  z-index: 5;
`;

const StyledImageIcon = styled.img`
  height: 22px;
  width: 22px;
  opacity: 0.7;
  object-fit: contain;
`;

const StyledLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #ec1b13;
  transition: all 0.1s linear;

  &:hover {
    color: #9e1b17;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledBackdrop = styled.div<{ active: boolean }>`
  position: absolute;
  top: ${(props) => (props.active ? "315px" : "0")};
  left: 0;
  height: ${(props) => (props.active ? "calc(100vh - 315px)" : "100vh")};
  width: 100vw;
  background-color: black;
  opacity: ${(props) => (props.active ? 0.8 : 0)};
  z-index: 1;
  transition: all 0.3s linear;
`;

interface Props {
  active: boolean;
}

const NavbarExpanded = ({ active }: Props) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    } else {
      setShowContent(false);
    }
  }, [active]);

  return (
    <StyledExpandedContainer active={active}>
      <StyledBackdrop active={active} />
      <StyledContentWrapper active={showContent}>
        <StyledSuggestionsContainer>
          <StyledTextTitle>Suggestions</StyledTextTitle>
          <StyledLink>Nintendo Switch</StyledLink>
          <StyledLink>Nintendo Switch Games</StyledLink>
          <StyledLink>Nintendo Switch Online</StyledLink>
          <StyledLink>Nintendo News</StyledLink>
          <StyledLink>Ring Fit Adventure</StyledLink>
          <StyledLink>Mario games</StyledLink>
          <StyledLink>Zelda games</StyledLink>
          <StyledLink>Pokémon games</StyledLink>
        </StyledSuggestionsContainer>
        <StyledGamesContainer>
          <StyledTextTitle>Find your next game</StyledTextTitle>
          <StlyedGamesItemsContainer>
            <StlyedGameItem>
              <StlyedGameItemTitleContainer>
                <StyledTextItemTitle>Games on sale</StyledTextItemTitle>
                <StyledImageIconCircle>
                  <StyledImageIcon src={salesIcon} alt="sales-icon" />
                </StyledImageIconCircle>
              </StlyedGameItemTitleContainer>
            </StlyedGameItem>
            <StlyedGameItem color="#4eade5">
              <StlyedGameItemTitleContainer>
                <StyledTextItemTitle color="#4eade5">
                  New games
                </StyledTextItemTitle>
                <StyledImageIconCircle color="#4eade5">
                  <StyledImageIcon src={calendarIcon} alt="new-games-icon" />
                </StyledImageIconCircle>
              </StlyedGameItemTitleContainer>
            </StlyedGameItem>
            <StlyedGameItem color="#d32d26">
              <StlyedGameItemTitleContainer>
                <StyledTextItemTitle color="#d32d26">
                  Nintendo Switch games
                </StyledTextItemTitle>
                <StyledImageIconCircle color="#d32d26">
                  <StyledImageIcon
                    src={switchIcon}
                    alt="nintendo-switch-games-icon"
                  />
                </StyledImageIconCircle>
              </StlyedGameItemTitleContainer>
            </StlyedGameItem>
          </StlyedGamesItemsContainer>
        </StyledGamesContainer>
      </StyledContentWrapper>
    </StyledExpandedContainer>
  );
};

export default NavbarExpanded;
