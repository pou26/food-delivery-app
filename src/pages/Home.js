import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import ItemCard from "../components/items";
// import subMenu from '../components/subMenu'
// import nextArrow from "../components/cardCarousel/nextArrow";
// import prevArrow from '../components/cardCarousel/nextArrow'
export default function Home() {
    // const [isMainData, setMainData] = useState(
    //     Items.filter((element) => element.itemId === "buger01")
    //   );
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
            //  <div className="dishContainer">
            //     <div classname="menucard"></div> 
            //      <submenu name={"Menu Category"}/> 
            //      <div classname="rowContainer"> 

            //          <div>
            //             <Card imgSrc={"https://source.unsplash.com/random/300×300/?burger"} 
            //             name={"Burger"} />
            //         </div>
            //         <div>
            //             <Card imgSrc={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodandwine.com%2Frecipes%2Fultimate-veggie-burgers&psig=AOvVaw2BNMtgvuPV7vg6ehdP7qyN&ust=1676226016011000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKC805aQjv0CFQAAAAAdAAAAABAE"} 
            //             name={"Burger"} />
            //         </div>
            //         <div>
            //             <Card imgSrc={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fkauveryhospital.com%2Fblog%2Flifestyle%2Fhow-long-does-it-take-to-digest-a-pizza%2F&psig=AOvVaw2B1kCuX0MbNZQIjDxuK0fV&ust=1676226970268000&source=images&cd=vfe&ved=0CBAQjRxqGAoTCMCzlpmOjv0CFQAAAAAdAAAAABCTAQ"} 
            //             name={"Pizza"} />
            //         </div>
            //         <div>
            //             <Card imgSrc={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdiabetesstrong.com%2Fgrilled-veggie-wraps%2F&psig=AOvVaw1beuuC3sUP05I1sLJ5o6B6&ust=1676227537825000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCGt6eQjv0CFQAAAAAdAAAAABAE"} 
            //             name={"wraps"} />
            //         </div>
            //         <div>
            //             <Card imgSrc={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zomato.com%2Fbangalore%2Fcoffee-break-vijay-nagar&psig=AOvVaw0_mKFvLIBUCFdS1E2Sn1bb&ust=1676227576348000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDH3rmQjv0CFQAAAAAdAAAAABAJ"} 
            //             name={"coffee"} />
            //         </div> 

                //       {/* <div>
                //          <Card />
                //      </div>
                //      <div>
                //          <Card />
                //      </div>                    <div>
                //          <Card />
                //      </div>                    <div>
                //          <Card />
                //      </div>                    <div>
                //          <Card />
                //      </div>
                //  </div>
                //  <div classname="dishitemContainer">
                //      <itemCard />
                //  </div>*/}
            //  </div>  
            //{/* //  <div className='m-3'>

            //     <Card />
            //     <Card />
            //     <Card />
            //     <Card />
            //     <Card />
            // </div>  */}
            //  <div> <Footer /> </div>
        // </div>
//     )
//}  