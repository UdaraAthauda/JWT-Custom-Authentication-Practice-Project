import React, { useEffect, useState } from 'react'
import {VStack, Text, Button} from '@chakra-ui/react'
import { get_notes, logout } from '../endpoints/api'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchNotes = async () => {
            const notes = await get_notes()
            setNotes(notes)
        }
        fetchNotes()
    }, [])

    const handleLogout = async () => {
        const success = await logout()
        if (success) {
            navigate('/login')
        }
    }

  return (
    <>
        <VStack>
            <h1>Welcome back</h1>

            <VStack>
                {notes.map((note) => {
                    return <Text key={note.id}>{note.description}</Text>
                })}
            </VStack>

            <Button onClick={handleLogout} colorScheme="red" color="red">Logout</Button>
        </VStack>
    </>
  )
}

export default Home