import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { incAction } from '../common/state/actions/incAction'
import { increment } from '../common/state/reducers/counterSlice'
// import { add } from '../common/state/reducers/todoSlice'
import { useCallback, useEffect, useRef } from 'react'
import { getAllUsers } from '../common/state/reducers/userSlice'
import { Input } from '../components/Input'
import { Table } from '../components/Table'
import { Formik } from 'formik'
import * as Yup from 'yup'

const simpleSchema = Yup.object({
    username: Yup.string().min(4),
    email: Yup.string().email().required(),
})

const Home = () => {
    return (
        <div className="center">
            <Formik
                initialValues={{
                    username: 'aa',
                }}
                validationSchema={simpleSchema}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values)
                }}
            >
                {(props) => (
                    <form
                        onSubmit={props.handleSubmit}
                        className=""
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                        }}
                    >
                        <Input
                            error={
                                props.touched.username && props.errors.username
                                    ? props.errors.username
                                    : null
                            }
                            name="username"
                            type="text"
                            placeholder="Username"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.username}
                        />

                        <Input
                            error={
                                props.touched.email && props.errors.email
                                    ? props.errors.email
                                    : null
                            }
                            name="email"
                            type="text"
                            placeholder="Email"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                        />

                        {/* <Input type="password" placeholder="Password" />
                        <Input type="number" placeholder="Phone" />
                        <Input type="email" placeholder="Email" /> */}
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>

            {/* <Table
                data={[
                    ['1', '2'],
                    ['4', '5'],
                ]}
                colProps={{ style: { borderBottom: '2px solid red' } }}
            /> */}
            <Link to="/loginform">Login form</Link>
        </div>
    )
}

export default Home
