import { Navbar } from "../components/navbar";

export function Offres(){

   const etapes=[
      {
         num:1,
         title:"choisissez une offre",
         content:"pacourir les offres publiées"
      },

      {
         num:2,
         title:"Remplissez le formulaire",
         content:"Vos informations et votre cv"
      },

      {
         num:3,
         title:"Reserver un creneau",
         content:"choisissez l'heure de votre entretien"
      }
   ]

   return (
   
   <>
      <Navbar/>

      {/* hero section  */}
      <main className="bg-black min-h-1/2 pt-2  sm:pt-10">

        <div  className=" w-full max-w-6xl flex flex-col gap-6 p-4 sm:flex-row mx-auto">

          <section className="flex flex-col gap-4 flex-3">
           {/* bmp-hub-stage */}
           <div className="border border-solid bg-pink-500/25 w-fit p-2 rounded-full animate-fad-up">
              <p className="text-white text-xs animate-pulse">BMP-HUB.Stages</p>
           </div>

             {/* grand texte */}
            <h1 className="text-white animate-fad-up [animation-delay:0ms] text-xl sm:text-3xl font-bold">Déposez votre demande de stage en quelque minutes</h1>

            <p className="text-gray-400 animate-fad-up [animation-delay:150ms] text-xs">consulter les offres disponibles.envoyez votre CV et choisissez directement un creneau de rendez-vous . Aucun compte à créer.</p>

            {/* boutons CTA */}
            
            <div className="flex gap-4">

              <div className="animate-fad-up [animation-delay:300ms] transition hover:shadow-lg hover:shadow-blue-600 hover:-translate-y-0.5 duration-300 hover:scale-95 hover:bg-blue-500 w-fit bg-blue-600 rounded-xl text-white p-4 text-xs">
               <button>Deposer une demande</button>
              </div>

               <li className="animate-fad-up [animation-delay:450ms]transition hover:shadow-lg hover:shadow-gray-600 hover:-translate-y-0.5 duration-300 hover:scale-95  list-none w-fit p-2 rounded-xl flex justify-center items-center border border-gray-600 text-white text-[10px] sm:p-4 sm:text-xs" >
                <a href="#">Voir les offres</a>
               </li>

            </div>
           </section>

           <section className="flex-1">
            {/* etapes */}
             <div className="animate-fad-left [animation-delay:300] border border-gray-500 w-fit p-2 md:p-8 rounded-xl bg-gray-900/80">
               <p className="uppercase text-blue-600/70 font-bold">en 3 étapes</p>
               {
                  etapes.map((e)=>(

                     <div key={e.num} className="text-white flex items-center text-xs gap-2 mt-4">

                        <article className="w-5 h-5 font-bold bg-blue-700 flex justify-center items-center rounded-xs">
                           <span>{e.num}</span>
                        </article>

                        <article>
                          <h1>{e.title}</h1>
                          <p className="text-gray-500">{e.content}</p>
                        </article>  

                     </div>
                  ))
               }

             </div>
           </section>

        </div>  

      </main>
   </>   
   )
}