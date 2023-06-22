import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    return ( 
        <div className="create">
            <h2>Add New Post</h2>
            <form>
            <label>Blog title: </label>
            <input type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>

            <label>Blog body: </label>
            <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}>
            required
            </textarea>

            <label>Blog author: </label>
            <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="mario"></option>
                <option value="yoshi"></option>
            </select>

            <button className='create-button'>Add Blog</button>
            </form>
            <p>{title}</p>
        </div>
     );
}
 
export default Create;
