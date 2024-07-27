import React from 'react';
import Post from "./Posts/Post";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Box, Button} from "@mui/material";


const MyPosts = (props) => {
    // const newPostElement = React.createRef();



    const handleSubmit = () => {
    }


    let postElements = props.posts.map(post => <Post id={post.id} likesCount={post.likesCount} content={post.content}/>)
    return (

        <>
            <Formik
                initialValues={{newPostText: ''}}
                onSubmit={handleSubmit}>
                {({isSubmitting}) => (
                    <Form>
                        <Box>
                            <Field component="textarea" name="newPostText" placeholder="Post text..."/>
                            <ErrorMessage name="email" component="div"/>
                        </Box>
                        <Button type="submit" disabled={isSubmitting}>
                            Send
                        </Button>
                    </Form>
                )}

            </Formik>
            <div>
                {postElements}
            </div>
        </>


    )
}

export default MyPosts;