import {Button, withStyles} from "@material-ui/core";
import {greyHover} from "./colors";

export const CssButton = withStyles({
    root: {
        height: '60px',
        backgroundColor: '#000',
        fontSize: '15px',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: 600,
        marginTop: '20px',
        marginBottom: '20px',
        borderRadius: 0,
        '&:hover' : {
            backgroundColor: greyHover,
        }
    }
})(Button)