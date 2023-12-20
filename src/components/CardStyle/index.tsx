import * as S from './stalys'

export function CardStyles(){  
   const imageUrl = '/img/Rectangle.png'; // Substitua com o URL da sua imagem
   const repeatedImages = new Array(40).fill(imageUrl);

   return(
      <S.Container>
      {repeatedImages.map((url, index) => (
         <S.Img key={index} src={url} alt={`Imagem ${index + 1}`} />
      ))}
      </S.Container>
   )
} 
export function CardStyle3(){  
   const imageUrl = '/img/Rectangle.png'; // Substitua com o URL da sua imagem
   const repeatedImages = new Array(35).fill(imageUrl);

   return(
      <S.Container3>
         {repeatedImages.map((url, index) => (
            <S.Img3 key={index} src={url} alt={`Imagem ${index + 1}`} />
         ))}
      </S.Container3>
   )
}