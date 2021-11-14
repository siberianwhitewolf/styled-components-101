import styled from "styled-components";
import ratingE from "../../../assets/images/en-e.svg";

const StyledAgeRatingWrapper = styled.div`
  display: flex;
  margin-left: 15px;
  width: 220px;
`;

const StyledAgeDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  line-height: 17px;
  color: var(--color-text);
`;

const StyledHorizontalRule = styled.hr`
  height: 1px;
  width: 100%;
  margin: 8px 0;
  background-color: var(--color-text);
`;

const StyledAgeRatingImage = styled.img`
  height: 85px;
  margin-right: 10px;
  object-fit: contain;
`;

const StyledDetailsText = styled.h6`
  font-weight: 400;
  opacity: 0.8;
`;

const AgeRating = () => {
  return (
    <>
      <StyledAgeRatingWrapper>
        <StyledAgeRatingImage src={ratingE} alt="rating-img" />
        <StyledAgeDetailsWrapper>
          <StyledDetailsText>Mild Cartoon Violence</StyledDetailsText>
          <StyledHorizontalRule />
          <StyledDetailsText>
            In-Game Purchases, Users Interact
          </StyledDetailsText>
        </StyledAgeDetailsWrapper>
      </StyledAgeRatingWrapper>
    </>
  );
};

export default AgeRating;
