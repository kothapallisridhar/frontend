import React, { useEffect, useState } from 'react'
import axios from 'axios'
const BASE_URL = "https://jsonplaceholder.typicode.com/albums";

export const PostsTwo = () => {
  const [data, setData] = useState([]); 
  useEffect(() => {
    axios.get(BASE_URL).then(res=>setData(res.data))
  }, []) 
  return (
    <div>
        {console.log("Posts is called")}
        {data.map(element => {
            return (
                <>
                <li key={element.id}>{element.id} {"--"} {element.title}</li>
                </>
            )
        })}
    </div>
  )
}
