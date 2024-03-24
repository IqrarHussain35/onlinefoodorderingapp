import { useNavigate } from "react-router";
import { MyButton } from "../CustomComponents/MyComponents";
import { useData } from "../context/CartState";

const Cheackout = () => {
  const { setProducts } = useData();
  const navigate = useNavigate();
  const { products } = useData();
  const total = products.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className=" mt-10 bg-gray-50 p-10">
      <div className="xl:mx-24 xl:my-11">
        <div className=" grid  gap-2 xl:grid-cols-12">
          <div className="rounded bg-white p-5 shadow xl:col-span-8">
            <h1 className="mb-6 text-2xl font-semibold text-black">
              Delivery Address
            </h1>

            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Street
              </label>
              <input
                type="text"
                id="default-input"
                className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Floor
              </label>
              <input
                type="text"
                id="default-input"
                className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Note to rider
              </label>
              <input
                type="text"
                id="default-input"
                className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              />
            </div>
          </div>
          <div className=" rounded bg-white p-5 shadow xl:col-span-4">
            <h1 className="mb-1 block text-2xl font-semibold text-black">
              Your order from
            </h1>
            <h4 className="text-medium mb-1 block font-semibold text-black">
              Lahore cantt
            </h4>
            <div className=" xl:h-40  xl:overflow-y-scroll">
              {products?.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-3"
                >
                  <h6 className="text-medium block text-gray-500">
                    {item.quantity} X {item.name}
                  </h6>
                  <h6 className="text-medium block text-gray-500">
                    Rs. {item.price}
                  </h6>
                </div>
              ))}
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center justify-between ">
                <h6 className="text-medium block text-gray-500">Subtotal</h6>
                <h6 className="text-medium block text-gray-500">Rs. {total}</h6>
              </div>
              <div className="flex items-center justify-between ">
                <h6 className="text-medium block text-gray-500">
                  Delivery Fee
                </h6>
                <h6 className="text-medium block text-gray-500">Free</h6>
              </div>
              <div className="flex items-center justify-between ">
                <h6 className="text-medium block text-gray-500">Service Fee</h6>
                <h6 className="text-medium block text-gray-500">Rs. 7.99</h6>
              </div>
              <div className="flex items-center justify-between ">
                <h6 className="block text-xl font-bold text-black">Total</h6>
                <h6 className="block text-xl font-bold text-black">
                  Rs. {total + 7.99}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 grid gap-2  xl:grid-cols-12">
          <form className="rounded bg-white p-5 shadow xl:col-span-8">
            <h1 className="mb-6 text-2xl font-semibold text-black">
              Personal Details
            </h1>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                placeholder="iamiqrarhussain.siddiqui@gmail.com"
                required
              />
            </div>
            <div className="mb-6 grid gap-6 xl:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Iqrar"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                  placeholder="Hussain"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                placeholder="923023568542"
                required
              />
            </div>
            <MyButton
              fullWidth={true}
              onClick={() => {
                setProducts([]);
                navigate("/");
              }}
            >
              Place Order
            </MyButton>
          </form>
          <div className="xl:col-span-4"></div>
        </div>
      </div>
    </div>
  );
};
export default Cheackout;
