import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  border: none;
  background: transparent;
  
  display: flex;
  align-items: center;

  > span {
    height: 26px;

    font-family: ${({ ismyfavorites }) => ismyfavorites ? "'Roboto', sans-serif" : "'Poppins', sans-serif"};
    font-style: normal;
    font-weight: ${({ ismyfavorites }) => ismyfavorites ? "400" : "500"}; 
    font-size: ${({ ismyfavorites }) => ismyfavorites ? "16px" : "14px"}; 
    line-height: ${({ ismyfavorites }) => ismyfavorites ? "160%" : "24px"};

    color: ${({ ismyfavorites, theme }) => ismyfavorites ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    white-space: nowrap; 
  }
`;