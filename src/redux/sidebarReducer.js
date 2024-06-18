let initialState = {
    friendsList: [
        {
            img: "https://sun9-62.userapi.com/impg/GXKF7qvn3U_lHvLJaHkajrym3OE6N1BnumvOjA/nXJsbA-Ccm4.jpg?size=810x1080&quality=95&sign=f0f9084e9214289ef1e326e28dac546d&type=album",
            id: 1,
            name: 'Кирилл',
            postname: 'Библив'
        },
        {
            img: "https://sun9-80.userapi.com/impg/To85ionWWoeYtswukH1XNj7H_2sg3s9_h7eaYQ/Rh2ttouOTU4.jpg?size=997x1280&quality=95&sign=685a54c998469a46fa85ac87df1b8f6d&type=album",
            id: 2,
            name: 'Соловьёв',
            postname: 'Сергей'
        }
    ]
}

export const sidebarReducer = (state = initialState, action) => {
    return state;
}