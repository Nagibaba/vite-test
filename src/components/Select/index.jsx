const Select = ({ options, ...restProps }) => {
    return (
        <select {...restProps}>
            <option value="">Select car</option>
            {options.map((el) => (
                <option value={el.value} key={el.value}>
                    {el.label}
                </option>
            ))}
        </select>
    )
}
export default Select
