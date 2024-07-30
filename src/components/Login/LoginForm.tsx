import * as React from 'react';
import {Box, Button} from "@mui/material";
import {Formik, Form, Field, ErrorMessage, FormikHelpers} from "formik";
import * as Yup from 'yup'
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import { Navigate} from "react-router-dom";
import {rootState} from "../../redux/reduxStore";

interface ILoginFormValues {
    email: string;
    password: string;
    remember: boolean;
}

const LoginForm = (props: {
    login: (email: string, password: string, remember: boolean)=> void
    isAuth: boolean
}) => {

    const validationSchema = Yup.object({
        email: Yup.string().email('Email is incorrect').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    })
    const handleSubmit = async (values: ILoginFormValues, {setSubmitting}: FormikHelpers<ILoginFormValues>) => {
       try {
           await props.login(values.email, values.password, values.remember)
           console.log(values)
       } catch(error){
           console.log('error', error)
       }
       finally {
           setSubmitting(false)
       }
       // alert(JSON.stringify(values, null, 2))

    }
    if(props.isAuth){
        return <Navigate to='/profile'/>
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

const mapStateToProps =(state:rootState) =>  ({
    isAuth: state.auth.isAuth,
})

export default connect((mapStateToProps), {
    login
})(LoginForm);