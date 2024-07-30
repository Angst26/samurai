import React from "react";
import {ErrorMessage, useFormik} from "formik";
import {Button, Input} from "@mui/material";
import * as Yup from "yup";

export const Signup = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('invalid email address').required('Required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (

        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <Input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                sx={{backgroundColor: "white"}}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                    <div style={{color: "red"}}>{formik.errors.firstName}</div>)
                : null}
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    sx={{marginLeft: 3, backgroundColor: '#fff'}}/>
                {formik.touched.lastName && formik.errors.lastName ? (
                        <div style={{color: "red"}}>{formik.errors.lastName}</div>)
                    : null}
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    sx={{marginLeft: 6, backgroundColor: '#fff'}}/>
                {formik.touched.email && formik.errors.email ? (
                        <div style={{color: "red"}}>{formik.errors.email}</div>)
                    : null}
            </div>
            <div>
                <Button
                    type="submit">sign up</Button>
            </div>
        </form>

    )
}