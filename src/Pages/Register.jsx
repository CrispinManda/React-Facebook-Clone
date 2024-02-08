import { Link } from 'react-router-dom';
import './Register.scss'

function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic
    };
  return (
      <section className="login-form-wrap">
          <h1>Facebook</h1>
          <form className="login-form" onSubmit={handleSubmit}>
              <label>
                  <input type="name" name="name" required placeholder="Name" />
              </label>
              <br />
              <br />
              <label>
                  <input type="email" name="email" required placeholder="Email" />
              </label>
              <label>
                  <br />
                  <br />
                  <input type="password" name="password" required placeholder="Password" />
              </label>
              <br />
              <br />
              <label>
                  <input
                      type="password"
                      name="confirmPassword"
                      required
                      placeholder="Confirm Password"
                  />
              </label>
              <input type="submit" value="Register" />
          </form>
          <h5>
              <Link to="/forgot-password">Forgot password</Link>
          </h5>
          <p>
              Already have an account?{' '}
              <Link to="/login">Login here</Link>
          </p>
      </section>
  )
}

export default Register