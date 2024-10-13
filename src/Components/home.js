import AboutUs from "../Sections/aboutus";
import Banner from "../Sections/banner";
import Footer from "../Sections/footer";
import Services from "../Sections/services";
import Services2 from "../Sections/services2";
import Searchbar from "../Sections/searchbar";
import ToTop from "../Sections/totop";
import HospitalCard from "../Sections/hospitalCard";
import ServiceSlider from "../Sections/serviceSlider";
import PatientStories from "../Sections/patientStories";
import MeetDoctors from "../Sections/meetDoctors";

function Home() {
  return (
    <div>  
      <Banner />
      <Searchbar />
      <HospitalCard />
      <AboutUs />
      <ServiceSlider/>
      <Services />
      <Services2 />
      <MeetDoctors/>
      <PatientStories/>
      <Footer />
      <ToTop />
    </div>
  );
}

export default Home;
