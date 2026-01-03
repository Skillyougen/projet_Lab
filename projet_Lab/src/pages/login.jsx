import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/login.css"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("enseignant")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password, role })
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>

        <h2>Connexion</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          onChange={e => setPassword(e.target.value)}
        />

        <select onChange={e => setRole(e.target.value)}>
          <option value="enseignant">Enseignant</option>
          <option value="responsable">Responsable</option>
        </select>

        <button type="submit">Se connecter</button>

        <p style={{ textAlign: "center" }}>
         Pas encore de compte ?{" "}
         <Link to="/register">Créer un compte enseignant</Link>
        </p>

      </form>
    </div>
  )
}

export default Login