import React, { useState } from 'react'
import { VStack, Field, Input, Button } from "@chakra-ui/react"

const Login = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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

            <Button>Login</Button>
        </VStack>
    </>
  )
}

export default Login