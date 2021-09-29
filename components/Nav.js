import Link from "next/link";

export default function Nav(){
    return (
        <nav className="bottom-2 border-gray-600 w-full">
            <ul className="flex justify-center list-none" >
                <li className="mr-4">
                    <Link href ="/">
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                <Link href="/add-post">
                    <a>Add post</a>
                </Link>
                </li>
            </ul>
        </nav>
    )
}