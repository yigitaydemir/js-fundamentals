async function get(url){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

get("https://jsonplaceholder.typicode.com/posts")