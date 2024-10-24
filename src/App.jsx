import "./App.css";
import CountdownAlert from "./components/CountdownAlert";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import AboutAuthor from "./components/AboutAuthor";
import KeyBenefits from "./components/keyBenefits";
import AnimatedStats from "./components/AnimatedStats";
import WebinarRegistration from "./components/WebinarRegistration";
import Reviews from "./components/Reviews";
import WhyRegister from "./components/WhyRegister";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CountdownAlert />
      <Hero />
      <Introduction />
      <AboutAuthor />
      <KeyBenefits />
      <AnimatedStats />
      <Reviews />
      <WebinarRegistration />
      <WhyRegister />
      <Footer />
    </>
  );
}

export default App;
