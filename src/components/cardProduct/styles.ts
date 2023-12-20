import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 60rem;
   position: absolute;
   top: 854px;
   left: 0;
   padding: 0 361px;

   @media (max-width:450px) {
   position: absolute;
   top: 1400px;
   left: 0;
   display:flex;
   align-items: center;
   flex-direction: column;
   width: 620px;
   padding: 0;
   }
`
export const CardTitle = styled.div`
   width: 100%;
   padding: 10px;
   margin-bottom: 65px;
   @media (max-width: 450px) {
      height: 4rem;
      display: flex;
      left: 0;
      
      }
`
export const Title = styled.span`
   color: #323351;
   font-family: 'DM' Sans;
   font-size: 24px;
   font-style: normal;
   font-weight: 700;
   line-height: 100%; /* 24px */
   text-transform: uppercase;
   @media (max-width: 450px) {
      margin-left: 20px;
      
   }
`

export const CardContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media (max-width: 450px) {
      position: absolute;
      left: 0;
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
   }
`
export const Cards = styled.div`
   width: 376px;
   height: 258px;
   flex-shrink: 0;
   border-radius: 10px;
   background: #FFF;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
   @media (max-width: 450px) {
      width: 320px;
      height: 219.574px;
      margin: 2rem;
   }
`
export const CardImg = styled.div`
   width: 376px;
   height: 178px;
   flex-shrink: 0;
   border-radius: 10px 10px 0px 0px;
   @media (max-width: 450px) {
      margin-bottom: -26px;

   }
`
export const img = styled.img`
   @media (max-width: 450px) {
      width: 320px;
   }
`
export const CardContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   padding: 23px 10px;
   @media (max-width:450px) {
   display:flex;
   }
`
export const CardDatas = styled.div`
   display: flex;
   flex-direction: column;
`
export const CardValue = styled.div`
   display: flex;
   align-items: center;
`
export const CardName = styled.span`
   color: rgba(245, 100, 61, 0.80);
   font-family: 'Roboto';
   font-size: 18px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
`
export const CardNota = styled.span`
   color: #A1A1A1;
   font-family: 'Roboto';
   font-size: 12px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
`
export const CardValor = styled.span`
   color: rgba(245, 100, 61, 0.80);
   font-family: 'Roboto';
   font-size: 18px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
`