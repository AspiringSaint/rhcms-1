import '../../styles/pages/auth/LoginPage.css'

import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Sign in</h1>
      <form>
        {/* Email */}
        <div className="input-wrapper">
          {/* <Mail size={20} /> */}
          <input
            type="email"
            placeholder="Email"
            // value={email}
            // onChange={handleEmailInput}
            required
          />
        </div>

        {/* Password */}
        <div className="input-wrapper">
          {/* <Lock size={20} /> */}
          <input
            // type={showPassword ? "text" : "password"}
            type='password'
            placeholder="Password"
            // value={password}
            // onChange={handlePasswordInput}
            required
          />
          <button
            type="button"
            // onClick={handleShowPassword}
            className="show-password-btn"
          >
            {/* {showPassword ? <Eye size={20} /> : <EyeOff size={20} />} */}
            Show
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="submit-btn"
          // disabled={!email || !password}
        >
          Sign In
        </button>
      </form>

      {/* Links */}
      <div className="login-links">
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>

  )
}

export default LoginPage