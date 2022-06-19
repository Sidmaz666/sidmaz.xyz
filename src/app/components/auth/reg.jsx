export default function RegDiv() {
  return (
    <div className="hidden bg-black bg-opacity-70" id="register_div">
      <form>
        <div className="max-w-md flex flex-col p-5">
          <label
            className="flex flex-col text-xl font-semibold"
            htmlFor="fullname"
          >
            <span>Full Name</span>
            <input
              className="p-1 mt-2 mb-2 focus:outline-none bg-black border-b-2 border-green-500 focus:bg-gray-900/50 focus:border-cyan-800/70"
              placeholder="Ann Jn"
              name="reg_fullname"
              id="reg_fullname"
              type="text"
            />
          </label>
          <label
            className="flex flex-col text-xl font-semibold"
            htmlFor="username"
          >
            <span>Username</span>
            <input
              className="p-1 mt-2 mb-2 focus:outline-none bg-black border-b-2 border-green-500 focus:bg-gray-900/50 focus:border-cyan-800/70"
              name="reg_username"
              id="reg_username"
              placeholder="a_user"
              type="text"
            />
          </label>
          <label
            className="flex flex-col text-xl font-semibold"
            htmlFor="email"
          >
            <span>Email</span>
            <input
              className="p-1 mt-2 mb-2 focus:outline-none bg-black border-b-2 border-green-500 focus:bg-gray-900/50 focus:border-cyan-800/70"
              id="reg_email"
              name="reg_email"
              placeholder="ann@jn.com"
              type="email"
            />
          </label>
          <label
            className="flex flex-col text-xl font-semibold mt-2"
            htmlFor="password"
          >
            <span>Password</span>
            <input
              className="p-1 mt-2 mb-2 focus:outline-none bg-black border-b-2 border-green-500 focus:bg-gray-900/50 focus:border-cyan-800/70"
              name="reg_password"
              id="reg_password"
              placeholder="**********"
              type="password"
            />
          </label>
          <label
            className="flex flex-col text-xl font-semibold mt-2"
            htmlFor="confirm_password"
          >
            <span>Confirm Password</span>
            <input
              className="p-1 mt-2 mb-2 focus:outline-none bg-black border-b-2 border-green-500 focus:bg-gray-900/50 focus:border-cyan-800/70"
              placeholder="**********"
              name="reg_configm_password"
              id="reg_confirm_password"
              type="password"
            />
          </label>
          <span className="flex justify-center pt-5">
            <button
              className="bg-green-500/50 text-white text-xl rounded-md hover:bg-green-500/70 pl-3 pr-3 p-2"
              type="submit"
              name="reg_submitBtn"
              id="reg_submitBtn"
            >
              Register
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}
