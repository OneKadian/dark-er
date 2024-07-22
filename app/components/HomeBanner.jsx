"use client";

// Importing components from Button folder
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

// Importing Content component
import Content from "./Content";

import BadgeGroup from "./BadgeGroup";
import BadgeMessage from "./BadgeMessage";

// Importing components from Motion folder
import MotionBTTContainer from "./MotionBTTContainer";

// Importing SectionContainer component
import SectionContainer from "./SectionContainer";

// Importing PageTitle component
import PageTitle from "./PageTitle";
import MainGraphic from "../public/MainGaphix.png";
import Image from "next/image";

const bannerTextContent = {
  badgeMessage: "Turns projects into products - Brian Jenney",
  title: "You are 100% launching a product, today!",
  description:
    "Don't let procrastination stop you, Launch your product fast, without starting from scratch.",
  buttons: {
    buttonOne: {
      text: "Create Your SaaS Now",
      href: "#pricing",
    },
    buttonTwo: {
      text: "Build Your Portfolio",
      href: "https://github.com/onekadian",
    },
  },
};

const HomeBanner = () => {
  return (
    <SectionContainer className="page-banner--container py-16 bg-[#181818]">
      <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
        {/* Appear First */}
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
          <BadgeGroup alignment="center">
            <BadgeMessage>{bannerTextContent.badgeMessage}</BadgeMessage>
          </BadgeGroup>
        </MotionBTTContainer>
        {/* Appear Second */}
        <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
          <PageTitle
            className="text-center overflow-visible mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500"
            type="heavy"
          >
            {bannerTextContent.title}
          </PageTitle>
        </MotionBTTContainer>
        {/* Appear Third */}
        <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
          <Content
            className="text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500"
            alignment="center"
          >
            <p>{bannerTextContent.description}</p>
          </Content>

          <div className="mt-6 mb-16 text-center">
            <ButtonGroup alignment="center">
              <Button
                href={bannerTextContent.buttons.buttonOne.href}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 border border-solid border-neutral-400 transition-colors duration-300 md:w-auto"
              >
                {bannerTextContent.buttons.buttonOne.text}
              </Button>
              {/* <a
                role="button"
                href={bannerTextContent.buttons.buttonTwo.href}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 border border-solid border-neutral-400 transition-colors duration-300 md:w-auto"
              >
                {bannerTextContent.buttons.buttonTwo.text}
              </a> */}
            </ButtonGroup>
          </div>
        </MotionBTTContainer>
        {/* Appear Fourth */}
        <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
          <div className="page-banner--image">
            <Image
              src={MainGraphic}
              width={1024}
              height={680}
              alt="Page Banner"
              objectFit="cover"
              className="mx-auto rounded-md shadow-xl border border-gray-800"
            />
          </div>
        </MotionBTTContainer>
      </SectionContainer>
    </SectionContainer>
  );
};

export default HomeBanner;
