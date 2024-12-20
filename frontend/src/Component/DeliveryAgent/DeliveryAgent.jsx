import React from 'react'
import img from '../../asset/delivery_agent.png'
import style from './DeliveryAgent.module.css';
import { useNavigate } from 'react-router-dom';

const DeliveryAgent = () => {
    const navigate = useNavigate();
  
    const handleChange = (event) => {
        navigate(event.value);  
    }
  return (
    <div className={style['webpage']}>
       <div className={style['block1']}>
              <img src={img} alt="" />
              <h1 className={style['head']}>Delivery Agent</h1>
               <select name="" id="" className={style['status']} onChange={handleChange}>
                <option value="/active" className={style['status']}>Agent 1</option>
                <option value="/active" className={style['status']}>Agent 2</option>
                <option value="/active" className={style['status']}>Agent 3</option>
              </select>
            </div>
    </div>
  )
}

export default DeliveryAgent
