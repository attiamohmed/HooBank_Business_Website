/* eslint-disable no-unused-vars */
import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () =>(
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Find your perfect credit card quickly and easily. Our service compares multiple options to match your financial needs, ensuring you make the best choice effortlessly.</p>
                <Button styles='mt-10' />
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt='card' className='w-[100%] h-[100%]'/>
            </div>
        </section>
)


export default CardDeal
