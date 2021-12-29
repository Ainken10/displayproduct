import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Product = ({ product }) => {
  return (
    <motion.div
      className="max-h-screen min-h-screen w-full flex  "
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-1/2 flex justify-center items-center shadow-lg"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <motion.img
          key={product.image}
          src={product.image}
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 200, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="w-96"
        />
      </motion.div>
      <div className="product-details px-24 w-1/2 h-min-screen  flex items-center justify-center">
        <motion.div variants={stagger}>
          <Link href="/">
            <motion.div variants={fadeInUp} className="mb-10 cursor-pointer">
              <a className="font-semibold text-xs">Vissza termékekhez</a>
            </motion.div>
          </Link>
          <motion.div variants={fadeInUp} className="mb-3 ">
            <span className="font-semibold py-5  ">{product.category} </span>
          </motion.div>

          <motion.h1 className="text-3xl font-bold my-5" variants={fadeInUp}>
            {product.name}
          </motion.h1>
          <motion.p className="text-justify text-gray-600" variants={fadeInUp}>
            {product.details}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex space-x-2 my-2">
            <span className="rounded-lg bg-sky-300 p-1 font-semibold text-white text-xs">Gluten free</span>
            <span className="rounded-lg bg-green-300 p-1 font-semibold text-white text-xs">Vegan</span>
           
          </motion.div>
          <motion.div variants={fadeInUp} className="flex items-center justify-between">
            <div className="flex space-x-2  items-center my-2">
              <div className="rounded-full bg-gray-300  w-7 h-7 flex justify-center items-center cursor-not-allowed ">-</div>
              <div className="amount">1</div>
              <div className="rounded-full border-2 border-gray-300  w-7 h-7 flex justify-center items-center cursor-pointer  ">+</div>
            </div>
            <span className="text-2xl font-bold">{product.price} Ft</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex space-x-10 my-2">
            <button className="uppercase bg-sky-600 text-white rounded-md px-10 py-2 "> Kosárba teszem</button>
            <button className="uppercase text-gray-400"> Értesítés</button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

Product.getInitialProps = async function (context) {
  const { id } = context.query;

  const products = [
    {
      id: 0,
      name: "Ínyenc szeder",
      image:
        "https://www.yves-rocher.hu/uimg/product_catalog_500x500/77701.jpg",
      size: "400 ml",
      price: 1490,
      category: "Hab- és tusfürdő",
      details:
        "Lenyűgöző állatok, élettel teli fák, amelyek végtelen meglepetéseket kínálnak, hóval borított szeder és narancs az olvadó csokoládéban. Mindez és még sok más megtalálható a Mesebeli kertünkben, amely arra inspirált minket, hogy egyedi aranyporral és élénk növényekkel teli karácsonyi kollekciót hozzunk létre.A csokoládés narancsnak bájos illata a hagyományos és egzotikus illatok kombinációja. Élvezze minden nap a zuhany alatt a tusfürdőnk segítségével, amely gyengéden tisztítja a bőrt és hosszú ideig illatossá teszi.",
    },
    {
      id: 1,
      name: "Csokoládés narancs",
      image:
        "https://www.yves-rocher.hu/uimg/product_catalog_500x500/81937.jpg",
      size: "400 ml",
      price: 1490,
      category: "Hab- és tusfürdő",
      details:
        "Lenyűgöző állatok, élettel teli fák, amelyek végtelen meglepetéseket kínálnak, hóval borított szeder és narancs az olvadó csokoládéban. Mindez és még sok más megtalálható a Mesebeli kertünkben, amely arra inspirált minket, hogy egyedi aranyporral és élénk növényekkel teli karácsonyi kollekciót hozzunk létre.A csokoládés narancsnak bájos illata a hagyományos és egzotikus illatok kombinációja. Élvezze minden nap a zuhany alatt a tusfürdőnk segítségével, amely gyengéden tisztítja a bőrt és hosszú ideig illatossá teszi.",
    },
  ];

  const product = products.filter((x) => x.id === Number(id))[0];
  console.log(product);
  return { product };
};
export default Product;
