import { HomePart } from "../HomePart/HomePart"
import "./AboutUs.css"
export const AboutUs = ({ color = "#F5F5F5" }) => {
  return (
    <HomePart backgroundColor={color}>
      <div className="about-us">
        <div className="about-us-block">
          <div className="about-us-block-title">О КОМПАНИИ</div>
          <div className="about-us-block-text">ООО “Лубрикор” с 2022 года занимается разработкой отечественных аналогов импортных масел специального назначения. </div>
          <div className="about-us-block-text">В 2024 году было запущено собственное производство и начат выпуск продукции в промышленных масштабах.</div>
          <div className="about-us-block-text">Наша компания сосредоточена на создании высококачественных смазочных материалов, отвечающих современным требованиям и стандартам</div>
        </div>
        <div className="about-us-block img-block">
          <img src="/oilBarell.jpg" alt="aboutUs" />
        </div>
        <div className="about-us-block img-block">
        <img src="/oilTube.webp" alt="aboutUs" />

        </div>
        <div className="about-us-block">
          <div className="about-us-block-title second-title">ИНДИВИДУАЛЬНЫЙ </div>
          <div className="about-us-block-title second-title">ПОДХОД</div>
          <div className="about-us-block-text lubricroe-text">
            <span className="about-us-block-text-bold">Lubricore</span> - динамично развивающийся бренд, основополагающим принципом работы которого является клиентоориентированность.
            Мы стремимся к созданию прочных, доверительных и долгосрочных отношений с нашими партнёрами.</div>
          <div className="about-us-block-text">Ввиду уникальной специфики нашего направления, мы стремимся предоставлять решения, которые в полной мере соответствуют ожиданиям наших клиентов, а также превосходят их, обеспечивая переход на отечественные смазочные материалы.</div>
        </div>
      </div>
    </HomePart>
  )
}