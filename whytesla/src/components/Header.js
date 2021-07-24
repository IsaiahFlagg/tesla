import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerState, setBurgerState] = useState(false);


    return (
        <Container>
            <p class="noselect" id="why">WHY</p>
            <a>
                <img src="/images/logo.svg" />
            </a>
            <Menu>
                <a class="noselect" href="#">Model S</a>
                <a class="noselect" href="#">Model 3</a>
                <a class="noselect" href="#">Model X</a>
                <a class="noselect" href="#">Model Y</a>
            </Menu>

            <Rmenu>
                <RmenuWrap>
                    <a class="noselect" href="#">Shop</a>
                    <a class="noselect" href="#">Tesla Account</a>
                </RmenuWrap>
                <CustomMenu onClick={() => setBurgerState(true)}></CustomMenu>
            </Rmenu>

            <BurgerNav show={burgerState}>
                <CloseWrapper>
                    <Close onClick={() => setBurgerState(false)}></Close>
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
};

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    p {
        float: left;
        
    }

    #why {
        
         font-weight: 600;
         text-transform: uppercase;
         padding: 0 10px;
         flex-wrap: nowrap;
         
        
    }

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
           -khtml-user-select: none; /* Konqueror HTML */
             -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
                  user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
      }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
        display: none;
    }
`
const Rmenu = styled.div`
    display: flex;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }

    
`
const RmenuWrap = styled.div`
    @media(max-width: 768px) {
        display: none;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const Close = styled(CloseIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        
        a {
            font-weight: 600;
        }
    }
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
