import {useState} from "react";

export function PostEditor(props) {
    const [title, setTitle] = useState("Your Title");
    const [body, setBody] = useState("Your Body");
    const [lastId, setLastId] = useState(props.lastId);

    function onSubmitHandler() {
        setLastId(lastId+1);
        props.onCreate({title, body, date: new Date().toISOString(), id: lastId});
    }

    function onCancelHandler() {
        setTitle("Your Title");
        setBody("Your Body");
        props.onCancel();
    }

    return (<div className={"Container"}>
        <h1>Create posts:</h1>

        <label>
            Title:
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} onBlur={() => {
                if (title)
                    return;

                setTitle("Your Title");
            }} onFocus={() => setTitle("")}/>
        </label>

        <label>
            <textarea value={body} cols="30" rows="10" onChange={e => setBody(e.target.value)} onBlur={() => {
                if (body)
                    return;

                setBody("Your Body");
            }} onFocus={() => setBody("")}>{body}</textarea>
        </label>

        <button onClick={onSubmitHandler}>Submit</button>
        <button onClick={onCancelHandler}>Cancel</button>

    </div>);
}