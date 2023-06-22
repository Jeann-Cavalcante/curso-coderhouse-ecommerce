import { ShoppingCartSimple } from "@phosphor-icons/react";

const CartWidget = () => {
  return (
    <>
      <ShoppingCartSimple className="hover:text-primary duration-300 cursor-pointer" size={28} weight="bold" />
    </>
  );
}

export default CartWidget;