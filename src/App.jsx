import {
    lazy,
    useState,
    useMemo,
    useCallback,
    useEffect,
    Suspense,
} from 'react'
import './App.scss'
import axios from 'axios'
import axiosInstance from './common/axiosInstance'

// Code splitting
const TextArea = lazy(() => import('./components/TextArea/TextArea.jsx'))

function App() {
    const [users, setUsers] = useState([])

    const getUsersA = async () => {
        const url = 'users?page=2'
        const { data } = await axiosInstance.get(url)
        console.log('axios', data)
        setUsers(data.data)
    }
    useEffect(() => {
        getUsersA()
    }, [])

    const login = async () => {
        try {
            const url = 'login'
            const { data } = await axiosInstance.post(url, {
                email: 'peter@klaven',
            })
            console.log('login', data)
        } catch (error) {
            // alert(error.message)
        }
    }
    return (
        <div className="center gap-10">
            <button onClick={login}>Login</button>
            <Suspense fallback="loading...">
                <TextArea value={1} />
            </Suspense>
            {users.map((user) => (
                <div key={user.id} className="user">
                    <p className="user__email">{user.email}</p>
                    <img
                        className="user__avatar"
                        src={user.avatar}
                        alt="avatar"
                    />
                </div>
            ))}
        </div>
    )
}

export default App
