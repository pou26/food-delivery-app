// import { Favorite, StarRounded } from '@mui/icons-material'
// import React from 'react'

// export default function itemCard({ imgSrc, name, ratings, price }) {
//     return (
//         <div>
//             <div className="items">
//                 <div className="isfavourite">
//                     <Favorite />
//                 </div>
//                 <div className="image">
//                     <img src={imgSrc} alt="" />
//                 </div>
//                 <div className="imageContent">
//                     <h3>{name}</h3>
//                     <div classname="bottom">
//                         <div className="ratings">
//                             {Array.apply(null, { length: 5 }).map((e, i) => (
//                                 <i key={i}>
//                                     <StarRounded />
//                                 </i>

//                             ))}
//                         </div>
//                         <i classname="addcart"></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



// import { Favorite, StarRounded } from '@mui/icons-material'
// import React from 'react'

// export default function itemCard() {
//     return (
//         <div>
//             <div className="items">
//                 <div className="isfavourite">
//                     <Favorite />
//                 </div>
//                 <div className="image">
//                     <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Ffood-png&psig=AOvVaw2Wwfj91Wk2cdYm3RN9wJWA&ust=1676300657739000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiBg9mgkP0CFQAAAAAdAAAAABAE" alt="" />
//                 </div>
//                 <div className="imageContent">
//                     <h3>Chicken Burger</h3>
//                     <div classname="bottom">
//                         <div className="ratings">
//                             {Array.apply(null, { length: 5 }).map((e, i) => (
//                                 <i key={i}>
//                                     <StarRounded />
//                                 </i>

//                             ))}
//                         </div>
//                         <i classname="addcart"></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }




// import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
// import React, { useState } from "react";
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
//   }, [isCart]);

//   const handleClick = (value) => {
//     setCurrentValue(value);
//   };

//   return (
//     <div className="itemCard" id={itemId}>
//       <div
//         className={`isFavourite ${isFavourite ? "active" : ""}`}
//         onClick={() => setFavourite(!isFavourite)}
//       >
//         <Favorite />
//       </div>

//       <div className="imgBox">
//         <img src={imgSrc} alt="" className="itemImg" />
//       </div>

//       <div className="itemContent">
//         <h3 className="itemName">{name}</h3>
//         <div className="bottom">
//           <div className="ratings">
//             {Array.apply(null, { length: 5 }).map((e, i) => (
//               <i
//                 key={i}
//                 className={`rating ${currentValue > i ? "orange" : "gray"}`}
//                 onClick={() => handleClick(i + 1)}
//               >
//                 <StarRounded />
//               </i>
//             ))}
//             <h3 className="price">
//               <span>$ </span>
//               {price}
//             </h3>
//           </div>
//           <i
//             className="addToCart"
//             onClick={() => {
//               setCart(Items.find((n) => n.id === itemId));
//             }}
//           >
//             <AddRounded />
//           </i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ItemCard;

// import React from 'react'
// import {ChevronRightRounded} from "@mui/icons-material";

// export default function itemCard() {
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