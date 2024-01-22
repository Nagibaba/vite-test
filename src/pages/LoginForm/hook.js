import { useState } from 'react'
import axiosInstance from '../../common/axiosInstance'

export const useForm = () => {
    const [values, setValues] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axiosInstance.post('login', values)
        } catch (error) {
            setError(error.response.data.error)
        }
    }

    const handleChange = (e) => {
        setError('')
        const name = e.target.name // email, password
        const value = e.target.value
        setValues({
            ...values,
            [name]: value,
        })
    }

    return { error, values, handleSubmit, handleChange }
}
