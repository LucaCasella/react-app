import './HelloWorld.css'

export function HelloReact(props) {
    return <div className={"centered"}>HelloReact! My name is {props.name}</div>;
}