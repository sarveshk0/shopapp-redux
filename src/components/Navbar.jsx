import { IoCartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    const {cart}=useSelector((state)=>state)

    
    return(
      <div>
        <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">

            <NavLink to ="/">
                <div className="ml-5">
                <img src="../logo.png" className="h-14"/>
                </div>
               
            
            </NavLink>

            <div className="flex items-center  text-slate-100 font-medium  mr-5 space-x-6">
                    <NavLink to="/">
                        <div>
                            Home
                        </div>
                    </NavLink>
            
            
             <NavLink to="/cart">
             <div className="relative">
                  <IoCartSharp className="text-2xl text-white" />
                  {
                   cart.length > 0 &&
                   <span className="absolute -top-1 -right-1 bg-green-600 text-xs w-5 h-5 flex justify-center items-center  animate-bounce rounded-full text-white">
                        {cart.length}
                   </span>
                  }
                </div>
             </NavLink>
                

            </div>
        </div>
        </div>
      
    )
}
export default Navbar;
