import { useState } from 'react'
import './styles.scss'

export const HelloWorld = (props) => {
	const {name, isRed} = props

	const [selected, setSelected] = useState(isRed)
	
	const [number, setNumber] = useState(0)

	const artir = () => {
		setNumber(prev => prev + 1)
		setSelected(!selected)
	}
	return (
	<div className="hello-class" onClick={artir} style={{fontSize: 40, color: selected ? 'red': 'black'}}>
		{name}, {number}
	</div>
	)
}

