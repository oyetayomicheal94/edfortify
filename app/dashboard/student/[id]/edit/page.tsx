import Link from "next/link";

const Signup = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Edfortify"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#4CAF50]">
            Update Student
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Firstname
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  // autoComplete="firstname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Lastname
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  // autoComplete="lastname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="sex"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sex
              </label>
              <div className="mt-2">
                <span className="ms-5 me-2">Male</span>
                <input
                  id="sex"
                  name="sex"
                  type="radio"
                  // autoComplete="sex"
                  required
                  className=" form-radio text-[#FF5722] focus:ring-[#FF5722]"
                />
                <span className="ms-5 me-2">Female</span>
                <input
                  id="sex"
                  name="sex"
                  type="radio"
                  // autoComplete="sex"
                  required
                  className=" form-radio text-[#FF5722] focus:ring-[#FF5722]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phoneno"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                phoneno
              </label>
              <div className="mt-2">
                <input
                  id="phoneno"
                  name="phoneno"
                  type="number"
                  // autoComplete="phoneno"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Class
                </label>
              </div>
              <div className="mt-2">
                <select
                  className="form-select
                   w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 
                   focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6"
                  name="class"
                  id="class"
                >
                  <option value="Primary 1">Primary 1</option>
                  <option value="Primary 2">Primary 2</option>
                  <option value="Primary 3">Primary 3</option>
                  <option value="Primary 4">Primary 4</option>
                  <option value="Primary 5">Primary 5</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="profile"
                  className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
                >
                  Profile
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="profile"
                  name="profile"
                  type="file"
                  // autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 ps-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
                hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
              >
                Update Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
