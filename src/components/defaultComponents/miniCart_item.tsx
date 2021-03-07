import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import {hoveredGray} from "../css vars/linkStyles";
export type ProductItem = {
        img: string,
        link: string
        name: string
        quantity: number
        price: number
        id: number
}
type Props = {
    item: ProductItem
    remove: (id:number)=>void
};
const MiniCartItem = (props: Props) => {
    const handleRemove = () => {
        props.remove(props.item.id)
    }
    return (
        <StyledCartItem>
            <StyledItemImg>
                <NavLink to={props.item.link}>
                    <img src={props.item.img} alt="cart item"/>
                </NavLink>
            </StyledItemImg>
            <StyledItemDescription>
                <h3>{props.item.name}</h3>
                <div className='itemInfo'>
                    <div className='itemQuantity'>
                        {`QTY : ${props.item.quantity}`}
                    </div>
                    <div>
                        {`$${props.item.price}.00`}
                    </div>
                </div>
            </StyledItemDescription>
            <StyledCloseIcon onClick={handleRemove}/>
        </StyledCartItem>
    );
};
export default React.memo(MiniCartItem);
const StyledCloseIcon = styled(CloseIcon)`&&{
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  transition: color .3s;
  font-size: 20px;
  ${hoveredGray}
}`
const StyledItemDescription = styled.div`
    padding-left: 20px;
  h3 {
    font-size: 13px;
    font-weight: 700;
    color: #000;
    margin-top: 5px;
    margin-bottom: 20px;
  }
  .itemInfo{
    font-size: 13px;
    font-weight: 700;
  }
  .itemQuantity{
    margin-bottom: 10px;
  }
`
const StyledItemImg = styled.div`
    width: 25%;
    border: 1px solid #eee;
  img {
    width: 100%;
    height: auto;
  }
`
const StyledCartItem = styled.div`
  position: relative;
  display: flex;
  margin: 20px 20px 0 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e1e1 ;
`