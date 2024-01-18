import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import * as S from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: S.ButtonIconTypeStyleProps;
}

export function ButtonIcon({icon, type = "PRIMARY", ...rest }: ButtonIconProps) {
  return (
    <S.Container {...rest}>
      <S.Icon 
        name={icon}
        type={type}
      />
    </S.Container>
  );
}