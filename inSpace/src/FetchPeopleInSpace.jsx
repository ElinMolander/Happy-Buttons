
import { useState, useEffect} from 'react'
function FetchPeopleInSpace(){

const [peopleInSpace, setPeopleInSpace] = useState([])
useEffect(()=>{
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(data => setPeopleInSpace(data))
},[1])

 console.log(peopleInSpace)
    return <p>People in space right now {peopleInSpace.number}</p>
}

export default FetchPeopleInSpace