import { API_ROUTES } from "./constants";

export default async function getLegislatorsVotes() {
    const url = `${process.env.REACT_APP_API_URL}${API_ROUTES.LEGISLATORS_VOTES}`;
    const result = await fetch(url);
    return result.json();
}