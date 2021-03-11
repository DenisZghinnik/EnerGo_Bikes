import {useState} from "react";
import {useDispatch} from "react-redux";
import {authReducerActions} from "../redux/reducers/authReducer";


export const withAuthFunc = (Component:any) => {

    return (props:any)=>{
        const dispatch = useDispatch();
        const [openResetForm, setOpenResetForm] = useState(false);
        const handleOpenReset = () => {setOpenResetForm(true)};
        const handleCloseReset = () => {
            dispatch(authReducerActions.clearMessages())
            setOpenResetForm(false)
        };

        const [openRegForm, setOpenRegForm] = useState(false);
        const handleOpenReg = () => {setOpenRegForm(true)};
        const handleCloseReg = () => {
            dispatch(authReducerActions.clearMessages())
            setOpenRegForm(false)
        };

        return <Component {...props}
                          openResetForm={openResetForm}
                          setOpenResetForm={setOpenResetForm}
                          handleOpenReset={handleOpenReset}
                          handleCloseReset={handleCloseReset}
                          openRegForm={openRegForm}
                          setOpenRegForm={setOpenRegForm}
                          handleOpenReg={handleOpenReg}
                          handleCloseReg={handleCloseReg}
        />
    };
};

export type WithAuthProps = {
    openResetForm:boolean,
    handleOpenReset:()=>void,
    handleCloseReset:()=>void,
    openRegForm:boolean,
    handleOpenReg:()=>void,
    handleCloseReg:()=>void,
}