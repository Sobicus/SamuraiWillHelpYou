import {addPostAC, deletePostAC, profileReducer} from "./profile-reducer";
import {ProfilePageType} from "./store";

it('length of posts should be incremented', () => {
        let initialState: ProfilePageType = {
            myPostsMessagesData: [
                {id: 1, message: 'Hi, how are you?', likeCount: 15},
                {id: 2, message: 'It is my first post', likeCount: 20},
            ],
            profile: {
                "aboutMe": "",
                "contacts": {
                    "facebook": "",
                    "website": "",
                    "vk": "",
                    "twitter": "",
                    "instagram": "",
                    "youtube": "",
                    "github": "",
                    "mainLink": ""
                },
                "lookingForAJob": true,
                "lookingForAJobDescription": "",
                "fullName": "",
                "userId": 3,
                "photos": {
                    "small": "",
                    "large": ""
                }
            },
            status: ''
        }
        let action = addPostAC("it-kamasutra.com")
        let newStater = profileReducer(initialState, action)
        expect(newStater.myPostsMessagesData.length).toBe(3)
    }
)
it('message of new post should be corect', () => {
        let initialState: ProfilePageType = {
            myPostsMessagesData: [
                {id: 1, message: 'Hi, how are you?', likeCount: 15},
                {id: 2, message: 'It is my first post', likeCount: 20},
            ],
            profile: {
                "aboutMe": "",
                "contacts": {
                    "facebook": "",
                    "website": "",
                    "vk": "",
                    "twitter": "",
                    "instagram": "",
                    "youtube": "",
                    "github": "",
                    "mainLink": ""
                },
                "lookingForAJob": true,
                "lookingForAJobDescription": "",
                "fullName": "",
                "userId": 3,
                "photos": {
                    "small": "",
                    "large": ""
                }
            },
            status: ''
        }
        let action = addPostAC("it-kamasutra.com")
        let newStater = profileReducer(initialState, action)
        expect(newStater.myPostsMessagesData[0].message).toBe("it-kamasutra.com")
    }
)
it('after deleting length o messages should be decrement', () => {
        let initialState: ProfilePageType = {
            myPostsMessagesData: [
                {id: 1, message: 'Hi, how are you?', likeCount: 15},
                {id: 2, message: 'It is my first post', likeCount: 20},
            ],
            profile: {
                "aboutMe": "",
                "contacts": {
                    "facebook": "",
                    "website": "",
                    "vk": "",
                    "twitter": "",
                    "instagram": "",
                    "youtube": "",
                    "github": "",
                    "mainLink": ""
                },
                "lookingForAJob": true,
                "lookingForAJobDescription": "",
                "fullName": "",
                "userId": 3,
                "photos": {
                    "small": "",
                    "large": ""
                }
            },
            status: ''
        }
        let action = deletePostAC(1)
        let newStater = profileReducer(initialState, action)
    expect(newStater.myPostsMessagesData.length).toBe(1)
    }
)
it('after deleting length o messages should not be decrement if id is incorect', () => {
        let initialState: ProfilePageType = {
            myPostsMessagesData: [
                {id: 1, message: 'Hi, how are you?', likeCount: 15},
                {id: 2, message: 'It is my first post', likeCount: 20},
            ],
            profile: {
                "aboutMe": "",
                "contacts": {
                    "facebook": "",
                    "website": "",
                    "vk": "",
                    "twitter": "",
                    "instagram": "",
                    "youtube": "",
                    "github": "",
                    "mainLink": ""
                },
                "lookingForAJob": true,
                "lookingForAJobDescription": "",
                "fullName": "",
                "userId": 3,
                "photos": {
                    "small": "",
                    "large": ""
                }
            },
            status: ''
        }
        let action = deletePostAC(2000)
        let newStater = profileReducer(initialState, action)
        expect(newStater.myPostsMessagesData.length).toBe(2)
    }
)