import { HomePart } from "../HomePart/HomePart";
import "./Advantages.css";
import "../../../helpers/Fonts.css";

export const Advantages = () => {
  return (
    <HomePart
      //  maxWidth={"1300px"}
    >
      <div className="advantages">
        <div className="advantages-title jost-font-title">
          НАШИ ПРЕИМУЩЕСТВА
        </div>
        <div className="advantages-grid">
          <div className="advantages-block advantage-1">
            <div className="jost-font-title advantages-block-title">
              КОНТРОЛЬ КАЧЕСТВА
            </div>
            <div className="advantages-block-title-logo-1">PNG</div>
            <div className="advantages-block-text">
              Мы уделяем особое внимание качеству выпускаемой продукции и
              реализуем{" "}
              <span className="advantages-important-text">
                строгую систему контроля
              </span>{" "}
              на всех этапах производства, начиная от входного контроля базового
              сырья и заканчивая выходным контролем готовой продукции.
            </div>
            <div className="advantages-block-text">
              Каждый этап производства осуществляется в строгом соответствии с
              установленными техническими условиями и стандартами. К каждой
              отгружаемой партии прилагается паспорт качества, содержащий
              подробные данные о результатах испытаний. Это обеспечивает полную
              прозрачность и уверенность в качестве продукции.
            </div>
          </div>
          <div className="advantages-block img-block">
            <img src="/oilBarell.jpg" alt="aboutUs" />
          </div>
          <div className="advantages-block img-block">
            <img src="/oilTube.webp" alt="aboutUs" />
          </div>
          <div className="advantages-block advantage-2">
            <div className="advantages-block-title client-control-title">
              КЛИЕНТООРИЕНТИРОВАННОСТЬ
            </div>
            <div className="advantages-block-title-logo-2">PNG</div>
            <div className="advantages-block-text lubricroe-text">
              <span className="advantages-block-text-bold">Lubricore</span> -
              динамично развивающийся бренд, основополагающим принципом работы
              которого является клиентоориентированность.
            </div>
            <div className="advantages-block-text">
              Мы стремимся к созданию прочных, доверительных и долгосрочных
              отношений с нашими партнёрами.
            </div>
            <div className="advantages-block-text">
              Ввиду уникальной специфики нашего направления мы стремимся
              предоставлять решения, которые в полной мере соответствуют
              ожиданиям наших клиентов, а также превосходят их, обеспечивая
              переход на отечественные смазочные материалы.
            </div>
          </div>
        </div>
      </div>
    </HomePart>
  );
};
