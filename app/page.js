import Accordion from "./components/Accordion.jsx";
import HomeBanner from "./components/HomeBanner.jsx";
import CardBody from "./components/CardBody";
import CardGroup from "./components/CardGroup";
import CardHeader from "./components/CardHeader";
import CardImage from "./components/CardImage";
import Card from "./components/Card";
import feature3 from "./public/MainGaphix.png";
import feature4 from "./public/MainGaphix.png";
import Columns from "./components/Columns.jsx";
import ContentImage from "./components/ContentImage.jsx";
import Footer from "./components/Footer.jsx";
import PriceTable2 from "./components/PriceTable.jsx";
import SinglePricingTable from "./components/SinglePricingTable.jsx";
import SectionContainer from "./components/SectionContainer.jsx";
import MotionBTTContainer from "./components/MotionBTTContainer.jsx";
import BadgeGroup from "./components/BadgeGroup.jsx";
import BadgeMessage from "./components/BadgeMessage.jsx";
import PageTitle from "./components/PageTitle.jsx";
import Content from "./components/Content.jsx";
import CallToAction from "./components/CTA.jsx";

// import ContentImage from "./components/ContentImage.jsx";
export default function Home() {
  const textContent = {
    featuresBadge: "Features",
    featuresTitle: "Designed for Speed",
    featuresDescription: "Unleash innovation, save time, and launch swiftly",
    moreFeaturesBadge: "More Features",
    moreFeaturesTitle: "Developers Who Build From Scratch Almost Never Launch",
    moreFeaturesDescription:
      "Most indie hackers suffer from either of these two problems: Starting from scratch or searching like crazy",
    card1Title: "Build like crazy",
    card1Description: "",
    card2Title: "Search like crazy",
    card2Description: "",
    testimonialsBadge: "Testimonials",
    testimonialsTitle: "This is what people have said about this boilerplate",
    faqBadge: "FAQ",
    faqTitle: "Got some burning questions about Indie Hacker Kit?",
  };

  return (
    <>
      <div className="main-wrapper bg-[#181818] relative z-10 pb-20 pt-20 ">
        {/* Page Banner  */}
        <HomeBanner />
        {/* Components Container */}
        <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
          {/* Features */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer id="features" className="features pt-10">
              <BadgeGroup alignment="center">
                <BadgeMessage>{textContent.featuresBadge}</BadgeMessage>
              </BadgeGroup>
              <PageTitle
                className="text-center mx-auto px-1 text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                type="default"
              >
                {textContent.featuresTitle}
              </PageTitle>
              <Content
                className="text-center mt-6 text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                alignment="center"
              >
                <p>{textContent.featuresDescription}</p>
              </Content>
              <ContentImage />
            </SectionContainer>
          </MotionBTTContainer>
          {/* Card Container Tabs */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer className="feature-tabs pt-20 ">
              <BadgeGroup alignment="center">
                <BadgeMessage>{textContent.moreFeaturesBadge}</BadgeMessage>
              </BadgeGroup>
              <PageTitle
                className="text-center mx-auto py-1 text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                type="default"
              >
                {textContent.moreFeaturesTitle}
              </PageTitle>
              <Content
                className="text-center mt-6 font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                alignment="center"
              >
                <p>{textContent.moreFeaturesDescription}</p>
              </Content>
              <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                <Card className="col-span-1 text-primary-900">
                  <CardBody className="w-full bg-white-900/20 p-12">
                    <CardImage
                      src={feature4}
                      alt="Customizable Layouts image used."
                    />
                    <CardHeader className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500 !text-2xl !font-bold">
                      {textContent.card1Title}
                    </CardHeader>
                    <p>{textContent.card1Description}</p>
                  </CardBody>
                </Card>
                <Card className="col-span-1 text-primary-900">
                  <CardBody className="w-full bg-white-900/20 p-12">
                    <CardImage
                      src={feature3}
                      alt="Progress Tracking image used."
                    />
                    <CardHeader className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500 !text-2xl !font-bold">
                      {textContent.card2Title}
                    </CardHeader>
                    <p>{textContent.card2Description}</p>
                  </CardBody>
                </Card>
              </CardGroup>
            </SectionContainer>
          </MotionBTTContainer>
          {/* Pricing Table */}
          <PriceTable2 />
          {/* <SinglePricingTable /> */}
          {/* Testimonials */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer id="testimonials" className="benefits">
              <BadgeGroup alignment="left">
                <BadgeMessage>{textContent.testimonialsBadge}</BadgeMessage>
              </BadgeGroup>
              <PageTitle
                className=" text-transparent py-1 bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                type="default"
              >
                {textContent.testimonialsTitle}
              </PageTitle>
              <Columns />
            </SectionContainer>
          </MotionBTTContainer>
          {/* CTA */}
          <CallToAction />
          {/* Accordions */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer id="faq" className="faq">
              <BadgeGroup alignment="center">
                <BadgeMessage>{textContent.faqBadge}</BadgeMessage>
              </BadgeGroup>
              <PageTitle
                className="text-center mx-auto py-1 text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                type="default"
              >
                {textContent.faqTitle}
              </PageTitle>
              <Accordion />
            </SectionContainer>
          </MotionBTTContainer>
        </SectionContainer>
      </div>
      <Footer />
    </>
  );
}
