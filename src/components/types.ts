interface Dialog {
    id: number;
    name: string;
}

interface Message {
    id: number;
    message: string;
}

export interface DialogsPage {
    dialogs: Dialog[];
    messages: Message[];
    newMessageText: string;
}



export interface AppState {
    dialogsPage: DialogsPage;
}