import React from 'react';


class Apicall extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Main: [], Activity: [], Average: [], Performance: [] };
    }                                                                           
    
    componentDidMount(){
        const urls = [
            '../main-data.json',
            '../activity-data.json',
            '../average-data.json',
            '../perf-data.json'
        ];
    
        Promise.all(urls.map(url =>
            fetch(url)
                .then(checkStatus)
                .then(parseJSON) 
                .catch(error => console.log('Erreur from fetch', error))
        ))
                .then(data => {
                    const mainData = data[0];
                    const activityData = data[1];
                    const averageData = data[2];
                    const performanceData = data[3];
                        this.setState({
                            Main: mainData,
                            Activity: activityData,
                            Average: averageData,
                            Performance: performanceData
                        })
                })

                
        function checkStatus(response) {
            if (response.ok) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        }

        function parseJSON(response) {
            return response.json();
        }
        
    }

    
    render(){
        const { Main , Activity, Average, Performance } = this.state;
        console.log( Main, Activity, Average, Performance);
        
        return(
            <div>

            </div>
        )
    }
    
}

export default Apicall;