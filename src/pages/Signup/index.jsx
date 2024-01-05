import { useState } from "react"

import { api } from "../../services/api"

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"

import { Container, Form, Background } from "./styles"

import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText"



export function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()


  function handleSignUp() {

    if(!name || !email || !password) {

      return alert("Preencha todos os campos!")
    }

    api.post('/users', { name, email, password })
    
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })

      .catch( error => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar.')
        }
      })
  }


  
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={event => setName(event.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={event => setPassword(event.target.value)}
        />

        <Link>
          <Button title="Cadastrar" onClick={handleSignUp} />
        </Link>

        <Link to="/">
          <ButtonText title="Voltar para o login" icon={FiArrowLeft}/>
        </Link>
      </Form>

      <Background />
    </Container>
  )
}
