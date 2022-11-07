export let analogStore = {
    _state: {
        profilePages: {
            newPostText: '',
            postData: [
                {id: 1, message: 'Hi world', likes: 11},
                {id: 2, message: 'What you lern?', likes: 22},
                {id: 3, message: 'YO?', likes: 33},
                {id: 4, message: '12345?', likes: 44}
            ]
        },

        dialogPages: {
            dialogsData: [
                {id: 1, name: 'Egor'},
                {id: 2, name: 'Polina'},
                {id: 3, name: 'Anton'},
                {id: 4, name: 'Andrey'},
                {id: 5, name: 'Nadya'},
                {id: 6, name: 'Maksim'},
            ],
            newMessageText: '',
            messagesData: [
                {id: 1, message: 'Hi.Bla Bla Bla Bla'},
                {id: 2, message: 'How are you?Bla Bla Bla Bla'},
                {id: 3, message: 'Why are you?Bla Bla Bla Bla'},
                {id: 4, message: 'Im fine,thanks.Bla Bla Bla Bla'},
                {id: 5, message: 'What do you mean?Bla Bla Bla Bla'},
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    addPost() {
        let newPost = {id: 6, message: this._state.profilePages.newPostText, likes: 0}
        debugger
        this._state.profilePages.postData.push(newPost);
        this._state.profilePages.newPostText = '';
        this._callSubscriber()
    },
    updateNewPostText(newPost: string) {
        debugger
        this._state.profilePages.newPostText = newPost;
        this._callSubscriber()
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    }
}

// @ts-ignore
window.store = analogStore
