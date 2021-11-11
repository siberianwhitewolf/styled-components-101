import styled, { css } from "styled-components";

const hover = css`
  cursor: pointer;
  color: var(--color-primary);
`;

const StyledLink = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text);
  margin-right: 20px;
  transition: all 0.15s linear;

  &:hover {
    ${hover}
  }
`;

interface Props {
  children: React.ReactNode;
}

const NavbarLink = ({ children }: Props) => {
  return <StyledLink>{children}</StyledLink>;
};

export default NavbarLink;
