import scss from "./header.module.scss";
import { FaVk } from "react-icons/fa6";

import { AminLink } from "./link/link";
import LogoIcon from "../../icons/logo-icons";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={scss.cap}>
        <div className={scss.logo}>
          <Link to='/'>
            <LogoIcon color="#05334A" width={200} />
          </Link>
          <div>
            <p>ОМЦ</p>
            <p>Курганская область</p>
          </div>
        </div>
        <ul className={scss.menu}>
          <AminLink to="/" title="основное" />
          <AminLink to="/about" title="о нас" />
          <AminLink to="/commands" title="команда" />
        </ul>
        <div className={scss.icons}>
          <a target="_blank" href="https://vk.com/centrmayak45">
            <FaVk size={45} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
