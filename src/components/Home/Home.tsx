import styled from "styled-components";
import pokemonImg from "../../assets/images/pokemon-banner.avif";
import Navbar from "../common/Navbar";
import AgeRating from "../common/AgeRating";
import Button from "../common/Button/Button";
import HorizontalRule from "../common/HorizontalRule";
import Banner from "../common/Banner";
import AnimalCrossingImage from "../../assets/images/animal-crossing.avif";
import HolydayImage from "../../assets/images/holiday-img.avif";
import gameStoreImage from "../../assets/images/game-store.png";
import switchLineupImage from "../../assets/images/switch-family.avif";
import CarouselElement from "../common/Carousel/CarouselElement";
import Slider from "react-slick";
import ArrowRight from "../../assets/images/angle-right-solid.svg";

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

const StyledBannerText = styled.h2`
  color: #484848;
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 20px;
  min-width: 80%;
`;

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  text-align: left;
`;

const StyledBannerImage = styled.img`
  object-fit: cover;
  max-width: 80%;
`;

const StyledFootText = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-top: 25px;
`;

const StyledFootTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledSliderContainer = styled.div`
  max-width: 100vw;

  &:hover {
    .slick-next,
    .slick-prev {
      background-color: rgba(0, 0, 0, 0.589);
    }
  }

  .slick-next {
    position: absolute;
    right: 0;
    top: 50%;
    height: 100%;
    width: 75px;
    transition: all 0.15s linear;

    .slick-arrow {
      &::before {
        height: 50px;
        width: 50px;
        background-color: blue;
      }
    }
  }

  .slick-prev {
    position: absolute;
    left: 0;
    top: 50%;
    height: 100%;
    width: 75px;
    z-index: 1;
    transition: all 0.15s linear;
  }
`;

const StyledRightArrow = styled.div`
  height: 20px;
  width: 20px;
  background-image: url({ArrowRight});
`;

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{}} onClick={onClick}>
      <StyledRightArrow></StyledRightArrow>
    </div>
  );
}

const Home = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5.4,
    slidesToScroll: 5.4,
    nextArrow: <SampleNextArrow />,
  };

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

      <StyledSliderContainer>
        <Slider {...settings}>
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
        </Slider>
      </StyledSliderContainer>

      <HorizontalRule />
      <Banner
        img={{ src: AnimalCrossingImage, alt: "animal-crossing-banner-img" }}
        bannerText="Animal Crossing: New Horizons - Happy Home Paradise DLC"
        buttonText="Available now"
        bannerBackgroundImgURL="https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/Special-Event-Banners/ACNH-HPP-Secondary/MicrosoftTeams-image_85?v=2021111018"
        link="https://www.animal-crossing.com/new-horizons/happy-home-paradise/"
      />
      <HorizontalRule />
      <Banner
        img={{ src: gameStoreImage, alt: "shop-games-img" }}
        bannerText="Game Store: Buy, download, and play right away!"
        buttonText="Shop games"
        bannerBackgroundImgURL="https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/color?v=2021111018"
        link="https://www.nintendo.com/games/"
      />
      <HorizontalRule />

      <StyledImageContainer>
        <StyledBannerText>Explore gaming systems</StyledBannerText>
        <StyledBannerImage src={switchLineupImage} alt="switch-systems-img" />
      </StyledImageContainer>
      <StyledFootTextContainer>
        <StyledFootText>
          <StyledTitle>Nintendo Switch family - Three ways to play</StyledTitle>
          <Button
            title="Starting at $199.99 MSRP*"
            link="https://www.nintendo.com/switch/"
          />
        </StyledFootText>
      </StyledFootTextContainer>
      <HorizontalRule />
      <Banner
        img={{ src: HolydayImage, alt: "holiday-banner-img" }}
        bannerText="Holiday Gift Guide: Spark a smile with the perfect present."
        buttonText="Find gifts"
        bannerBackgroundImgURL="https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/Special-Event-Banners/HGG2021/Pattern_sparklered_200x200?v=2021111018"
        link="https://www.nintendo.com/holiday/"
      />
      <HorizontalRule />
    </>
  );
};

export default Home;
