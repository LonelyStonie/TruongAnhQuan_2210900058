import react from 'react'

export default function TAQ_funcDemo(props) {
    return (
        <div>
            <hr/>
            <h2> function component demo</h2>
            <h3>su dung thuoc tinh tu props</h3>
            <p>username: {props.username}</p>
            <p>fullname: {props.full-name}</p>
            <p>age: {props.age}</p>
        </div>
    )
}