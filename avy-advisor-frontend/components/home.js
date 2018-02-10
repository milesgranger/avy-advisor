import React from 'react';
import axios from 'axios';


const WelcomeBanner = () => {

    const parseData = (data) => {
        console.log('Parsing data: ');
        console.log(data);
        data = data.split('\n');
        data.map((line, i) => {
            if (!line.startsWith('#')) {
                console.log('Line: ' + line);
            }
        })

    };

    const getData = () => {
        console.log('Fetching data');
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let targetUrl = 'https://wcc.sc.egov.usda.gov/reportGenerator/view_csv/customSingleStationReport/hourly/957:AK:SNTL/-23,0/WTEQ::value,SNWD::value,PREC::value,TOBS::value,TMAX::value,TMIN::value,TAVG::value';
        data = axios.get(proxyUrl + targetUrl)
            .then((data) => data)
            .catch((err) => {console.error(err)})
        return data
    };

    let data = getData();
    data = parseData(data);

    return (
        <div>
            <h4>Welcome to Avy Advisor!</h4>
        </div>
    )
};

export default WelcomeBanner;