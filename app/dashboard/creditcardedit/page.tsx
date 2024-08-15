import Link from "next/link";

const EditCreditCard = () => {
  const handleLogin = () => {};
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
            Manage Your Credit Card
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="creditCard"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Credit Card 1
              </label>
              <div className="mt-2">
                <input
                  id="creditCard"
                  name="creditCard"
                  type="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6"
                />
                <div className="flex mt-2">
                  <button
                    type="submit"
                    className="flex mx-1 w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 
                    text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-[#FF5722]"
                  >
                    <i className="bi bi-plus-lg"></i>
                  </button>
                  <button
                    type="submit"
                    className="mx-1 flex w-auto justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
                    hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
                hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
              >
                Update Credit Card
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-red-300">
            Note: The first credit card will be your default credit card.
          </p>
        </div>
      </div>
    </>
  );
};
export default EditCreditCard;
