import React from 'react'
import styled from "styled-components"

// components
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Modle S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section      
            title="Modle Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory" 
            />
            <Section     
            title="Modle 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
            />
            <Section
            title="Modle X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
             />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`