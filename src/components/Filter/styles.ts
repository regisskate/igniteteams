import styled, { css } from 'styled-components/native';

export type FilterStyleProps = {
  isActive?: boolean;
}

export const Container = styled.TouchableOpacity<FilterStyleProps>`
  ${({ theme, isActive }) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  `};

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;
`;
