import React, { useState } from 'react';
import './CSS/Addproduct.css'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const AddProduct = async () =>{
        console.log(name,price,category,company)
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({name,price,category,company,userId}),
            headers:{
                authorization:`bearer${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json();
        console.log(result)
        if(result){
            navigate('/')
        }
    }
    return (
        <div className='add-product'>
            <h1>AddProduct</h1>
            <input className="inputBox" value={name} type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Product Name'/>
            { error && !name && <span className='invalid-input'>Enter Valid Name</span>}
            <input className="inputBox" value={price} type='text' onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Product Price'/>
            { error && !price && <span className='invalid-input'>Enter Valid Price</span>}
            <input className="inputBox" value={category} type='text' onChange={(e)=>{setCategory(e.target.value)}} placeholder='Enter Product Category'/>
            { error && !category && <span className='invalid-input'>Enter Valid Product</span>}
            <input className="inputBox" value={company} type='text' onChange={(e)=>{setCompany(e.target.value)}} placeholder='Enter Product Company'/>
            { error && !company && <span className='invalid-input'>Enter Valid Company</span>}
            <input className="appbutton" onClick={AddProduct} type="button" value={'Add Product'} />
        </div>
    )
}
export default AddProduct;