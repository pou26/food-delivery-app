// import React from 'react'
// import {ChevronRightRounded} from "@mui/icons-material";

// export default function card() {
//   return (
//     <div className="col-md-3">
//       <div classname="rowMenuCard">
//         <div className="image" style={{ "width": "18rem", "maxHeight": "360px" }}>
//           <img src="..\image\burger.jpeg" className="card-img" alt="..." />
//           <div className="card-body">
//             <h3>Card title</h3>
//             <p className="card-text">food</p>
//             <div className="container w-100">
//               <select className="m-2 h-100 rounded">
//                 {Array.from(Array(6), (e, i) => {
//                   return (
//                     <option key={i + 1} value={i + 1}>{i + 1}  {/* index starts from 0 so we using i+1 for start it from 1 */}
//                     </option> //we're using a array of option for avoiding re-writing a simple line again and again
//                   )
//                 })}
//               </select>
//               <select className="m-2 h-100 rounded">
//                 <option value="half">Half</option>
//                 <option value="full">Full</option>
//               </select>
//               <div className="d-inline h-100 fs-5">
//                 Total Price
//               </div>
//               <i className="loadMenu">
//                 <ChevronRightRounded />
//               </i>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react'
import { ChevronRightRounded } from "@mui/icons-material";
// import { Link, useNavigate } from 'react-router-dom'
// import { toast, ToastContainer } from 'react-toastify';
// import axios from 'axios';

export default function Card({ imgSrc, name }) {
  // const[foodCategory,setFoodCategory]=useState([]);
  // const redirect = useNavigate()
  // if (name === "")
  // toast.warning("name is requires !")
  // else {
  //   axios.post("http://localhost:3001/admin/addProduct", foodCategory)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         toast.success("created successfully !", {
  //           position: "top-right"
  //         })
  //         redirect("/")
  //       }
  //       const onChange = (e) => {
  //         setFoodCategory({ ...foodCategory, [e.target.name]: e.target.value })
  //       }
  return (
    
    <div classname="wrapper"> 
      <section>
        <div className="rowMenuCard">
          <div className="image">
            <img src="..\image\burger.jpeg" className="card-img" alt="..." />
          </div>
          <h3>Burger</h3>
          <i className="loadMenu">
            <ChevronRightRounded />
          </i>

        </div>
      </section>
    </div>
  )
}
// import React from 'react'
// import Slider from "react-slick"
// import FoodItems from './fooditems/fooditems'

// const fooditems=[
//   {
//     id:1,
//     title:"Pizza",
//     cover:"https://st.depositphotos.com/1900347/4146/i/450/depositphotos_41466585-stock-photo-image-of-slice-of-pizza.jpg"
//   },
  
//   {
//     id:2,
//     title:"Burger",
//     cover:"https://st.depositphotos.com/1588534/3151/i/450/depositphotos_31516383-stock-photo-traditional-hamburger-and-french-fries.jpg"
//   },
//   {
//     id:3,
//     title:"Wraps",
//     cover:"https://st.depositphotos.com/1158226/2353/i/450/depositphotos_23531407-stock-photo-closeup-of-kebab-in-a.jpg"
//   },
//   {
//     id:4,
//     title:"Drinks",
//     cover:"https://st2.depositphotos.com/3472015/7148/i/450/depositphotos_71487265-stock-photo-summer-strawberry-drink.jpg"
//   },
//   {
//     id:5,
//     title:"Coffee",
//     cover:"https://st.depositphotos.com/2363887/2571/i/450/depositphotos_25717699-stock-photo-cappuccino-mug-close-up-with.jpg"
//   },
// ]
// const settings={
//   infinite:false,
//   slidesToShow:4,
//   slidesToScroll:1,
//   nextArrow:<nextArrow/>,
//   prevArrow:<prevArrow/>
// }
// export default function Card() {
//   return (
//     <div className="delivery-collection">
//       <div className="max-width">
//         <div classname="collection-title">Category</div>
//         <Slider {...settings}>
//           {fooditems.map((item)=>{
//             return <FoodItems item={item} />;
//           })}
//         </Slider>

//       </div>
//     </div>
//   )
// }
