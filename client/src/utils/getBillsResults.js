import { API_ROUTES } from "./constants";

export default async function getBillsResults() {
    const url = `${process.env.REACT_APP_API_URL}${API_ROUTES.BILLS_RESULTS}`;
    const result = await fetch(url);
    return result.json();
}