export interface IProfileReducer{
    posts: {
        id: number,
        content: string,
        likesCount: number
    }[];
    newPostText: string;
    profile: any | null;
    myId: number | null;
    status: string;
}

export interface IUsersReducer {

    usersList: {
        id: number;
        pageSize: number;
        totalUsersCount: number;
        currentPage: number;
        isFetching: boolean;
        followingInProgress: any[]
    }[];
    followingInProgress: { id:number}[]
}


//TODO:
// export interface IAction{
//     type: string;
//     any: any;
// }

