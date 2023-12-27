import { useEffect, useState } from 'react'
import Select from '../../components/Select'
export const HomeScreen = () => {
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        setInputs((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
    }
    const options = [
        { value: 'vol', label: 'Volvo' },
        { value: 'bmw', label: 'BMW' },
    ]
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    name="ad"
                    placeholder="Write name"
                    value={inputs.ad}
                />
                <input
                    onChange={handleChange}
                    name="soyad"
                    type="text"
                    placeholder="Write surname"
                    value={inputs.soyad}
                />
                <Select onChange={handleChange} name="car" options={options} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
