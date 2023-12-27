export const AlertButton = ({ clickCb, children }) => {
    const innerClick = () => {
        alert(1)
        clickCb()
    }
    return <button onClick={innerClick}>{children}</button>
}
