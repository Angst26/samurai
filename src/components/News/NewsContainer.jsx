import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const NewsContainer = () => {
    return(
        <div>
            News will be here...
        </div>
    )
}

export default compose(
    withAuthRedirect
)(NewsContainer);