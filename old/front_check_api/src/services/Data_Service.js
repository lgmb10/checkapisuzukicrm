import http from '../http_common'

class DataService{
    getSellingSites(){
        return http.get("/selling-sites");
    }
}

export default new DataService();