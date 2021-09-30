import { useState } from 'react';

import Nav from '../components/Nav';


export default function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!title || !content) return setError('All fields are required');
    };

    return (
        <div>
            <Nav />
            <div className="flex flex-col">
                <form onSubmit={handlePost} className="w-full">
                    {error ? (
                        <div className="block w-full m-3">
                            <h3 className="bg-red-600">{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div className="block">
                            <h3 className="bg-green-600">{message}</h3>
                        </div>
                    ) : null}
                    <div className="block w-full p-3">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder="title"
                        />
                    </div>
                    <div className="block w-full p-3">
                        <label>Content</label>
                        <textarea
                            name="content"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            placeholder="Post content"
                        />
                    </div>
                    <div className="block w-full p-3">
                        <button type="submit">Add post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}