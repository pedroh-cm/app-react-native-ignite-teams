import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import theme from "@theme/index";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ isActive }: FilterStyleProps) => css`
    border: 1px solid ${isActive ? theme.COLORS.GREEN_700 : theme.COLORS.GRAY_300};
    border-radius: 4px;

    margin-right: 12px;

    height: 38px;
    width: 70px;

    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_200};
  text-transform: uppercase;
`;