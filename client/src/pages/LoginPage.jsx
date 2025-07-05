import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, isAuthenticated, errors: signinErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    return (
        <div className="login-page">
            {signinErrors.map((error, i) => (
                <div key={i} className="login-error">
                    {error}
                </div>
            ))}

            <form onSubmit={onSubmit} className="login-form">
                <h2 className="login-title">Inicia sesión</h2>

                <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="login-input"
                />
                {errors.email && <p className="login-warning">Debes ingresar un correo</p>}

                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                    className="login-input"
                />
                {errors.password && <p className="login-warning">Debes ingresar una contraseña</p>}

                <button type="submit" className="login-button">Ingresar</button>
            </form>

            <p className="login-link-text">
                ¿No tienes una cuenta? <Link to="/register" className="login-link">Regístrate</Link>
            </p>
        </div>
    );
}

export default LoginPage;
