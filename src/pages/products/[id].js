import { useRouter } from "next/router";
import { Context } from "@/context/context";
import { useContext } from "react";
import Header from "@/components/Header";

export default function cardDetails() {
  const route = useRouter();
  const productId = route?.query?.id;
  const data = useContext(Context);
  const cardData = data.cardData;
  const cartItems = data.cart.cartItems;
  const setCartItems = data.cart.setCartItems;
  const selected = productId
    ? cardData.find((item) => item.id == productId)
    : {};
  const { title, description, image, id, category, rating } = selected || {};

  function addToCart() {
    cartItems.push(selected);
    setCartItems([...cartItems]);
  }

  return (
    <>
      <Header />
      <main
        className={`flex flex-col p-2 md:p-3 lg:p-5 justify-center bg-gray-100`}
      >
        <h1 className="text-center my-3 font-bold text-3xl">ABC Store</h1>
        <div className="flex flex-col md:flex-row sm:mx-2 md-mx-5 lg:mx-10 bg-white p-2 lg:p-4 rounded-md">
          <div className="w-full flex justify-center md:w-6/12">
            <img src={image} width={280} height={300} />
          </div>
          <div className="w-full md:w-6/12 flex flex-col ">
            <h1 className="font-bold mt-10">{title}</h1>
            <p className="font-regular mt-4 text-[14px]">{description}</p>
            <p className="font-semibold mt-4 text-[14px] capitalize">
              Catogory : {category}
            </p>
            <p className="font-medium mt-4 text-[14px]">
              Rating : {rating?.rate} {`(${rating?.count})`}{" "}
            </p>
            <button
              className="p-2 w-full bg-black text-white rounded-md my-3"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
