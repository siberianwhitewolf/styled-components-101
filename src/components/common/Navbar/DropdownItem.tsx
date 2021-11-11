import { useEffect, useState } from "react";
import styled from "styled-components";
import { Item } from "../../interfaces/dropdownItem";

interface Props {
  title: string;
  img: {
    src: string;
    alt: string;
  };
  dropdown?: boolean;
  href?: string;
  setDropdownItems?: (items?: Item[]) => void;
  items?: Item[];
  dropdownElements?: Item[];
  activeItemID?: string;
  setActiveItemID?: (id: string) => void;
}

const StyledWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text);
  margin-right: 20px;
  transition: all 0.15s linear;

  &:hover {
    cursor: pointer;
    color: var(--color-primary);
    fill: var(--color-primary);
  }
`;

const StyledBorderBottom = styled.div<{ active?: boolean }>`
  position: absolute;
  bottom: -6px;
  height: 2px;
  width: 100%;
  background-color: ${(props) => props.active && "var(--color-primary);"};
`;

const StyledSVG = styled.svg<{ active?: boolean }>`
  height: 18px;
  width: 18px;
  margin-right: 8px;
  margin-bottom: 4px;
  margin-top: 4px;
  margin-left: 4px;
  opacity: 0.7;
  transform: ${(props) => props.active && "rotate(180deg)"};
`;

const StyledIcon = styled.img<{ active?: boolean }>`
  height: 18px;
  width: 18px;
  margin-right: 8px;
  margin-bottom: 4px;
  margin-top: 4px;
  margin-left: 4px;
  opacity: 0.7;
  transform: ${(props) => props.active && "rotate(180deg)"};
`;

const DropdownItem = ({
  img,
  title,
  dropdown,
  href,
  setDropdownItems,
  items,
  dropdownElements,
  activeItemID,
  setActiveItemID,
}: Props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!items) {
      setActive(false);
    } else if (activeItemID !== title && active) {
      setActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const handleClick = () => {
    const newActiveState = !active;
    if (newActiveState) {
      setActiveItemID?.(title);
    }

    if (dropdown && newActiveState) {
      setDropdownItems?.(dropdownElements);
    } else if (dropdown && !newActiveState) {
      setDropdownItems?.();
    }
    if (!dropdown && href) {
      window.location.href = href;
    }
    setActive(true);
  };

  return (
    <StyledWrapper onClick={handleClick}>
      <StyledIcon src={img.src} alt={img.alt} />
      {title}
      {dropdown && (
        <StyledSVG
          active={active}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="angle-down"
          className="svg-inline--fa fa-angle-down"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path>
        </StyledSVG>
      )}
      <StyledBorderBottom active={active} />
    </StyledWrapper>
  );
};

export default DropdownItem;
