import styles from '../../styles/Order.module.css'
import Image from 'Next/image'

const  Order = () => {

    const STATUS =0;
    const statusClass=(index)=>{
if(index-STATUS <1) return styles.done
if(index-STATUS ===1) return styles.inProgress
if(index-STATUS >1) return styles.undone
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
            <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
                </tr>
                <tr className={styles.tr}>
               
                 <td>
                  <span className={styles.id}>12145645</span>   
                 </td>  
                 <td>
                 <span className={styles.name}>Leonardo A Moura</span> 
                 </td> 
                 <td>
                 <span className={styles.address}> R st avenue jones 152</span> 
                 </td>
                 
                 <td>
                 <span className={styles.total}>$39.80</span> 
                 </td>
                </tr>
            </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                <Image alt="" src="/img/paid.png" width={30}height={30}/>
                <span>Payment</span>
                <div className={styles.checkedIcon}>
                <Image altclassName={styles.checkedIcon}  alt="" src="/img/checked.png" width={20}height={20}/>
                </div>
                </div>
                <div className={statusClass(1)}>
                <Image className={styles.checkedIcon} alt="" src="/img/bake.png" width={30}height={30}/>
                <span>Preparing</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} alt="" src="/img/checked.png" width={20}height={20}/>
                </div>
                </div>
                <div className={statusClass(2)}>
                <Image className={styles.checkedIcon} alt="" src="/img/bike.png" width={30}height={30}/>
                <span>On the way</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} alt="" src="/img/checked.png" width={20}height={20}/>
                </div>
                </div>
                <div className={statusClass(3)}>
                <Image alt="" src="/img/delivered.png" width={30}height={30}/>
                <span>Delivery</span>
                <div className={styles.checkedIcon}>
                <Image alt="" src="/img/checked.png" width={20}height={20}/>
                </div>
                </div>
            </div>
            </div>
            <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Cart Total</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>$79.60
                </div>
                <button disabled className={styles.button}>Paid!</button>
            </div>
            </div> 
        </div>
    )
}

export default Order
