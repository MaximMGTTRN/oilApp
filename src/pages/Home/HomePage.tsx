import { AboutUs } from "./AboutUs/AboutUs";
import { Advantages } from "./Advantages/Advantages";
import Home from "./Home";
import { OurPartners } from "./HomeCatalog/OurPartners";

export const HomePage = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <OurPartners color="#F5F5F5" />
      <Advantages />
    </>
  );
};
