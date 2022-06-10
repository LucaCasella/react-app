import {useState} from "react";

export function PostEditor(props) {
    const [title ,setTitle] = useState("Your Title");
    const [body ,setbBody] = useState("Your Body");

    function onSubmitHandler() {
        props.onCreate({title, body, date: new Date().t})
    }

    return <div className={"Container"}>
        <h1>Create posts:</h1>
        <label>Title:
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        </label>

        <label>
            <textarea value={body} cols="30" rows="10" onChange={e => setbBody(e.target.value)}>{body}</textarea>
        </label>

        <button onClick={onSubmitHandler}>Submit</button>
    </div>;
}