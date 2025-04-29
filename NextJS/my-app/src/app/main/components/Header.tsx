import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaPatreon } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { LiaBarsSolid } from "react-icons/lia";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import "./header.scss";
import { Product } from "@/data/collectionData";
import { MdDelete } from "react-icons/md";

export interface CartItem extends Product {
  quantity: number
}

interface HeaderProps {
  cartItems: CartItem[];
  onRemoveFromCart: (productId: number) => void;
  onIncreaseQuantity: (productId: number) => void;
  onDecreaseQuantity: (productId: number) => void;
  showSecondaryHeader: boolean;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity,showSecondaryHeader }) => {

  const [showCartDialog, setShowCartDialog] = useState(false)
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <div className="top-bar flex justify-between p-[10px] pr-[15px] bg-[#181f15] max-md:hidden">
        <ul className="social-icons flex">
          <li className="p-[5px]">
            <FaFacebookF />
          </li>
          <li className="p-[5px]">
            <FaPatreon />
          </li>
          <li className="p-[5px]">
            <FaInstagram />
          </li>
          <li className="p-[5px]">
            <GoMail />
          </li>
        </ul>

        <div className="top-bar-right flex">
          <div className="login-container flex items-center text-[14px] p-[5px] gap-x-[5px]">
            <CiUser className="text-[18px]" />
            Login
          </div>
          <div
            className="cart-container flex items-center text-[12px] p-[5px] gap-x-0.5 cursor-pointer"
            onClick={() => setShowCartDialog(true)}
          >
            <BsBag className="text-[18px] transition-transform duration-200 hover:scale-125 active:scale-150" />
            {cartItems.length > 0 && (
              <span className="">{cartItems.length}</span>
            )}
          </div>
        </div>
      </div>

      <div className="main-nav bg-white text-black px-[20px] py-[10px] flex  max-md:hidden">
        <ul className="left-nav flex gap-x-[13px] cursor-pointer flex-wrap w-[45%]">
          <li className="nav-item flex items-center gap-x-[5px]">
            <span>Men</span>
            <SlArrowDown />
          </li>
          <li className="nav-item flex items-center gap-x-[5px]">
            <span>Women</span>
            <SlArrowDown />
          </li>
          <li className="nav-item flex items-center">
            <span>Felted Slippers & Mittens</span>
          </li>
          <li className="nav-item flex items-center">
            <span>Leather Bags</span>
          </li>
        </ul>
        <div className="middle-nav w-[165px]">
          <Image src={logo} alt="logo" />
        </div>
        <div className="right-nav flex justify-end w-[45%]">
          <ul className="flex items-center justify-end flex-wrap  gap-x-[13px] mr-[20px]">
            <li className="nav-item flex items-center gap-x-[5px]  ">
              <span className="text-end ">Customer Care</span>
              <SlArrowDown />{" "}
            </li>
            <li className="nav-item">FAQ</li>
          </ul>
          <div className="flex items-center">
            <div className="border flex items-center h-[44px] p-[10px]">
              <input
                type="text"
                placeholder="Search"
                className="!outline-none w-[140px]"
              />
              <IoSearchOutline className="text-[20px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-30px md:hidden">12</div>
      <div className="main-nav-mobile fixed w-[100%] top-0 z-50 bg-white text-black py-[4px] flex justify-between items-center md:hidden  ">
        <div className="left-nav flex items-center">
          <LiaBarsSolid className="text-[35px] ml-[5px] mr-[8px]" />
          <span>MENU</span>
        </div>
        <div className="middle-nav">
          <Image src={logo} alt="logo" className="w-[92px]" />
        </div>
        <div className="right-nav flex items-center gap-0.5 justify-center bg-[#181f15] text-white  w-[60px] h-[40px] ">
          <BsBag
            className="text-[18px] transition-transform duration-200 hover:scale-125 active:scale-150"
            onClick={() => setShowCartDialog(true)}
          />
          {cartItems.length > 0 && (
            <span className="text-[14px] pb-2">{cartItems.length}</span>
          )}
        </div>
      </div>

      {/* Cart Dialog */}
      {showCartDialog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white text-black w-[600px] z-51 max-h-[80vh] overflow-y-auto rounded-md p-6 relative">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 text-lg py-10">
                Please add items to your cart.
              </div>
            ) : (
              <>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-2">Product</th>
                      <th className="pb-2 max-md:px-2">Name</th>
                      <th className="pb-2">Price</th>
                      <th className="pb-2 text-center">Quantity</th>
                      <th className="pb-2 text-center">Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-2">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={60}
                            height={60}
                          />
                        </td>
                        <td className="max-md:px-2">{item.name}</td>
                        <td className="min-w-[100px]">
                          {item.price.toLocaleString("vi-VN")} đ
                        </td>
                        <td>
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => onDecreaseQuantity(item.id)}
                              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                              -
                            </button>
                            <span className="min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onIncreaseQuantity(item.id)}
                              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="text-center">
                          <button
                            onClick={() => onRemoveFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <MdDelete size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="text-right mt-4 text-lg font-semibold">
                  Total: {totalAmount.toLocaleString("vi-VN")} đ
                </div>
              </>
            )}

            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setShowCartDialog(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}


        <div 
        className={`
          main-nav bg-white text-black px-[20px] py-[10px] flex max-md:hidden
          fixed top-0 z-50 w-full opacity-90
          transition-transform duration-500 transform
          ${showSecondaryHeader ? 'translate-y-0' : '-translate-y-full'}
        `}
      > 
          <ul className="left-nav flex gap-x-[13px] cursor-pointer flex-wrap w-[45%]">
            <li className="nav-item flex items-center gap-x-[5px]">
              <span>Men</span>
              <SlArrowDown />
            </li>
            <li className="nav-item flex items-center gap-x-[5px]">
              <span>Women</span>
              <SlArrowDown />
            </li>
            <li className="nav-item flex items-center">
              <span>Felted Slippers & Mittens</span>
            </li>
            <li className="nav-item flex items-center">
              <span>Leather Bags</span>
            </li>
          </ul>
          <div className="middle-nav w-[165px]">
            <Image src={logo} alt="logo" />
          </div>
          <div className="right-nav flex justify-end w-[45%]">
            <ul className="flex items-center justify-end flex-wrap  gap-x-[13px] mr-[20px]">
              <li className="nav-item flex items-center gap-x-[5px]  ">
                <span className="text-end ">Customer Care</span>
                <SlArrowDown />{" "}
              </li>
              <li className="nav-item">FAQ</li>
            </ul>
            <div className="flex items-center">
              <div className="border flex items-center h-[44px] p-[10px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="!outline-none w-[140px]"
                />
                <IoSearchOutline className="text-[20px]" />
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Header;
