import React, { useEffect, useState } from 'react'
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export const Posts = () => {
  const [data, setData] = useState([]);  
  useEffect(() => {
    fetch(BASE_URL).then(res => res.json())
    .then(data => console.log(data))
  }, [])
  return (
    <div>
       <h1>Posts</h1> 
    </div>
  )
}
