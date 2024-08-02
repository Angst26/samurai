interface Dialog {
    id: number;
    name: string;
}

interface Message {
    id: number;
    message: string;
}

export interface IDialogsPage {
    dialogs: Dialog[];
    messages: Message[];
    newMessageText: string;
}



export interface DialogsState {
    dialogsPage: IDialogsPage;
}


