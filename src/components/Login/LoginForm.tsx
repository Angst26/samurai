import {Box, Button} from "@mui/material";
import {Formik, Form, Field, ErrorMessage, FormikHelpers} from "formik";
import * as Yup from 'yup'
import React from 'react'
import {tryLogin} from "../../redux/authReducer";

interface ILoginFormValues {
    email: string;
    password: string;
    remember: boolean
}

const LoginForm = () => {

    const validationSchema = Yup.object({
        email: Yup.string().email('Email is incorrect').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    })
    const handleSubmit = async (values: ILoginFormValues, {setSubmitting}: FormikHelpers<ILoginFormValues>) => {
       try {
           await tryLogin(values.email, values.password)
           console.log(values)
       } catch(error){
           console.log('error', error)
       }
       finally {
           setSubmitting(false)
       }
       // alert(JSON.stringify(values, null, 2))

    }

    return (
        <>
            <Formik
                initialValues={{email: '', password: '', remember: false}}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {({isSubmitting}) => (
                    <Form>
                        <Box>
                            <label htmlFor="email" style={{marginRight: 10}}>Email</label>
                            <Field type="email" name="email"/>
                            <ErrorMessage name="email" component="div"/>
                        </Box>

                        <Box>
                            <label htmlFor="password" style={{marginRight: 10}}>Password</label>
                            <Field type="password" name="password"/>
                            <ErrorMessage name="password" component="div"/>
                        </Box>
                        <Box>
                            <label htmlFor="remember" style={{marginRight: 10}}>Remember me</label>
                            <Field type="checkbox" name="remember"/>
                        </Box>

                        <Button type="submit" disabled={isSubmitting}>
                            Войти
                        </Button>
                    </Form>
                )}

            </Formik>


        </>
    )
}

export default LoginForm;