import React, {Suspense} from "react";
import Preloader from "../components/common/Preloader/Preloader";

export  function withSuspense<OldProps> (OldComponent: React.ComponentType<OldProps> ) {
    class wrappedComponent extends React.Component<OldProps> {
        render() {
            const {...restProps} = this.props;

            return (<Suspense fallback={<Preloader/>}>
                <OldComponent {...restProps}></OldComponent>
            </Suspense>)
        }
    }

    return wrappedComponent;
}