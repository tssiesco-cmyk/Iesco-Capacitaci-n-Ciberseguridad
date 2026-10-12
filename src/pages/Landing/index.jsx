import Hero from "../../components/organisms/Hero";
import PhishingSignals from "../../components/organisms/PhishingSignals";
import RealOTrampa from "../../components/organisms/RealOTrampa";
import Habits from "../../components/organisms/Habits";
import ReportBlock from "../../components/organisms/ReportBlock";
import Quiz from "../../components/organisms/Quiz";
import Closing from "../../components/organisms/Closing";
import Footer from "../../components/organisms/Footer";

export default function Landing() {
  return (
    <>
      <main>
        <Hero />
        <PhishingSignals />
        <RealOTrampa />
        <Habits />
        <ReportBlock />
        <Quiz />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
