import React, { useState } from "react";
import styled from "styled-components";
import newsIcon from "../../../assets/images/newspaper-solid.svg";
import starIcon from "../../../assets/images/star-solid.svg";
import giftIcon from "../../../assets/images/gifts-solid.svg";
import switchIcon from "../../../assets/images/nintendo-switch-icon.svg";
import dPadIcon from "../../../assets/images/d-pad.svg";
import tagIcon from "../../../assets/images/tag-solid.svg";
import calendarIcon from "../../../assets/images/calendar-days-solid.svg";
import wifiIcon from "../../../assets/images/wifi-solid.svg";
import mobileIcon from "../../../assets/images/mobile-screen-button-solid.svg";
import DropdownItem from "./DropdownItem";
import Dropdown from "./Dropdown";
import { Item } from "../../interfaces/dropdownItem";
import amiibo from "../../../assets/images/amiibo.avif";
import accesories from "../../../assets/images/accessories.avif";
import switchLineup from "../../../assets/images/switch-lineup.avif";

const StyledIconbar = styled.div`
  width: 100vw;
  border-bottom: #dadada 1px solid;
`;

const StyledNavButtonsWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  position: relative;
  margin-right: 2px;
  padding: 5px 0;
`;

const DropdownNavbar = () => {
  const [dropdownItems, setDropdownItems] = useState<undefined | Item[]>();
  const [activeItemID, setActiveItemID] = useState("");

  return (
    <>
      <StyledIconbar>
        <StyledNavButtonsWrapper>
          <DropdownItem
            img={{
              src: dPadIcon,
              alt: "games-icon",
            }}
            title="Games"
            dropdown
            setDropdownItems={setDropdownItems}
            items={dropdownItems}
            activeItemID={activeItemID}
            setActiveItemID={setActiveItemID}
            dropdownElements={[
              {
                title: "Shop games",
                img: {
                  src: dPadIcon,
                  alt: "shop-icon",
                },
              },
              {
                title: "Sales and deals",
                img: {
                  src: tagIcon,
                  alt: "sales-icon",
                },
              },
              {
                title: "Coming soon",
                img: {
                  src: calendarIcon,
                  alt: "coming-soon-icon",
                },
              },
              {
                title: "Online services",
                img: {
                  src: wifiIcon,
                  alt: "online-icon",
                },
              },
              {
                title: "Mobile games",
                img: {
                  src: mobileIcon,
                  alt: "mobile-icon",
                },
              },
            ]}
          />
          <DropdownItem
            img={{
              src: switchIcon,
              alt: "hardware-icon",
            }}
            title="Hardware"
            dropdown
            activeItemID={activeItemID}
            setActiveItemID={setActiveItemID}
            setDropdownItems={setDropdownItems}
            items={dropdownItems}
            dropdownElements={[
              {
                title: "Nintendo Switch Lineup",
                img: {
                  src: switchLineup,
                  alt: "nintendo-switch-icon",
                },
              },
              {
                title: "Accessories",
                img: {
                  src: accesories,
                  alt: "accessories-icon",
                },
              },
              {
                title: "amiibo",
                img: {
                  src: amiibo,
                  alt: "amiibo-icon",
                },
              },
            ]}
          />
          <DropdownItem
            img={{
              src: newsIcon,
              alt: "news-icon",
            }}
            title="News & Events"
            href="https://www.nintendo.com/whatsnew/"
          />
          <DropdownItem
            img={{
              src: starIcon,
              alt: "star-icon",
            }}
            title="Play Nintendo"
            href="https://play.nintendo.com/"
          />
          <DropdownItem
            img={{
              src: giftIcon,
              alt: "gift-icon",
            }}
            title="Holiday Gift Guide"
            href="https://www.nintendo.com/holiday/"
          />
        </StyledNavButtonsWrapper>
      </StyledIconbar>
      {dropdownItems && (
        <Dropdown setDropdownItems={setDropdownItems} items={dropdownItems} />
      )}
    </>
  );
};

export default DropdownNavbar;
