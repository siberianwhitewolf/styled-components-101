import React from "react";
import styled from "styled-components";

const StyledInputWrapper = styled.div<{
  active: boolean;
}>`
  display: flex;
  align-items: center;
  margin-left: 30px;
  position: relative;
  fill: ${(props) => props.active && "var(--color-hover)"};
  height: 100%;
  z-index: 3;

  &:hover {
    fill: var(--color-primary);
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSearchInput = styled.input<{
  active: boolean;
  placeholder: string;
}>`
  color: var(--color-text);
  height: 25px;
  width: 375px;
  border: none;
  border-bottom: 1px solid var(--color-text);
  padding-bottom: 3px;
  padding-left: 25px;
  color: ${(props) => props.active && "var(--color-hover)"};
  border-color: ${(props) => props.active && "var(--color-hover)"};
  outline: transparent;
  transition: all 0.15s linear;

  &::placeholder {
    font-size: 14px;
    color: var(--color-text);
    opacity: 0.8;
    transition: all 0.15s linear;
  }

  &:hover {
    color: var(--color-text);
    border-color: var(--color-primary);
    cursor: ${(props) => (props.active ? "text" : "pointer")};

    ::placeholder {
      color: ${(props) =>
        props.active ? "var(--color-text)" : "var(--color-primary)"};
    }
  }
`;

const StyledSearchIcon = styled.svg`
  position: absolute;
  top: 4px;
  left: 0px;
  height: 18px;
  width: 18px;
`;

const StyledX = styled.svg<{
  active?: boolean;
}>`
  height: 27px;
  width: 27px;
  margin-left: 10px;
  margin-bottom: 5px;
  opacity: 0.5;
  z-index: 5;
  fill: ${(props) => props.active && "black;"};

  &:hover {
    fill: var(--color-hover);
    cursor: pointer;
    opacity: 1;
  }
`;

interface Props {
  setActive: (active: boolean) => void;
  active: boolean;
}

const Input = ({ setActive, active }: Props) => {
  return (
    <StyledWrapper>
      <StyledInputWrapper active={active} onClick={() => setActive(true)}>
        <StyledSearchIcon
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="search"
          className="svg-inline--fa fa-search fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </StyledSearchIcon>
        <StyledSearchInput
          active={active}
          placeholder={
            active
              ? "Search Nintendo.com"
              : "Search games, system, support, etc."
          }
        />
      </StyledInputWrapper>
      {active && (
        <StyledX
          onClick={() => setActive(false)}
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
      )}
    </StyledWrapper>
  );
};

export default Input;
