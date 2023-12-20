import * as S from './styles'

export function CardProduct() {
   const datas = [
   {
      id:1,
      name:'Name here',
      valor:'200.00',
      nota:'9.0',
      img:'/img/img1.png'
   },
   {
      id:2,
      name:'Name here',
      valor:'300.00',
      nota:'9.0',
      img:'/img/img2.png'
   },
   {
      id:3,
      name:'Name here',
      valor:'900.00',
      nota:'9.0',
      img:'/img/img3.png'
   }
   ]
   return( 
      <S.Container>
         <S.CardTitle>
            <S.Title>
               Produtos
            </S.Title>
         </S.CardTitle>
         <S.CardContainer>
            {
               datas.map((e)=>{
                  const {id, name, nota, valor, img} = e
                  return(
                     <S.Cards key={id}> 
                        <S.CardImg>
                           <S.img src={img}/>
                        </S.CardImg>
                        <S.CardContent>
                           <S.CardDatas>
                              <S.CardName>{name}</S.CardName>
                              <S.CardNota>Nota : {nota}</S.CardNota>
                           </S.CardDatas>
                           <S.CardValue>
                              <S.CardValor>R$ {valor}</S.CardValor>
                           </S.CardValue>
                        </S.CardContent>
                     </S.Cards>
                  )
               })
            }
         </S.CardContainer>
         
      </S.Container>
   )
}