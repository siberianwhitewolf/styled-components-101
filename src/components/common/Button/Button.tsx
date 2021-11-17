import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  link?: string;
  alt?: boolean;
}

const StyledButton = styled.a<{ alt?: boolean }>`
  display: flex;
  align-items: center;
  height: 22px;
  width: fit-content;
  background-color: ${(props) =>
    props.alt ? "#00000063" : "var(--color-hover)"};
  color: white;
  padding: 18px;
  margin: 30px 20px;
  font-size: 21px;
  font-weight: 700;
  text-decoration: none;
  text-transform: capitalize;
  text-align: center;
  white-space: nowrap;
  border: none;
  border-radius: 8px;
  transition: all 0.25s linear;

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => (props.alt ? "#0000008f" : "#910d08")};
    cursor: pointer;
  }
`;

const StyledAngle = styled.svg`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  fill: white;
`;

const Button = ({ title, alt, link }: Props) => {
  return (
    <StyledButton href={link} rel="noreferrer" alt={alt}>
      {title}{" "}
      <StyledAngle
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
      </StyledAngle>
    </StyledButton>
  );
};

export default Button;
