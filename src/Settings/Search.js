import React from "react";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";
import { AppContext } from "../App/AppProvider";
import _  from "lodash";
import fuzzy from "fuzzy";
import styled from "styled-components";


const SearchGrid = styled.div`
  display:grid;
  grid-template-columns: 200px 1fr;

`
const SearchInput = styled.input`
  ${backgroundColor2};
  ${fontSize2};
  border: 1px solid; 
  height: 25px; 
  color: #1163c9;
  place-self: center left; 
`

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
     let coinSymbols = Object.keys(coinList)
     let coinNames = coinSymbols.map(symb => coinList[symb].CoinName)
     let allStringstoSearch = coinSymbols.concat(coinNames)
     let fuzzyResults = fuzzy
     .filter(inputValue, allStringstoSearch, {})
     .map(result => result.string)
     let filteredCoins = _.pickBy(coinList ,( result, symbKey ) =>{
        let coinName = result.CoinName
        return (_.includes(fuzzyResults,symbKey) || _.includes(fuzzyResults, coinName ))
     }) 
     setFilteredCoins (filteredCoins)
},500)

function filterCoins (e, setFilteredCoins, coinList ){
     let inputValue = e.target.value
     if(!inputValue){
        setFilteredCoins(null)
        return ;
     }
     handleFilter(inputValue, coinList, setFilteredCoins)
}

function Search (){
    return(
        <AppContext.Consumer>
           {({setFilteredCoins, coinList}) =>
            <SearchGrid>
                <h2>Search all coins</h2>
                <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList )}/>
            </SearchGrid>} 
        </AppContext.Consumer>
    )
}

export default Search;