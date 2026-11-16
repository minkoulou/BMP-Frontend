import { useState } from "react";
import { Menu,X } from "lucide-react";


export  function Navbar () {
    const [open,setOpen]=useState(false)

    const handleToggle =()=>{
      setOpen(!open);
    }

     return(
        <>
          <header className="w-full z-50  h-10 flex itmes-center justify-center">

            <nav className="flex bg-white w-full max-w-6xl p-4 justify-center items-center">

               {/* logo + nom de l'application */}

                <div className="flex gap-2  items-center pl-4 flex-1">
                  <img src="/favicon-16.png" alt="logo-BMPN-HUB" className="w-5 h-5 "/>
                  <span className="font-bold font-inter text-xl">BMP<strong className="text-blue-700">HUB</strong></span>
               </div>


               {/* btn offres et boutons  pour desktop*/}

               <div className=" hidden font-inter sm:text-[13.5px] p-2 sm:flex-2 sm:flex  sm:items-center sm:justify-end  sm:gap-4">
                 {/* Offres  */}
                 <a href="#offre" className="hover:text-blue-700 hover:text-[14px] transition-hover duration-200 delay-75 hover:-translate-y-1">Offres</a>
                 <a href="#" className="hover:text-blue-700 hover:text-[14px] transition-hover duration-200 delay-75 hover:-translate-y-1">Comment postuler</a>

                 <div>
                  <button className="rounded-[5px] bg-blue-50 p-1 cursor-pointer transition delay-150 hover:-translate-y-1 hover:scale-100 duration-300 ">Espace admin</button>
                 </div>

                 <button className="border border-solid rounded-[5px] bg-blue-900 text-white p-1 cursor-pointer transition delay-150 hover:-translate-y-1 hover:scale-100 duration-300 ">Postuler</button>
               </div>



               {/* btn offres et boutons  pour mobile*/}

              { open && <div onClick={handleToggle} className="font-inter sm:hidden flex text-[13px] p-3 justify-center itmes-center flex-col bg-white/10 backdrop-blur-md z-50 gap-6 fixed right-0 top-10 w-full h-1/3">
                 {/* Offres  */}
                 <a href="#offre" className="animate delay-0 text-white">Offres</a>

                 {/* comment postuler */}
                 <a href="#" className="animate delay-600 text-white">Comment postuler</a>

                 {/* bouton espace admin */}
                 <div >
                  <button className="animate delay-750 hover:bg-blue-500 border bg-blue-50 border-solid rounded-[5px] p-2">Espace admin</button>
                 </div>
                 
                 {/* bouton postuler */}
                 <div className="w-full flex ">
                  <button className="animate delay-900 border bg-blue-800 text-white border-solid rounded-[5px] pl-6 pt-2 pb-2 pr-6">Postuler</button>
                 </div>

               </div>}
               
               {/* hamburger menu */}

               <button onClick={handleToggle} arial-label={open ? "Fermer le menu":"ouvrir le menu"} aria-expanded={open} className="sm:hidden" type="button">
                 {open ? <X strokeWidth={2.5}/>:<Menu strokeWidth={2.5}/> }
               </button>

            </nav>

          </header>
           
        </>
     )
}
