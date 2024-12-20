import React from 'react'
import style from '../DeliveryAgent/DeliveryAgent.module.css'
import icon from '../../asset/order_icon.webp';
import img from '../../asset/delivery_agent.png';
import { useNavigate } from 'react-router-dom';

const Pending = () => {
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      const selectedValue = event.target.value;
      if (selectedValue) {
        navigate(selectedValue); 
      }
    }
  return (
    <div className={style['webpage']}>
      <div className={style['block1']}>
        <img src={img} alt="" />
        <h1 className={style['head']}>Delivery Agent</h1>
        <select name="" id="" className={style['status']} onChange={handleChange}>
          <option value="/active" className={style['status']}>Active</option>
          <option value="/pending" className={style['status']}>Pending</option>
          <option value="/completed" className={style['status']}>Completed</option>
        </select>
      </div>
      <div className={style['cards']}>
        <h1  className={style['head3']}>Pending</h1>
         <div className={style['ordercards']}>
                    <img src={icon} alt="" />
                    <div className={style["text"]}>
                    <h3>ORD861487083  ·  ₹234</h3>
                    <p>Placed on thu, 31 oct'24, 4:51 pm</p>
                    </div>
                    <button>view details</button>
                </div>
        <div className={style['ordercards']}>
                    <img src={icon} alt="" />
                    <div className={style["text"]}>
                    <h3>ORD861487083  ·  ₹234</h3>
                    <p>Placed on thu, 31 oct'24, 4:51 pm</p>
                    </div>
                    <button>view details</button>
                </div>
        </div>
      </div>
  
  )
}
export default Pending

