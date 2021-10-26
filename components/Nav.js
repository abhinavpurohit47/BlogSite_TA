import Link from "next/link";

export default function Nav(){
    return (
        // <div className="flex">
        // <nav className="border-b-2 p-3 border-gray-600 w-full">
        //     <ul className="flex justify-center list-none" >
        //         <li className="mr-4">
        //             <Link href ="/">
        //                 <a className="text-xl font-semibold ">
        //                     Home
        //                 </a>
        //             </Link>
        //         </li>
        //         <li>
        //         <Link href="/add-post">
        //             <a className="text-xl font-semibold">Add post</a>
        //         </Link>
        //         </li>
        //         <li className="flex list-none items-end ml-20">Dark</li>    
        //     </ul>
        // </nav>
        // </div>

        <div class="container mx-auto bg-purple-300 p-5">
    <nav class="flex-row md:justify-between">
        <div class="flex flex-row justify-between">
           {/* <a href="#">Logo</a> */}
           <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/dxjqoygy.json"
    trigger="hover"
        className="w-52 h-52"
    stroke="100"
>
</lord-icon>
           <a href ="/">
           <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/wxnxiano.json"
    trigger="hover"
    className=" w-96 h-96"
    stroke="100"
    >
</lord-icon>
         </a>
<div className="flex flex-row text-white bg-purple-700 rounded-lg justify-center p-1 pr-2">
<a href="/add-post" className="text-xl flex font-semibold">
<script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/wloilxuq.json"
    className="w-52 h-52 flex m-1"
    trigger="hover"
    colors="primary:#121331,secondary:#8930e8"
    stroke="96"
    >
</lord-icon>
Add post</a></div>
        </div>
       
        <ul class="hidden md:flex md:flex-row" id="mobileMenu">
            <li class="pr-5"><a> Services </a></li>
            <li class="pr-5"><a>Porfolio</a></li>
            <li class="pr-5"><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
    </nav>
</div>
    )
}
