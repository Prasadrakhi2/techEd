import Footer from "../Footer";
import Navbar from "../Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto  md:px-20 px-4 flex flex-col md:flex-row ">
        <span className="justify-center text-center">
          <h1 className="text-xl font-semibold text-slate-500 dark:text-slate-400 mt-40 md:mt-48">
            ABOUT US
          </h1>
          <p className="md:text-4xl text-2xl font-semibold m-8 md:my-4 md:m-44 ">
            Helping businesses deliver{" "}
            <span className="text-blue-500">exceptional</span> buyer
            experiences.
          </p>
          <p className="text-slate-700 md:text-lg text-xl md:ml-24 md:mr-24 ml-10 mr-10 dark:text-slate-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni
            a, vitae nemo voluptatibus corrupti sunt maiores rem veritatis.
            Necessitatibus, illo voluptas ex labore, sed sit, accusamus
            quibusdam consectetur eaque dicta quo eius omnis at temporibus nisi
            voluptates eveniet odit natus voluptatem quaerat quis quidem ab
            nobis. Ullam, culpa doloremque!
          </p>
          <button className="mt-10 text-white bg-blue-400 py-2 px-4 rounded-md hover:bg-blue-500">
            Sign in
          </button>

          <div className="my-20  flex items-center justify-center ">
            <img src="https://devex.uz/img/about/main_banner.png" alt="" />
          </div>
        </span>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default About;
