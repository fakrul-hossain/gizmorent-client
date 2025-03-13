
import React from 'react';
import Testimonial from './Testimonial';
import React from "react";
import CategorySlider from "./Categories";
import TopRented from "./TopRented";
import TopContributor from "./TopContributor";
import AboutGizmoRent from "./AboutGizmoRent";

const Home = () => {
  return (
    <div>
      <main className="md:mx-12">
        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
        <TopContributor></TopContributor>
        <AboutGizmoRent></AboutGizmoRent>
     <Testimonial/>
      </main>
    </div>
  );
};

export default Home;
