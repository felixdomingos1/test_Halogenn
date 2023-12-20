import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.secondary.blue};
  max-width: 1920px;
  height: 504px;
  padding: 58px 310px; 
  .main_header .menuHumburger{
    display: none;
  }
  .main_header{
    display: flex;
    align-items: center;
    justify-content: space-between; 
  } 
  .NewContet{
    display: none;
    width: 302px;
    position: absolute;
    top: 202px;
    left: 34px;
  }
  .NewContet p{
    color: #E3F7FF;
    font-family: 'DM' Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 125.2%; /* 40.064px */
  }
  .NewContet .details{
    color: #FFF;
    font-family: 'DM' Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 157.7%; /* 25.232px */
  }
  .NewContet p span{
    color: #48C7F3;
  }
  @media (max-width: 450px) {
    background: ${({ theme }) => theme.colors.secondary.blue};
    width: 390px;
    height: 830px;
    flex-shrink: 0;
    padding: 58px 310px; 
    .main_header{
      display: flex;
      justify-content: space-between;
      width: 620px;
      padding: 52px 30px ;
      position: absolute;
      top: 0;
      left: 0;

    }
    .NewContet{
      display: flex;
      flex-direction: column;
    }

    .main_header .menuHumburger{
      margin-right: 22.91px;
      display: flex;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width:450px) {
  
    }
`

export const NavMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 64.26px;
  width: 60%;
  @media (max-width: 450px) {
    display: none;
  }
`

export const NavItem = styled.a`
  color: #FFF;
  font-family: 'DM', sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  -webkit-transition: all ${({ theme }) => theme.transition.default};
  transition: all ${({ theme }) => theme.transition.default};
  margin-left: 45px;
  :hover {
    color: #F5643D;
  }
`
export const BtnOrc = styled.nav`
  display: inline-flex;
  padding: 12px 18px;
  justify-content: center;
  align-items: center; 
  gap: 5px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.09);
  color: #FFF;
  font-family: 'DM' Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width:450px) {
    border-radius: 8.441px;
    display: inline-flex;
    height: 41px;
    padding: 9.647px;
    justify-content: center;
    align-items: center;
    gap: 6.029px;
    flex-shrink: 0;
    background: #F5643D;
    margin-right: 93.15px;
    a{
      display: none;
    }
  }
`