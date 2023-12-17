
import React, { useEffect } from "react";
import HighchartsConfig from "./HighchartsConfig";
import { AppContext } from "../App/AppProvider";
import { Tile } from "../Shared/Tile";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from "./ChartSelect";

const PriceChart = () => {
    useEffect(() => {
       
        Highcharts.setOptions(HighchartsTheme);
    }, []); 

    return (
        <AppContext.Consumer>
            {({historical, changeChartSelect}) => (
                <Tile> 
                    <ChartSelect
                            defaultValue="months"
                            onChange={e => changeChartSelect(e.target.value)}
                        >
                            <option value="days"> Days </option>
                            <option value="weeks"> Weeks </option>
                            <option value="months"> Months </option>
                        </ChartSelect>
                       { historical ?
                    <HighchartsReact highcharts={Highcharts} options={HighchartsConfig(historical)}/>
                    : <div> Loading Historical Data </div> 
                    }
                </Tile>
            )}
        </AppContext.Consumer>
    );
}

export default PriceChart;

