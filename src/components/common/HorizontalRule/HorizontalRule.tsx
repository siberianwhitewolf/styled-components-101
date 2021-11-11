import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledHorizontalRule = styled.hr`
  height: 1px;
  width: 70%;
  margin: 35px 0;
  background-color: #d9dada;
  border: none;
  opacity: 0.7;
`;

const HorizontalRule = () => {
  return (
    <StyledContainer>
      <StyledHorizontalRule />
    </StyledContainer>
  );
};

export default HorizontalRule;
