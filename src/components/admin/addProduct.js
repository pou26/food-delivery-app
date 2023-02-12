import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
function AddProduct() {
    let { state } = useLocation()

    const [data, setData] = useState({
        name: "",
        price: "",
        quantity: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async (e) => {
        const { name, price, quantity } = data
        e.preventDefault();

        if (state.heading == "Add") {
            if (name === "")
                toast.warning("Name is required !")
            else if (price === "")
                toast.warning("Price is required !")
            else if (quantity === "")
                toast.warning("Quantity is required !")
            else {
                axios.post("http://localhost:3001/admin/addProduct", data)
                    .then((res) => {
                        if (res.status === 201) {
                            toast.success("Product added successfully !", {
                                position: "top-right"
                            })
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                        toast.error(err.response.data.message, {
                            position: "top-right"
                        });
                    })
            }
        }
        else if (state.heading == "Update") {

            axios.post("http://localhost:3001/admin/updateProduct", data)
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("Product Updated successfully !", {
                            position: "top-right"
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                    toast.error(err.response.data.message, {
                        position: "top-right"
                    });
                })
        }
    }

    return (
        <div>
            <div className="container">
                <form >
                    <h2>{state.heading} Product</h2>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={data.name} onChange={onChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                        <input type="number" className="form-control" name="price" value={data.price} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                        <input type="number" className="form-control" name="quantity" value={data.quantity} onChange={onChange} />
                    </div>
                    <button type="submit" className="m-3 btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default AddProduct