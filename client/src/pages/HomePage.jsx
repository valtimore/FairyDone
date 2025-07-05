import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import angelHeart from "../assets/angel-heart.png";
import mePcAnimate from "../assets/MePCAnimate.gif";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="home-left">
                <div className="home-card">
                    <img src={angelHeart} alt="Pixel heart with wings" className="home-image" />
                    <h1 className="home-title">Bienvenida a tu espacio personal ✨</h1>
                    <p className="home-subtitle">
                        Organiza tus tareas del día
                    </p>
                    <button
                        className="login-button"
                        onClick={() => navigate("/login")}
                    >
                        Iniciar sesión
                    </button>
                </div>
            </div>
            <div className="home-right">
                <img src={mePcAnimate} alt="Chica programando en pixel art" className="home-gif" />
            </div>
        </div>
    );
}

export default HomePage;
