import React, {useState} from 'react'
import download from "../Gfx/download.jpeg";
import Kassa from "../Gfx/Kassa.png";
import Enox_Kassa from "../Gfx/Enox_Kassa.png";
import test_7 from '../Gfx/test_7.png'
import test_8 from '../Gfx/test_8.png'
import test_9 from '../Gfx/test_9.png'
import test_10 from '../Gfx/test_10.png'
import Product_card from '../Components/Product_card'
import InfoCard from '../Components/InfoCard'
import Side_Master from '../Master/Side_Master'
import { getCookie } from '../Components/CookieHandler';
export default function Restaurant_products() {
    return (
        <Side_Master inner={
            <div className="">
                <div className="z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:ml-10 mx-5 font-extrabold text-warm-gray-900 sm:text-4xl lg:text-4xl">Restaurang & Cafe Paketen</h1>
                    <p className="mt-6 sm:ml-11 ml-6 text-xl text-warm-gray-500 max-w-3xl"> Vi ser fram emot att höra från dig </p>
                </div>
                <div className="md:flex sm:flex flex-wrap -z-50 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8 justify-center items-center">
                    

                    <Product_card img={download} price="100Kr" title="Kassa 1" ribbon="Restaurang & Cafe" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="200Kr" title="Kassa 2" ribbon="Restaurang & Cafe" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={download} price="100Kr" title="Kassa 3" ribbon="Restaurang & Cafe" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="100Kr" title="Kassa 4" ribbon="Restaurang & Cafe" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={download} price="100Kr" title="Kassa 5" ribbon="Restaurang & Cafe" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="110Kr" title="Kassa 6" ribbon="Restaurang & Cafe" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={download} price="100Kr" title="Kassa 7" ribbon="Restaurang & Cafe" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Kassa} price="100Kr" title="all in one kassa" ribbon="Restaurang & Cafe" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <Product_card img={Enox_Kassa} price="100Kr" title="Kassa 9" ribbon="Restaurang & Cafe" description="molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"/>
                    <InfoCard img={test_10} css="text-[#F01E82]" main_css={"w-[300px] h-[350px]"} />
                    <InfoCard img={test_7} css="text-[#F01E82]" main_css={"w-[300px] h-[350px]"} />
                    <InfoCard img={test_8} css="text-[#F01E82]" main_css={"w-[300px] h-[350px]"} />
                    <InfoCard img={test_9} css="text-[#962896]" main_css={"w-[300px] h-[350px]"} />
                </div>
            </div>
        } />
    )
}
