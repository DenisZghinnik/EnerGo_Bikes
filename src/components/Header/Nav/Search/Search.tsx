import React, {useState} from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {Input, InputAdornment, Popover} from "@material-ui/core";
import {navStyle} from "../../../../css vars/navStyles";
import {grey} from "../../../../css vars/colors";

const Search = () => {
    const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
    const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {setAnchorEl(event.currentTarget)}
    const handleClose = () => {
        setAnchorEl(null)
        setSearchVal('')
    }
    const open = !!anchorEl;
    const id = open ? 'search-popover' : undefined;

    const [searchVal, setSearchVal] = useState<string>('');
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchVal(e.target.value);
    }
    const handleSubmit = () => {
        alert(searchVal);
        handleClose();
    }
    return (
        <>
            <StyledSearchIcon aria-describedby={id} onClick={handleClick}/>

            <Popover open={open} id={id}
                     anchorEl={anchorEl} onClose={handleClose}
                     transformOrigin={{
                         vertical: 'top',
                         horizontal: 'left',
                     }}
            >
                <StyledInput disableUnderline
                    value={searchVal}
                    onChange={handleChange}
                    endAdornment={<InputAdornment position="end">
                        <StyledSearchIcon onClick={handleSubmit}/>
                    </InputAdornment>}
                    placeholder='Search...'
                />
            </Popover>
        </>
    );
};
export default React.memo(Search);

const StyledInput = styled(Input)`&&{
    min-height: 40px;
    padding: 5px 10px;
    color: ${grey};
}`

const StyledSearchIcon = styled(SearchIcon)`&& {
  ${navStyle};
}`