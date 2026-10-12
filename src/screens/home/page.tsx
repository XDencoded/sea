import { Calendar } from "../../components/elements/calendar/calendar";
import { Info } from "../../components/elements/header/info/info";
import { Layout } from "../layout";
import scss from "./home.module.scss";
import { motion } from "motion/react";

export default function Home() {
  return (
    <Layout>
      <Info />
      <motion.div
        className={scss.home}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          id={scss.fon}
          src="items/home.svg"
          alt="фон"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        <motion.div
          className={scss.title}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            ЗАЖЕЧЬ
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ТЫСЯЧИ
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            ОГНЕЙ
          </motion.p>
        </motion.div>
        
        <motion.div
          className={scss.menu}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src="/mayak.webp"
            alt="Маяк"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
          <div className={scss.btns}>
            <motion.a
              className={scss.btn}
              href="#calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              КАЛЕНДАРЬ
            </motion.a>
            <motion.button
              className={scss.btn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              СОБЫТИЯ
            </motion.button>
            <motion.button
              className={scss.btn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              НАПРАВЛЕНИЯ
            </motion.button>
            <motion.button
              className={scss.btn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              ССЫЛКИ
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div
        id="calendar"
        className="calendar"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        <Calendar />
      </motion.div>
    </Layout>
  );
}
