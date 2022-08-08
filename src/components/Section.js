import React from 'react';
import styled from 'styled-components';
// import Fade from "react-reveal/Fade";






function Section({title, description, backgroundImage, leftBtnText, rightBtnText}) {

  return (
      <Wrap bgImage={backgroundImage}>
             {/* <Fade bottom> */}
              <ItemText>
              <h1>{title}</h1>
              <p>{description }</p>
              </ItemText>
              {/* </Fade>            
                       */}
            
            <Buttons>
                <ButtonGroup>
                   <LeftButton>
                  {leftBtnText}
                  </LeftButton>
                  { rightBtnText &&
                      <RightButton>
                          {rightBtnText}
                      </RightButton>
                  }
                
                 </ButtonGroup>
                <DownArrow src='./down-arrow.svg'/>
            </Buttons>


        </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    z-index: 10;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; // horizontal
    background-image: url(${props => props.bgImage});// background-image


`

const ItemText = styled.div`
        padding-top: 15vh;
        text-align: center;
        p{
            text-decoration: under;
        }
        

`

const ButtonGroup = styled.div`
    display: flex;  
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }


`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s; 

`


const Buttons = styled.div`


`
