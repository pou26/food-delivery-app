import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const redirect = useNavigate()
    return (
        <>
            <button onClick={() => redirect("/admin/addProduct", { state: { heading: "Add" } })}>Add Product</button>
            <button onClick={() => redirect("/admin/addProduct", { state: { heading: "Update" } })}>Update Product</button>
            <button>Delete Product</button>
        </>
    )
}

export default Dashboard