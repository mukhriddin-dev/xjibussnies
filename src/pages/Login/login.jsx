import "./login.css";
import { Link } from "react-router-dom";
import { Perfume } from "../../components/Perfume/perfume";
import eye from "../../assets/imgs/eye.svg";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import { toast } from "react-toastify";
import axios from "axios";

export function Login() {
  const [setToken] = useAuth(true);
  const history = useHistory();
  let emailInput = useRef(),
    passwordInput = useRef();
  let type = "password";
  function eyeClick() {
    type === "password" ? (type = "text") : (type = "password");
    const obj = document.querySelector(".password-input");
    obj.type = type;
  }
  async function submitLogin(e) {
    try {
      e.preventDefault();
      const data = {
        email: emailInput.current.value,
        password: passwordInput.current.value,
      };
      const res = await axios.post(
        `https://cabinet.xj-business.com/api/login?email=${data.email}&password=${data.password}`
      )
      toast.success("Муваффакиятли кириш!");
      setToken(res.data.token);
      localStorage.setItem('id', res.data.model.id);
      history.push("/product");
      window.location.reload()
    } catch (err) {
      toast.error('Эмаил ёки парол хато, Илтимос кайта уриниб куринг')
    }
  }
  return (
    <>
      <div className="register-hero">
        <div className="container">
          <h1 className="hero-title">Логин</h1>
        </div>
      </div>
      <div className="register-form">
        <div className="container">
          <form onSubmit={submitLogin}>
            <h2 className="form-title">Логин</h2>
            <label htmlFor="email" className="step-label">
              Эмаил
            </label>
            <input
              ref={emailInput}
              type="text"
              id="email"
              className="step-inputs"
              placeholder="Эмаилингизни киритинг"
            />
            <div className="password">
              <img src={eye} className="eye" onClick={eyeClick} alt="img" />
              <label htmlFor="password" className="step-label ">
                Парол{" "}
              </label>
              <input
                ref={passwordInput}
                type={type}
                id="password"
                className="step-inputs password-input"
                placeholder="Паролни киритинг"
              />
              <p className=" support ">
                Паролни <Link to="/register ">унитдингизми ?</Link>
              </p>
            </div>
            <button className="from-submit login-submit">Кириш</button>
          </form>
          <Perfume />
        </div>
        <p className=" support to-register">
          Аккаунтингиз мавжуд эмасми? <Link to="/register">Регистратсия</Link>
        </p>
      </div>
    </>
  );
}
