import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import * as S from './styles';

export function NewGroup() {
  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />

        <Highlight
          title='Nova Turma'
          subtitle='crie uma turma para adicionar as pessoas'
        />

        <Input 
          placeholder='Nome da turma'
        />

        <Button 
          title='Criar'
          style={{ marginTop: 20 }}
        />
      </S.Content>
    </S.Container>
  );
}