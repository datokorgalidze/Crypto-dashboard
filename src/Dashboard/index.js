import React from "react";
import Page from "../Shared/Page";
import PriceGrid from "./PriceGrid";
import CoinSpotlight from "./CoinSpotlight";
import PriceChart from "./PriceChart";
import styled from "styled-components";

const CartGrid = styled.div`
   display:grid;
   grid-template-columns: 1fr 3fr;
   margin-top:20px;
   grid-gap:15px;
`


export default function Dashboard(){
   return(
      <Page name= 'dashboard'>
         <PriceGrid/>
         <CartGrid>
         <CoinSpotlight/>
         <PriceChart/>
         </CartGrid>
       </Page>
   ) 
}