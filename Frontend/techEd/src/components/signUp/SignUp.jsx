import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "../Login";

const SignUp = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      {" "}
      <div>
        <div id="" className="flex h-screen items-center justify-center">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="pt-2">
                {/* name */}
                <span className="m-2">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name here"
                  className="w-80 p-1 border rounded-md outline-none m-2 dark:bg-slate-900 dark:text-white "
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
                  className="w-80 p-1 border rounded-md outline-none m-2 dark:bg-slate-900 dark:text-white "
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">*This field is required</span>
                )}
                <br />
                {/* password */}
                <span className="m-4">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password here"
                  className="w-80 p-1 border rounded-md outline-none m-2 dark:bg-slate-900 dark:text-white "
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-500">*This field is required</span>
                )}
                <div className="flex justify-between mt-2">
                  <button
                    type="submit"
                    className="text-white bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md  ml-4"
                  >
                    Signup
                  </button>
                  <span className="text-sm mr-2 mt-2">
                    Already have account?{" "}
                    <button
                      className="underline text-blue-500 dark:text-blue-300 dark:hover:text-blue-400 hover:text-blue-700"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>
                    <Login />
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
