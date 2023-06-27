
import axios from "axios";
const EMPLOYEE_URL = 'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020';

export const getAllEmployee = async () => {
    const response = await axios.get(EMPLOYEE_URL);
 
    return response.data;

}