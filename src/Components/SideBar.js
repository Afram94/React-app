import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { slideInRight } from "react-animations"
import { StyleSheet, css } from 'aphrodite';

export default function SideBar(props) {

    const styles = StyleSheet.create({
        slideInRight: {
            animationName: slideInRight,
            animationDuration: '1s'
        }
    })

    return (
        <div className="fixed w-full h-full bg-[#00000080] z-40" >
            <div className="grid grid-cols-5 w-full h-full">
                
                <div className="h-full z-30 hidden sm:flex lg:col-span-4 col-span-3" onClick={() => {props.hide()}} />
                
                <div className={"lg:w-[385px] md:w-[315px] w-[385px] h-full overflow-auto bg-slate-100 md:px-4 md:py-4 col-span-1 " + css(styles.slideInRight)}>
                    <div className={"flex flex-col w-full h-full items-center py-4"} style={{backgroundImage: "url(" + props.img + ")"}}>
                        <div onClick={() => {props.hide()}} className="md:hidden flex ml-64 text-[#F01E82] text-[20px]">X</div>
                        <p className="text-[30px] font-sans border-b my-4 text-[#F01E82]">Produkter du valde</p>
                        {props.inner}
                        <div className="flex justify-center py-24">
                            <button className="flex bg-[#F01E82] text-white py-[12px] px-4 rounded-md w-[250px] justify-center" > <Link to="/check-out"> Slutför </Link> <div className="mt-1 ml-4">  </div> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
