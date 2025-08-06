import React, { useState } from 'react'
import { VStack, Field, Input, Button } from "@chakra-ui/react"
import { useAuth } from '../contexts/useAuth'

const Login = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login_user} = useAuth()

    const handleLogin = async () => {
        login_user(username, password)
    }

  return (
    <>
        <h1>Login</h1>

        <VStack>
            <Field.Root>
                <Field.Label>Username:</Field.Label>
                <Input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </Field.Root>

            <Field.Root>
                <Field.Label>Password:</Field.Label>
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </Field.Root>

            <Button onClick={handleLogin}>Login</Button>
        </VStack>
    </>
  )
}

export default Login