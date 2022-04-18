import axios from "axios";

class RicefwService {
    retrieveDomesticRicefwDetails(region) {
        return axios.get("http://localhost:8080/ricefw/api/domestic/masters");
    }

    deleteRicefwId(ricefwId) {
        console.log(`Deleted Id: ${ricefwId}`);
    }

    getRicefwItem(ricefwId) {
        return axios.get(
            `http://localhost:8080/ricefw/api/domestic/masters/${ricefwId}`
        );
    }

    updateRicefwItem(ricefwId, ricefwItem) {
        return axios({
            method: "put",
            url: `http://localhost:8080/ricefw/api/domestic/masters/${ricefwId}`,
            data: ricefwItem,
        });
    }
}

export default new RicefwService();