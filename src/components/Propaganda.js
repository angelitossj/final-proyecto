import React from "react";
// import img from '../assets/deli.jpg';
import img1 from "../assets/fork.png";
import img2 from "../assets/express.png";
import img3 from "../assets/fast.png";
import logito from "../assets/logito.png";
import imgcomi from "../assets/comi1.jpg";
import imgcomi2 from "../assets/comi2.jpg";
import imgcomi3 from "../assets/comi3.jpg";
import imgPubli from "../assets/deli.jpg";
import bebi from "../assets/bebi1.png";
import bebi2 from "../assets/bebi2.jpg";
import bebi3 from "../assets/bebi3.png";

const Propaganda = () => {
  return (
    <div>
      {" "}
      {/* SECCION 1 */}
      <section>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-ligth me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <h2 className="textofer display-5">
              ¡Solo por hoy 50% de descuento!
            </h2>
            <img className="imgPubli" width="900px" src={imgPubli} alt="" />
          </div>
        </div>
      </section>
      {/* SECCION 2 */}
      {/* SECCION 3 */}
      <section data-aos="fade-up" className="py-5 text-center container">
        <div className="row py-lg-3">
          <div className="linea-separadora"></div>
          <h1 className="fw-light">Nuestros increíbles servicios</h1>
        </div>
      </section>
      <div className="album py-5 bg-white">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div data-aos="zoom-in-down" className="card shadow-sm">
                <img
                  src={img1}
                  className="imgcard bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text">
                    Ofrecemos a nuestros clientes servicios de excelente calidad
                    desde hace muchos años, con la mejor y deliciosa comida de
                    la ciudad.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div data-aos="zoom-in-down" className="card shadow-sm">
                <img
                  src={img2}
                  className="imgcard bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text">
                    Ofrecemos a nuestros clientes servicios de excelente calidad
                    desde hace muchos años, con la mejor y deliciosa comida de
                    la ciudad.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div data-aos="zoom-in-down" className="card shadow-sm">
                <img
                  src={img3}
                  alt=""
                  className="imgcard bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />
                <div className="card-body">
                  <p className="card-text">
                    Ofrecemos a nuestros clientes servicios de excelente calidad
                    desde hace muchos años, con la mejor y deliciosa comida de
                    la ciudad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECCION 4 */}
      <section>
        <div className="container text-center py-5" id="custom-cards">
          <div className="linea-separadora"></div>
          <h3>Menu Especial del Dia</h3>

          <div className="cardMenu row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="card card-cover overflow-hidden text-white bg-white rounded-5 shadow-lg"
              >
                <img className="imgMenuSpecial" src={imgcomi3} alt="" />
                <div className="d-flex flex-column  p-5 pb-3 text-dark text-shadow-1">
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logito}
                        alt="Bootstrap"
                        width="40"
                        height="40"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#geo-fill" />
                      </svg>
                      <small>Papas Fritas</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cardMenu col">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="card card-cover overflow-hidden text-white bg-white rounded-5 shadow-lg"
              >
                <img className="imgMenuSpecial" src={imgcomi} alt="" />
                <div className="d-flex flex-column p-5 pb-3 text-dark text-shadow-1">
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logito}
                        alt="Bootstrap"
                        width="40"
                        height="40"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#geo-fill" />
                      </svg>
                      <p>Hamburguesa</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cardMenu col">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className=" card card-cover overflow-hidden text-white bg-white rounded-5 shadow-lg"
              >
                <img className="imgMenuSpecial" src={imgcomi2} alt="" />
                <div className="d-flex flex-column p-5 pb-3 text-dark text-shadow-1">
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logito}
                        alt="Bootstrap"
                        width="40"
                        height="40"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#geo-fill" />
                      </svg>
                      <small>Taquitos</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cardMenu row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="card card-cover overflow-hidden text-white bg-white rounded-5 shadow-lg"
              >
                <img className="imgMenuSpecial" src={bebi3} alt="" />
                <div className="d-flex flex-column  p-5 pb-3 text-dark text-shadow-1">
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logito}
                        alt="Bootstrap"
                        width="40"
                        height="40"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#geo-fill" />
                      </svg>
                      <small>Granizado de Frutas</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cardMenu col">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="card card-cover overflow-hidden text-white bg-white rounded-5 shadow-lg"
              >
                <img className="imgMenuSpecial" src={bebi2} alt="" />
                <div className="d-flex flex-column p-5 pb-3 text-dark text-shadow-1">
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logito}
                        alt="Bootstrap"
                        width="40"
                        height="40"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#geo-fill" />
                      </svg>
                      <p>Limonada</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cardMenu col">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className=" card card-cover overflow-hidden text-white bg-white rounded-5 shadow-lg"
              >
                <img className="imgMenuSpecial" src={bebi} alt="" />
                <div className="d-flex flex-column p-5 pb-3 text-dark text-shadow-1">
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logito}
                        alt="Bootstrap"
                        width="40"
                        height="40"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#geo-fill" />
                      </svg>
                      <small>Gin-tonic</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Propaganda;
