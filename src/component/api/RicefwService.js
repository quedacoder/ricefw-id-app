import axios from "axios";

class RicefwService {
    async retrieveDomesticRicefwDetails(region) {
        return await axios.get("http://localhost:8080/ricefw/api/domestic/masters");
    }
}

export default new RicefwService();