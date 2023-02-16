// import React,{useState} from 'react'
// import { AddRounded, StarRounded } from "@mui/icons-material";
// import { Favorite } from '@mui/icons-material';

// export default function Items({name,price,imgSrc}) {
//     const [isFavourite,setFavourite]=useState(false);
//     return (
//         <div className="itemCard">
//             {/* <div classname="rowMenuCard"> */}
//             <div classname={`isfavourite ${isFavourite ? "active": ""}`}
//             onClick={()=>setFavourite(!isFavourite)}>
//                     <Favorite />
//                 </div>

//             <div className="imgBox">
//                 <img src={imgSrc} alt="..." />

//                 <div className="imgContent">
//                     <h3>{name}</h3>
//                     <div className="bottom">
//                         <div className="ratings">
//                             {Array.apply(null,{length:5}).map((e,i)=>(

//                                 <i key={i} className="rating">
//                                     <StarRounded/>
//                                 </i>
//                             ))}
//                             <h3 className="price"><span>₹</span>{price}</h3>
//                         </div>
//                         {/* <select className="m-2 h-100 rounded">
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select> */}
//                         <i className="addtoCart">
//                             <AddRounded/>
//                         </i>
//                     </div>

//                 </div>
//             </div>
//             {/* </div> */}
//         </div>
//     )
// }
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import {Rate} from "antd";
// import { actionType } from "./reducer";
// import { useStateValue } from "./StateProvider";
// import { Items } from "./Data";
// import { useEffect } from "react";
// let cartData = [];

// function ItemCard({ itemId, imgSrc, name, price, ratings }) {
//   const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
//   const [isFavourite, setFavourite] = useState(false);
//   const [{}, dispatch] = useStateValue();
//   const [isCart, setCart] = useState(null);

//   useEffect(() => {
//     if (isCart) {
//       cartData.push(isCart);
//       dispatch({
//         type: actionType.SET_CART,
//         cart: cartData,
//       });
//     }
//   }, 
//   [isCart]
//   );
export default function ItemCard({ name, price, ratings, imgSrc }) {
    const [isFavourite, setFavourite] = useState(false);
    const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

    const handleClick = (value) => {
        setCurrentValue(value);
    };

    return (
        <div className="itemCard" /*id={itemId}*/>
            <div
                className={`isFavourite ${isFavourite ? "active" : ""}`}
                onClick={() => setFavourite(!isFavourite)}
            >
                <Favorite />
            </div>

            <div className="imgBox">
                <img src={imgSrc} alt="" className="itemImg" />
            </div>

            <div className="itemContent">
                <h3 className="itemName">{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {Array.apply(null, { length: 5 }).map((e, i) => (
                            <i
                                key={i}
                                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                                onClick={() => handleClick(i + 1)}
                            >
                                <StarRounded />
                            </i>
                        ))}
                        {/* <Rate defaultValue={3.5} allowHalf/> */}

                        <h3 className="price">
                            <span>₹ </span>
                            {price}
                        </h3>
                    </div>
                    <i
                        className="addToCart"
                    // onClick={() => {
                    //     setCart(Items.find((n) => n.id === itemId));
                    // }}
                    >
                        <AddRounded />
                    </i>
                </div>
            </div>
        </div>
    );
}

