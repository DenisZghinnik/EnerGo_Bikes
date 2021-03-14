import React from 'react';
import styled from 'styled-components';
import {homeSectionTitle} from "../../../css vars/homeSectionTItle";
import {buttonMain2Style} from "../../../css vars/buttonStyle";
import ProductItem from "../../defaultComponents/ProductItem";
import img from '../../../img/products/products-item/pro37.jpg'
import {Container} from "@material-ui/core";


type Props = {};
const BestBikes = (props: Props) => {
    const [active, setActive] = React.useState(0);
    return (
        <StyledBestBikes>
            <div className='header-title'>
                <h3>best e-bikes</h3>
                <span>E</span>
            </div>
            <div className="buttons">
                <button className={`button ${active===0&&'active'}`} onClick={()=>setActive(0)}>
                    new arrivals
                </button>
                <button className={`button ${active===1&&'active'}`} onClick={()=>setActive(1)}>
                    best sellers
                </button>
                <button className={`button ${active===2&&'active'}`} onClick={()=>setActive(2)}>
                    top rates
                </button>
            </div>
            <Container maxWidth={'xl'}>
                <ProductItem item={{
                    img: img,
                    name: 'Pulse Special Edition',
                    stars: 3,
                    discount: true,
                    price: '450.00',
                    discountPrice: '243.00',
                    link: '/products/pulse-special-edition'
                }}/>
            </Container>
        </StyledBestBikes>
    );
};
export default React.memo(BestBikes);

const StyledBestBikes = styled.div`
  margin-top: 100px;
  text-align: center;
  .header-title{
    ${homeSectionTitle};
    position: relative;
    span{
      font-size: 90px;
    }
  }
  .buttons{
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0 40px 0;
    justify-content: center;
  }
  .button{
    ${buttonMain2Style};
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .active{
    background-color: #bdb099;
    border-color: #bdb099;
    color: #fff;
  }
`