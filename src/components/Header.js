import { ShoppingCartOutlined } from "@ant-design/icons";
import { Context } from "@/context/context";
import { useContext } from "react";
import Link from "next/link";

export default function Header() {
  const data = useContext(Context);
  const cartItems = data.cart.cartItems;

  return (
    <div className="p-6 w-full flex justify-between items-center border-b-[1px] border-green-600">
      <div>
        <span className="text-green-600 font-semibold text-2xl">Products</span>
      </div>
      <div className="cursor-pointer flex items-center">
        <Link href={'/cart'}>
          <span>{cartItems ? cartItems.length : 0}</span>
          <ShoppingCartOutlined className="text-2xl ms-1" />
        </Link>
      </div>
    </div>
  );
}
