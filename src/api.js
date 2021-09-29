

class ApiMock{

    getUserDetails(id){
        return Promise.resolve({
            id: 1,
            firstname: 'Erwan'
        })
    }

}

class Api {
    
    getUserDetails(id){
        return fetch(process.env.REACT_APP_API_URL + '/users/' + id).then((res) => res.json())
    }
}

let api = new Api()
if(process.env.REACT_APP_API === 'mock'){
    api = new ApiMock()
}
export default api;