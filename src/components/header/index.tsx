import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <div className='main_header'>
          <S.Content>
              <img src='/img/Logo.png' alt="" />
            <S.NavMenu>
              <S.NavItem href="/">Início</S.NavItem> 
              <S.NavItem href="/produtos">Produtos</S.NavItem> 
              <S.NavItem href="/laudos">Laudos</S.NavItem> 
              <S.NavItem href="/sobrenós">Sobre nós</S.NavItem> 
              <S.NavItem href="/certificaçõoes">Certificaçõoes</S.NavItem> 
              <S.NavItem href="/contacto">Contacto</S.NavItem> 
            </S.NavMenu>
          </S.Content>
          <S.BtnOrc>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <g clip-path="url(#clip0_1204_494)">
                <path d="M13.3929 0.535713H1.60714C1.01541 0.535713 0.535713 1.01541 0.535713 1.60714V13.3929C0.535713 13.9846 1.01541 14.4643 1.60714 14.4643H13.3929C13.9846 14.4643 14.4643 13.9846 14.4643 13.3929V1.60714C14.4643 1.01541 13.9846 0.535713 13.3929 0.535713Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.82143 4.82143H10.1786M4.82143 7.5H10.1786M4.82143 10.1786H10.1786" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1204_494">
                  <rect width="15" height="15" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <a href="#">Orçamento</a>
          </S.BtnOrc>
            <div className="menuHumburger">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0808 8.47057C25.0808 8.71044 24.9856 8.94048 24.816 9.11009C24.6463 9.2797 24.4163 9.37499 24.1764 9.37499H4.88232C4.64245 9.37499 4.41241 9.2797 4.2428 9.11009C4.07319 8.94048 3.97791 8.71044 3.97791 8.47057C3.97791 8.23071 4.07319 8.00067 4.2428 7.83106C4.41241 7.66145 4.64245 7.56616 4.88232 7.56616H24.1764C24.4163 7.56616 24.6463 7.66145 24.816 7.83106C24.9856 8.00067 25.0808 8.23071 25.0808 8.47057ZM25.0808 14.5C25.0808 14.7399 24.9856 14.9699 24.816 15.1395C24.6463 15.3091 24.4163 15.4044 24.1764 15.4044H13.9264C13.6866 15.4044 13.4565 15.3091 13.2869 15.1395C13.1173 14.9699 13.022 14.7399 13.022 14.5C13.022 14.2601 13.1173 14.0301 13.2869 13.8605C13.4565 13.6909 13.6866 13.5956 13.9264 13.5956H24.1764C24.4163 13.5956 24.6463 13.6909 24.816 13.8605C24.9856 14.0301 25.0808 14.2601 25.0808 14.5ZM25.0808 20.5294C25.0808 20.7693 24.9856 20.9993 24.816 21.1689C24.6463 21.3385 24.4163 21.4338 24.1764 21.4338H4.88232C4.64245 21.4338 4.41241 21.3385 4.2428 21.1689C4.07319 20.9993 3.97791 20.7693 3.97791 20.5294C3.97791 20.2895 4.07319 20.0595 4.2428 19.8899C4.41241 19.7203 4.64245 19.625 4.88232 19.625H24.1764C24.4163 19.625 24.6463 19.7203 24.816 19.8899C24.9856 20.0595 25.0808 20.2895 25.0808 20.5294Z" fill="white"/>
              </svg>
            </div>
      </div>
      <div className="NewContet">
        <p>Qualidade e expertise em produtos <span>químicos e acessórios</span></p>
        <p className='details'>Estamos preparados para te entender e atender da melhor forma para suprir todas as suas demandas em químicos e similares.</p>
      </div>
    </S.Container>
  )
}
