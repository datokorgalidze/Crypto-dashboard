import React from "react";
import Welcome from "./WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
import Search from "./Search";

export default function Settings(){
   return(
      <Page name= 'settings'>
         <Welcome/>
         <CoinGrid topSection />
         <ConfirmButton/>
         <Search/>
         <CoinGrid/>
       </Page>
   ) 
}