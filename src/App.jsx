import "./App.css";
import CountdownAlert from "./components/CountdownAlert";
import Hero from "./components/hero";
import Introduction from "./components/Introduction";
import AboutAuthor from "./components/AboutAuthor";
import KeyBenefits from "./components/keyBenefits";
import AnimatedStats from "./components/AnimatedStats";
import WebinarRegistration from "./components/WebinarRegistration";
import Reviews from "./components/Reviews";
import WhyRegister from "./components/WhyRegister";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
