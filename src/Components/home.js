import AboutUs from "../Sections/aboutus";
import Banner from "../Sections/banner";
import Footer from "../Sections/footer";
import NavBars from "../Sections/navbar";
import Services from "../Sections/services";
import Services2 from "../Sections/services2";
import Searchbar from "../Sections/searchbar";
import ToTop from "../Sections/totop";

function Home() {
  return (
    <div>
      <NavBars />
      <Banner />
      <Searchbar />
      <AboutUs />
      <Services />
      <Services2 />
      <Footer />
      <ToTop />
    </div>
  );
}

export default Home;
