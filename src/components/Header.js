import React from 'react'
import logo from '../Logo1.svg'
import small from '../logo_short.png'
import styles from './Header.module.css'
import { useUserContext} from '../contexts/UserProvider'

function Header() {

	const {isCollapsed} = useUserContext();

	return (
		<div className={styles.container}>

			{isCollapsed ? <div className={styles.logo_small}><img src={small}/></div> : <div className={styles.logo_container}><img src={logo}/></div>}

			<div className={isCollapsed ? styles.header_container1 : styles.header_container}>
				
				<div className={`${styles.breadcrumbs} `}>{`Dashboard > current section`}</div>

				<div className={styles.user}></div>
			</div>

		</div>
	);
}

export default Header;
