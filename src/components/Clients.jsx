/* eslint-disable no-unused-vars */
import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => (
    <section id='clients' className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client) =>(
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                    <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain cursor-pointer hover:filter hover:invert hover:brightness-0 transition duration-50' />
                </div>
            ))}
        </div>
    </section>
)


export default Clients
