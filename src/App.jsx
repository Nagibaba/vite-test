import './App.scss'
import { useState } from 'react'

import { HomeScreen } from './screens/HomeScreen'

function App() {
    const [visible, setVisible] = useState(true)
    const hide = () => {
        setVisible(false)
    }
    return (
        <div>
            <button onClick={hide} style={{ marginBottom: 40 }}>
                Hide Home
            </button>

            {visible ? <HomeScreen /> : null}
        </div>
    )
}

export default App
