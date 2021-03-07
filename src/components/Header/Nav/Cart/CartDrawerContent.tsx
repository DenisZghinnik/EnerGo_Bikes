import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import {hoveredGray} from "../../../css vars/linkStyles";
import MiniCartItem, {ProductItem} from "../../../defaultComponents/miniCart_item";
import {greyHover} from "../../../css vars/colors";
import {CssSubmitButton} from "../../../defaultComponents/form_elements";

type Props = {
    handleClose: ()=>void
    items: ProductItem[]
    totalCount: number
    remove:(id:number)=>void
};

const MiniCartContent = (props: Props) => {
    const totalPrice = props.items.reduce((acc,curr):number=>acc+curr.price, 0);
    return (
        <StyledContainer>
            <StyledCartHeader>
                <button onClick={props.handleClose}>
                    <CloseIcon fontSize={'small'}/>
                </button>
                <h3>
                    shopping cart
                </h3>
                <div>
                    {props.totalCount}
                </div>
            </StyledCartHeader>
            <StyledItemsContainer>
                {props.items.map((a,i)=> <MiniCartItem key={'product'+i} remove={props.remove} item={a}/>)}
            </StyledItemsContainer>
            <StyledTotalPrice>
                <span className='total'>Total:</span>
                <span className='totalPrice'>{`$${totalPrice}.00`}</span>
            </StyledTotalPrice>
            <StyledButtonsContainer>
                <CssSubmitButton className='button-viewCart'>view cart</CssSubmitButton>
                <CssSubmitButton>check out</CssSubmitButton>
            </StyledButtonsContainer>
        </StyledContainer>
    );
};
export default React.memo(MiniCartContent);
const StyledButtonsContainer = styled.div`
    width: 100%;
    button{
      width: 50%;
      border-radius: 0;
      margin: 0;
    }
    .button-viewCart{
      background-color: #2a2a2a;
    }
`
const StyledTotalPrice = styled.div`
    height: 60px;
    line-height: 60px;
    padding: 0 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    font-size: 16px;
    .total{
      font-weight: 600;
    }
    .totalPrice{
      font-weight: 800;
      color: ${greyHover};
    }
`
const StyledItemsContainer = styled.div`
    overflow-y: auto;
    margin-top: 20px;
    height: 80vh;
`
const StyledCartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ecebeb;
    color: #000;
    line-height: 46px;
    font-weight: 600;
  h3 {
    font-size: 14px;
    text-transform: uppercase;
  }
  button {
    cursor: pointer;
    width: 48px;
    border: none;
    border-right: 1px solid #dedede;
    background-color: transparent;
    transition: color .3s;
    &:focus{
      outline: none;
    }
    ${hoveredGray}
  } 
  div{
    min-width: 45px;
    text-align: center;
    border-left: 1px solid #dedede;
  }
`
const StyledContainer = styled.div`
    height: 100%;
    width: 380px;
    background-color: #f7f7f7;
`;