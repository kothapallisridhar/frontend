import React, { useEffect, useLayoutEffect, useState } from 'react'

export const AppFun = () => {
  const [content, setContent] = useState("");
  console.log("page life cycle is started");
  useEffect(() => {
    console.log("useEffect hook")
  }, [])

  useLayoutEffect(() => {
    console.log("useLayoutEffect hook")
  }, [])

  const contentChangeHandler = (event) => {
    console.log(event.target.value);
    setContent(event.target.value);
  }
  return (
    <>
    {console.log("page rendering is started")}
    <div>
      <h1>{content}</h1>
      <label>Enter Content </label>
      <input type='text' onChange={contentChangeHandler}/>
    </div>
    {console.log("page rendering is done")}
    </>
  )
}
