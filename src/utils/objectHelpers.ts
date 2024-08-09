interface Item {
    [key: string]: any; // Или более точное описание, если известно
}

export const updateObjInArray = (items: Item[], itemId: number, objPropName: string, newObjProps: {}) => {
    return items.map(i => {
        if (i[objPropName] === itemId)
            return {...i, ...newObjProps}
        return i;
    })

}

// state.usersList.map(user => {
//     if (user.id === action.userID)
//         return {...user, followed: true}
//     return user;
// })

