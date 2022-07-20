import React from 'react'
import styled from 'styled-components'


const Container =styled.div`
background-color:#1E1E1E;
display:flex;
flex-direction:column;

`

const Title =styled.h1`
display:flex;

align-items:center;
justify-content:center;
color:white;
font-weight:700;
font-family: 'Syne';
font-size:60.3px;
margin:15px 10px;
`

const ImageContainer =styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const Image =styled.img`
width:70%;
// height:70vh;
object-fit:cover;
`
const InfoContainer =styled.div`
background-color:white;
border-radius:17px;
box-shadow: -2.2309px 0.743634px 47.5926px -11.1545px #FFFFFF;
width:55%;
// display:flex;
// justify-content:center;
// align-items:center;
margin:25px 25px;
margin-left:20%;
`
const Desc =styled.p`
font-weight: 500;
font-size: 20.309px;
font-family: 'Inter';
padding:20px;
`




const AboutComponent1 = () => {
  return (
    <Container>
        
        <Title>
            ABOUT US
        </Title>

        <ImageContainer>
            <Image src="https://cdn.discordapp.com/attachments/992390118457483376/999010242862002186/unknown.png" />
        </ImageContainer>

        <InfoContainer>
            <Desc>IDR acronym of "Indian Defence Reforms". In May 2019 we created a page on Instagram by the name of Indian Defence Reforms. We started sharing daily defence updates related to the Indian Army, Navy & Airforce. We got attention and people started loving our works. From May 2019 till August 2021 more than 25000 IDR'ians joined Indian Defence Reforms on various media. This motivated us ,that now we should bring more for our audience and our Nation.So,we decided to start our company on 13 August 2021. And as a result we started our company "IDR Research"and ``Development Pvt Ltd".</Desc>
        </InfoContainer>
        
    </Container>
  )
}

export default AboutComponent1