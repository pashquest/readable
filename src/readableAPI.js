//Basics are cloned of the Udacity BooksAPI out of the MyRead Project.
import App from './App'

//API Url pointing to localhost or Heroku
const api = "http://localhost:5001"; 
//const api = "https://evening-harbor-34965.herokuapp.com";

// Generate a unique token for storing data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

//fetch data from URL, res = > decode the body as JSON and return it as promise, 
//data = >  return the categories out of the data (decoded body as promise).
export const getCategories = () =>
  fetch(`${api}/categories`, {headers})
    .then(res => res.json())
    .then(data => data.categories)

// The posts API Response is different thats why i dont need to process data.
export const getPosts = () =>
  fetch(`${api}/posts`, {headers})
    .then(res => res.json())

export const getCategoryPosts= (category) =>
  fetch(`${api}/${category}/posts`, {headers})
    .then(res => res.json())
    .then(data => console.log("Data getCategoryPost", data))
    

/*
export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query, maxResults) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.books)

*/
