import React from 'react';
import { DeletableTile } from '../Shared/Tile';
import styled from "styled-components";


export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
`;

export const CoinSymbol = styled.div`
  justify-self: right;
  
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none; 
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;


 const CoinHeaderGrid = ({name, symbol, topSection}) =>{
    return(
        <CoinHeaderGridStyled>
         <div>{name}</div>
         {topSection ? (
      <DeleteIcon> X </DeleteIcon>
          ) : (
            <CoinSymbol> {symbol} </CoinSymbol>
          )}
      </CoinHeaderGridStyled>
    ) 
}

export default CoinHeaderGrid;