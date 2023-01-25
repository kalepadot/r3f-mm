import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ease } from 'styles/motion';
import Image from 'next/image';
import {
  computeLowestPrice,
  cartItemPriceDiscount,
  computeTotalValue,
} from '../utils';

export default function Cart() {
  const [cartItems, setCartItems] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);
  const [discountCode, setDiscountCode] = useState('');
  const [discountInputValue, setDiscountInputValue] = useState('');
  const [discountDisable, setDiscountDisable] = useState(false);
  const lowestPrice = computeLowestPrice(cartItems);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('/api/cart', requestOptions)
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        const totalVal = computeTotalValue(data, discountCode, lowestPrice);
        setCartTotal(totalVal);
      });
  }, [discountCode, lowestPrice]);

  console.log(cartItems, 'cartItems');
  console.log(cartTotal, 'cartTotal');

  const handleClick = e => {
    e.preventDefault();
    if (discountInputValue === 'FIFTY') {
      setDiscountDisable(true);
    }
    if (discountInputValue === 'FREE') {
      setDiscountDisable(true);
    }
    console.log(discountInputValue, 'discount');
    setDiscountCode(discountInputValue);
  };
  const resetDiscount = e => {
    setDiscountDisable(false);
    setDiscountInputValue('');
    setDiscountCode('');
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto mt-10 scale-90 md:px-6 drop-shadow-2xl">
      <div className="grid justify-center grid-cols-3 gap-4 ">
        {cartItems &&
          cartItems.map(
            ({ description, id, imageUrl, price, quantity, title, key }) => (
              (key = { id }),
              (
                <div className="items-center content-center justify-center w-full h-full pt-3 mx-auto text-xs italic text-center text-white transition duration-700 ease-in-out rounded-lg cursor-pointer lg:text-md md:text-sm text-md bg-accent5 hover:bg-accent0 hover:text-accent5 bg-opacity-80 hover:scale-105">
                  <Image
                    src={imageUrl}
                    width={100}
                    height={100}
                    alt="cart images"
                    className="relative transition duration-700 ease-in-out cursor-pointer hover:scale-110 "
                  />
                  <div
                    key={id}
                    className="relative items-center justify-center max-w-sm mx-2 my-3 text-center "
                  >
                    {title} {description}
                    {/* removed {key} / {id} check error msg and come back to this error on render*/}
                    <div className="text-yellow-100">Qty: {quantity}</div>
                    <div className="text-white transition duration-700 ease-in-out cursor-pointer hover:scale-120">
                      {' '}
                      Cost:{' $'}
                      {cartItemPriceDiscount(
                        price,
                        discountCode,
                        lowestPrice,
                      )}{' '}
                    </div>
                  </div>
                </div>
              )
            ),
          )}
      </div>
      <form>
        <label className="flex items-center justify-center mx-auto text-lg font-medium text-accent5 animate-pulse drop-shadow-lg ">
          <input
            className="my-6 italic font-medium text-center border text-accent5 bg-slate-100 border-accent5 "
            type="text"
            name="name"
            onChange={e => setDiscountInputValue(e.target.value)}
            value={discountInputValue}
            placeholder=" DISCOUNT CODE"
          />
        </label>
        <div className="container flex justify-between mx-3 transition duration-500 ease-in-out hover:scale-105">
          <input
            type="button"
            value="Submit"
            disabled={discountDisable}
            onClick={handleClick}
            className="p-3 px-6 pt-2 font-medium transition duration-700 ease-in-out rounded-full cursor-pointer drop-shadow-lg text-md text-accent5 bg-accent0 baseline hover:scale-105 hover:bg-transparent hover:text-white"
          />
          <input
            type="button"
            value="Reset Discount"
            onClick={resetDiscount}
            className="p-3 px-6 pt-2 font-medium transition duration-700 ease-in-out rounded-full cursor-pointer drop-shadow-lg text-md hover:text-white bg-accent0 baseline hover:scale-105 hover:bg-transparent text-accent5"
          />
          <input
            type="button"
            value="Purchase"
            onClick={() =>
              console.log(cartTotal.toFixed(2), 'total from purchase')
            }
            className="p-3 px-6 pt-2 font-medium transition duration-700 ease-in-out rounded-full cursor-pointer drop-shadow-lg text-md hover:text-white bg-accent0 hover:scale-105 baseline hover:bg-transparent text-accent5"
          />
        </div>
      </form>

      {discountCode === ''
        ? null
        : discountCode === 'FIFTY' && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease,
              }}
            >
              <p className="mt-4 text-white bg-transparent drop-shadow-lg">
                With your discount, you're saving $
                {cartItemPriceDiscount(cartTotal).toFixed(2)}
              </p>
            </motion.div>
          )}
      {discountCode === ''
        ? null
        : discountCode === 'FREE' && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease,
              }}
            >
              <p className="mt-4 text-white bg-transparent drop-shadow-lg">
                With your discount, your lowest priced item is free. You're
                saving ${lowestPrice}
              </p>
            </motion.div>
          )}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease,
        }}
      >
        <p className="p-2 mx-auto my-3 text-xl font-medium text-white transition duration-700 ease-in-out rounded-lg cursor-pointer drop-shadow-lg hover:scale-110">
          Total: ${cartTotal.toFixed(2)}
        </p>
      </motion.div>
    </div>
  );
}
