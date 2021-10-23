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
         // post structure
         let post = {
            title,
            content,
            published: false,
            createdAt: new Date().toISOString(),
        };
        // save the post
        let response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
        });

        // get the data
        let data = await response.json();

        if (data.success) {
            // reset the fields
            setTitle('');
            setContent('');
            // set the message
            return setMessage(data.message);
        } else {
            // set the error
            return setError(data.message);
        }
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
                            <h3 className="bg-green-600 rounded-sm">{message}</h3>
                        </div>
                    ) : null}
                    <div className="block w-full p-3">
                        <label className="block text-2xl">Title</label>
                        <input
                        className="w-full p-1 ml-4 text-black bg-transparent border-2 rounded-lg outline-none "
                            type="text"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder="Title"
                        />
                    </div>
                    <div className="flex flex-col  w-full p-3">
                        <label className="block text-2xl">Content</label>
                        <textarea
                        className="w-full p-1 ml-4 text-black bg-transparent border-2 rounded-lg outline-none "
                            name="content"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            placeholder="Post content"
                        />
                    </div>
                    <div className="block w-full p-3">
                        <button type="submit" className="justify-center block float-right p-2 text-black bg-transparent border-2 outline-none cursor-pointer rounded-xl text-bold">Add post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}