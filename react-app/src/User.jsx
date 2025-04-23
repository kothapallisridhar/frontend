
function User(props) {
    const {id, name, age, place} = props

    console.log("props: ", props)
    return(
        <div style={{border: '2px solid skyblue', width: 300, margin: 20}}>
            <h1>Id: {id}</h1>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Place: {place}</h2>
        </div>
    )
}

export default User;