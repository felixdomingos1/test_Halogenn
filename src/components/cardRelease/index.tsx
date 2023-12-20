import React, { useState, useEffect } from 'react';
import * as S from './styles' 

interface CardProps {
  largura: number | undefined;
}

export function CardRelease({largura}:CardProps) {
    const datas = [
      {
        id:1,
        name:'Produtos',
        descrisptionn:'Vidrarias e Equipamentos',
        background:'#F9F0EE;',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <g clip-path="url(#clip0_1_891)">
          <path d="M20.5715 1.14288V14.8572L28.7772 25.3029C29.1769 25.8087 29.4259 26.417 29.4956 27.0579C29.5653 27.6988 29.4529 28.3463 29.1713 28.9263C28.8897 29.5062 28.4503 29.995 27.9035 30.3365C27.3567 30.678 26.7247 30.8585 26.08 30.8572H5.92003C5.27535 30.8585 4.64336 30.678 4.09658 30.3365C3.5498 29.995 3.11039 29.5062 2.82878 28.9263C2.54717 28.3463 2.43477 27.6988 2.50448 27.0579C2.57419 26.417 2.82319 25.8087 3.22289 25.3029L11.4286 14.8572V1.14288M8.00003 1.14288H24" stroke="#313352" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_1_891">
            <rect width="32" height="32" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      
      },
      {
        id:2,
        name:'Químicos',
        descrisptionn:'Materiais Químicos',
        colors:'#fff',
        background:'#F5643D',
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
              <path d="M2 21.3846H18M18 31.0769H2M7.2848 7.7231H9.99995H12.7151M13.6364 11.6923V3.38462C13.6364 3.01739 13.4831 2.66521 13.2103 2.40554C12.9376 2.14588 12.5676 2 12.1818 2H7.81818C7.43241 2 7.06244 2.14588 6.78966 2.40554C6.51688 2.66521 6.36364 3.01739 6.36364 3.38462V11.6923C5.02092 12.5419 3.91983 13.6945 3.15848 15.0474C2.39712 16.4002 1.99914 17.9114 2 19.4462V35.2308C2 35.9652 2.30649 36.6696 2.85205 37.1889C3.39762 37.7082 4.13755 38 4.90909 38H15.0909C15.8624 38 16.6024 37.7082 17.1479 37.1889C17.6935 36.6696 18 35.9652 18 35.2308V19.4462C18.0009 17.9114 17.6029 16.4002 16.8415 15.0474C16.0802 13.6945 14.9791 12.5419 13.6364 11.6923Z" stroke="white" stroke-opacity="0.75" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ,
            icon2:<svg xmlns="http://www.w3.org/2000/svg" width="13" height="24" viewBox="0 0 13 24" fill="none">
            <path d="M2 12.7692H10.8889M10.8889 18.1538H2M4.936 5.1795H6.44442H7.95283M8.46465 7.38462V2.76923C8.46465 2.56522 8.37951 2.36956 8.22797 2.2253C8.07642 2.08104 7.87088 2 7.65657 2H5.23232C5.01801 2 4.81247 2.08104 4.66092 2.2253C4.50938 2.36956 4.42424 2.56522 4.42424 2.76923V7.38462C3.67829 7.85662 3.06657 8.49694 2.6436 9.24854C2.22062 10.0001 1.99952 10.8397 2 11.6923V20.4615C2 20.8696 2.17027 21.2609 2.47336 21.5494C2.77645 21.8379 3.18753 22 3.61616 22H9.27273C9.70136 22 10.1124 21.8379 10.4155 21.5494C10.7186 21.2609 10.8889 20.8696 10.8889 20.4615V11.6923C10.8894 10.8397 10.6683 10.0001 10.2453 9.24854C9.82231 8.49694 9.2106 7.85662 8.46465 7.38462Z" stroke="white" stroke-opacity="0.75" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      },
      {
        id:3,
        name:'Laboratórios',
        descrisptionn:'Ferramentas e Utensílios',
        background:'#F9F0EE;'
      }
    ]
     
  return (
    
    <S.Container>
      {
        datas.map((e) =>{ 
          return(
            <S.Card key={e.id} style={
              {
                background:e.background,
                color:e.colors 
              }
            }>
              <S.CardHeaderText>
                <S.CardTitle style={
                  {
                    color:e.colors
                  }
                }>{e.name}</S.CardTitle>
              </S.CardHeaderText>
              <S.CardDescription style={
                  {
                    color:e.colors
                  }
                }>
                  <S.displayed>
                    {e.icon}
                    {e.icon2}
                  </S.displayed>
                {e.descrisptionn}
              </S.CardDescription>
            </S.Card>
          )
        })
      }
    </S.Container>
  )
}