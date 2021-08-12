import React ,{useState} from "react";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addNewPost } from "../../redux/usersReducer";

import "./new-post-form.scss";

const PostForm = (props) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const [titleDirty, setTitleDirty] = useState(false);
    const [bodyDirty, setBodyDirty] = useState(false);

    const [titleError, setTitleError] = useState("Title can not be empty");
    const [bodyError, setBodyError] = useState("Body can not be empty");

    const [formValid, setFormValid] = useState(false);

    const dispatch = useDispatch();

    const addPost = (e) => {
        e.preventDefault();
       dispatch(addNewPost({title, body}));
       props.closeModal(false);
    };

    useEffect(() => {
        if (titleError || bodyError) {
            setFormValid(false)
        } else {
            setFormValid(true);
        }
    }, [titleError, bodyError])

    const handleInputChange = (e) => {
        setTitle(e.target.value);

        if(title === "") {
            setTitleError("fill in the title");
        } else {
            setTitleError("")
        }
    }

    
    const handleTextareaChange = (e) => {
        setBody(e.target.value);

        if(body === "") {
            setBodyError("fill in the body");
        } else {
            setBodyError("")
        }
    }

    const blurHandler = (e) => {
        switch(e.target.name) {
            case "title":
                setTitleDirty(true)
                break;
            case "body": 
                setBodyDirty(true)
                break;
            default:
                return ""
        }
    }


    return (
        <form onSubmit={addPost} className="modal-form">
            <p>Title:</p>
            {(titleDirty && titleError) && <div style={{color: "red"}}>{titleError}</div>}
            <input type="text"
                name="title"
                onBlur={(e) => blurHandler(e)}
                onChange={handleInputChange}
                value={title}
                className="input-form"
                placeholder="text.." />
            <p>Your text:</p>
            {(bodyDirty && bodyError) && <div style={{color: "red"}}>{bodyError}</div>}
            <textarea name="body"
                onBlur={(e) => blurHandler(e)}
                value={body}
                onChange={handleTextareaChange}
                className="textarea-form">
            </textarea>
            <button disabled={!formValid} type="submit" className="btn-form">Post</button>
        </form>
    )
}

export default PostForm;