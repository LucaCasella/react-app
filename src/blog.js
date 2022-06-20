import {useState, useEffect} from "react";
import "./Blog.css";
import {PostList} from "./postsList";
import * as Consts from "./Consts";
import {PostEditor} from "./postEditor";
import {LoadingIndicator} from "./loadingIndicator";
import {LIST, EDITOR, API_URL} from "./Consts";


export function Blog(props) {
    const [posts, setPosts] = useState(mockPosts);
    const [view, setView] = useState(Consts.LIST);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        if (view === LIST){
            fetch(Consts.API_URL)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Request Failed")
                })
                .then(posts => {
                    setPosts(posts);
                    setLoading(false);
                });
        }

    }, [view]);

    function onClickHandler() {
        setView(EDITOR);
    }

    function onCancelHendler(){
        setView(LIST);
    }

    // function onCreateHandler(p) {
    //     fetch(API_URL, {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(p)
    //     })
    //         .then(response => {
    //             if (!response.ok) throw new Error("Post creation failed");
    //         })
    //         .catch(ex => console.error('failure', ex))
    //         .finally(() => {
    //             setView(LIST);
    //         });
    // }

    // usage
    if (view === Consts.EDITOR){
        return <PostEditor onCreate={p => setPosts([p, ...posts])} lastId={mockPosts[0].id}/>
    }

    return <>
        <button onClick={onClickHandler}>Add Post</button>
        <PostList posts={posts}/>
    </>;

    // return <>
    //     { view !== EDITOR && <button onClick={onClickHandler}>Add Post</button>}
    //     { loading && view !== EDITOR && <LoadingIndicator color={"#ff4400"} size={"10em"} />}
    //     { !loading && view !== EDITOR && <PostList posts={posts} /> }
    //     { view === EDITOR && <PostEditor onCreate={onCreateHandler} lastId={posts[0].id} onCancel={onCancelHandler} /> }
    // </>;

}
//se non voglio un wrapper uso un react fragment <> </> sembra che ci sia un wrapper ma non c'è, siamo sulla root


const mockPosts = [
    {
        id: "2",
        date: "2019-08-23T18:25:43.511Z",
        title: "Some notes from me",
        body: `I also believe it's important for every member to be involved and invested in our company and this is one way to do so. Curate.
        Guerrilla marketing we don't want to boil the ocean we need to leverage our synergies touch base
        The sprint is over please use "solutionise" instead of solution ideas! :)
        Push back digitalize yet enough to wash your face, or low-hanging fruit horsehead offer, for Bob called an all-hands this afternoon that ipo will be a game-changer.
        `
    },
    {
        id: "1",
        date: "2019-09-22T14:12:21.511Z",
        title: "To be or not to be",
        body: `Self law truth moral will gains. Marvelous self burying battle virtues eternal-return.
        Chaos of madness ultimate moral moral play victorious faith ubermensch pious will.
        Zarathustra will burying christianity enlightenment decrepit christian ocean gains. Good ocean strong  grandeur free superiority zarathustra selfish inexpedient reason.
        Decrepit ultimate chaos.
        `
    }
];