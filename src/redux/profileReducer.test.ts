import {addPost, changeNewPostText, deletePostAC, profileReducer} from "./profileReducer";
import {describe, expect, test} from '@jest/globals';

describe('ProfileReducer', () => {
        test('length of posts should be incremented', () => {
            // 1.test data
            let action = addPost()
            let state = {
                posts: [
                    {id: 1, content: '', likesCount: 0},
                ],
                newPostText: 'new post text',
                profile: null,
                myId: null,
                status: ''
            }


            // 2. action
            let newState = profileReducer(state, action)
            // 3.expectations

            expect(newState.posts.length).toBe(state.posts.length + 1);
        })

        test("after deleting of post, length of post should be decremented", () => {
                const action = deletePostAC(1)
                const state = {
                    posts: [
                        {id: 1, content: '', likesCount: 0},
                    ],
                    newPostText: 'new post text',
                    profile: null,
                    myId: null,
                    status: ''
                }
                let newState = profileReducer(state, action)


                expect(newState.posts.length).toBe(state.posts.length - 1);
            }
        );

        test( 'after changing text, newPostText should be changed', () => {
            const action = changeNewPostText('new text')
            const state = {
                posts: [
                    {id: 1, content: '', likesCount: 0},
                ],
                newPostText: 'old text',
                profile: null,
                myId: null,
                status: ''
            }
            const newState = profileReducer(state, action)


            expect(newState.newPostText).toBe('new text')
        })
    }
)
