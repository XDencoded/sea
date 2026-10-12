import { Layout } from '../layout'
import scss from './about.module.scss'

export default function About() {
  return (
    <Layout>
      <main>
        <div className={scss.home}>
          <div className={scss.content}>
            <h1>МАЯК - ЭТО</h1>
            <p>
              Твой ориентир,который направляет в море возможностей, культурных
              событий и реализованных мечт
            </p>
          </div>
          <img src="/items/1.svg" />
        </div>
        <div className={scss.about}>
          <div className={scss.content}>
            <h1>О НАС</h1>
            <p>
              Для нас важно, чтобы каждое организованное нами событие и проект
              были наполнены смыслами, позволяли участникам рефлексировать,
              анализировать себя, искать пути дальнейшего развития.
            </p>
            <p>Примеры:</p>
            <p>
              Принимая участие в событиях ОМЦ ты можешь пройти образовательную
              программу, найти единомышленников, детально продумать проект,
              наметить вектор его развития, прокачать свои гибкие навыки, а
              после понять, как их совершенствование поможет тебе в личном и
              профессиональном развитии.
            </p>
          </div>
          <div className={scss.photo}>
            <img src="/about-1.png" alt="" />
            <img src="/about-2.png" alt="" />
            <img src="/about-3.png" alt="" />
          </div>
        </div>

        <div className={scss.purpose}>
          <div className={scss.content}>
            <h1>ЦЕЛЬ</h1>
            <p>
              Наша цель - сформировать сообщество социально-активной молодёжи,
              которое реагирует на проблемы, и ищет пути их решения через
              проектирование, открытое для инициатив и объединений.
            </p>
          </div>
          <img src="/purpose.png" />
        </div>

        <div className={scss.direction}>
          <div className={scss.content}>
            <h1>НАПРАВЛЕНИЯ РАБОТЫ</h1>
            <ul>
              <li>Развитие молодёжи </li>
              <li>Развитие надпрофессиональных компетенций</li>
              <li>Развитие действующих сообществ и формирование новых</li>
              <li>Развитие добровольчества</li>
              <li>Развитие патриотической деятельности</li>
              <li>Развитие медиапространств</li>
            </ul>
          </div>
          <img src="/items/2.svg" />
        </div>

        <div className={scss.documments}>
          <div className={scss.content}>
            <h1>ДОКУМЕНТЫ:</h1>
            <ul>
              <li><a href="">Устав</a></li>
              <li><a href="">Приказы</a></li>
              <li><a href="">Методические рекомендации</a></li>
              <li><a href="">Прочие документы</a></li>
              <li><a href="">Положение о конкурсах и мероприятиях</a></li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}