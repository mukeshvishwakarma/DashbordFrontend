import React, { useEffect, useState } from 'react';
import './CSS/Addproduct.css'
import { useParams,useNavigate } from 'react-router-dom'


const Updateproduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate()

    
    const update = async () => {
        console.log(name,price,category,company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method: 'put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                authorization:`bearer${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.log(result)
        if(result){
            navigate('/')
        }
    }
    useEffect(()=>{
        
        getProductDetails();
    },[])
    const getProductDetails = async () => {
        console.log(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{
                authorization:`bearer${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }
    return (
        <div className='add-product'>
            <h1>UpdateProduct</h1>
            <input className="inputBox" value={name} type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Product Name'/>
            
            <input className="inputBox" value={price} type='text' onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Product Price'/>
            
            <input className="inputBox" value={category} type='text' onChange={(e)=>{setCategory(e.target.value)}} placeholder='Enter Product Category'/>
            
            <input className="inputBox" value={company} type='text' onChange={(e)=>{setCompany(e.target.value)}} placeholder='Enter Product Company'/>
            
            <input className="appbutton" onClick={update} type="button" value={'Update Product'} />
        </div>
    )
}
export default Updateproduct;