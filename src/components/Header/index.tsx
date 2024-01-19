import { useNavigation } from '@react-navigation/native';
import logoImage from '@assets/logo.png'

import * as S from './styles';

type HeaderProps = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('groups');
  }

  return (
    <S.Container>
      {showBackButton && 
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      }

      <S.Logo source={logoImage} />
    </S.Container>
  );
}