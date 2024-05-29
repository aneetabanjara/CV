import "./Heroimgstyle.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom"

export const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg"
                />
            </div>
            <div className="content">
                <p>Hi,I am Anita Banjara</p>
                <h1>React Developer</h1>
                <Link to="/project"
                    className="btn">
                    Projects
                </Link>
                <Link to="/contact"
                    className="btn-light">
                    Contact
                </Link>

            </div>
        </div>
    )
}
