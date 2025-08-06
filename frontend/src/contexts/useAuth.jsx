import { createContext, useContext, useState, useEffect } from "react";
import { is_authenticated } from "../endpoints/api";
import { useLocation, useNavigate } from "react-router-dom";
import { login, register } from "../endpoints/api";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()

    const get_authenticated = async () => {
        try{
            const success = await is_authenticated()
            setIsAuthenticated(success)
        } catch {
            setIsAuthenticated(false)
        } finally {
            setLoading(false)
        }
    }

    const login_user = async (username, password) => {
        const success = await login(username, password)
        if (success) {
            setIsAuthenticated(true)
            navigate('/')
        }
    }

    const register_user = async (username, email, password, cPassword) => {
        if (password === cPassword) {
            try{
                await register(username, email, password)
                alert('successfully registered user')
                navigate('/login')
            } catch(error) {
                alert('error registering user')
            }
        } else {
            alert('passwords dont match')
        }
    }

    useEffect(() => {
        get_authenticated()
    }, [location.pathname])

    return (
        <AuthContext.Provider value={{isAuthenticated, loading, login_user, register_user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)