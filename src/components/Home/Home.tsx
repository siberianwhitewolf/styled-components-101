import styled from "styled-components";
import pokemonImg from "../../assets/images/pokemon-banner.avif";
import Navbar from "../common/Navbar";
import AgeRating from "../common/AgeRating";
import Button from "../common/Button/Button";
import HorizontalRule from "../common/HorizontalRule";

// const StyledTitle = styled.h1<{ active: boolean }>`
//   font-size: 18px;
//   color: blue;
//   background-color: ${(props) => (props.active ? "chocolate" : "black")};
//   height: 100px;
// `;

const StyledMainImageBannerWrapper = styled.div`
  overflow: hidden;
`;

const StyledMainImageBanner = styled.img`
  height: 600px;
  width: 100vw;
  object-fit: cover;
`;

const StyledMainGameDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 100%;
  transition: all 0.25s linear;
`;

const StyledTitle = styled.h2`
  color: #484848;
  font-size: 28px;
  font-weight: 700;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <StyledMainImageBannerWrapper>
        <a href="https://diamondpearl.pokemon.com/en-us/">
          <StyledMainImageBanner src={pokemonImg} />
        </a>
      </StyledMainImageBannerWrapper>
      <StyledMainGameDescriptionWrapper>
        <StyledTitle>Pre-order digitally now–Play at launch</StyledTitle>
        <Button title="Learn more" />
        <AgeRating />
      </StyledMainGameDescriptionWrapper>
      <HorizontalRule />
    </>
  );
};

export default Home;
