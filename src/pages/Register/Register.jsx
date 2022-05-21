import "./Register.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import { toast } from "react-toastify";
import {
  Collabsible3,
  Collapsible1,
  Collapsible2,
} from "../../components/collapsible/collapsible";

import { Perfume } from "../../components/Perfume/perfume";
import { useHistory } from "react-router-dom";

const Register = () => {
  let [setToken] = useAuth(true);
  const history = useHistory();
  let [id, setId] = useState(""),
    [firstName, setFirstName] = useState(""),
    [lastName, setLastName] = useState(""),
    [thirdName, setThirdName] = useState(""),
    [email, setEmail] = useState(""),
    [pasportIIB, setPasportIIB] = useState(""),
    [pasportSeria, setPasportSeria] = useState(""),
    [inn, setInn] = useState(""),
    [phone, setPhone] = useState(""),
    [password, setPassword] = useState(""),
    [conPassword, setConPassword] = useState(""),
    [agree, setAgree] = useState(false);
  function submitForm(e) {
    e.preventDefault();
    if (!agree)
      return toast.warning("Шартнома шартларига розилик билдиринг !");
    if (
      id.length <= 2 ||
      firstName.length <= 2 ||
      lastName.length <= 2 ||
      thirdName.length <= 2 ||
      !email ||
      pasportIIB.length <= 2 ||
      pasportSeria.length <= 2 ||
      inn.length <= 2 ||
      !phone ||
      !password
    )
      return toast.error("Малумотларни тулик киритинг");

    const data = {
      sponsorId:id,
      firstName,
      lastName,
      thirdName,
      email,
      passportSeries:pasportSeria ,
      passportIssued:pasportIIB,
      inn,
      phone,
      password,
      confirmPassword:conPassword,
      visaNumber:123456789234,
      visaValidity:12345,
      visaCode:123456
    };
    (async () => {
      const DATA = await fetch(
        `https://cabinet.xj-business.com/api/register?sponsor_id=${data.sponsorId}&name=${data.firstName}&surname=${data.lastName}&patronymic=${data.thirdName}&phone=${data.phone}&email=${data.email}&whom_by=${data.passportIssued}a&password=${data.password}&password_confirmation=${data.confirmPassword}&passport_number=${data.passportSeries}&stir=${data.inn}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await DATA.json();
      console.log(response);
      if (!response.token) {
        toast.error(response.message);
        return setToken(false);
      }
      toast.success("Муваффакияели руйхатдан утдингиз !");

      setToken(response.token);
      history.push("/login");
    })();
  }
  return (
    <div>
      <div className="register-hero">
        <div className="container">
          <h1 className="hero-title">Регистратсия</h1>
        </div>
      </div>
      <div className="register-form">
        <div className="container">
          <form>
            <h2 className="form-title">Малумотларни киритинг</h2>
            <Collapsible1
              setId={setId}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setThirdName={setThirdName}
            />
            <Collapsible2
              setEmail={setEmail}
              setPasportIIB={setPasportIIB}
              setPasportSeria={setPasportSeria}
              setInn={setInn}
            />
            <Collabsible3
              setPhone={setPhone}
              setPassword={setPassword}
              setConPassword={setConPassword}
              setAgree={setAgree}
            />
            <button className="from-submit" type="submit" onClick={submitForm}>
              Регистратсиядан утиш
            </button>
          </form>
          <Perfume />
        </div>
      </div>
      <p className="choice">
        Агар руйхатдан утган булсангиз{" "}
        <Link to="/login" className="link-login">
          Логин
        </Link>
      </p>
    </div>
  );
};

export default Register;
