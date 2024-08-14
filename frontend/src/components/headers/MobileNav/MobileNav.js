import React,{useState} from "react";
import { Link } from "react-router-dom";
import {FaHome, FaSearch, FaUserFriends, FaUserPlus , FaPlusSquare} from "react-icons/fa"
import CreatePost from "../../CreatePost/CreatePost";

const MobileNav = ()=>{
const [isModalOpen,setIsModalOpen] = useState(false);

const openModal= ()=>{
    setIsModalOpen(true)
}
const closeModal= ()=>{
    setIsModalOpen(false)
}

    const SidebarItems = [
        {
            name:"Seach",
            link:"/search",
            icons : <FaSearch className = "text-xl" data-testid="FaSearch"/>
        },
        {
            name:"Followers",
            link:"/followers",
            icons : <FaUserFriends className = "text-xl" data-testid="FaUserFriends"/>
        }
        ,
        {
            name:"Following",
            link:"/following",
            icons : <FaUserPlus className = "text-xl" data-testid="FaUserPlus"/>
        },
       
        {
            name:"Profile",
            link:"/profile",
            icons :<img src ="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Profile" className = "h-5 w-5"/>
        }
    ]
    return (
        <>
  <div>
 <div className = "w-full h-auto">
    <div className = "w-full h-auto flex items-center gap-px-2">
    <Link to="/" className = "w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-300 rounded-md ease-out duration-500 group ">
<FaHome className = "text-xl" data-testid="FaHome"/>
  
     </Link>  
     <div className = "w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-300 rounded-md ease-out duration-500 group " onClick={openModal}>
     <FaPlusSquare className = "text-xl" data-testid="FaPlusSquare"/>
     </div>

     {SidebarItems.map((item)=>(
        <Link to={item.link} key={item.name} className = "w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-300 rounded-md ease-out duration-500 group ">
{item.icons}
     </Link>  
     )     )

     }
    </div>
             </div>
        </div>
        {isModalOpen && <CreatePost closeModal={closeModal}/>}
        </>
      
       
    )
}

export default MobileNav 