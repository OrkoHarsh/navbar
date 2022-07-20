import React from 'react'
import styled from 'styled-components'


// const Container =styled.div`
// background-color:#1E1E1E;
// display:flex;
// flex-direction:column;
// justify-content:center;
// align-items:center;
// `

// const Title =styled.h1`
// font-weight: 400;
// font-size: 57.2598px;
// line-height: 150%;
// display:flex;
// align-items:center;
// justify-content:center;
// color:#FFFFFF;
// margin:50px 0px;
// `
// const Wrapper =styled.div`
// display:flex;
// flex-direction:column;

// `
const Box =styled.div`
display:flex;
color:white;
justify-content:center;
align-items:center;
margin:30px 0px;
`

const Left =styled.div`
display:flex;
flex-direction:column;
// flex:1;
`

const ImageContainer =styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:10px 0px;

`

const Image =styled.img`
width:40%;

`

const Profile =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const Name =styled.p``

const Designation =styled.p``

const Right =styled.div`
display:flex;
align-items:center;
justify-content:center;
background: rgba(0, 0, 0, 0.25);
box-shadow: 0px 2.97454px 16.36px rgba(0, 0, 0, 0.25);
border-radius: 17.1036px;
width:60%;
`

const Desc =styled.p`
font-weight: 400;
font-size: 20.309px;
line-height: 150.5%;
padding:20px;
word-spacing:2px;
`

const AbtComponent = ({item}) => {
  return (
    <Box>

    <Left>

    <ImageContainer>
      <Image src={item.img}/>
    </ImageContainer>

    <Profile>
      <Name>{item.name}</Name>
      <Designation>{item.designation}</Designation>
    </Profile>
    </Left>

    <Right>
      <Desc>{item.desc}</Desc>
    </Right>


    </Box>
  )
}

export default AbtComponent