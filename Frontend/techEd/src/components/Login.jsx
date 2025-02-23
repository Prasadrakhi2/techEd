import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to={"/"}>
              {" "}
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="pt-2">
              {/* email */}
              <span className="m-2">Email</span>
              <br />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your mail id here"
                className="w-80 p-1 border rounded-md outline-none m-2 dark:bg-slate-900 dark:text-white "
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
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter your password here"
                className="w-80 p-1 border rounded-md outline-none m-2 dark:bg-slate-900 dark:text-white "
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
                  Login
                </button>
                <p className="text-sm mr-2 mt-2">
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 dark:text-blue-300 dark:hover:text-blue-400 hover:text-blue-700"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
