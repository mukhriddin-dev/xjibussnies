import "./perfume.css"
import perfume from "../../assets/imgs/register.png";

export function Perfume(){
    return(
        <div className="perfume">
        <img src={perfume} width={491} height={609} alt="img" />
        <p className="perfume-text">Сотиб олмоқ</p>
        <h3 className="perfume-title">Хозироқ сотиб олинг</h3>
      </div>
    )
}