import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import About from '../About/About';
import Animation from '../Animation/Animation';
import Banner from '../Banner/Banner';
import Mywork from '../MyWork/Mywork';
import Project from '../Projects/Project';

const Header = () => {
  return (
    <div>
       <NavigationBar> </NavigationBar>
      {/* <Animation></Animation> */}
       <Banner> </Banner>
        <About></About>
       <Mywork></Mywork>
       <Project></Project>
       
    </div>
  );
};

export default Header;