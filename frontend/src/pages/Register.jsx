import React, { useState } from 'react'
import { VStack, Field, Input, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/useAuth'

const Register = () => {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Cpassword, setCPassword] = useState('')

    const {register_user} = useAuth()
    
    const handleRegister = () => {
        register_user(username, email, password, Cpassword)
    }

  return (
    <>
        <h1>Register</h1>

        <VStack>
            <Field.Root>
                <Field.Label>Username:</Field.Label>
                <Input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </Field.Root>

            <Field.Root>
                <Field.Label>Email:</Field.Label>
                <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </Field.Root>

            <Field.Root>
                <Field.Label>Password:</Field.Label>
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </Field.Root>

            <Field.Root>
                <Field.Label>Confirm Password:</Field.Label>
                <Input type='password' value={Cpassword} onChange={(e) => setCPassword(e.target.value)} />
            </Field.Root>

            <Button onClick={handleRegister}>Register</Button>
            <Link to="/login">alredy have an account? login!</Link>
        </VStack>
    </>
  )
}

export default Register