import React from "react";
import styled from "styled-components";
import { ICarouselElement } from "../../interfaces/dropdownItem";

const StyledCarouselElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 30px 15px;
`;

const StyledCarouselImage = styled.img`
  width: 100%;

  min-height: 100px;
  min-width: 200px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #7c7c7c79;
  transition: all 0.25s linear;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    filter: brightness(75%);
  }
`;

const StyledCarouselText = styled.a`
  font-size: 23px;
  font-weight: 600;
  color: var(--color-text);
  text-align: initial;
  text-decoration: none;
  line-height: 30px;
  margin: 20px 0;
  transition: all 0.2s linear;

  @media only screen and (max-width: 700px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 20px;
  }

  :hover {
    cursor: pointer;
    color: var(--color-hover);
  }
`;

const StyledTextPrice = styled.p`
  font-size: 23px;
  font-weight: 600;
  color: var(--color-text);
  text-align: initial;
  text-decoration: none;
  line-height: 30px;
  margin: 20px 0;
`;

const StyledCarouselSystemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const StyledCarouselSystemText = styled.h2`
  font-size: 14px;
  text-align: initial;
  color: var(--color-text);

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const StyledCarouselSystemHR = styled.hr`
  width: 100%;
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
`;

const StyledCarouselHeart = styled.svg`
  height: 20px;
  width: 20px;
  fill: var(--color-primary);
  opacity: 0.8;
`;

const StyledSystemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CarouselElement = ({
  img,
  title,
  systemText,
  href,
  price,
  heart,
}: ICarouselElement) => {
  return (
    <StyledCarouselElementsContainer>
      <a href={href}>
        <StyledCarouselImage src={img.src} alt={img.alt} />
      </a>
      <StyledCarouselText href={href}>{title}</StyledCarouselText>
      {price && <StyledTextPrice>{price}</StyledTextPrice>}
      <StyledSystemContainer>
        <StyledCarouselSystemInfo>
          {systemText && (
            <StyledCarouselSystemText>{systemText}</StyledCarouselSystemText>
          )}

          {systemText && <StyledCarouselSystemHR />}
        </StyledCarouselSystemInfo>
        {heart && (
          <StyledCarouselHeart
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="heart"
            className="svg-inline--fa fa-heart"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M472.1 270.5l-193.1 199.7c-12.64 13.07-33.27 13.08-45.91 .0107l-193.2-199.7C-16.21 212.5-13.1 116.7 49.04 62.86C103.3 15.88 186.4 24.42 236.3 75.98l19.7 20.27l19.7-20.27c49.95-51.56 132.1-60.1 187.3-13.12C525.1 116.6 528.2 212.5 472.1 270.5z"></path>
          </StyledCarouselHeart>
        )}
      </StyledSystemContainer>
    </StyledCarouselElementsContainer>
  );
};

export default CarouselElement;
