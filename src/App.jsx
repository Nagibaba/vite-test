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
import { Provider } from 'react-redux'
import { compose, applyMiddleware, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './common/state/reducers/counterSlice'
import createSagaMiddleware from 'redux-saga'
import userSaga from './common/sagas/userSaga'
import userSlice from './common/state/reducers/userSlice'
import Posts from './pages/Posts'
import rootSaga from './common/sagas'
import postsSlice from './common/state/reducers/postsSlice'
import SinglePost from './pages/SinglePost'
import Login from './pages/Login'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = configureStore({
    reducer: combineReducers({
        counter: counterSlice,
        posts: postsSlice,
        user: userSlice,
    }),
    composeEnhancers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/loginform" element={<LoginForm />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:id" element={<SinglePost />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
