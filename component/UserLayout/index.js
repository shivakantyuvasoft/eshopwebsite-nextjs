import React from 'react';
import Styles from "../../styles/Admin.module.css";
import Sidebar from '../AdminLayout/Sidebar';

const UserLayout = ({children}) => {
  return (
    <>
    <div className={Styles.admin_dashboard}>
          <div className={Styles.left_sidebar}>
          <Sidebar />
          </div>
          <div className={Styles.admin_content}>
            {children}
          </div>
        </div>
    </>
  )
}

export default UserLayout;