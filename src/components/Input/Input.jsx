import styles from './styles.module.css'

export const Input = (props) => {
    const { error, ...rest } = props
    return (
        <>
            <input {...rest} />
            <span className={styles.error}>{error}</span>
        </>
    )
}
