import styled from "styled-components";
import pokemonImg from "../../assets/images/pokemon-banner.avif";
import Navbar from "../common/Navbar";
import AgeRating from "../common/AgeRating";
import Button from "../common/Button/Button";
import HorizontalRule from "../common/HorizontalRule";
import Banner from "../common/Banner";
import CarouselElement from "../common/Carousel/CarouselElement";
import Slider from "react-slick";
import HolydayImage from "../../assets/images/holiday-img.avif";
import gameStoreImage from "../../assets/images/game-store.png";
import switchLineupImage from "../../assets/images/switch-family.avif";
import { newReleases, bestSellingGames } from "../../utils/constants";
import AnimalCrossingImage from "../../assets/images/animal-crossing.avif";
import SMTVImage from "../../assets/images/smtv.avif";
import gameAndWatchImage from "../../assets/images/game&watch2.avif";
import rocketLeagueImage from "../../assets/images/rocket-league.avif";
import kotorImage from "../../assets/images/kotor.avif";
import pokemonImage from "../../assets/images/pokemon.avif";
import twewyImage from "../../assets/images/twewy.avif";
import MarioImage from "../../assets/images/mario-fg.avif";
import ZeldaImage from "../../assets/images/zelda-fg.avif";
import AnimalCrossingCharacterImage from "../../assets/images/animal-cross-characters.avif";
import KirbyImage from "../../assets/images/kirby-character.avif";
import MarioBackground from "../../assets/images/mario-bg.avif";
import ZeldaBackground from "../../assets/images/zelda-bg.avif";
import AnimalCrossingBackground from "../../assets/images/animal-crossing-bg.jpeg";
import KirbyBackground from "../../assets/images/kirby-bg.avif";
import USBackground from "../../assets/images/us-flag.svg";

// const StyledTitle = styled.h1<{ active: boolean }>`
//   font-size: 18px;
//   color: blue;
//   background-color: ${(props) => (props.active ? "chocolate" : "black")};
//   height: 100px;
// `;

const Body = styled.div`
  overflow: hidden;
`;

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
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  text-decoration: none;
`;

const StyledTitleBig = styled.h2`
  color: #484848;
  font-size: 26px;
  font-weight: 700;
  line-height: 30px;
`;

const StyledTitleNew = styled.a`
  color: #484848;
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;

  &:hover {
    color: var(--color-hover);
    cursor: pointer;
  }
`;

const StyledBannerText = styled.h2`
  color: #484848;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  min-width: 80%;
`;

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  object-fit: cover;
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
  margin: 0 25px;

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
      &:after {
        content: "";
        position: absolute;
        left: 0;
        z-index: 2;
        width: 30px;
        height: 40px;
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        padding: 3px;
        transition: all 0.25s linear;

        @media only screen and (max-width: 31.25em) {
          width: 20px;
          height: 30px;
        }
      }
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

const StyledRightArrow = styled.img`
  height: 20px !important;
  width: 20px !important;
`;

const StyledTopNewsContainer = styled.div`
  display: flex;
  justify-content: left;
  width: 80%;
`;

const StyledNewsContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const StyledNewsImage = styled.img`
  height: 350px;
  object-fit: cover;
  border-radius: 8px;

  &:hover {
    filter: brightness(70%);

    cursor: pointer;
  }

  &:active {
    border: 3px dashed black;
    padding: 5px;
  }
`;

const StyledNewsBottomImage = styled.img`
  height: 158px;
  object-fit: cover;
  border-radius: 8px;

  &:hover {
    filter: brightness(70%);
    cursor: pointer;
  }

  &:active {
    border: 3px dashed black;
    padding: 5px;
  }
`;

const StyledText = styled.p`
  font-size: 16px;
  color: #646363f9;
  margin: 10px 0;
  line-height: 25px;
`;

const StyledLink = styled.a`
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  padding-bottom: 5px;
  color: var(--color-hover);
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  transition: all 0.25s linear;
`;

const StyledLinkBig = styled.a`
  font-size: 19px;
  font-weight: 700;
  text-decoration: none;
  padding-bottom: 5px;
  color: var(--color-hover);
  transition: all 0.1s linear;

  &:hover {
    border-bottom: 3px solid var(--color-hover);
    color: #720505d5;
    border-color: #720505d5;
    fill: #720505d5;
    cursor: pointer;
  }
`;

const StyledArrow = styled.svg`
  height: 20px;
  width: 20px;
  fill: var(--color-hover);
  transition: all 0.25s linear;
`;

const StyledReadMoreContainer = styled.div`
  width: 110px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;

  :hover {
    cursor: pointer;

    & > svg {
      fill: #720505d5;
    }
    & > a {
      border-bottom: 2px solid #720505d5;
      color: #720505d5;
    }
  }
`;

const StyledBottomNewsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 40px 0;
`;

const StyledNewReleasesTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 30px;
  width: 80%;
`;

const StyledNewReleasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
`;

const StyledFullListSeparator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 30px;
  width: 130px;
`;

const StyledShopByCharacterRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
`;

const StyledShopByCharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: left;

  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
`;

const StyledCharacterImage = styled.img<{ background?: string }>`
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  background-image: url("${(props) => props.background}");
`;

const StyledFooterTop = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  background-color: #f3f3f3;
`;

const StyledFooterBottom = styled.div`
  height: 200px;
  width: 100vw;
  background-color: #444444;
`;

const StyledTopFooterElementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: fit-content;
  width: 80%;
`;

const StyledTopFooterElement = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 45px;
`;

const StyledLegalElement = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 25px;
`;

const StyledFooterTitle = styled.a`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #484848;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledFooterItem = styled.a`
  font-size: 12px;
  font-weight: 400;
  color: gray;
  margin: 5px 0;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledBottomFooterElementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: #f3f3f3;
`;

const StyledRegionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 175px;
  width: 70%;
`;

const StyledFlagIcon = styled.img`
  height: 18px;
  width: 18px;
  margin-left: 7px;
  object-fit: contain;
`;

const StyledRegionSection = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: fit-content;
  margin-top: 120px;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledBottomLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  margin: 0 10px;
  color: #dadada;
  transition: all 0.25s linear;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledBottomElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

const StyledSocialNetworkButton = styled.svg<{ color?: string }>`
  height: 48px;
  width: 48px;
  margin: 0 5px;
  fill: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

const StyledSmallCopyrightDisclaimer = styled.p`
  font-size: 12px;
  color: #dadada;
`;

const StyledSmallSupportLink = styled.a`
  font-size: 12px;
  color: #dadada;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
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
  };

  return (
    <Body>
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
          {newReleases.map((element) => (
            <CarouselElement
              href={element.href}
              img={element.img}
              title={element.title}
              systemText={element.systemText}
              price={element.price}
            />
          ))}
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
      <StyledImageContainer>
        <StyledBannerText>Best-selling games</StyledBannerText>
      </StyledImageContainer>
      <StyledSliderContainer>
        <Slider {...settings}>
          {bestSellingGames.map((element) => (
            <CarouselElement
              href={element.href}
              img={element.img}
              title={element.title}
              systemText={element.systemText}
              price={element.price}
              heart={element.heart}
            />
          ))}
        </Slider>
      </StyledSliderContainer>

      <HorizontalRule />
      <StyledImageContainer>
        <StyledBannerText>News</StyledBannerText>
        <StyledTopNewsContainer>
          <StyledNewsContentContainer>
            <a href="https://www.nintendo.com/whatsnew/detail/2021/game-and-watch-the-legend-of-zelda-secret-series-part-3/">
              <StyledNewsImage src={gameAndWatchImage} />
            </a>
            <StyledText>11/12/21</StyledText>
            <StyledTitleNew>
              Game & Watch: The Lefend of Zelda - Secrets Series, Part 3
            </StyledTitleNew>
            <StyledText>
              At long last, it’s launch day for the Game & Watch™: The Legend of
              Zelda™ system! Over the past two articles, we’ve introduced a few
              hidden elements and secrets related to the system.
            </StyledText>
            <StyledReadMoreContainer>
              <StyledLink href="https://www.nintendo.com/whatsnew/detail/2021/game-and-watch-the-legend-of-zelda-secret-series-part-3/">
                Read more
              </StyledLink>
              <StyledArrow
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-right"
                className="svg-inline--fa fa-angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
              </StyledArrow>
            </StyledReadMoreContainer>
          </StyledNewsContentContainer>
          <StyledNewsContentContainer>
            <a href="https://www.nintendo.com/whatsnew/detail/2021/battle-your-way-through-a-crumbling-tokyo-in-shin-megami-tensei-v/">
              <StyledNewsImage src={SMTVImage} />
            </a>
            <StyledText>11/12/21</StyledText>
            <StyledTitleNew>
              Battle your way through a crumbling Tokyo in Shin Megami Tensei V
            </StyledTitleNew>
            <StyledText>
              After an unplanned detour leaves the protagonist buried and
              unconscious, he awakens to a new Tokyo. Luckily, as bloodthirsty
              demons descend, a savior emerges and unites with the protagonist
              to become a Nahobino—a being that is neither human nor demon.
            </StyledText>
            <StyledReadMoreContainer>
              <StyledLink href="https://www.nintendo.com/whatsnew/detail/2021/battle-your-way-through-a-crumbling-tokyo-in-shin-megami-tensei-v/">
                Read more
              </StyledLink>
              <StyledArrow
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-right"
                className="svg-inline--fa fa-angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
              </StyledArrow>
            </StyledReadMoreContainer>
          </StyledNewsContentContainer>
        </StyledTopNewsContainer>
        <StyledBottomNewsContainer>
          <StyledNewsContentContainer>
            <a href="https://www.nintendo.com/whatsnew/detail/2021/rocket-league-goes-cosmic-in-season-5/">
              <StyledNewsBottomImage src={rocketLeagueImage} />
            </a>
            <StyledText>11/12/21</StyledText>
            <StyledTitleNew>
              Rocket League Goes Cosmic In Season 5
            </StyledTitleNew>
            <StyledReadMoreContainer>
              <StyledLink href="https://www.nintendo.com/whatsnew/detail/2021/rocket-league-goes-cosmic-in-season-5/">
                Read more
              </StyledLink>
              <StyledArrow
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-right"
                className="svg-inline--fa fa-angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
              </StyledArrow>
            </StyledReadMoreContainer>
          </StyledNewsContentContainer>
          <StyledNewsContentContainer>
            <a href="https://www.nintendo.com/whatsnew/detail/2021/star-wars-knights-of-the-old-republic-now-available/">
              <StyledNewsBottomImage src={kotorImage} />
            </a>
            <StyledText>11/11/21</StyledText>
            <StyledTitleNew>
              Now available: Experience the original RPG classic, STAR WARS:
              Knights of the Old Republic
            </StyledTitleNew>
            <StyledReadMoreContainer>
              <StyledLink href="https://www.nintendo.com/whatsnew/detail/2021/star-wars-knights-of-the-old-republic-now-available/">
                Read more
              </StyledLink>
              <StyledArrow
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-right"
                className="svg-inline--fa fa-angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
              </StyledArrow>
            </StyledReadMoreContainer>
          </StyledNewsContentContainer>
          <StyledNewsContentContainer>
            <a href="https://www.nintendo.com/whatsnew/detail/2021/introducing-ramanas-park-in-the-pokemon-brilliant-diamond-and-pokemon-shining-pearl-games/">
              <StyledNewsBottomImage src={pokemonImage} />
            </a>
            <StyledText>11/10/21</StyledText>
            <StyledTitleNew>
              Introducing Ramanas Park in the Pokemon Brilliant Diamond and
              Pokemon Shining Pearl games
            </StyledTitleNew>
            <StyledReadMoreContainer>
              <StyledLink href="https://www.nintendo.com/whatsnew/detail/2021/introducing-ramanas-park-in-the-pokemon-brilliant-diamond-and-pokemon-shining-pearl-games/">
                Read more
              </StyledLink>
              <StyledArrow
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-right"
                className="svg-inline--fa fa-angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
              </StyledArrow>
            </StyledReadMoreContainer>
          </StyledNewsContentContainer>
          <StyledNewsContentContainer>
            <a href="https://www.nintendo.com/whatsnew/detail/2021/the-world-ends-with-you-final-remix-game-trial/">
              <StyledNewsBottomImage src={twewyImage} />
            </a>
            <StyledText>11/10/21</StyledText>
            <StyledTitleNew>
              Revisit a modern RPG classic with the latest Game Trial, The World
              Ends with You®: Final Remix!
            </StyledTitleNew>
            <StyledReadMoreContainer>
              <StyledLink href="https://www.nintendo.com/whatsnew/detail/2021/the-world-ends-with-you-final-remix-game-trial/">
                Read more
              </StyledLink>
              <StyledArrow
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-right"
                className="svg-inline--fa fa-angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
              </StyledArrow>
            </StyledReadMoreContainer>
          </StyledNewsContentContainer>
        </StyledBottomNewsContainer>
        <Button
          title="See all new articles"
          link="https://www.nintendo.com/whatsnew/"
        />
      </StyledImageContainer>
      <HorizontalRule />
      <StyledNewReleasesContainer>
        <StyledNewReleasesTopContainer>
          <StyledTitleBig>Nintendo Switch new releases</StyledTitleBig>
          <StyledFullListSeparator>
            <StyledLinkBig href="https://www.nintendo.com/whatsnew/detail/2021/the-world-ends-with-you-final-remix-game-trial/">
              See Full List
            </StyledLinkBig>
            <StyledArrow
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              className="svg-inline--fa fa-angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
            </StyledArrow>
          </StyledFullListSeparator>
        </StyledNewReleasesTopContainer>
      </StyledNewReleasesContainer>
      <StyledSliderContainer>
        <Slider {...settings}>
          {bestSellingGames.map((element) => (
            <CarouselElement
              href={element.href}
              img={element.img}
              title={element.title}
              systemText={element.systemText}
              price={element.price}
              heart={element.heart}
            />
          ))}
        </Slider>
      </StyledSliderContainer>
      <HorizontalRule />
      <StyledNewReleasesContainer>
        <StyledNewReleasesTopContainer>
          <StyledTitleBig>Shop by character</StyledTitleBig>
        </StyledNewReleasesTopContainer>
        <StyledShopByCharacterRowContainer>
          <a href="https://www.nintendo.com/games/game-guide/#filter/:q=&dFR[franchises][0]=Mario">
            <StyledShopByCharacterContainer>
              <StyledCharacterImage
                background={MarioBackground}
                src={MarioImage}
              />
              <StyledTitle>Mario</StyledTitle>
            </StyledShopByCharacterContainer>
          </a>
          <a href="https://www.nintendo.com/games/game-guide/#filter/:q=&dFR[franchises][0]=Zelda">
            <StyledShopByCharacterContainer>
              <StyledCharacterImage
                background={ZeldaBackground}
                src={ZeldaImage}
              />
              <StyledTitle>The Legend of Zelda</StyledTitle>
            </StyledShopByCharacterContainer>
          </a>
          <a href="https://www.nintendo.com/games/game-guide/#filter/:q=&dFR[franchises][0]=Animal%20Crossing">
            <StyledShopByCharacterContainer>
              <StyledCharacterImage
                background={AnimalCrossingBackground}
                src={AnimalCrossingCharacterImage}
              />
              <StyledTitle>Animal Crossing</StyledTitle>
            </StyledShopByCharacterContainer>
          </a>
          <a href="https://www.nintendo.com/games/game-guide/#filter/:q=&dFR[franchises][0]=Kirby">
            <StyledShopByCharacterContainer>
              <StyledCharacterImage
                background={KirbyBackground}
                src={KirbyImage}
              />
              <StyledTitle>Kirby</StyledTitle>
            </StyledShopByCharacterContainer>
          </a>
        </StyledShopByCharacterRowContainer>
      </StyledNewReleasesContainer>
      <StyledFooterTop>
        <StyledTopFooterElementsContainer>
          <StyledTopFooterElement>
            <StyledFooterTitle>About Nintendo</StyledFooterTitle>
            <StyledFooterItem>Company info</StyledFooterItem>
            <StyledFooterItem>Careers</StyledFooterItem>
            <StyledFooterItem>CSR Report</StyledFooterItem>
            <StyledFooterItem>IP Policy</StyledFooterItem>
            <StyledFooterItem>Sitemap</StyledFooterItem>
          </StyledTopFooterElement>
          <StyledTopFooterElement>
            <StyledFooterTitle>Where to Buy</StyledFooterTitle>
            <StyledFooterItem>Game Store</StyledFooterItem>
            <StyledFooterItem>Nintendo NY</StyledFooterItem>
            <StyledFooterItem>Nintendo Store</StyledFooterItem>
            <StyledFooterItem>Online Retailers</StyledFooterItem>
          </StyledTopFooterElement>
          <StyledTopFooterElement>
            <StyledFooterTitle>Support</StyledFooterTitle>
            <StyledFooterItem>Health & Safety Precautions</StyledFooterItem>
            <StyledFooterItem>Warranty</StyledFooterItem>
            <StyledFooterItem>Nintendo Switch</StyledFooterItem>
            <StyledFooterItem>Nintendo 3DS</StyledFooterItem>
            <StyledFooterItem>Repair</StyledFooterItem>
            <StyledFooterItem>Nintendo Product Recycling</StyledFooterItem>
          </StyledTopFooterElement>
          <StyledTopFooterElement>
            <StyledFooterTitle>Parents</StyledFooterTitle>
            <StyledFooterItem>Info for Parents</StyledFooterItem>
            <StyledFooterItem>Parental Controls</StyledFooterItem>
          </StyledTopFooterElement>
          <StyledTopFooterElement>
            <StyledFooterTitle>Community</StyledFooterTitle>
            <StyledFooterItem>Cmmunity Guidelines</StyledFooterItem>
            <StyledFooterItem>Online Safety Principles</StyledFooterItem>
          </StyledTopFooterElement>
          <StyledTopFooterElement>
            <StyledFooterTitle>Privacy</StyledFooterTitle>
            <StyledFooterItem>Privacy Policy</StyledFooterItem>
            <StyledFooterItem>Cookies and Interest-Based ads</StyledFooterItem>
          </StyledTopFooterElement>
        </StyledTopFooterElementsContainer>
      </StyledFooterTop>
      <StyledBottomFooterElementsContainer>
        <StyledRegionContainer>
          <StyledRegionSection>
            <StyledFooterTitle>Change region</StyledFooterTitle>
            <StyledFlagIcon src={USBackground} />
          </StyledRegionSection>
          <StyledLegalElement>
            <StyledFooterTitle>Legal</StyledFooterTitle>
            <StyledFooterItem>Documents and Policies</StyledFooterItem>
            <StyledFooterItem>Terms of Use</StyledFooterItem>
          </StyledLegalElement>
        </StyledRegionContainer>
      </StyledBottomFooterElementsContainer>
      <StyledFooterBottom>
        <StyledBottomElementsContainer>
          <StyledLinkContainer>
            <StyledBottomLink>Contact Us</StyledBottomLink>
            <StyledBottomLink>Website Feedback</StyledBottomLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledSocialNetworkButton
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-square"
              className="svg-inline--fa fa-facebook-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              color="#3875ea"
            >
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z"></path>
            </StyledSocialNetworkButton>
            <StyledSocialNetworkButton
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram-square"
              className="svg-inline--fa fa-instagram-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              color="#c23d69"
            >
              <path d="M224 202.7A53.34 53.34 0 1 0 277.4 256 53.38 53.38 0 0 0 224 202.7zm124.7-41a54 54 0 0 0 -30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0 -30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33S91 329.3 99.32 350.3a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33S357.1 182.7 348.8 161.7zM224 338a82 82 0 1 1 82-82A81.9 81.9 0 0 1 224 338zm85.38-148.3a19.14 19.14 0 1 1 19.13-19.14A19.1 19.1 0 0 1 309.4 189.7zM400 32H48A48 48 0 0 0 0 80V432a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V80A48 48 0 0 0 400 32zM382.9 322c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.6 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.6 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.6-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05C384.4 216.4 384.4 295.6 382.9 322z"></path>
            </StyledSocialNetworkButton>
            <StyledSocialNetworkButton
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter-square"
              className="svg-inline--fa fa-twitter-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              color="#4d9feb"
            >
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8 .2 5.7 .2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3 .6 10.4 .8 15.8 .8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.45 65.45 0 0 1 -29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path>
            </StyledSocialNetworkButton>
            <StyledSocialNetworkButton
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="youtube-square"
              className="svg-inline--fa fa-youtube-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              color="#ea3423"
            >
              <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"></path>
            </StyledSocialNetworkButton>
          </StyledLinkContainer>
          <StyledSmallCopyrightDisclaimer>
            © 2021 Nintendo. Games are property of their respective owners.
          </StyledSmallCopyrightDisclaimer>
          <StyledLinkContainer>
            <StyledSmallCopyrightDisclaimer>
              Nintendo of America Inc. | Headquarters are in Redmond,
              Washington, USA |
            </StyledSmallCopyrightDisclaimer>{" "}
            <StyledSmallSupportLink href="">Support</StyledSmallSupportLink>
          </StyledLinkContainer>
        </StyledBottomElementsContainer>
      </StyledFooterBottom>
    </Body>
  );
};

export default Home;
