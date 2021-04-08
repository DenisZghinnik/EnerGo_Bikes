import React from 'react';
import styled from 'styled-components';
import {homeSectionTitle} from "../../../css vars/homeSectionTItle";
import {buttonMain2Style} from "../../../css vars/buttonStyle";
import ProductItem from "../../defaultComponents/ProductItem";
import {Container, Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getProductsList} from "../../../selectors/selectors";

type Props = {};
const BestBikes = (props: Props) => {
    let productsList = useSelector(getProductsList).slice(0, 8);
    const [active, setActive] = React.useState(0);
    if(active===1) productsList = productsList.reverse();
    if(active===2) productsList = productsList.sort();
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
            <Container className='container' maxWidth={'xl'}>
                <Grid container spacing={4}>
                    {productsList.map((a:any,i:number)=>(
                        <Grid key={i}  item lg={3} md={4} sm={6}>
                            <ProductItem item={a}/>
                        </Grid>
                        ))}
                </Grid>
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
  @media (min-width: 1300px){
    .container{
      padding: 0 200px;
    }
  }
  
`