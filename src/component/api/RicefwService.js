import axios from "axios";

class RicefwService {
    retrieveDomesticRicefwDetails(region) {
        return axios.get("http://localhost:8080/ricefw/api/domestic/masters");
    }

    deleteRicefwId(ricefwId) {
        console.log(`Deleted Id: ${ricefwId}`);
    }
}

export default new RicefwService();