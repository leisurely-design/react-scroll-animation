import "./App.css";
import { motion } from "framer-motion";
import Wallet from "../src/assets/Wallet.svg";
import Partners from "../src/assets/Partners.svg";
import Promo from "../src/assets/Promo.svg";

function App() {
  return (
    <div>
      <div className="section"></div>
      <div className="container">
        <div>
          <img src={Wallet} alt="" />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="title"
          >
            Secure Payments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="desc"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro at
            ea in tenetur magni! Necessitatibus natus eligendi doloribus laborum
            dolorum.
          </motion.p>
        </div>
        <div>
          <img src={Partners} alt="" />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="title"
          >
            Trusted Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="desc"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            odio, voluptatum dolorum ad ratione facere tenetur. Vel numquam
            dolorem est?
          </motion.p>
        </div>
        <div>
          <img src={Promo} alt="" />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="title"
          >
            Exclusive Offers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="desc"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ad ratione voluptates magnam impedit asperiores voluptatum optio,
            rem deserunt sequi?
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default App;
