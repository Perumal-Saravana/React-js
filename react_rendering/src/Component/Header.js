import './Header.css'
import styles from './Header.module.css';

function Header(){

    // const Styling = {
    //     color:"red",
    //     backgroundColor:"lightblue",
    // }

    return(
        <>
           {/* <h1 style={Styling}>Hello Styling</h1> */}
           <h1 className={styles.bigblue}>Hello Styling</h1>
           <p>Add a little style</p>
        </>
    )
}

export default Header;
