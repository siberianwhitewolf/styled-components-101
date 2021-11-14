import styled from "styled-components";
import { Item } from "../../interfaces/dropdownItem";
import DropdownElement from "./DropdownElement";

const DropdownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 125px;
  width: 100%;
  background-color: whitesmoke;
  z-index: 1;
`;

const StyledX = styled.svg`
  position: absolute;
  height: 25px;
  width: 25px;
  top: 15px;
  right: 15px;
  opacity: 0.5;

  &:hover {
    fill: var(--color-hover);
    cursor: pointer;
    opacity: 1;
  }
`;

interface Props {
  items: Item[];
  setDropdownItems: (items?: Item[]) => void;
}

const Dropdown = ({ items, setDropdownItems }: Props) => {
  return (
    <DropdownContainer>
      <StyledX
        onClick={() => setDropdownItems?.()}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="xmark"
        className="svg-inline--fa fa-xmark"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path>
      </StyledX>
      {items.map((item) => {
        return <DropdownElement title={item.title} img={item.img} />;
      })}
    </DropdownContainer>
  );
};

export default Dropdown;
