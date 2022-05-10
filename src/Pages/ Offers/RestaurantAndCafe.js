import React from 'react'
import { Link } from 'react-router-dom';
import Std_Master from '../../Master/Std_Master'
import Enox_1 from '../../Gfx/Enox_1.jpeg'
import Mac from '../../Gfx/Mac.png'
import undraw_1 from '../../Gfx/undraw_1.png'
import undraw_2 from '../../Gfx/undraw_2.png'
import undraw_3 from '../../Gfx/undraw_3.png'
import kort_terminal from '../../Gfx/kort_terminal.png'
import kort_terminal_1 from '../../Gfx/kort_terminal_1.png'
import Enox_SmartCash from '../../Gfx/Enox_SmartCash.gif'
import undraw_4 from '../../Gfx/undraw_4.png'
import Enox_SmartCash_1 from '../../Gfx/Enox_SmartCash_1.gif'
import group_8 from '../../Gfx/group_8.png'
import Sigill_rosa from '../../Gfx/Sigill_rosa.png'
import bg_kontakt_card from '../../Gfx/bg_kontakt_card.png'
import Group_16 from "../../Gfx/Group_16.png"
import Enox_SmartCash_2 from "../../Gfx/Enox_SmartCash_2.png"
import NewCard from '../../Components/NewCard'
import { FcOk } from "react-icons/fc";


/* import Fade from 'react-reveal/Fade'; */



export default function RestaurantAndCafe() {
    return (
        <Std_Master Title="RESTAURANG & CAFE" inner={
            <div>
            <div className="grid gap-y-24">
                <div className="grid grid-cols-5 w-full lg:px-48 items-center border-b gap-4">
                    <div className="lg:col-span-2 col-span-5 px-2 mx-2 relative">
                    <p class="hidden md:block text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Ett kassasystem skapad för<br/> Restaurang, Bar Caféverksamhet!</p>
                            <p class="block md:hidden text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Ett kassasystem skapad för Restaurang, Bar Caféverksamhet!</p>
                            <div className="md:w-full mt-4">
                                <h2 class="font-medium text-gray-500">
                                    Med vårt kassasystem Enox kan du räkna med en stor effektivisering i användandet av ditt nya kassasystem. <br/>
                                    Med Enox kassasystem kan du enkelt använda bordskartan för att spara bordsbeställningar, dela era notor och bonga beställningar till köket.
                                    Här erbjuds en kassa som verkligen underlättar din försäljning. Boka tid för en demo helt kostnadsfritt.
                                </h2>

                            <div className="flex justify-end w-full py-8">
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr from-[#F85DA7] via-[#FB58A5] to-[#F41F84] text-white py-[6px] px-4 rounded-md w-[180px]'> Boka demo </Link>
                            </div>
            
                            </div>
                    </div>
                    <div className="lg:col-span-3 col-span-5 ">
                        <div className="col-span-1 md:h-[600px] h-[300px] bg-cover bg-no-repeat" style={{backgroundImage: "url(" + Enox_SmartCash_2 + ")"}}></div>
                    </div>
                    </div>

                <div className="grid grid-cols-2 pt-12 mx-48">
                
                <div className="col-span-1 h-[600px] bg-contain bg-no-repeat" style={{backgroundImage: "url(" + Enox_SmartCash_1 + ")"}}></div>
                
                
                    <div className="col-span-1 mx-4"> {/* mx-32 */}
                        <div className="grid grid-rows-6 h-[600px]">
                            <div className="row-span-1 h-full px-4">
                                <h2 className="text-xl -ml-1 font-bold tracking-tight text-gray-900">
                                        Fördelar med att använda Enox <br/> som sitt kassasystem:
                                </h2>
                            </div>
                            <div className="row-span-5 h-full px-4">
                            <div class="relative overflow-hidden">
                                <img src={group_8} class="object-cover md:w-full md:h-full" />
                                <div class="absolute w-full py-2.5 top-0 inset-x-0 ">
                                    
                                        {/* <p className="mt-4 text-md font-semibold text-gray-700">
                                            Fri support & kostnadsfria uppdateringar
                                        </p> */}
                                        <p className=" flex mt-4 text-md text-lg text-gray-700">
                                            <div className="mt-[3px] pr-1"><FcOk /></div> Fri support & kostnadsfria uppdateringar
                                        </p>
                                    
                                    <p className="mt-4 text-md font-semibold text-gray-700">
                                        Inga dolda avgifter
                                    </p>
                                    <p className="mt-4 text-md font-semibold text-gray-700">
                                        Snabb & stabil prestanda i alla våra kassor
                                    </p>
                                    <p className="mt-4 text-md font-semibold text-gray-700">
                                        Enkelt att använda kassan i försäljningsläge samt admin
                                    </p>
                                    <p className="mt-4 text-md font-semibold text-gray-700">
                                        Rapporter görs per automatik, du kan fokusera på att sälja
                                    </p>
                                    <p className="mt-4 text-md font-semibold text-gray-700">
                                        Integrationer mot program som swish, fortnox, personalkollen, caspeco och mycket mer.
                                    </p>
                                    <p className="mt-4 text-md font-semibold text-gray-700">
                                        Kompatibelt med Sveriges största leverantörer av kortterminaler
                                    </p>
                                    
                                </div>
                            </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-6 pt-14 lg:px-48">
                <div className="md:col-span-6 col-span-1 h-[100px] font-bold flex justify-center py-8 text-3xl">FUNKTIONER</div>
                    <div className="col-span-2 shadow-lg rounded-lg mx-2 my-2 ease-in-out hover:shadow-2xl">
                        <img src={undraw_4} className="md:w-[450px] md:h-[350px]" />
                        <div className=" flex justify-center">
                            <h2 className="text-4xl font-bold text-gray-700 sm:text-4xl">Card 1</h2>
                        </div>
                        <div className=" px-6 py-4">
                            <p className=" flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Bordshantering
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Sökfält inbyggt i kassan för att snabbt kunna söka upp kvitton, kunder & artiklar
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Rapporter i pdf format skickat direkt till din mejladress & er ekonomiansvarig/revisor
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Pay@Table ( öppna upp notor vid bordet och ta betalt direkt i kortterminalen)
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Artiklar kopplade till meddelanden
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Bongsystem för köket (koppla hur många bongar du vill)
                            </p>
                        </div>
                    </div>

                    <div className="col-span-2 shadow-lg rounded-lg mx-2 my-2 ease-in-out hover:shadow-2xl">
                        <img src={undraw_1} className="md:w-[450px] md:h-[350px]" />
                        <div className=" flex justify-center">
                            <h2 className="text-4xl font-bold text-gray-700 sm:text-4xl">Card 2</h2>
                        </div>
                        <div className=" px-6 py-4">
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Drickshantering enligt Skatteverkets nya krav
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Kortterminal kopplad till kassan
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Kunddisplay där du kan lägga upp företagsreklam eller tillbehör för merförsäljning
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Inbyggt fakturasystem
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Backoffice
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Elektroniskt kvitto (välj att antingen mejla kvittot eller arkivera med ett knapptryck)
                            </p>
                        </div>
                    </div>
                    

                    <div className="col-span-2 shadow-lg rounded-lg mx-2 my-2 ease-in-out hover:shadow-2xl">
                        <img src={undraw_2} className="md:w-[450px] md:h-[350px]" />
                        <div className=" flex justify-center">
                            <h2 className="text-4xl font-bold text-gray-700 sm:text-4xl">Card 3</h2>
                        </div>
                        <div className=" px-6 py-4">
                        <p className="flex mt-4 text-sm font-serif text-gray-500">
                            <div className="mt-[3px] pr-1"><FcOk /></div> Lagerhantering
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Ordersystem med nummer (via skärm eller pappersformat)
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Pucksystem där du kan ange pucknummer som skrivs ut på kvittot
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Samla bongar för att skicka ordrar tillsammans
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Bokningskalender med e-post bekräftelse
                            </p>
                            <p className="flex mt-4 text-sm font-serif text-gray-500">
                                <div className="mt-[3px] pr-1"><FcOk /></div> Presentkort/Rabattkort & Lunchkort (pappersform eller plastkort)
                            </p>  
                        </div>
                    </div>
                </div> 
            </div>


        <div className="flex justify-center items-center text-center">
            <div className="md:block hidden relative bg-gray-100 w-[800px] h-[500px] rounded-lg mt-10 bg-cover" style={{backgroundImage: "url(" + bg_kontakt_card + ")"}}>
                    <div className="">
                    <div className="bg-gray-50 w-[600px] h-[370px] mt-[100px] mx-[100px] ease-in-out hover:shadow-2xl rounded-lg py-6">
                        <div className="grid grid-cols-4" /* style={{backgroundImage: "url(" + group_8 + ")"}} */>
                        <div className="absolute top-[-40px] left-0 z-10 w-[75px] h-[75px] mt-[100px] mx-[350px] shadow-lg ease-in-out hover:shadow-2xl rounded-full py-6 bg-cover boreder-2 border-black-" style={{backgroundImage: "url(" + Sigill_rosa + ")"}}></div>
                            <div className="flex justify-center col-span-4 text-center">
                                <h2 className="flex justify-center text-gray-800 text-2xl font-bold tracking-tight mt-4">
                                    VILL DU VETA MER? <br /> SKICKA EN FÖRFRÅGAN IDAG.
                                </h2>
                            </div>
                            <div className="flex justify-center col-span-4 pb-8">
                                <h2 className="font-medium text-gray-700">
                                    Vi ringer up dig
                                </h2>
                            </div>
                            <div className="col-span-2 px-2 mx-2 w-full">
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> NAMN/FÖRETAG </label> */}
                                <input placeholder="NAMN/FÖRETAG" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            <div className="col-span-2 px-2 mx-2">    
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> TELEFON </label> */}
                                <input placeholder="TELEFON" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            
                            <div className="col-span-4 px-2 mx-2 py-6">
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> E-POST </label> */}
                                <input placeholder="E-POST" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />

                                <div className="col-span-4 py-8 flex justify-center">
                                    <button className="flex justify-center bg-[#F01E82] text-white py-[8px] px-4 rounded-md w-[220px]" >Skicka</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>


            {/* Mobile */}
            <div className="relative md:hidden flex justify-center px-2 bg-gray-50 mx-4 mt-8 ease-in-out hover:shadow-2xl rounded-lg py-6 bg-no-repeat bg-cover" style={{backgroundImage: "url(" + Group_16 + ")"}}>
                        <div className="grid grid-cols-4" /* style={{backgroundImage: "url(" + group_8 + ")"}} */>
                        {/* <div className="absolute top-[-40px] left-0 z-10 w-[75px] h-[75px] mt-[100px] mx-[350px] shadow-lg ease-in-out hover:shadow-2xl rounded-full py-6 bg-cover boreder-2 border-black-" style={{backgroundImage: "url(" + Sigill_rosa + ")"}}></div> */}
                            <div className="flex justify-center col-span-4 text-center">
                                <h2 className="flex justify-center text-gray-800 text-2xl font-bold tracking-tight mt-4">
                                    VILL DU VETA MER? <br /> SKICKA EN FÖRFRÅGAN IDAG.
                                </h2>
                            </div>
                            <div className="flex justify-center col-span-4 pb-8">
                                <h2 className="font-medium text-gray-700">
                                    Vi ringer up dig
                                </h2>
                            </div>
                            <div className="col-span-2 px-2 mx-2 w-full">
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> NAMN/FÖRETAG </label> */}
                                <input placeholder="NAMN/FÖRETAG" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            <div className="col-span-2 px-2 mx-2">    
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> TELEFON </label> */}
                                <input placeholder="TELEFON" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            
                            <div className="col-span-4 px-2 mx-2 py-6">
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> E-POST </label> */}
                                <input placeholder="E-POST" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />

                                <div className="col-span-4 py-8 flex justify-center">
                                    <button className="flex justify-center bg-[#F01E82] text-white py-[8px] px-4 rounded-md w-[220px]" >Skicka</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
        </div>
        } />
    )
}
