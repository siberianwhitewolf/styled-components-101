import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: fit-content;
  width: 100%;
  padding: 20px 0;
`;

const StyledBanner = styled.div<{ bannerBackgroundImage: string }>`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  height: 230px;
  width: 80%;
  background-image: url("${(props) => props.bannerBackgroundImage}");
  object-fit: cover;
`;

const StyledBannerImage = styled.img`
  height: fit-content;
  width: 350px;
  margin: 15px;
  object-fit: cover;
`;

const StyledBannerText = styled.p`
  display: flex;
  text-align: left;
  justify-content: left;
  align-items: center;
  font-size: 27px;
  font-weight: 600;
  color: white;
  margin: 0 20px;
  line-height: 40px;
`;

interface Props {
  img: {
    src: string;
    alt: string;
  };
  bannerBackgroundImgURL: string;
  bannerText: string;
  buttonText: string;
  link: string;
}

const Banner = ({
  img,
  bannerText,
  buttonText,
  bannerBackgroundImgURL,
  link,
}: Props) => {
  return (
    <StyledBannerContainer>
      <StyledBanner bannerBackgroundImage={bannerBackgroundImgURL}>
        <StyledBannerImage src={img.src} alt={img.alt} />
        <StyledBannerText>{bannerText}</StyledBannerText>
        <Button title={buttonText} alt={true} link={link} />
      </StyledBanner>
    </StyledBannerContainer>
  );
};

export default Banner;
