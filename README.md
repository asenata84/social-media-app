# React Assessment
Your task is to create a Facebook-like React app that allows the user to select favourite users(authors) and see their posts and posts comments.

The assessment uses the mock API at https://jsonplaceholder.typicode.com/.
The API provides data for users (posts authors), posts and post comments.
See `/src/api.js`.

## Main Tasks
1. Complete the implementation of `Authors.jsx` component that lists all the authors returned from `api.getAuthors` and allows the user to select favorite authors.
2. List the selected authors' posts in the Feed component by using the `Post.jsx` component.
3. On a click on `View post comments` button show the `PostComments.jsx` component with the comments for that post. Complete the implementation of the `PostComments.jsx` component so that it shows each comment name, body, email.