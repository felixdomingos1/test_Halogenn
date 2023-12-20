import React, { useState, useEffect } from 'react'
import { CardRelease } from 'src/components/cardRelease' 
import * as S from './styles'
import { CardProduct } from 'src/components/cardProduct'
import { CardStyle3, CardStyles } from 'src/components/CardStyle'

interface WindowDimensions {
  width: number | undefined;
  height: number | undefined;
}

const getWindowDimensions = (): WindowDimensions => {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  } else { 
    return { width: undefined, height: undefined };
  }
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return windowDimensions;
};

const ProductsRelease: React.FC = () => {
  const { width, height } = useWindowDimensions();

  return (
    <S.Container>
      <CardRelease 
      largura={width}
      />
      <CardProduct/>
      <CardStyles/>
      <CardStyle3/>
    </S.Container>
  )
}

export default ProductsRelease
