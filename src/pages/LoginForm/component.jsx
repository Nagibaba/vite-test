import { useState } from 'react'
import styles from './style.module.css'
import { useForm } from './hook'

const LoginForm = () => {
    const { error, values, handleSubmit, handleChange } = useForm()
    return (
        <div className="center">
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    name="email"
                    type="text"
                    placeholder="Username"
                    className={styles.input}
                    value={values.email}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={styles.input}
                    value={values.password}
                    onChange={handleChange}
                />
                <span className={styles.error}>{error}</span>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm
