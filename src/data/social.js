import { getDefaultNormalizer } from "@testing-library/dom";
import { Children } from "react";

export const SocialData = [
  // {
  //   platform: "Instagram",
  //   icon: require("../assets/icons/instagram.png").default,
  //   link: "www.instagram.com/aple",
  // },
  {
    platform: "Github",
    icon: require("../assets/icons/github.png").default,
    link: "https://github.com/n1ckchen",
  },
  {
    platform: "Linkedin",
    icon: require("../assets/icons/linkedin.png").default,
    link: "http://www.linkedin.com/in/n1ckchen",
  },
  {
    platform: "Gmail",
    icon: require("../assets/icons/gmail.png").default,
    link: `"mailto:chen.nick.dev@gmail.com"`,
  },
  {
    platform: "Twitter",
    icon: require("../assets/icons/twitter.png").default,
    link: "https://twitter.com/n1ck_chen",
  },
];
