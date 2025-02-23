import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Contect = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col   ">
        <h1 className="text-4xl flex justify-center text-center mt-40 md:mt-48 font-semibold ">
          Get in Touch
        </h1>

        <p className="flex justify-center text-center ml-10 mr-10 mt-6 text-xl font-medium md:flex ">
          We want hear from you. Please feel free to email or fill out the form
          below
        </p>

        {/* contact us form */}
        <div className=" md:ml-36 md:w-full mt-10 ml-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg my-6">Contact Us</h3>
            <div className="pt-2">
              {/* name */}
              <span className="m-2">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name here"
                className=" w-80 p-2 border rounded-md outline-none m-2 dark:bg-slate-900 dark:text-white md:w-3/4"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-red-500">*This field is required</span>
              )}
              <br />
              {/* email */}
              <span className="m-2">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your mail id here"
                className="w-80 p-2 border rounded-md outline-none m-2 dark:bg-slate-900 dark:text-white  md:w-3/4"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500">*This field is required</span>
              )}
              <br />
              {/* Message */}
              <span className="m-4">Message</span>
              <br />
              <textarea
                type="text"
                placeholder="Enter your password here"
                className=" md:w-3/4 w-80 p-1 border rounded-md outline-none m-2 dark:bg-slate-900 dark:text-white h-32"
                {...register("message", { required: true })}
              ></textarea>
              <br />
              {errors.message && (
                <span className="text-red-500">*This field is required</span>
              )}
              <div className="flex justify-between mt-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 ml-4 mb-12 "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default Contect;
