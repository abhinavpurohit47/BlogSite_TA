import { useState } from "react";
import { useRouter } from "next/router";

export default function PostCard({ post }) {
    return  (
        <div className="flex">
            <li>
                <h3 className="text-xl font-semibold text-gray-700">{post.title}</h3>
                <p className="text-xl font-semibold text-gray-700">{post.content}</p>
                <small className="text-xl font-semibold text-gray-700">{new Date(post.createdAt).toLocaleDateString()}</small>
                <br />
                <button type = "button" className=" border-2 rounded-xl p-0.5 border-gray-600">
                    {'Publish'}
                </button>
                <button type = "button" className=" border-2 rounded-xl m-4 p-0.5 border-gray-600">
                    {'Delete'}
                </button>
            </li>
        
        </div>
    )
}