import { API_ROUTES } from "./constants";
import simpleFetch from "./simpleFetch";

export default async function getBillsResults() {
    const url = `${process.env.REACT_APP_API_URL}${API_ROUTES.BILLS_RESULTS}`;
    return simpleFetch(url);
}