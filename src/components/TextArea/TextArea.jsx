import { memo, useEffect } from 'react'
import styles from './style.module.css'
const TextArea = memo(({ value }) => {
    return <textarea className={styles.random} value={value} />
})

TextArea.displayName = 'TextArea'

export default TextArea
