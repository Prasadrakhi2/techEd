import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { MdOutlineMail } from "react-icons/md";
import home_banner from "../../public/banner.png";
import Card1 from "./Card1";
import cardList from "../../public/cardList.json";
import Card2 from "./card2";
import card2image from "../../public/card2.json";

const Home = () => {
  // react slic slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      {/* part-1 */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row ">
        {/* left */}
        <div className="w-full md:w-1/2 md:mt-60 order-2 md:order-1 mt-16">
          <span>
            <h1 className="text-2xl md:text-4xl font-medium">
              Unlock the World of{" "}
              <span className="text-blue-500">Computer Science</span>
            </h1>
            <p className="my-6 md:my-10 mr-14 text-xl">
              Embark on your journey into the world of computer science. Explore
              our resources, engage with the community, and unlock your
              potential. Whether you aim to build applications, analyze data, or
              secure systems
            </p>
            {/* search  */}
            <div className="my-8 md:my-10 md:mr-24 ">
              <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:shadow-slate-600 dark:shadow-md">
                <MdOutlineMail />
                <input
                  type="text"
                  className="grow "
                  placeholder="Enter your mail id here"
                />
              </label>
            </div>
            <button className="text-white bg-blue-400 py-2 px-4 rounded-md hover:bg-blue-500 mt-6">
              Let's connect
            </button>
          </span>
        </div>

        {/* right */}
        <div className="md:w-1/2 w-full md: order-1 mt-28 md:mt-24 ">
          <img
            className=""
            src="https://cdn-images-1.medium.com/v2/resize:fit:1600/1*bwhgJ19iXhcyDJR1uH4-kw.png"
            alt=""
          />
        </div>
      </div>

      {/* part-2 */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-6  mt-20  ">
        {" "}
        <h1 className="mt-12 md:mt-0  text-4xl font-medium">
          Learn free coding
        </h1>
        <p className="text-xl mt-10">
          Take online courses from 260+ world-class universities and companies
        </p>
        <div className="mt-20">
          {/* slider */}
          <div className="slider-container cursor-pointer">
            <Slider {...settings}>
              {cardList.map((cardItem) => {
                return (
                  <div key={cardItem.id} className="border-black ">
                    <Card1 cardItem={cardItem} key={cardItem.id} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* part-3 */}
      <div className="max-w-screen-2xl container mx-auto mt-12 md:px-20 px-6 flex flex-col md:flex-row">
        {/* left */}
        <div className="w-full md:w-1/2 md:order-1 ">
          <span>
            <h1 className="text-4xl font-semibold mt-20 md:mt-40">
              Join a community, not just a classroom
            </h1>
            <p className="text-xl mt-8 font-medium">
              With techEd, you can expect the kinds of benefits that set you up
              for long-term professional and personal growth
            </p>
            <div className="my-8 ml-6">
              <ul className="list-disc">
                <li className="mt-4">
                  Earn valuable credentials from top universities and companies.
                </li>

                <li className="mt-4">
                  Access career support and planning resources.
                </li>

                <li className="mt-4">
                  Learn from world-class university faculty and industry
                  leaders.
                </li>

                <li className="mt-4">
                  Join a global network of professionals in your industry.
                </li>
              </ul>
            </div>
          </span>
        </div>

        {/* right */}
        <div className="md:w-1/2 order-1 mt-8  md:mt-28 md:ml-10">
          <img
            className="h-3/4 hidden md:block"
            src="https://www.edx.org/_next/image?url=https%3A%2F%2Fimages.cdn.edx.org%2Fpost3021-edX_homepage_community_desktop_788x687.png&w=1920&q=75"
            alt=""
          />

          <img
            className=" block justify-center  md:hidden rounded-full"
            src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/V1xq1AADx/videoblocks-woman-entrepreneur-working-on-laptop-at-co-working-office-or-library-looks-smart-bookshelves-knowledge-and-self-development_b6bdsmkn7_thumbnail-1080_01.png"
            alt=""
          />
        </div>
      </div>

      {/* part-4 */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col my-12">
        <h1 className="md:text-4xl text-3xl ml-6 font-semibold mt-20 md:mt-0">
          So many reasons to start
        </h1>
        <div className="my-10 md:my-20 flex flex-wrap">
          {card2image.map((item) => {
            return <Card2 item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
