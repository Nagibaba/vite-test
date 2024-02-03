import { useFormik } from 'formik'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import * as yup from 'yup'
import { useEffect } from 'react'

const Login = () => {
    const loginSchema = yup.object({
        email: yup
            .string()
            .email('Düzgün email formatı deyil')
            .required('Məcburidir'),
        parol: yup
            .string()
            .min(3, 'Ən az 3 hərfdən ibarət olmalıdır')
            .max(10, 'Ən çox 10 hərfdən ibarət ola bilər')
            .required('Məcburidir'),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            parol: '',
        },
        validateOnBlur: true,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    useEffect(() => {
        console.log(formik)
    }, [])

    return (
        <div className="center">
            <form onSubmit={formik.handleSubmit} className="flex column gap-10">
                <Input
                    label="Email"
                    error={formik.touched.email && formik.errors.email}
                    placeholder="Emailinizi daxil edin"
                    name="email"
                    {...formik.getFieldProps('email')}
                />

                <Input
                    label="Parol"
                    type="password"
                    error={formik.touched.parol && formik.errors.parol}
                    placeholder="Parolunuzu daxil edin"
                    name="parol"
                    {...formik.getFieldProps('parol')}
                />

                <Button>Login </Button>
            </form>
        </div>
    )
}

export default Login
