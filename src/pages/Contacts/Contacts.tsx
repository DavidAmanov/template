import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Slider from "../../components/Slider/Slider";
import ContactsCss from "./Contacts.module.css";
import ConctactsData from "../../components/ContactsData/ContactsData";

const Contacts = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  return (
    <>
      <Header />
      <div className={ContactsCss.contacts__container}>
        <ConctactsData />
        <Map orderPage={false} />
      </div>
      <div className={ContactsCss.slider}>
        <Slider numberOfProduct={windowWidth > 1000 ? 5 : 1} />
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
