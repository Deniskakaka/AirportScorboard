import moment from 'moment';
import axios from 'axios';

const baseUrl = `https://api.iev.aero/api/flights/${moment().format(
    'DD-MM-YYYY'
)}`;

export const FetchFly = () => {
    return axios.get(baseUrl)
        .then((response) => response.data.body)
        .catch((error) => console.log(error));
};
