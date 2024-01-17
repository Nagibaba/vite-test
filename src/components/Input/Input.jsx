import { forwardRef, useImperativeHandle, useRef } from 'react'

export const Input = forwardRef((props, ref) => {
    const inputRef = useRef(null)

    useImperativeHandle(
        ref,
        () => {
            return {
                inputaBax() {
                    inputRef.current.focus()
                },
            }
        },
        []
    )

    return <input ref={inputRef} type="text" {...props} />
})

Input.displayName = 'Input'
