import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    //Padding wala 2px show hoga bakii sb black
    <div className={`${styles.flexCenter} rounded-full bg-blue-gradient w-[140px] h-[140px] p-[2px] cursor-pointer`} >
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'><span className='text-gradient'>Get</span> 
          </p>
          <img src={arrowUp} className='w-[23px] h-[23px] object-contain flex-end' alt="aorrow" />
          
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'><span className='text-gradient'>Started</span> 
          
          </p>
      </div>
    </div>
  )
}

export default GetStarted