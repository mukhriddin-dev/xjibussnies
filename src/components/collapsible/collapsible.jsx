import "./collapsible.css";
import eye from "../../assets/imgs/eye.svg";
import useCollapse from "react-collapsed";
import React, { useRef, useState } from "react";
import uzb from "../../assets/imgs/uzb.png";
// import close from "../../assets/imgs/close.svg";

import shartnoma from "../../assets/imgs/shartnoma.docx";

function stepClick(e) {
  const a = e.target.className.slice(5, 16);
  document.querySelector(`.${a}`).classList.toggle("active-step");
}
function validation(e) {
  const a = e.target.className.slice(12, 22);
  const value = e.target.value;
  value.length < 3
    ? (document.querySelector(
        `.${a}`
      ).style.cssText = `border:1px solid #AA0000`)
    : (document.querySelector(
        `.${a}`
      ).style.cssText = `border:1px solid #027C0E`);
}

function validationINN(e) {
  const a = e.target.className.slice(12, 22);
  const value = e.target.value;
  value.length < 9
    ? (document.querySelector(
        `.${a}`
      ).style.cssText = `border:1px solid #AA0000`)
    : (document.querySelector(
        `.${a}`
      ).style.cssText = `border:1px solid #027C0E`);
}

export function Collapsible1({
  setId,
  setFirstName,
  setLastName,
  setThirdName,
}) {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");

  function getValue() {
    setId(idInput.current.value);
    setFirstName(firstNameInput.current.value);
    setLastName(lastNameInput.current.value);
    setThirdName(thirdNameInput.current.value);
  }
  let firstNameInput = useRef(),
    lastNameInput = useRef(),
    thirdNameInput = useRef(),
    idInput = useRef();
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible1">
      <div {...getToggleProps()}>
        <p className="step first-step" onClick={stepClick}>
          {isExpanded ? "1 қадам" : "1 қадам"}{" "}
        </p>
      </div>
      <div {...getCollapseProps()}>
        <div className="content1">
          <label htmlFor="sponsor" className="step-label">
            Спонсор ИД
          </label>
          <div className="sponsor">
            <input
              ref={idInput}
              type="text"
              id="sponsor"
              className="step-inputs id"
              placeholder="ИД рақамни киритинг"
              onChange={validation}
              onKeyUp={(getValue)}
            />
            <p className="sponsor-name">
              {`${first_name ? first_name : ""}  ${last_name ? last_name : ""}`}
            </p>
          </div>
          <label htmlFor="ism" className="step-label">
            Исмингиз
          </label>
          <input
            ref={firstNameInput}
            type="text"
            id="ism"
            className="step-inputs firstName"
            placeholder="Исмингизни киритинг"
            onChange={validation}
            onKeyUp={getValue}
          />
          <label htmlFor="familya" className="step-label">
            Фамилянгиз
          </label>
          <input
            ref={lastNameInput}
            type="text"
            id="familya"
            className="step-inputs secondName"
            placeholder="Фамилянгизни киритинг"
            onChange={validation}
            onKeyUp={getValue}
          />
          <label htmlFor="otaism" className="step-label">
            Отангизнинг исми
          </label>
          <input
            ref={thirdNameInput}
            type="text"
            id="otaism"
            className="step-inputs thirdName"
            placeholder="Отангизнинг исмини киритинг"
            onChange={validation}
            onKeyUp={getValue}
          />
        </div>
      </div>
    </div>
  );
}
export function Collapsible2({
  setEmail,
  setPasportIIB,
  setPasportSeria,
  setInn,
}) {
  function validationEmail(e) {
    const a = e.target.className.slice(12, 22);
    const value = e.target.value;

    const result = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (result) {
      document.querySelector(
        `.${a}`
      ).style.cssText = `border:1px solid #027C0E`;
      document.querySelector(".validate-email").style.cssText = `opacity:0;`;
    } else {
      document.querySelector(
        `.${a}`
      ).style.cssText = `border:1px solid #AA0000`;
      document.querySelector(".validate-email").style.cssText = `opacity:1;`;
    }
  }
  let emailInput = useRef(),
    posportSeriaInput = useRef(),
    pasportIIBInput = useRef(),
    innInput = useRef();
  function getValue() {
    setEmail(emailInput.current.value);
    setPasportIIB(pasportIIBInput.current.value);
    setPasportSeria(posportSeriaInput.current.value);
    setInn(innInput.current.value);
  }
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="collapsible2">
      <div {...getToggleProps()}>
        <p className="step second-step" onClick={stepClick}>
          {isExpanded ? "2 қадам" : "2 қадам"}
        </p>
      </div>
      <div {...getCollapseProps()}>
        <div className="content2">
          <label htmlFor="email" className="step-label">
            Электрон адрес
          </label>
          <input
            ref={emailInput}
            type="text"
            id="email"
            className="step-inputs email"
            placeholder="Электрон адресингизни киритинг"
            onChange={validationEmail}
            onKeyUp={getValue}
          />
          <span className="validate-email">
            Эмаилни текшириб кўринг,хатолик бор !
          </span>
          <label htmlFor="passport" className="step-label">
            Паспорт серия ва ракам
          </label>
          <input
            ref={posportSeriaInput}
            type="text"
            id="passport"
            className="step-inputs seriya"
            placeholder="Паспорт серия ва ракамингизни киритинг"
            onChange={validation}
            onKeyUp={getValue}
          />
          <label htmlFor="iib" className="step-label">
            Паспорт ким томонидан берилган ..
          </label>
          <input
            ref={pasportIIBInput}
            type="text"
            id="iib"
            className="step-inputs iib"
            placeholder="Тошлент шахар, Юнусобот туман ИИБ"
            onChange={validation}
            onKeyUp={getValue}
          />
          <label htmlFor="inn" className="step-label">
            ИНН
          </label>
          <input
            ref={innInput}
            type="text"
            id="inn"
            className="step-inputs inn"
            placeholder="ИИНингизни киритинг"
            onChange={validationINN}
            onKeyUp={getValue}
          />
        </div>
      </div>
    </div>
  );
}

let checked = false;
export function Collabsible3({
  setPhone,
  setPassword,
  setConPassword,
  setAgree,
}) {
  function check() {
    checked ? (checked = false) : (checked = true);
    checked
      ? (document.querySelector(".custom-check").style.cssText = `opacity:1;`)
      : (document.querySelector(".custom-check").style.cssText = `opacity:0;`);
    checked
      ? (document.querySelector(
          ".from-submit"
        ).style.cssText = `background:#810202`)
      : (document.querySelector(
          ".from-submit"
        ).style.cssText = `background:#D3D3D3`);

    setAgree(checked);
  }
  let passwordInput = useRef(),
    repasswordInput = useRef(),
    phoneInput = useRef();
  function getValue() {
    setPhone(phoneInput.current.value);
  }

  function confirmPassword() {
    if (repasswordInput.current.value === passwordInput.current.value) {
      document.querySelector(".confirm-password").style.cssText = `opacity:0;`;
      setPassword(repasswordInput.current.value);
      setConPassword(repasswordInput.current.value);
    } else {
      document.querySelector(".confirm-password").style.cssText = `opacity:1;`;
    }
  }
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  let type = "password",
    retype = "password";

  function eyeClick() {
    type === "password" ? (type = "text") : (type = "password");
    const obj = document.querySelector(".password-input");
    obj.type = type;
  }
  function reeyeClick() {
    retype === "password" ? (retype = "text") : (retype = "password");
    const obj = document.querySelector(".repassword-input");
    obj.type = retype;
  }
  return (
    <div className="collapsible3">
      <div {...getToggleProps("")}>
        <p className="step third-step" onClick={stepClick}>
          {isExpanded ? "3 қадам" : "3 қадам"}
        </p>
      </div>
      <div {...getCollapseProps()}>
        <div className="content3">
          <label htmlFor="phone" className="step-label">
            Телефон рақамингиз
          </label>
          <div className="phone-box">
            <input
              ref={phoneInput}
              type="number"
              id="phone"
              className="step-inputs phone-input"
              placeholder="--- -- --"
              required
              onKeyUp={getValue}
            />
            <span className="phoneCode">+998</span>
            <div className="custom-select">
              <div className="custom-option">
                <img src={uzb} width={30} height={30} alt="img" />
              </div>
            </div>
          </div>
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
          </div>
          <div className="repassword">
            <img src={eye} className="eye" onClick={reeyeClick} alt="img" />
            <label htmlFor="re-password" className="step-label">
              Паролни такрорланг
            </label>
            <input
              ref={repasswordInput}
              type={retype}
              id="re-password"
              className="step-inputs repassword-input"
              placeholder=""
              onChange={confirmPassword}
            />
            <span className="confirm-password">Парол бир-бирига мос эмас</span>
          </div>
          <div className="custom-checkbox">
            <div className="custom-check"></div>
          </div>
          <a href={shartnoma}>
            <p htmlFor="" className=" custom-checked" onClick={check}>
              Шартнома шартларини қабул қиламан
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
