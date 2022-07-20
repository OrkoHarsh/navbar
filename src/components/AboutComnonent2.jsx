import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
background-color:#1E1E1E;
`
const Wrapper =styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:0px 20px;
`
const LeftImg =styled.div`
display:flex;
`
const Image =styled.img`
width:100%;
height:7vh;
margin-right:45px;

`
const Title =styled.h1`
font-weight: 400;
font-size: 57.2598px;
// line-height: 150%;
display:flex;
color:#FFFFFF;
`

const RightImg =styled.div`
display:flex;
left:-20%;
`
const Img =styled.img`
width:100%;
height:15vh;
margin-left:-10px;
`
const Desc =styled.p`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
font-weight: 400;
font-size: 22.309px;
line-height: 130%;
color: #FFFFFF;
padding:10px 30px;

`
const Decs2 =styled.p`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
font-weight: 700;
font-size: 22.309px;
line-height: 150%;
color: #FFFFFF;
padding:10px 0px;
margin-top:10px;
`


const AboutComnonent2 = () => {
  return (
    <Container>
        <Wrapper>
            <LeftImg>
                <Image src="https://cdn.discordapp.com/attachments/891025496601661504/999055510655479939/unknown.png"/>
            </LeftImg>
            <Title>
                What are we doing Under IDR?
            </Title>

            <RightImg>
                <Img src="https://cdn.discordapp.com/attachments/891025496601661504/999055576090824845/unknown.png" />
            </RightImg>
            </Wrapper>

            <Desc>
                Team IDR Research and Development Private Limited is working on NextGen drone related technologies including others, which can revolutionize the approach towards made in India as well as self reliant India in Indian drone Industry.
            </Desc>
            <Desc>
                IDR Research and Development Pvt Ltd is totally working on different verticals unlike already existing companies. Our aim is to provide innovative, cost effective drones and related technologies MADE IN INDIA 🇮🇳.
             </Desc>

             <Desc>
                Apart from Drone tech IDR Research and Development Pvt Ltd is also providing services in Drone technology, 3-D modelling, Prototyping, Product Design and R&D. We provide end to end solutions from initial Designing to final Prototype development. We are working with the Indian army in the prototyping domain but we are hungry for more. So,
            </Desc>

            <Decs2>
                <span>Give us work,</span>
                <span>Hold Our hands and,</span>
                <span>We will never let you disappoint</span>
            </Decs2>
        


    </Container>
  )
}

export default AboutComnonent2