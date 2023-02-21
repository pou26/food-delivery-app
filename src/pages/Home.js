import React,{useEffect,useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import ItemCard from "../components/items";
// import subMenu from '../components/subMenu'
// import nextArrow from "../components/cardCarousel/nextArrow";
// import prevArrow from '../components/cardCarousel/nextArrow'
export default function Home() {


    return (
        <div>
            <div> <Navbar /> </div>
            <div><Carousel /></div>
            <div><subMenu /></div>
            <div><nextArrow /></div>
            <div><prevArrow /></div>
            <div classname="rowContainer"> 
          <div className="wrapper">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            </div>
            <div className="dishItemContainer">


            <ItemCard
                    imgSrc={"https://www.transparentpng.com/thumb/burger/burger-king-menu-with-plenty-of-ingredients-png-transparent-LlZRgA.png"}
                    name={"Chicken Burger"}
                    ratings={3.5}
                    price={"100"}
                  />
            </div>
            <div> <Footer /> </div>
        </div>
    )
}
