import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const products = [
    {
      id: 0,
      name: "Ínyenc szeder",
      image:
        "https://www.yves-rocher.hu/uimg/product_catalog_500x500/77701.jpg",
      size: "400 ml",
      price: 1490,
      category: "Hab- és tusfürdő",
      details: "",
    },
    {
      id: 1,
      name: "Csokoládés narancs",
      image:
        "https://www.yves-rocher.hu/uimg/product_catalog_500x500/81937.jpg",
      size: "400 ml",
      price: 1490,
      category: "Hab- és tusfürdő",
      details: "",
    },
  ];

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="flex items-center justify-center min-h-screen space-x-10 bg-gray-100 cursor-pointer">
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <p className="font-bold text-xl">Válaszd ki a terméket</p>
        </motion.div>
        {products.map((x) => {
          return (
            <Link key={x.name} href="/products/[id]" as={`/products/${x.id}`}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="shadow-sm h-72 w-80 flex flex-col p-5 justify-between  items-center bg-white"
              >
                <p className="">{x.category}</p>
                <motion.img
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  key={x.image}
                  src={x.image}
                  className="w-40"
                />
                <div className="w-full flex items-center justify-between">
                  <p className="font-bold">{x.name}</p>
                  <p>{x.price} Ft</p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
