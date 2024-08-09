import styles from './Navbar.module.css'
function Navbar(){
    const style = {}
    return (
              <div className={styles.Navbar}>
                <h4 className={styles.Logo}>SerkSa</h4>
                <div className={styles.Navlist}>
                    <a className={styles.NavbarI} href="">Home</a>
                    <a className={styles.NavbarI} href="">Our Services</a>
                    <a className={styles.NavbarI} href="">About Us</a>
                    <a className={styles.NavbarI} href="">Our Work</a>
                    <a className={styles.Bar}>Sign Up</a>
                </div>
             </div>
    )
}
export default Navbar