import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/login.css"  // on réutilise le même style

function Register() {

  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [email, setEmail] = useState("")
  const [specialite, setSpecialite] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas")
      return
    }

    const data = {
      nom,
      prenom,
      email,
      specialite,
      password
    }

    console.log("Nouvel enseignant :", data)
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>

        <h2>Inscription Enseignant</h2>

        <input
          type="text"
          placeholder="Nom"
          onChange={e => setNom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Prénom"
          onChange={e => setPrenom(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Spécialité"
          onChange={e => setSpecialite(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          onChange={e => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Créer le compte</button>

        <p style={{ textAlign: "center" }}>
          Déjà un compte ?{" "}
          <Link to="/">Se connecter</Link>
        </p>

      </form>
    </div>
  )
}

export default Register