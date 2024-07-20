import {Box, Button, Checkbox, Input} from "@mui/material";
import {Formik, Form, Field, ErrorMessage, FormikHelpers} from "formik";
import * as Yup from 'yup'
import {Label} from "@mui/icons-material";

interface ILoginFormValues {
    email: string;
    password: string;
}

const LoginForm = () => {


    const validationSchema = Yup.object({
        email: Yup.string().email('Email is incorrect').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    })
    const handleSubmit = (values: ILoginFormValues, {setSubmitting}: FormikHelpers<ILoginFormValues>) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    return <Formik
        initialValues={{email: '', password: ''}}
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
                    <label htmlFor="password" style={{marginRight: 10}}>Пароль</label>
                    <Field type="password" name="password"/>
                    <ErrorMessage name="password" component="div"/>
                </Box>

                <Button type="submit" disabled={isSubmitting}>
                    Войти
                </Button>
            </Form>
        )}
    </Formik>;
}

export default LoginForm;