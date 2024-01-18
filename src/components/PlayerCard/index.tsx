import { ButtonIcon } from '@components/ButtonIcon';

import * as S from './styles';

type PlayerCardProps = {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <S.Container>
      <S.IconPlayer name="person" />
      <S.NamePlayer>{name}</S.NamePlayer>
      <ButtonIcon 
        icon='close'
        type='SECONDARY'
        onPress={onRemove}
      />
    </S.Container>
  );
}