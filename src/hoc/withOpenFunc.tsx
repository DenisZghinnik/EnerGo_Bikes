import {useState} from "react";


export const withOpenFunc = (Component:any) => {

    return (props:any)=>{

        const [open, setOpen] = useState(false);
        const handleOpen = () => {setOpen(true)};
        const handleClose = () => {setOpen(false);};

        return <Component {...props}
                          open={open}
                          handleOpen={handleOpen}
                          handleClose={handleClose}
        />
    };
};

export type WithOpenFuncProps = {
    open:boolean,
    handleOpen: () => void
    handleClose: () => void
}