import { useAuth } from "../../hooks/auth"

import { useState } from "react"

import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"



export function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const { signIn } = useAuth()
  

  function handleSignIn() {
    signIn({ email, password })
  }
  

  
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={ event => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={ event => setPassword(event.target.value)}
        />

        <Button title="Entrar" id="pink-button" onClick={handleSignIn} />

        <Link to="/register">
          <ButtonText title="Criar conta" id="button-text" />
        </Link>
      </Form>

      <Background />
    </Container>
  )
}
