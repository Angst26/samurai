import React from 'react';
import Post from "./Posts/Post";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Box, Button} from "@mui/material";
import {changeNewPostText} from "../../../redux/profileReducer";


const MyPosts = React.memo((props) => {
    // const newPostElement = React.createRef();



    const handleSubmit = (values, {setSubmitting}) => {
        props.addPost();
        setSubmitting(false)
    }
    const onChangeNewPostText = (e) => {
        props.changeNewPostText(e.target.value)
    }



    let postElements = props.posts.map(post => <Post id={post.id} likesCount={post.likesCount} content={post.content}/>)
    return (
        <>
            <Formik
                initialValues={{newPostText: ''}}
                onSubmit={handleSubmit}>

                {({isSubmitting}) => (
                    <Form
                        onChange={onChangeNewPostText}>
                        <Box>
                            <Field component="textarea" name="newPostText" placeholder="Post text..." value={props.newPostText}/>
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
});

export default MyPosts;