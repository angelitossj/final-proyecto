import { React, useState } from "react";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";

import img from "../assets/logo2.png";
import swal from "sweetalert";

const Pedidos = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      id: 1,
      name: "Coca Cola 3ltrs",
      price: 200,
      url: "https://supertiendascomunal.com/3244-thickbox_default/coca-cola-3-litros.jpg",
      cart: false,
      quantity: 1,
    },
    {
      id: 2,
      name: "Hamburguesa Completa",
      price: 150,
      url: "https://betos.com.ar/wp-content/uploads/2019/12/hambur-doble.png",
      cart: false,
      quantity: 1,
    },
    {
      id: 3,
      name: "Cerveza Quilmes",
      price: 180,
      url: "https://lh3.googleusercontent.com/proxy/elAJKOU2U13LOWz3OEXDVhmkNM6QBFpInofeBcvetvv-J1KoSIRZz1RMOqdZq8KuawuYtPFL46reLICECTpBj2B5x9mHCIPp016Fpwlut_pdOqjKhD8VaYXPO9k",
      cart: false,
      quantity: 1,
    },
    {
      id: 4,
      name: "Pizza Napolitana",
      price: 280,
      url: "https://betos.com.ar/wp-content/uploads/2019/08/pizza-napo.png",
      cart: false,
      quantity: 1,
    },
    {
      id: 5,
      name: "Fanta 3ltrs",
      price: 140,
      url: "https://i1.wp.com/www.casagamovi.cl/wp-content/uploads/2020/07/fanta-3-litros.png?fit=1000%2C1000&ssl=1",
      cart: false,
      quantity: 1,
    },
    {
      id: 6,
      name: "Empanada de Carne docena",
      price: 260,
      url: "https://mambofoods.com/wp-content/uploads/2020/01/Empanada-arg-beef-1000-877x992.png",
      cart: false,
      quantity: 1,
    },
    {
      id: 7,
      name: "Sandwich de Miga docena",
      price: 200,
      url: "https://costumbres.com.ar/wp-content/uploads/2017/06/sandwich-miga.png",
      cart: false,
      quantity: 1,
    },
    {
      id: 8,
      name: "Sandwich de Milanesa",
      price: 180,
      url: "https://juliana-delivery.com.ar/uploads/products/detail_products_7576.png",
      cart: false,
      quantity: 1,
    },
    {
      id: 9,
      name: "Plato de ñouis",
      price: 150,
      url: "https://viandasrisa.com.ar/wp-content/uploads/noquis-rellenos-con-fileto.png",
      cart: false,
      quantity: 1,
    },
    {
      id: 10,
      name: "Sprite 3ltrs",
      price: 200,
      url: "https://images.jumpseller.com/store/mgdrinks/6511848/sprite_pet_3.png?1626883544",
      cart: false,
      quantity: 1,
    },
    {
      id: 11,
      name: "Coca,Sprite,Fanta 330ml cada uno",
      price: 80,
      url: "https://i.pinimg.com/originals/99/a6/1c/99a61c4ff202d10d53a0e19404700008.png",
      cart: false,
      quantity: 1,
    },
    {
      id: 12,
      name: "Helado 3ltrs",
      price: 400,
      url: "https://www.scdelsur.com.ar/img/upload/2019/07/producto/miniatura_5d370739e669d.png",
      cart: false,
      quantity: 1,
    },
  ]);
  function addtocart(item) {
    let cart2 = [...cart];
    cart2.push({ ...item });
    products.map((i) => {
      if (i.id === item.id) {
        i.cart = true;
      }
    });
    setCart(cart2);
  }
  function removetocart(item) {
    let cart2 = cart.filter((i) => i.id !== item.id);
    products.map((i) => {
      if (i.id === item.id) {
        i.cart = false;
      }
    });
    setCart(cart2);
  }
  function increase(item) {
    let x = cart.map((i) => {
      if (item.id === i.id) {
        console.log("hola");
        i.quantity += 1;
      }
      return i;
    });
    setCart(x);
  }
  function decrease(item) {
    let x = cart.map((i) => {
      if (item.id === i.id && i.quantity > 1) {
        console.log("hola");
        i.quantity -= 1;
      }
      return i;
    });
    setCart(x);
  }
  function total() {
    let x = 0;
    cart.map((i) => {
      x += i.price * i.quantity;
    });
    return x;
  }
  const pagoCompletado = () => {
    swal({
      title: "Pago Completado",
      text: "Su pedido lo espera en el Restaurante",
      icon: "success",
      button: "Genial!",
    });
  };
  let [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  const processPayment = () => {
    console.log("number => ", state.number);
    console.log("name => ", state.name);
    console.log("expiry => ", state.expiry);
    console.log("cvc => ", state.cvc);
    console.log(JSON.stringify(state));
    pagoCompletado();
    document.getElementById("formTarjeta").reset();
  };



  return (
    <div>
      {/* Modales  */}
      <div
        className="modal fade"
        id="modalTarjeta"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel">
                Tarjeta
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
            
              <form id="formTarjeta">
                <div className="form-group">
                  <label htmlFor="number">Número de la tarjeta</label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    maxLength="16"
                    className="form-control"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    maxLength="30"
                    className="form-control"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="expiry">Fecha de expiración</label>
                    <input
                      type="text"
                      name="expiry"
                      id="expiry"
                      maxLength="4"
                      className="form-control"
                      onChange={handleInputChange}
                      onFocus={handleFocusChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      type="password"
                      name="cvc"
                      id="cvc"
                      maxLength="4"
                      className="form-control"
                      onChange={handleInputChange}
                      onFocus={handleFocusChange}
                    />
                  </div>
                </div>
                {/* <button onClick={processPayment} type="button" className="btn btn-success btn-block btn-lg">Pagar</button> */}
              </form>
            </div>
            <div className="modal-footer">
              <div className="col text-center">
                <button
                  type="button"
                  onClick={(pagoCompletado, processPayment)}
                  className="btn btn-danger btn-block btn-lg"
                >
                  Pagar
                </button>
                <img alt="" src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalPedidos"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="col text-center">
                <h1 className="modal-title" id="exampleModalLabel">
                  Carrito
                </h1>
                <h2>TOTAL:$ {total()}</h2>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer">
              <div className="modal-body p-5 pt-0">
                <form className="">
                  <div className="form-floating mb-3">
                    <div className="col text-center">
                      <div className="card" style={{ width: "24rem" }}>
                        {/* <img src={tarjeta} className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                          <h5 className="card-title">Tarjeta</h5>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#modalTarjeta"
                          >
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col text-center">
                      <div className="card " style={{ width: "24rem" }}>
                        {/* <img src={efectivo} className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                          <h5 className="card-title">Efectivo</h5>
                          <button
                            type="button"
                            onClick={pagoCompletado}
                            className="cerrarsesion btn btn-danger"
                          >
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="col text-center">
                  <img alt="" src={img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar2 />
      <div className="container mt-2">
        <div className="col text-center">
          <h1>Realizar Pedidos</h1>
        </div>
        <br />
        <div className="row justify-content-center">
          {products.map((item) => (
            <div className="col-3" key={item.id}>
              <div className="card">
                <img alt="" src={item.url} className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title">
                    {item.name} - $ {item.price}
                  </h6>
                  {item.cart === false && (
                    <button
                      className="btn btn-primary"
                      onClick={() => addtocart(item)}
                    >
                      Add to cart
                    </button>
                  )}
                  {item.cart === true && (
                    <button
                      className="btn btn-success"
                      onClick={() => addtocart(item)}
                    >
                      Added
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-3">
          <table className="table  text-center">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((i, index) => (
                <tr key={i.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img alt="" src={i.url} style={{ width: "4rem" }} />
                  </th>
                  <td>{i.name}</td>
                  <td>{i.price}</td>
                  <td>
                    <button
                      onClick={() => decrease(i)}
                      className="btn btn-danger btn-sm"
                    >
                      -
                    </button>
                    {i.quantity}
                    <button
                      onClick={() => increase(i)}
                      className="btn btn-primary btn-sm"
                      size="sm"
                    >
                      +
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={() => removetocart(i)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col text-center">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#modalPedidos"
            >
              Completar Pago
            </button>
            <br />
          </div>
          <br />
        </div>
        <br />
      </div>
      <br />
      <Footer />
    </div>
  );
};
export default Pedidos;
