import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}>Testimonials</h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4>John Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://plus.unsplash.com/premium_photo-1670090780560-bcb7ee7da281?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4>John Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4>John Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonials
