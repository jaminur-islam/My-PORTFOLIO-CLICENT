import React, { useState } from "react";
import { GoogleForm } from "../../Googleform/GoogleForm";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Mywork from "../MyWork/Mywork";
import Project from "../Projects/Project";

const Header = () => {
  const [dark, setDark] = useState(true);
  return (
    <div className={dark ? "bg-dark" : "bg-white text-dark"}>
      <NavigationBar setDark={setDark} dark={dark}></NavigationBar>
      <Banner dark={dark}> </Banner>
      <About dark={dark}></About>
      <Mywork dark={dark}></Mywork>
      <Project dark={dark}></Project>
      <GoogleForm dark={dark}></GoogleForm>
      <Footer> </Footer>
    </div>
  );
};

export default Header;
