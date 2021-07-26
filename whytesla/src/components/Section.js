import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'

function Section(props) {
    return (
        <Wrap>
            <Fade bottom>
                <ItemText>
                    <H1Container>
                        <h1>{props.title}</h1>
                    </H1Container>
                    <DescriptionWrapper>
                        <p>{props.description}</p>
                    </DescriptionWrapper>
                </ItemText>
            </Fade>
            <ButtonsContainer>
                <Fade bottom>
                    { /* <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnText}
                    </LeftButton>
                    <RightButton>
                        {props.rightBtnText}
                    </RightButton>
               </ButtonGroup> */}

                    {/* <DownArrow src="/images/down-arrow.svg" /> */}
                </Fade>
            </ButtonsContainer>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const ButtonsContainer = styled.div`

`
const DescriptionWrapper = styled.div`
    display: flex;
    maxwidth: 500px;
    margin-top: 100px;
    padding: 30px;
    background: white;
    width: 1000px;
`
const H1Container = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    margin-top: 100px;
`