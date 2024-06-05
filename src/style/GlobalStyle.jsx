import { createGlobalStyle } from "styled-components";
import GmarketSansLight from "../assets/font/GmarketSansLight.otf";
import GmarketSansMedium from "../assets/font/GmarketSansMedium.otf";
import GmarketSansBold from "../assets/font/GmarketSansBold.otf";
import PretendardThin from "../assets/font/Pretendard-Thin.otf";
import PretendardExtraLight from "../assets/font/Pretendard-ExtraLight.otf";
import PretendardLight from "../assets/font/Pretendard-Light.otf";
import PretendardRegular from "../assets/font/Pretendard-Regular.otf";
import PretendardSemiBold from "../assets/font/Pretendard-SemiBold.otf";

import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

    :root{
     font-size: 10px;

    --main-color : #D5BEB1;
    --gray-color : #C4C4C4;
    --white-color : #fff;
    --black-color : #434343;
    --light-gray-color : #F2F2F2;
    --light-black-color : #767676;
    --dark-gray-color : #9a9a9a;
   
    --font-min-size : 1.2rem; 
    --font-sm-size : 1.4rem;
    --font-md-size : 1.6rem;
    --font-lg-size : 1.8rem;
    --font-max-size : 2.4rem;
    --font-extra-size : 3.6rem;

    --font-thin : 100;
    --font-extra-light : 200;
    --font-light :300;
    --font-regular : 400;
    --font-medium : 500;
    --font-semi-bold : 600;
    --font-bold : 700;
    --font-extra-bold : 900;
  }

  @font-face {
    font-family: 'GmarketSans';
    font-weight: 300;
    src: url(${GmarketSansLight}) format('opentype');
  }

  @font-face {
    font-family: 'GmarketSans';
    font-weight: 500; 
    src: url(${GmarketSansMedium}) format('opentype');
  }

  @font-face {
    font-family: 'GmarketSans';
    font-weight: 700; 
    src: url(${GmarketSansBold}) format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    src: url(${PretendardThin}) format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200; 
    src: url(${PretendardExtraLight}) format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300; 
    src: url(${PretendardLight}) format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url(${PretendardRegular}) format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600; 
    src: url(${PretendardSemiBold}) format('opentype');
  }


  body,p{
    margin: unset;
    font-family: 'GmarketSans';
  }



  h1,h2,h3,h4{
    padding: unset;
    font-weight: unset;
  }


  img{
    vertical-align: top;
  }

  a{
    text-decoration: none;
    color: initial;
  }

  ul,li{
    padding: unset;
    list-style: none;
  }

  ul,li{
    padding: unset;
    list-style: none;
  }

  button{
    all:  unset;
  }

  input{
    border: unset;
    outline : none;
  }

  select{
    appearance: none;
  }

  .a11y-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}
`;

export default GlobalStyle;
