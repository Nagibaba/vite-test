import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { incAction } from '../common/state/actions/incAction'
import { increment } from '../common/state/reducers/counterSlice'
// import { add } from '../common/state/reducers/todoSlice'
import { useEffect, useRef } from 'react'
import { getAllUsers } from '../common/state/reducers/userSlice'

const Home = () => {
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter.value)
    const todos = useSelector((state) => state.todo.todos)
    const users = useSelector((state) => state.user.users)
    const isLoadingUsers = useSelector((state) => state.user.loading)

    const doIncrement = () => {
        dispatch(increment(2))
    }

    const addTodo = () => {
        // const newTodo = inputRef.current.value
        // dispatch(add(newTodo))
        // inputRef.current.value = ''
    }

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    if (isLoadingUsers) return 'loading....'
    return (
        <div className="center">
            <button onClick={doIncrement}>Inc {counter}</button>
            <input ref={inputRef} type="text" placeholder="Add todo" />
            <button onClick={addTodo}>Add </button>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <Link to="/loginform">Login form</Link>
        </div>
    )
}

export default Home
