import Banner from "@/components/landingComponents/Banner/Banner";
import Features from "@/components/landingComponents/Features/Features";
import Footer from "@/components/landingComponents/Footer/Footer";
import OrderSteps from "@/components/landingComponents/OrderSteps/OrderSteps";

import Question from "@/components/landingComponents/QnA/QnA";
import Specs from "@/components/landingComponents/Speecs/Speecs";
import Header from "@/components/landingComponents/header/Header";

export default function LandingPageLayouts() {
  return (
    <>
      <Header />
      <Features />
      <Banner/>
      <Specs/>
      <OrderSteps/>
      <Question/>
      <Footer/>
    </>
  );
}

