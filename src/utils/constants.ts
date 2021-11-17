import AnimalCrossingImage from "../assets/images/animal-crossing.avif";
import ShinMegamiTenseiVImage from "../assets/images/smt.jpeg";
import MarioPartyImage from "../assets/images/mario-party.jpeg";
import JustDanceImage from "../assets/images/just-dance-2022.jpeg";
import BigBrainAcademy from "../assets/images/big-brain.avif";
import GameWatchImage from "../assets/images/zelda-game-watch.avif";
import MetroidImage from "../assets/images/metroid-dread-img.avif";
import SmashImage from "../assets/images/smash-bros-img.jpeg";
import MinecraftImage from "../assets/images/minecraft-img.avif";
import AnimalCrossImg from "../assets/images/animal-cross.avif";
import DyingLight from "../assets/images/dying-light-img.avif";
import { ICarouselElement } from "../components/interfaces/dropdownItem";

export const newReleases: ICarouselElement[] = [
  {
    href: "https://www.animal-crossing.com/new-horizons/happy-home-paradise/",
    img: {
      src: AnimalCrossingImage,
      alt: "animal-crossing-img",
    },
    title: "Happy Home Paradise DLC - Available now",
    systemText: "Nintendo Switch",
  },

  {
    href: "https://www.nintendo.com/products/detail/game-and-watch-the-legend-of-zelda/",
    img: {
      src: GameWatchImage,
      alt: "game-and-watch-img",
    },
    title: "Game & Watch: The Legend of Zelda - Learn more",
  },
  {
    href: "https://www.nintendo.com/games/detail/shin-megami-tensei-v-switch/",
    img: {
      src: ShinMegamiTenseiVImage,
      alt: "shin-megami-tensei-img",
    },
    title: "Shin Megami Tensei V - Available now",
    systemText: "Nintendo Switch",
  },
  {
    href: "https://marioparty.nintendo.com/",
    img: {
      src: MarioPartyImage,
      alt: "mario-party-superstars-img",
    },
    title: "Mario Party Superstars - Available",
    systemText: "Nintendo Switch",
  },
  {
    href: "https://www.nintendo.com/games/detail/just-dance-2022-switch/",
    img: {
      src: BigBrainAcademy,
      alt: "big-brain-img",
    },
    title: "Big Brain Academy: Brain vs Brain - Pre-order now",
    systemText: "Nintendo Switch",
  },
  {
    href: "https://www.nintendo.com/games/detail/just-dance-2022-switch/",
    img: {
      src: JustDanceImage,
      alt: "just-dance-img",
    },
    title: "Just Dance 2022 - Available now",
    systemText: "Nintendo Switch",
  },
  {
    href: "https://www.nintendo.com/games/detail/big-brain-academy-brain-vs-brain-switch/",
    img: {
      src: BigBrainAcademy,
      alt: "big-brain-img",
    },
    title: "Big Brain Academy: Brain vs Brain - Pre-order now",
    systemText: "Nintendo Switch",
  },
];

export const bestSellingGames: ICarouselElement[] = [
  {
    href: "https://marioparty.nintendo.com/",
    img: {
      src: MarioPartyImage,
      alt: "mario-party-superstars-img",
    },
    title: "Mario Party™ Superstars",
    price: "$59.99",
    systemText: "Nintendo Switch",
    heart: true,
  },

  {
    href: "https://www.nintendo.com/games/detail/metroid-dread-switch/?algorithm=Best-selling%20games",
    img: {
      src: MetroidImage,
      alt: "metroid-dread-img",
    },
    title: "Metroid™ Dread",
    price: "$59.99",
    systemText: "Nintendo Switch",
    heart: true,
  },

  {
    href: "https://www.nintendo.com/products/detail/game-and-watch-the-legend-of-zelda/",
    img: {
      src: SmashImage,
      alt: "smash-bros-img",
    },
    title: "Super Smash Bros.™ Ultimate",
    price: "$59.99",
    systemText: "Nintendo Switch",
    heart: true,
  },
  {
    href: "https://www.nintendo.com/games/detail/minecraft-switch/?algorithm=Best-selling%20games",
    img: {
      src: MinecraftImage,
      alt: "minecraft-img",
    },
    title: "Minecraft",
    price: "$29.99",
    systemText: "Nintendo Switch",
    heart: true,
  },

  {
    href: "https://www.nintendo.com/games/detail/animal-crossing-new-horizons-switch/?algorithm=Best-selling%20games",
    img: {
      src: AnimalCrossImg,
      alt: "animal-crossing-img",
    },
    title: "Animal Crossing™: New Horizons",
    price: "$59.99",
    systemText: "Nintendo Switch",
    heart: true,
  },
  {
    href: "https://www.nintendo.com/games/detail/dying-light-platinum-edition-switch/?algorithm=Best-selling%20games",
    img: {
      src: DyingLight,
      alt: "dying-light-img",
    },
    title: "Dying Light: Platinum Edition",
    price: "$49.99",
    systemText: "Nintendo Switch",
    heart: true,
  },
  {
    href: "https://www.nintendo.com/games/detail/big-brain-academy-brain-vs-brain-switch/",
    img: {
      src: BigBrainAcademy,
      alt: "big-brain-img",
    },
    title: "Big Brain Academy: Brain vs Brain - Pre-order now",
    systemText: "Nintendo Switch",
    heart: true,
  },
];
