import Hero from "../Hero/Hero";
import Navbar from "../navbar/Navbar";
import Parallax from "../Parallax/Parallax";
// import Services from "../Services/Services";
import AutoSlider from "../AutoSlider/AutoSlider";
// import FutureGoals from "../FutureGoals/FutureGoals";
import DataSecurity from "../DataSecurity/DataSecurity";
// import ServicesSlider from "./components/ServicesSlider/ServicesSlider";
const Home = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <AutoSlider />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        <DataSecurity />
      </section>
    </div>
  );
};

export default Home;
