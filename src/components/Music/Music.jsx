import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const Music = () => {
    return(
        <div>
            Music will be here...
        </div>
    )
}

export default (
    withAuthRedirect
)(Music);