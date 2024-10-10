import { API_ROUTES } from "./constants";
import simpleFetch from "./simpleFetch";

export default async function getLegislatorsVotes() {
    const url = `${process.env.REACT_APP_API_URL}${API_ROUTES.LEGISLATORS_VOTES}`;
    return simpleFetch(url);
}