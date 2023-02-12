import React from 'react'
import {ChevronRightRounded} from "@mui/icons-material";

export default function card() {
  return (
    <div className="col-md-3">
      <div classname="rowMenuCard">
        <div className="image" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img src="..\image\burger.jpeg" className="card-img" alt="..." />
          <div className="card-body">
            <h3>Card title</h3>
            <p className="card-text">food</p>
            <div className="container w-100">
              <select className="m-2 h-100 rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}  {/* index starts from 0 so we using i+1 for start it from 1 */}
                    </option> //we're using a array of option for avoiding re-writing a simple line again and again
                  )
                })}
              </select>
              <select className="m-2 h-100 rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">
                Total Price
              </div>
              <i className="loadMenu">
                <ChevronRightRounded />
              </i>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


// import React from 'react'
// import {ChevronRightRounded} from "@mui/icons-material";

// export default function Card({imgSrc,name}) {
//   return (
//     <div className="rowMenuCard">
//         <div className="image">
//         <img src= "..\image\burger.jpeg"className="card-img" alt="..." />
//         </div>
//         <h3>Burger</h3>
//         <i className="loadMenu">
//             <ChevronRightRounded/>
//         </i>
//     </div>
//   )
// }
