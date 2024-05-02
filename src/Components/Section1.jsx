import React from 'react'
import { Button } from 'antd';
import styles from "./Section1.module.css"

const Section1 = () => {
  return (
    <section className={styles.section}>
        <div className={styles.center}>
            <img src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png" alt="" />
            <p>Səmərəli səhifə animasiya həlli</p>
            <Button type="primary">Primary Button</Button>
        </div>
    </section>
  )
}

export default Section1
  
