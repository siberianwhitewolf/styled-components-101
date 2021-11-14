import React from "react";
import styled from "styled-components";
import AnimalCrossingImage from "../../../assets/images/animal-crossing.avif";

const CarouselElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 30px 15px;
`;

const CarouselImage = styled.img`
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #7c7c7c79;
  transition: all 0.25s linear;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    opacity: 0.8;
  }
`;

const CarouselText = styled.a`
  font-size: 23px;
  font-weight: 600;
  color: var(--color-text);
  text-align: initial;
  text-decoration: none;
  line-height: 30px;
  margin: 20px 0;
  transition: all 0.2s linear;

  :hover {
    cursor: pointer;
    color: var(--color-hover);
  }
`;

const CarouselSystemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const CarouselSystemText = styled.h2`
  font-size: 14px;
  text-align: initial;
  color: var(--color-text);
`;

const CarouselSystemHR = styled.hr`
  width: 100%;
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
`;

const CarouselElement = () => {
  return (
    <CarouselElementsContainer>
      <CarouselImage src={AnimalCrossingImage} />
      <CarouselText>Happy Home Paradise DLC - Available now</CarouselText>
      <CarouselSystemInfo>
        <CarouselSystemText>Nintendo Switch</CarouselSystemText>
        <CarouselSystemHR />
      </CarouselSystemInfo>
    </CarouselElementsContainer>
  );
};

export default CarouselElement;
