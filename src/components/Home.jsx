import React from "react";
import Running from "./images/runing.jpg";
import Tennis from "./images/tennis.jpg";
// import OurBrand from "./OurBrand";
// import Footer from "./Footer";
import Hero from "./Hero";
import Footer from "./Footer";
import OurBrand from "./OurBrand";
import Ads from "./Ads";
import NewFeatured from "./NewFeatured";

const Home = () => {
  const sectionHomeTitle = {
    football: {
      title: "FOOTBALL",
      description: "View our wide range of football products",
    },
    running: {
      title: "RUNNING",
      description: "Running products needed for an optimal run.",
    },
    tennis: {
      title: "TENNIS",
      description: "The largest collection of tennis products!",
    },
    handball: {
      title: "HANDBALL",
      description: "Handballs, shoes, clothing and kneepads for everyone!",
    },
    basketball: {
      title: "BASKETBALL",
      description: "The largest collection for indoor and outdoor basketball!",
    },
    volleyball: {
      title: "VOLLEYBALL",
      description: "Check out our large collection of volleyball products.",
    },
    fieldHockey: {
      title: "FIELD HOCKEY",
      description:
        "TOP brands like adidas, Osaka, TK, Brabo, Indian Maharadja and many more!",
    },
    padel: {
      title: "PADEL",
      description:
        "The largest collection of padel products for men, women and children!",
    },
    sale: {
      title: "SALE",
      description:
        "Buy high-quality articles for the best prices. Discounts from 25% to 80%!",
    },
  };

  return (
    <>
      <Ads />
      <Hero />
      <NewFeatured/>
      

      <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        {/* Football Section */}
        <div className="bg-white md:px-5 lg:px-36">
          <div className="relative pb-28">
            <div>
              <img
                src="https://cdn.sportshop.com/convert/storage/gallery/discovery_block/1678886061Voetbal_1680x744px.jpg"
                alt="homepic"
                className="w-full m-auto object-cover md:w-full lg:w-full h-96 object-top"
              />
            </div>
            <div className="bg-white grid place-items-center absolute bottom-5 left-0 right-0 m-auto p-5 md:w-2/4 lg:w-2/4 border-solid border border-zinc-400">
              <h1 className="text-lg font-bold tracking-wide">
                {sectionHomeTitle.football.title}
              </h1>
              <p className="text-sm text-center">
                {sectionHomeTitle.football.description}
              </p>
              <a
                href="#"
                className="bg-black text-white px-7 py-2 text-xs mt-3 text-nowrap"
              >
                SHOW COLLECTION
              </a>
            </div>
          </div>
        </div>

        {/* Running Section */}
        <div className="bg-white md:px-5 lg:px-36">
          <div className="relative pb-28">
            <div>
              <img
                src={Running}
                alt="homepic"
                className="w-full m-auto object-cover md:w-full lg:w-full h-96"
              />
            </div>
            <div className="bg-white grid place-items-center absolute bottom-5 left-0 right-0 m-auto p-5 md:w-2/4 lg:w-2/4 border-solid border border-zinc-400">
              <h1 className="text-lg font-bold tracking-wide">
                {sectionHomeTitle.running.title}
              </h1>
              <p className="text-sm text-center">
                {sectionHomeTitle.running.description}
              </p>
              <a
                href="#"
                className="bg-black text-white px-7 py-2 text-xs mt-3 text-nowrap"
              >
                SHOW COLLECTION
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white grid gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:px-5 lg:px-36">
          {/* Tennis Section */}
          <div className="bg-white  ">
            <div className="relative  pb-28 ">
              <div>
                <img
                  src={Tennis}
                  alt="homepic"
                  className="w-full  m-auto object-cover     md:w-full  lg:w-full h-96 object-top  "
                />
              </div>
              <div className="bg-white grid place-items-center  absolute  bottom-5  left-0 right-0  m-auto  p-5   md:w-3/4 lg:w-3/4 border-solid border border-zinc-400 ">
                <h1 className="text-lg font-bold tracking-wide">
                  {sectionHomeTitle.tennis.title}
                </h1>
                <p className="text-sm text-center">
                  {sectionHomeTitle.tennis.description}
                </p>
                <a
                  href="#"
                  className="bg-black text-white px-7 py-2 text-xs mt-3 text-nowrap"
                >
                  SHOW COLLECTION
                </a>
              </div>
            </div>
          </div>

          {/* Handball Section */}
          <div className="bg-white  ">
            <div className="relative  pb-28 ">
              <div>
                <img
                  src="https://cdn.sportshop.com/convert/storage/gallery/discovery_block/1678886527Handbal_621x518px.jpg"
                  alt="homepic"
                  className="w-full  m-auto object-cover     md:w-full  lg:w-full h-96 object-top  "
                />
              </div>
              <div className="bg-white grid place-items-center  absolute  bottom-5  left-0 right-0  m-auto  p-5   md:w-3/4 lg:w-3/4 border-solid border border-zinc-400 ">
                <h1 className="text-lg font-bold tracking-wide">
                  {sectionHomeTitle.handball.title}
                </h1>
                <p className="text-sm text-center">
                  {sectionHomeTitle.handball.description}
                </p>
                <a
                  href="#"
                  className="bg-black text-white px-7 py-2 text-xs mt-3 text-nowrap"
                >
                  SHOW COLLECTION
                </a>
              </div>
            </div>
          </div>

          {/* Basketball Section */}
          <div className="bg-white  ">
            <div className="relative  pb-28 ">
              <div>
                <img
                  src="https://cdn.sportshop.com/convert/storage/gallery/discovery_block/1678887381Basketbal_621x518px.jpg"
                  alt="homepic"
                  className="w-full  m-auto object-cover     md:w-full  lg:w-full h-96 object-top  "
                />
              </div>
              <div className="bg-white grid place-items-center  absolute  bottom-5  left-0 right-0  m-auto  p-5   md:w-3/4 lg:w-3/4 border-solid border border-zinc-400 ">
                <h1 className="text-lg font-bold tracking-wide">
                  {sectionHomeTitle.basketball.title}
                </h1>
                <p className="text-sm text-center">
                  {sectionHomeTitle.basketball.description}
                </p>
                <a
                  href="#"
                  className="bg-black text-white px-7 py-2 text-xs mt-3 text-nowrap"
                >
                  SHOW COLLECTION
                </a>
              </div>
            </div>
          </div>

          {/* Volleyball Section */}
          <div className="bg-white  ">
            <div className="relative  pb-28 ">
              <div>
                <img
                  src="https://cdn.sportshop.com/convert/storage/gallery/discovery_block/1678887381Volleybal_621x518px.jpg"
                  alt="homepic"
                  className="w-full  m-auto object-cover     md:w-full  lg:w-full h-96 object-top  "
                />
              </div>
              <div className="bg-white grid place-items-center  absolute  bottom-5  left-0 right-0  m-auto  p-5   md:w-3/4 lg:w-3/4 border-solid border border-zinc-400 ">
                <h1 className="text-lg font-bold tracking-wide">
                  {sectionHomeTitle.volleyball.title}
                </h1>
                <p className="text-sm text-center">
                  {sectionHomeTitle.volleyball.description}
                </p>
                <a
                  href="#"
                  className="bg-black text-white px-7 py-2 text-xs mt-3 text-nowrap"
                >
                  SHOW COLLECTION
                </a>
              </div>
            </div>
          </div>

          {/* Hockey Section */}
          <div className="bg-white  ">
            <div className="relative  pb-28 ">
              <div>
                <img
                  src="https://cdn.sportshop.com/convert/storage/gallery/discovery_block/1678886918Hockey_621x518px.jpg"
                  alt="homepic"
                  className="w-full  m-auto object-cover     md:w-full  lg:w-full h-96 object-top  "
                />
              </div>
              <div className="bg-white grid place-items-center  absolute  bottom-5  left-0 right-0  m-auto  p-5   md:w-3/4 lg:w-3/4 border-solid border border-zinc-400 ">
                <h1 className="text-lg font-bold tracking-wide">
                  {sectionHomeTitle.fieldHockey.title}
                </h1>
                <p className="text-sm text-center">
                  {sectionHomeTitle.fieldHockey.description}
                </p>
                <a
                  href="#"
                  className="bg-black text-white px-7 py-2 text-xs mt-3 text-nowrap"
                >
                  SHOW COLLECTION
                </a>
              </div>
            </div>
          </div>

          {/* Pedal Section */}
          <div className="bg-white  ">
            <div className="relative  pb-28 ">
              <div>
                <img
                  src="https://cdn.sportshop.com/convert/storage/gallery/discovery_block/1678886918Padel_621x518px.jpg"
                  alt="homepic"
                  className="w-full  m-auto object-cover     md:w-full  lg:w-full h-96 object-top  "
                />
              </div>
              <div className="bg-white grid place-items-center  absolute  bottom-5  left-0 right-0  m-auto  p-5   md:w-3/4 lg:w-3/4 border-solid border border-zinc-400 ">
                <h1 className="text-lg font-bold tracking-wide">
                  {sectionHomeTitle.padel.title}
                </h1>
                <p className="text-sm text-center">
                  {sectionHomeTitle.padel.description}
                </p>
                <a
                  href="#"
                  className="bg-black text-white px-7 py-2 text-xs mt-3 text-nowrap"
                >
                  SHOW COLLECTION
                </a>
              </div>
            </div>
          </div>
        </div>
        <OurBrand />

        <div className="bg-white md:px-5 lg:px-36 ">
          <div className="relative  pb-28 ">
            <div>
              <img
                src="https://cdn.sportshop.com/convert/storage/gallery/discovery_block/1678886104Sale_1680x744px.jpg"
                alt="homepic"
                className="w-full  m-auto object-cover    md:w-full  lg:w-full h-96 object-center"
              />
            </div>
            <div className="bg-white grid place-items-center  absolute  bottom-5  left-0 right-0  m-auto  p-5   md:w-2/4 lg:w-2/4 border-solid border border-zinc-400 ">
              <h1 className="text-lg font-bold tracking-wide">SALE</h1>
              <p className="text-sm text-center">
                Buy high-quality articles for the best prices. Discounts from
                25% to 80%!
              </p>
              <a
                href="#"
                className="bg-black text-white px-7 py-2 text-xs mt-3 text-nowrap"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white grid gap-4 mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-5 lg:px-36 ">
          <div className="bg-white">
            <h2 className="font-bold text-2xl">
              Sportshop.com, your sport is our speciality
            </h2>
            <p>
              Sportshop.com is the online sports specialty store for anyone who
              loves sports, wants to feel fit or just enjoys being active. The
              wide range, the specialistic products and the sporty service are
              just a few points that are extremely important for us.
            </p>
          </div>
          <div className="bg-white">
            <h2 className="font-bold text-2xl">20 Years of experience</h2>
            <p>
              We have been a serious player in the sports market for 20 years
              and our team now consists of more than 200 people. With our
              sport-specific web shops we now serve athletes at every level and
              age in all countries of the world. Do you want to enjoy the best
              sports products, specialist service and targeted advice, then we
              can only say…
            </p>
            <p className="font-bold">Ready, Set, GOOOO!</p>
          </div>
          <div className="bg-white">
            <h2 className="font-bold text-2xl">Our sports</h2>
            <p>
              Sportshop.com is the online specialist for everybody who loves to
              sport, wants to feel fit or enjoys working out. Our large
              collection, specialist products and our excellent service are just
              a few things that are of huge importance for us. At the moment we
              specialize in field hockey, running, volleyball, korfball,
              handball, padel, basketball and tennis. The employees of
              Sportshop.com perform top sport every day. They help you with the
              right answer to difficult and naturally easy questions, give you
              the right specialist advice when necessary, jump in the air if
              they are allowed to pack your order and make sure that the latest
              products are the first. online here. The employees of
              Sportshop.com work out every day just for you. They are ready to
              answer all your difficult questions and they are happy to give you
              advice. When your order arrives we run as fast as we can to
              collect the items and ship them to you. Some of our colleagues are
              continuously looking to find the best products just for you!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
