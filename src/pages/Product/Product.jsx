import { useState, useEffect } from "react";

import useAuth from "../../hooks/UseAuth";

import "./Product.css";
import product1 from "../../assets/imgs/product_1.png";
import product2 from "../../assets/imgs/product_2.png";

// images
import StarGold from "../../assets/imgs/star-gold.png";
import Star from "../../assets/imgs/star.png";
import axios from "axios";

const Product = () => {
  const stars = [1, 2, 3, 4, 5];
  const [productId, setProductId] = useState("1");
  function Submit(e) {
    setProductId(e.target.id);
    formSubmit();
  }

  const formSubmit = () => {
    document.querySelector(".formPayment").submit();
  };

  const id = localStorage.getItem("id");
  const idLength = 7 - id.toString().length;
  const idFill = "0".repeat(idLength);
  const [userId] = useState(idFill + id);

  return (
    <div className="product">
      <section className="product__top">
        <div className="container">
          <h1 className="title">Онлайн магазин</h1>
        </div>
      </section>

      <section className="product__bottom">
        <div className="container">
          <h2 className="product__title">Продуктларимиз</h2>

          <ul className="card">
            <li className="list" id="1">
              <div className="list__top">
                <img
                  className="list__img"
                  src={product1}
                  alt="product"
                  width={412}
                  height={376}
                />
              </div>

              <div className="list__middle">
                <h4 className="list__middle__title">Ҳажар Асwад</h4>
                <p className="list__middle__text">
                  Ёқимли ёнгоқ ифори ва шафтолилик
                </p>
                <ul className="list__card">
                  {stars.map((star, i) =>
                    star <= 4 ? (
                      <li key={i}>
                        <img src={StarGold} alt="star gold" />
                      </li>
                    ) : (
                      <li key={i}>
                        <img src={Star} alt="star" />
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="list__bottom">
                <form
                  className="formPayment"
                  method="POST"
                  action="https://checkout.paycom.uz"
                >
                  <input
                    type="hidden"
                    name="merchant"
                    value="6218fd58b7785447a0894dc3"
                  />
                  <input type="hidden" name="amount" value="103113570" />
                  <input type="hidden" name="account[user_id]" value={userId} />
                  <input type="hidden" name="account[perfume_id]" value="1" />
                  <button className="bottom__link" id="1" type="submit">
                    Сотиб олиш
                  </button>
                </form>
                <p className="bottom__sum">$ 95</p>
              </div>
            </li>

            <li className="list" id="2">
              <div className="list__top">
                <img
                  className="list__img"
                  src={product2}
                  alt="product"
                  width={412}
                  height={376}
                />
              </div>

              <div className="list__middle">
                <h4 className="list__middle__title">Ҳажар Абяд</h4>
                <p className="list__middle__text">
                  Ёқимли ёнгоқ ифори ва шафтолилик
                </p>
                <ul className="list__card">
                  {stars.map((star, i) =>
                    star <= 4 ? (
                      <li key={i}>
                        <img src={StarGold} alt="star gold" />
                      </li>
                    ) : (
                      <li key={i}>
                        <img src={Star} alt="star" />
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="list__bottom">
                <form
                  className="formPayment"
                  method="POST"
                  action="https://checkout.paycom.uz"
                >
                  <input
                    type="hidden"
                    name="merchant"
                    value="6218fd58b7785447a0894dc3"
                  />
                  <input type="hidden" name="amount" value={11200*98,5} />
                  <input type="hidden" name="account[user_id]" value={userId} />
                  <input type="hidden" name="account[perfume_id]" value="2" />
                  <button className="bottom__link" id="2" type="submit">
                    Сотиб олиш
                  </button>
                </form>
                <p className="bottom__sum">$ 95</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Product;
