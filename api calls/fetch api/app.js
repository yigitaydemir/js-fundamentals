// fetch data from local json file

function getJsonFile () {
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

// getJsonFile()

// fetch data from an external api

function getExternalApi () {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

// getExternalApi()