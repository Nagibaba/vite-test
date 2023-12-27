import {useState} from 'react'
export const TriggerButton = (props) => {
	
	return <button 
		onClick={props.onClick}
	>
		Trigger 
	</button> 
}