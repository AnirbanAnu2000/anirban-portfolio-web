import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import HomePageBanner from '../HomePageBanner/HomePageBanner';
import HomePageAbout from '../HomePageAbout/HomePageAbout';
import HomePageProjects from '../HomePageProjects/HomePageProjects';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <HomePageBanner></HomePageBanner>
      <HomePageAbout></HomePageAbout>
      <HomePageProjects></HomePageProjects>
      <Footer></Footer>
    </div>
  );
};

export default Home;