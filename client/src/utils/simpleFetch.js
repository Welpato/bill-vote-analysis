export default function simpleFetch(url) {
    return fetch(url).then(result => result.json());
}