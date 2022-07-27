import React from "react";

import { Link } from "react-router-dom";

import homeImg from "../assets/imgs/home.svg";
import homeImg2 from "../assets/imgs/home2.svg";
import homeImg3 from "../assets/imgs/home3.svg";

const imgs = [homeImg, homeImg2, homeImg3];

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={imgs[Math.floor(Math.random() * imgs.length)]}
          className="lg:max-w-xl rounded-lg"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-32 justify-center">
            <Link to="/register">
              <button className="btn btn-primary">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
