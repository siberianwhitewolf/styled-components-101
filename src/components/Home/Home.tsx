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
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
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
  width: 600px;
  margin: 0 auto;
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
  width: 70%;
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

  &:hover {
    filter: brightness(80%);
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
          <StyledShopByCharacterContainer>
            <StyledCharacterImage
              background={MarioBackground}
              src={MarioImage}
            />
            <StyledTitle>Mario</StyledTitle>
          </StyledShopByCharacterContainer>
          <StyledShopByCharacterContainer>
            <StyledCharacterImage
              background={ZeldaBackground}
              src={ZeldaImage}
            />
            <StyledTitle>The Legend of Zelda</StyledTitle>
          </StyledShopByCharacterContainer>
          <StyledShopByCharacterContainer>
            <StyledCharacterImage
              background={AnimalCrossingBackground}
              src={AnimalCrossingCharacterImage}
            />
            <StyledTitle>Animal Crossing</StyledTitle>
          </StyledShopByCharacterContainer>
          <StyledShopByCharacterContainer>
            <StyledCharacterImage
              background={KirbyBackground}
              src={KirbyImage}
            />
            <StyledTitle>Kirby</StyledTitle>
          </StyledShopByCharacterContainer>
        </StyledShopByCharacterRowContainer>
      </StyledNewReleasesContainer>
      <HorizontalRule />
    </>
  );
};

export default Home;
