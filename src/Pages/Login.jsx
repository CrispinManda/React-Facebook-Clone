import { Link } from 'react-router-dom';
import './Login.scss'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <section className="login-form-wrap">
      <h1>Facebook</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <input type="email" name="email" required placeholder="Email" />
        </label>
        <br />
        <br />
        <label>
          <input type="password" name="password" required placeholder="Password" />
        </label>
        <input type="submit" value="Login" />
      </form>
      <h5>
        <Link to="/forgot-password">Forgot password</Link>
      </h5>
    </section>

  );
}

export default Login;
