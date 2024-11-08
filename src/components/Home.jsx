import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('/home/bryanessi/medical-web/src/assets/img/home2.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted...
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          eligendi iusto sapiente distinctio dolorum deserunt, sed non culpa
          architecto porro consequuntur animi dignissimos. Quis nesciunt quaerat
          nihil veritatis nostrum, incidunt itaque corrupti!
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
