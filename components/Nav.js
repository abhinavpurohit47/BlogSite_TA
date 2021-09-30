import Link from "next/link";

export default function Nav(){
    return (
        <div className="flex">
        <nav className="border-b-2 p-3 border-gray-600 w-full">
            <ul className="flex justify-center list-none" >
                <li className="mr-4">
                    <Link href ="/">
                        <a className="text-xl font-semibold ">
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                <Link href="/add-post">
                    <a className="text-xl font-semibold">Add post</a>
                </Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}