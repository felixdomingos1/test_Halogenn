import styled from "styled-components";

export const Container =  styled.div`
   max-width: 200px;
   height: 223.29px;
   flex-shrink: 0;
   position : absolute;
   top: 0;
   right: 0;
   display: flex;
   flex-wrap: wrap;
   padding: 5px;

   @media (max-width: 450px) {
      position: absolute;
      top: 550px;
      left: 10%;
      max-width: 540px;
      padding: 1rem;
      display: flex;
      flex-wrap: wrap;
      height: 300px;
      width: 600px;
   }  
`
export const Img =  styled.img`
   width: 9.71px;
   height: 10.079px;
   transform: rotate(90deg);
   flex-shrink: 0;
   margin: 13.47px 13.58px;

   @media (max-width: 450px) {
      margin: 10px 22px;
   }  
`







export const Container3 =  styled.div`
   display: none;
   @media (max-width: 450px) {
      margin: 10px;
      position: absolute;
      top: 1070px;
      left: 67%;
      max-width: 150px;
      display: flex;
      flex-wrap: wrap;
   }   
`
export const Img3 =  styled.img`
   @media (max-width: 450px) {
      margin: 9px;
      width: 7px;
   }  
`
