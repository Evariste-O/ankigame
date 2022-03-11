export default function fetchJson(apiEndpoint){
    return fetch(apiEndpoint)
          .then(response => response.json())
          .catch(error => console.log(error))
}