// import {useDispatch} from "react-redux";
// import {useMemo} from "react";
// import {bindActionCreators} from "redux";
// import {appSlice} from '../redux/appReducer'
//
// const rootActions = {
//     ...appSlice.actions,
// };
//
// export const useActions = () => {
//     const dispatch = useDispatch();
//
//     return useMemo(() => {
//         bindActionCreators(rootActions, dispatch)
//     }, [dispatch]);
// }