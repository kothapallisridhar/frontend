
function User(props) {
    const {name, age, place} = props

    console.log("props: ", props)
    return(
        <>
        <h1>User name: {name} </h1>
        <h2>Age: {age}</h2>
        <h2>Place: {place}</h2>
        
        </>
    )
}

export default User;