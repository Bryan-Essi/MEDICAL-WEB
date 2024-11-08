import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg-pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ad
          autem itaque provident harum, praesentium deleniti atque corporis
          placeat maiores recusandae alias cum eos rem culpa, enim sequi quos
          non commodi nemo!
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          tenetur. Debitis saepe, id neque quibusdam nostrum asperiores dicta
          autem? Nam quam amet excepturi rem, facilis sunt earum, quo aliquam
          laboriosam odit aut inventore.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          error quasi, deleniti aliquam esse modi eos obcaecati et, magni qui
          autem nostrum. Eaque fugiat neque ducimus aliquid? Esse beatae
          doloremque eaque officiis blanditiis fugiat?
        </p>
      </div>
      <div className="w-full lg:w3/4">
        <img src={img} alt="img" className="rounded-lg" />
      </div>
    </div>
  );
};

export default About;
