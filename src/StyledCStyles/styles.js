import styled, { css, createGlobalStyle } from 'styled-components';
import { set_margin, set_offset } from "./settings"

export const Global = createGlobalStyle`
  body {
    margin: 30px;
    padding: 0;
    box-sizing: border-box;
    background-color: #FFFFFF;
    color: #262630;
  }
`
export const Footer = styled.div`
position:fixed;
top: 96%; 
padding: 8px;
margin: 0 auto;
width: 100%; 
background-color: #4f4f4f;
@media (max-width: 350px) {
  top: 94%;
}
`
export const ModalP = styled.h5`
  margin: 0px;
`


export const MapImg = styled.img`
width: 100%;
height: 400px;
@media (max-width: 600px) {
height:100%
}
`
export const Input = styled.input`
width: 300px;
height: 30px;
border: none;
border-radius: 4px;
margin-bottom: 15px;
padding: 5px;
border: solid 1px grey;
`
export const CloseButton = styled.button`
  padding: 5px 0px;
  background: #FBFCFF;
  border: none;
  cursor: pointer;
`
export const ModalBase = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1;
`

export const HeaderInner = styled.div`
  height: 30px;
  position: sticky;
  background-color: black;
  color:white;
  top: 0; 
`

export const HomeButton = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: rgba(56, 150, 149, 0.17);
  border-radius: 50px;
  display: flex;
  border: none;
  margin: ${props => set_offset(props.margin)};
  justify-content: ${props => props.justify_content};

  &:hover {
    background-color: #D5D6D8;
  }

  && svg {
    margin: auto;
  }
`

export const Button_Primary = styled.a`
  font-size: 20px;
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.col};
  justify-content: ${props => props.justify_content};
  align-content: ${props => props.align_content};
  align-items: ${props => props.align_items};
  text-align: ${props => props.text_align};
  align-self: ${props => props.align_self};
  margin: ${props => set_offset(props.margin)};
  margin-top: ${props => set_margin(props.mt)};
  margin-bottom: ${props => set_margin(props.mb)};
  padding: ${props => set_offset(props.padding)};
  cursor: pointer;
  @media (max-width: 576px) {
    padding: 13px 15px;
    font-size: 16px;
  }
 
`

export const AppWrapper = styled.div`
  background: silver;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns:  ${props => props.left} ${props => props.right} ;
  height: 400px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`
export const ImgWrapper = styled.div`
order: ${props => props.order ? props.order : 0};
@media (max-width:600px)  {      
  order: ${props => props.order_sm};    
}
`
export const TextWrapper = styled.div`
padding:24px;
order: ${props => props.order ? props.order : 0};
`

export const SlideImg = styled.img`
width:90%;
max-width: 787px;
src: ${props => props.src ? `${props.src}` : null};
`

export const ButtonRight = styled.div`
    width: 20px;
    height: 20px;
    border-top: 5px solid #6E18C0;
    border-right: 5px solid #6E18C0;
    transform: rotate(45deg);
    cursor: pointer;
    @media(max-width: 600px){
      position: relative;
      top: 0;
      bottom: 0;
      margin: auto;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      z-index: 2;
      right: 10px;
    }
  `

export const ButtonLeft = styled.div`
    width: 20px;
    height: 20px;
    border-top: 5px solid #6E18C0;
    border-right: 5px solid #6E18C0;
    transform: rotate(225deg);
    @media (max-width: 600px) {
      position: relative;
      top: 0;
      bottom: 0;
      margin: auto;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      z-index: 2;
      left: 10px;
    }
  `

export const SlideWrapper = styled.div`
    position: relative;
    @media (max-width: 690px) {
      width:90%;
      max-width: 487px;
    }
    @media (max-width: 500px) {
      max-width: 300px;
    }
    @media (max-width: 350px) {
      max-width: 250px;
    }
`

export const SlideText = styled.span`
background: #222;
color: #fff;
border-radius: 4px;
right: 0;
position: absolute;
bottom: 10px;
width: 40%;
right: 50px;
`
