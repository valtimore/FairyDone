import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./LoginPage.css";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async(values) => {
        signup(values);
    });

    return (
        <div className="login-page">
            {registerErrors.map((error, i) => (
                <div key={i} className="login-error">
                    {error}
                </div>
            ))}

            <form onSubmit={onSubmit} className="login-form">
                <h2 className="login-title">Crea tu cuenta</h2>

                <input
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="Username"
                    className="login-input"
                />
                {errors.username && (<p className="login-warning">Debes ingresar un usuario</p>)}

                <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="login-input"
                />
                {errors.email && (<p className="login-warning">Debes ingresar un correo</p>)}

                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                    className="login-input"
                />
                {errors.password && (<p className="login-warning">Debes ingresar una contraseña</p>)}

                <button type="submit" className="login-button">Registrar</button>
            </form>

            <p className="login-link-text">
                ¿Ya tienes una cuenta? <Link to="/login" className="login-link">Inicia sesión</Link>
            </p>
        </div>
    );
}

export default RegisterPage;
