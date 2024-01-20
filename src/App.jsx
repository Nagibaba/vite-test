import './App.scss'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import avatar from './assets/images/avatar.png'

function App() {
    return (
        // Provider for styled components
        <ThemeProvider theme={theme}>
            {/* Tailwind example component */}
            <div className="center gap-10 bg-yellow">
                <div className="font-card bg-white rounded-xl px-3 py-4 max-w-[360px] flex flex-col items-center space-y-3">
                    <img className="w-6 h-6 rounded-full" src={avatar} alt="" />
                    <h2 className="font-semibold text-l text-center">
                        Constructive and destructive waves
                    </h2>
                    <p className="text-base text-center font-normal">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                    </p>
                    <button className="rounded text-white bg-purple p-3 w-full font-semibold">
                        Continue
                    </button>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
