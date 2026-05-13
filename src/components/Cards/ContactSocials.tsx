import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { IconType } from "react-icons";

import { PiTelegramLogo } from "react-icons/pi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa6";

import { selfData } from "@/constant";

// Custom Codolio SVG icon (not available in react-icons)
const CodolioIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="20"
    height="20"
    aria-label="Codolio"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a7 7 0 1 1 0 14A7 7 0 0 1 12 5zm-1.5 3.5v1.75A3.5 3.5 0 0 0 12 17a3.5 3.5 0 0 0 3.5-3.5 3.5 3.5 0 0 0-3.5-3.5v1.5a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2v-3l-1.5.5V8.5H10.5z" />
  </svg>
);

type SocialLink = {
  icon: IconType | (() => React.ReactElement);
  link: string;
  label: string;
  initial: number;
};

export const ContactSocials = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: FaGithub,
      link: `https://github.com/${selfData.socials_username.github}`,
      label: "GitHub",
      initial: -10,
    },
    {
      icon: FaLinkedinIn,
      link: `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
      label: "LinkedIn",
      initial: 10,
    },
    {
      icon: FaTwitter,
      link: `https://twitter.com/${selfData.socials_username.twitter}`,
      label: "Twitter / X",
      initial: -10,
    },
    {
      icon: FaInstagram,
      link: `https://instagram.com/${selfData.socials_username.instagram}`,
      label: "Instagram",
      initial: 10,
    },
    {
      icon: PiTelegramLogo,
      link: `https://t.me/${selfData.socials_username.telegram}`,
      label: "Telegram",
      initial: -10,
    },
    {
      icon: CodolioIcon,
      link: `https://codolio.com/profile/${selfData.socials_username.codolio}`,
      label: "Codolio",
      initial: 10,
    },
  ];

  return (
    <ul className="flex flex-wrap mt-12 gap-4">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <motion.li
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: social.initial }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            whileHover={{ scale: 1.1 }}
            title={social.label}
            className="bg-white/10 border border-white/20 hover:bg-white hover:border-white text-white hover:text-purple-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition-all duration-200"
          >
            <Link
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full"
              aria-label={social.label}
            >
              <IconComponent className="w-5 h-5" />
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
};
