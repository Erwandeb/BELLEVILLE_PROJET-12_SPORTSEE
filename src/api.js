/* Service API/MOCK */

// CALL vers APIMock

const apiMockRunning = true;

class ApiMock{

    getUserDetails(id){
        return new Promise((resolve, reject) => {
            if(apiMockRunning) resolve({
                id: 99,
                userInfos:{
                    firstname: 'Mike',
                    lastName: 'Tyson',
                    age : 55,
                },
                todayScore: 0.9,
                keyData: {
                    calorieCount: 2600,
                    proteinCount: 195,
                    carbohydrateCount: 3000,
                    lipidCount: 80
                }
            })
            else{
                reject('api mock is not running')
            }
        })
       
    }

    getUserActivity(id){
        return Promise.resolve({
            userId: 99,
            sessions: [
                {
                    day: '2021-07-01',
                    kilogram: 80,
                    calories: 250
                },
                {
                    day: '2021-07-02',
                    kilogram: 91,
                    calories: 240
                },
                {
                    day: '2021-07-03',
                    kilogram: 89,
                    calories: 260
                },
                {
                    day: '2021-07-04',
                    kilogram: 87,
                    calories: 275
                },
                {
                    day: '2021-07-05',
                    kilogram: 88,
                    calories: 255
                },
                {
                    day: '2021-07-06',
                    kilogram: 90,
                    calories: 230
                },
                {
                    day: '2021-07-07',
                    kilogram: 89,
                    calories: 250
                }
            ]
        })
    }


    getUserAverageSession(id){
        return Promise.resolve({
            userId: 99,
            sessions: [
                {
                    day: 1,
                    sessionLength: 32
                },
                {
                    day: 2,
                    sessionLength: 27
                },
                {
                    day: 3,
                    sessionLength: 38
                },
                {
                    day: 4,
                    sessionLength: 42
                },
                {
                    day: 5,
                    sessionLength: 35
                },
                {
                    day: 6,
                    sessionLength: 28
                },
                {
                    day: 7,
                    sessionLength: 40
                }
            ]

        })
    }


    getUserPerformance(id){
        return Promise.resolve({
            userId: 99,
            kind: {
                1: 'cardio',
                2: 'energy',
                3: 'endurance',
                4: 'strength',
                5: 'speed',
                6: 'intensity'
            },
            data: [
                {
                    value: 140,
                    kind: 1
                },
                {
                    value: 125,
                    kind: 2
                },
                {
                    value: 130,
                    kind: 3
                },
                {
                    value: 100,
                    kind: 4
                },
                {
                    value: 210,
                    kind: 5
                },
                {
                    value: 190,
                    kind: 6
                }
            ]
        })
    }
}



// CALL vers API BackEnd
class Api {
    
    getUserDetails(id){
        return fetch(process.env.REACT_APP_API_URL + '/users/' + id).then((res) => res.json())
    }

    getUserActivity(id){
        return fetch(process.env.REACT_APP_API_URL + '/users/' + id + '/activity').then((res) => res.json())
    }

    
    getUserAverageSession(id){
        return fetch(process.env.REACT_APP_API_URL + '/users/' + id + '/average-sessions').then((res) => res.json())
    }

    
    getUserPerformance(id){
        return fetch(process.env.REACT_APP_API_URL + '/users/' + id + '/performance').then((res) => res.json())
    }

}


// ICI pour switcher en Mock ou API 
let api = new Api()
if(process.env.REACT_APP_API === 'mock'){
    api = new ApiMock()
}
export default api;