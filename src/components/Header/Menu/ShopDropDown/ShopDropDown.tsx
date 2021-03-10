import * as React from 'react'
import Menu from 'material-ui-popup-state/HoverMenu'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import {Grid} from "@material-ui/core";
import styled from "styled-components";
import ShopDDCategory from "./ShopDDCategory";
import bestSellersImg from '../../../../img/banner-shopDD.jpg'

class Category {
    subCategoriesCreator = (titles:Array<string>) =>{
        return [...titles.map((title:string)=>({title, link:`/${title.toLowerCase()}`}))]
    };
    constructor(title:string, link: string, subCategories:any) {
        this.title=title;
        this.link=link;
        this.subCategories=this.subCategoriesCreator(subCategories);
    }
    title
    link
    subCategories
}

const bikesSubCategories = ['Kross', 'Riveld', 'Xtreme', 'Bomj', 'Energy'];
const bikes = new Category('bikes', '/bikes', bikesSubCategories);

const kitsSubCategories = ['Relax', 'Active', 'Extreme'];
const kits = new Category('conversion kits', '/conversion+kits', kitsSubCategories);

const enginesSubCategories = ['250w','350w', '500w', '1000w'];
const engines = new Category('engines', '/engines', enginesSubCategories);

const batteriesSubCategories = ['36v','48v'];
const batteries = new Category('batteries', '/batteries', batteriesSubCategories);

const AccessoriesSubCategories = ['Displays','Helmets', 'Gloves', 'Glasses','Other'];
const Accessories = new Category('Accessories', '/accessories', AccessoriesSubCategories);

const allCategories = [bikes, kits, engines, batteries, Accessories];

const ShopDropDown = () => {
    const popupState = usePopupState({variant: 'popover', popupId: 'shopMenu'});

    return (
    <>
        <span {...bindHover(popupState)}>Shop</span>
        <Menu
            {...bindMenu(popupState)}
            getContentAnchorEl={null}
            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
            transformOrigin={{vertical: 'top', horizontal: 'left'}}
        >
            <StyledDDContainer container>
                {allCategories.map((category, i)=>(
                    <Grid key={'cat'+i} item xs>
                        <ShopDDCategory category={category}/>
                    </Grid>
                ))}
                <Grid item xs>
                    <StyledImg src={bestSellersImg} alt='best sellers'/>
                </Grid>
            </StyledDDContainer>

        </Menu>
    </>
    )
};
export default ShopDropDown;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`

const StyledDDContainer = styled(Grid)`
  padding: 30px 30px 30px 0;
`