import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from '@material-ui/icons';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIncon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const LisItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AJIO.</Logo>
            <Desc>
                Reliance Retail Limited, a company incorporated under the laws of India, fashion and electronics solutions, which inter alia facilitates the sale and purchase of electronics, and lifestyle and fashion merchandise ("Products") by users of the Platforms ("Users").
            </Desc>
            <SocialContainer>
                <SocialIncon color='3B5999'>
                    <Facebook />
                </SocialIncon>
                <SocialIncon color='E4405F'>
                    <Instagram />
                </SocialIncon>
                <SocialIncon color='55ACEE'>
                    <Twitter />
                </SocialIncon>
                <SocialIncon color='E60023'>
                    <Pinterest />
                </SocialIncon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <LisItem>Home</LisItem>
                <LisItem>Cart</LisItem>
                <LisItem>Man Fashion</LisItem>
                <LisItem>Woman Fashion</LisItem>
                <LisItem>Accessories</LisItem>
                <LisItem>My Account</LisItem>
                <LisItem>Ordwe Tracking</LisItem>
                <LisItem>Wishlist</LisItem>
                <LisItem>Terms</LisItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}} /> 3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai – 400 002, Maharashtra, India</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}} /> +1 234 56 78</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}} />contact@ajio.co</ContactItem>
            <Payment src='https://i.ibb.co/mSRsb26/payment.png' />
        </Right>
    </Container>
  )
}

export default Footer;