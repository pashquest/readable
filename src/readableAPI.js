//Basics are cloned of the Udacity BooksAPI out of the MyRead Project.

//API Url pointing to localhost or Heroku#
const api = "http://localhost:5001"; 
//const api = "https://evening-harbor-34965.herokuapp.com";
//const api = "https://warm-escarpment-40953.herokuapp.com";

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
    //.then(druck => console.log("DRUCK:", druck))

// The posts API Response is different thats why i dont need to process data.
export const getPosts = () =>
  fetch(`${api}/posts`, {headers})
    .then(res => res.json())
    //.then(druck => console.log("DRUCK:", druck))

export const getCategoryPosts= (category) =>
  fetch(`${api}/${category}/posts`, {headers})
    .then(res => res.json())
   // .then(data => console.log("Data getCategoryPost", data))

//-------add POST-------
export const addPost = (post) =>
  fetch(`${api}/posts`, {
      method: 'POST',
      headers: {
          ...headers,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "id": post.id,
          "timestamp": post.timestamp,
          "title": post.title,
          "body": post.body,
          "author": post.author,
          "category": post.category
      })
}).then(res => res.json())

//---- UPDATE POST
export const updatePost = (post) =>
fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "id": post.id,
        "timestamp": post.timestamp,
        "title": post.title,
        "body": post.body,
        "author": post.author,
        "category": post.category
    })
}).then(res => res.json())

export const getPostComments = (PostId) =>
fetch(`${api}/posts/${PostId}/comments`, {headers})
    .then(res => res.json())
    .then(data => data)

//-----------DELETE POSTS---------
export const deletePost = (PostId) =>
fetch(`${api}/posts/${PostId}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
})

//-------add COMMENT-------
export const addComment = (comment) =>
fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "id": comment.id,
        "timestamp": comment.timestamp,
        "body": comment.body,
        "author": comment.author,
        "parentId": comment.parentId
    })
}).then(res => res.json())
//.then(druck => console.log("COMMENT DRUCK", druck))

/*
//---- UPDATE COMMENT
export const updatePost = (post) =>
fetch(`${api}/posts/${post.id}`, {
  method: 'PUT',
  headers: {
      ...headers,
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      "id": post.id,
      "timestamp": post.timestamp,
      "title": post.title,
      "body": post.body,
      "author": post.author,
      "category": post.category
  })
}).then(res => res.json())
*/