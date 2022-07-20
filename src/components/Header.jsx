import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height:80px;
    background-color: black; 

    
`;
const Wrapper =styled.div`
    padding: 10px 20px; 
    display:flex;
    align-items:center;
    justify-content:space-between;
    
`

const Left =styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;

// const Language = styled.div`
//     font-size:14px;
//     cursor:pointer;
//     // display:flex;


// `
// const SearchContainer = styled.div`
//     border:0.5px solid lightgray;
//     display:flex;
//     align-items:center;
//     margin-left:25px;
//     padding:5px;
// ` 

const Image = styled.img`
width:50%;
height:8vh;
object-fit:cover;
`
const Center =styled.div`
    flex:3;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Part1 =styled.h1`
font-size:22px;
    // font-weight:bold;
    // display:flex;
    justify-content:space-between;
    margin-right:27px;
    color:white;
    

`

const Part2 =styled.h1`
font-size:22px;
    // font-weight:bold;
    // display:flex;
    margin-right:27px;
    color:white;

`
const Part3 =styled.h1`
font-size:22px;
    // font-weight:bold;
    // display:flex;
    margin-right:27px;
    color:white;
`
const Part4 =styled.h1`
font-size:22px;
    font-weight:bold;
    // display:flex;
    margin-right:27px;
    color:white;
`




const Right =styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;

`;

const MenuItem = styled.div`
    margin-left:25px;
    font-size:16px;
    cursor:pointer;
    color:white;
`

const Imge =styled.img`
width:10%;
height:3vh;
margin-left:10px;
object-fit:cover;
// display:flex;
`






const Header = () => {
    return (
      <Container>
          <Wrapper>
              <Left>
                  <Image src="https://cdn.discordapp.com/attachments/891025496601661504/994320691656659057/unknown.png"/>
                  {/* <SearchContainer>
                      <Input placeholder="Search"/>
                      <Search style={{color:"gray" , fontSize:16}}/>
                  </SearchContainer> */}
              </Left>
              <Center>
                <Part1>Home</Part1>
                <Part2>About Us</Part2>
                <Part3>Product</Part3>
                <Part4>Contact Us</Part4>
                
              </Center>
              <Right>
                  <MenuItem>Made in India</MenuItem>
                  <Imge src="https://cdn.discordapp.com/attachments/891025496601661504/994337086209527960/9-2-india-flag-picture.png"/>
                  {/* <span class="fi fi-IN"></span> */}
                  {/* <MenuItem>SIGN IN</MenuItem> */}
                  {/* <MenuItem>
                      <Badge badgeContent={4} color="primary">
                          <ShoppingCartOutlined/>
                      </Badge>
                  </MenuItem> */}
  
              </Right>
          </Wrapper>
          
      </Container>
    )
  }
  
  export default Header