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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import Home from './pages/Home'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loginform" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
