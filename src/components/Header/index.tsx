import logoImage from '@assets/logo.png'

import * as S from './styles';

type HeaderProps = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <S.Container>
      {showBackButton && 
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      }

      <S.Logo source={logoImage} />
    </S.Container>
  );
}