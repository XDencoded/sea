import { Calendar } from "../../components/elements/calendar/calendar";

import { Info } from "../../components/elements/header/info/info";
import { Layout } from "../layout";
import scss from "./home.module.scss";

export default function Home() {
  return (
    <Layout>
      <Info />
      <div className={scss.home}>
        <img id={scss.fon} src="items/home.svg" alt="фото" />
        <div className={scss.title}>
          <p>ЗАЖЕЧЬ</p>
          <p>ТЫСЯЧИ</p>
          <p>ОГНЕЙ</p>
        </div>
        <div className={scss.menu}>
          <img src="/mayak.webp" alt="Маяк" />
          <div className={scss.btns}>
            <a className={scss.btn} href="#calendar">
              КАЛЕНДАРЬ
            </a>
            <button className={scss.btn}>СОБЫТИЯ</button>
            <button className={scss.btn}>НАПРАВЛЕНИЯ</button>
            <button className={scss.btn}>ССЫЛКИ</button>
          </div>
        </div>
      </div>
      <div id="calendar" className="calendar">
        <Calendar />
      </div>
    </Layout>
  );
}
