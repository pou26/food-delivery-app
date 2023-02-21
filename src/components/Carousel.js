import React from 'react'

export default function carousel() {
    return (
        <div>
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style= {{objectFit: "contain !important"}} >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{ zIndex: "10" }}> {/* zIndex means layering */}
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="..\image\noodles2.jpg" className="d-block w-100" style={{ filter: "brightness(80%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..\image\pizza1.jpg" className="d-block w-100" style={{ filter: "brightness(80%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..\image\coffee3.jpg" className="d-block w-100" style={{ filter: "brightness(80%)" }} alt="..." />
                    </div>
                </div >
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div >
        </div >
        </div>
    )
}



// {/* <div>
// <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
//     <div className="carousel-inner" id="carousel">
//         <div class="carousel-caption">

//         </div>
//         <div className="carousel-item active">
//             <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{filter:"brightness(80%)",objectFit:"contain !important"}} alt="..."/>
//         </div>
//         <div className="carousel-item">
//             <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100"style={{filter:"brightness(80%)",objectFit:"contain !important"}}  alt="..."/>
//         </div>
//         <div className="carousel-item">
//             <img src="https://source.unsplash.com/random/900×700/?barbeque" className="d-block w-100" style={{filter:"brightness(80%)",objectFit:"contain !important"}} alt="..."/>
//         </div>
//     </div>
//     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//     </button>
//     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//     </button>
// </div>
// </div> */}
