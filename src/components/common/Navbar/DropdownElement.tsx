import styled from "styled-components";

interface Props {
  title: string;
  img: {
    src: string;
    alt: string;
  };
}

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledDropdownItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: fit-content;
  background-color: white;
  border: #dadadace 1px solid;
  padding: 0 40px;
  border-radius: 8px;

  &:hover {
    background-color: #f51f18;
    cursor: pointer;
  }
`;

const StyledItemImage = styled.img`
  height: 45px;
  width: fit-content;
  object-fit: contain;
`;

const StyledItemText = styled.p`
  padding: 9px 0;
  font-size: 15px;
  color: var(--color-text);
`;

const DropdownElement = ({ title, img }: Props) => {
  return (
    <StyledItemContainer>
      <StyledDropdownItem>
        <StyledItemImage src={img.src} alt={img.alt} />
      </StyledDropdownItem>
      <StyledItemText>{title}</StyledItemText>
    </StyledItemContainer>
  );
};

export default DropdownElement;
