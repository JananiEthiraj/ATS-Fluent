import React,{ useState } from "react";
import styles from "./ManageEmployee1.module.css"
import Layout from "../Layout";
import {PrimaryButton, SearchBox, initializeIcons, FontIcon, mergeStyles } from '@fluentui/react';
import { useLocation } from "react-router-dom";
import FilterableTable from "../components/Filterabletable";
import AddEmployeeModal from "./AddEmployeeModal";

const addIcon = { iconName: 'Add' };
const searchIcon = { iconName: 'Search' };


const iconClass = mergeStyles({
    fontSize: 20,
    height: 20,
    width: 20,
    margin: '0 10px',
    color: '#999DA0',
  });

  const iconClass1 = mergeStyles({
    fontSize: 12,
    height: 12,
    width: 12,
    margin: '0 ',
    color: '#999DA0',
  });






const items = [{
    currentStatus:{
        status: 'available'
    },
    employeeID: {
        label: '450945'
    },
    fullName: {
        label: 'Carla Septimus'
    },
    designation: {
        label: 'Associate'
    },
    lead: {
        label: 'Craig Torff'
    },
    manager: {
        label: 'Justin Geidt'
    },
    mobile: {
        label: '9512345678'
    },
    emailID: {
        label: 'qgarcia@hotmail.com'
    },
    joiningDate: {
        label: '26 Dec 2021'
    },
   
},
{
    currentStatus:{
        status: 'available'
    },
    employeeID: {
        label: '450945'
    },
    fullName: {
        label: 'Carla Septimus'
    },
    designation: {
        label: 'Associate'
    },
    lead: {
        label: 'Craig Torff'
    },
    manager: {
        label: 'Justin Geidt'
    },
    mobile: {
        label: '9512345678'
    },
    emailID: {
        label: 'qgarcia@hotmail.com'
    },
    joiningDate: {
        label: '26 Dec 2021'
    },
   
},
{
    currentStatus:{
        status: 'available'
    },
    employeeID: {
        label: '450945'
    },
    fullName: {
        label: 'Carla Septimus'
    },
    designation: {
        label: 'Associate'
    },
    lead: {
        label: 'Craig Torff'
    },
    manager: {
        label: 'Justin Geidt'
    },
    mobile: {
        label: '9512345678'
    },
    emailID: {
        label: 'qgarcia@hotmail.com'
    },
    joiningDate: {
        label: '26 Dec 2021'
    },
   
},];

  const columns = [{
        columnKey: 'current',
        label: " "
  },
    {
    columnKey: 'Employee ID',
    label: 'Employee ID',
 
  }, {
    columnKey: 'Full Name',
    label: 'Full Name',
    
  }, {
    columnKey: 'Designation',
    label: 'Designation',
   
  }, {
    columnKey: 'Lead',
    label: 'Lead'
  },{
    columnKey: 'Manager',
    label: 'Manager'
  },{
    columnKey: 'Mobile',
    label: 'Mobile'
  },{
    columnKey: 'Email ID',
    label: 'Email ID'
  },{
    columnKey: 'Joining Date',
    label: 'Joining Date',
  },{
    columnKey: 'More Options',
    label: ' '
  }];

function EmployeeListing1() {
    

    const [isDialogOpen,setIsDialogOpen] = useState(true);

    const location = useLocation()

    return(
        <Layout>
            <AddEmployeeModal/>
            <div className={styles.layout_container}>

                <div className={styles.nav_container}>
                    <div className={styles.title}>Employee Details</div>

                    <div className={styles.nav_items}>
                         <SearchBox placeholder=" " iconProps={searchIcon} className={styles.search}  />
                        <FontIcon iconName="Breadcrumb" className={iconClass} />
                        <PrimaryButton text="Add Employee" iconProps={addIcon} />
                        <FontIcon iconName="Download" className={iconClass} />

                    </div>

                </div>
                <div className={styles.layout_filtertable_container}>
                    <FilterableTable/>
                </div>
              
             </div>
						 
        </Layout>
        
    );

};

export default EmployeeListing1;





