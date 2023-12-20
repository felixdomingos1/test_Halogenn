import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 195px;
  height: 541px;
  left: 0;
  display: flex; 
  justify-content: center;


  @media (max-width:450px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    top: 864px;
    left: 0; 
    width: 620px;
   }
`
 
export const Card = styled.div`
  width: 433px;
  flex-shrink: 0;
  display:flex ;
  justify-content: space-between;
  flex-direction: column;
  padding: 91px 71px;


  @media (max-width:450px) {
    width: 510px;
    height: 115px;
    flex-shrink: 0;
    padding: 49px 35px;
    display: flex;
    justify-content: flex-start;
   }
`

export const CardHeaderText = styled.div`
  > span {
    font-size: 0.8em;
    color: #d7bdca;
  }
`

export const CardTitle = styled.h3`
    color: #323351;
    font-family: 'DM' Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 18px */
    text-transform: uppercase;
    text-transform: uppercase;
    @media (max-width: 450px) {
      display : none;
    }
`

export const CardDescription = styled.p`
  color: #313352;
  font-family: 'DM' Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 98.7%; /* 35.532px */
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 450px) {
      display : flex;
      align-items: center;
      flex-direction: row;
      font-size: 18.764px;
      max-width: 203px;
    }
`
export const displayed = styled.span`

@media (max-width: 450px) {
    }
` 