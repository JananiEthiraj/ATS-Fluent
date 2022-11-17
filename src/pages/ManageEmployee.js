import React, { useEffect, useState } from "react";
import styles from "./ManageEmployee.module.css"
import {PrimaryButton, SearchBox, FontIcon, mergeStyles } from '@fluentui/react';
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
    moreOptions: {
        icon : 'MoreVertical'
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
    moreOptions: {
        icon : 'MoreVertical'
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
    moreOptions: {
        icon : 'MoreVertical'
    },
},];

  const columns = [{
        columnKey: 'current',
        label: " "
  },
    {
    columnKey: 'Employee ID',
    label: 'Employee ID',
    icon: 'Sort'
  }, {
    columnKey: 'Full Name',
    label: 'Full Name',
    icon: 'Sort'
  }, {
    columnKey: 'Designation',
    label: 'Designation',
    icon: 'Sort'
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
    icon: 'Sort'
  },{
    columnKey: 'More Options',
    label: ' '
  }];

function EmployeeListing() {

    useEffect(()=>{
        console.log("rerendering");
    },[])

    const [ isModalOpen , setIsModalOpen] = useState(false);

      
    return(
    
            <div className={styles.container}>
            {<AddEmployeeModal isModalOpen = {isModalOpen} setIsModalOpen = {setIsModalOpen}/>}

                <div className={styles.nav_container}>
                    <div className={styles.title}>Employee Details</div>

                    <div className={styles.nav_items}>
                        <SearchBox placeholder=" " iconProps={searchIcon} className={styles.search}  />
                        <FontIcon iconName="Breadcrumb" className={iconClass} />
                        <PrimaryButton text="Add Employee" iconProps={addIcon} onClick={() => setIsModalOpen(!isModalOpen)} />
                        <FontIcon iconName="Download" className={iconClass} />
                    </div>
                </div>

                <div className={styles.table_container}>
                    <table>
                        <thead className={styles.table_header}>
                            <tr className={styles.table_row}>
                                    {columns.map((column) => 
                                        <th className={styles.table_headerContents} key={column.columnKey}>
                                            <div className={styles.table_heading}>
                                                <div>{column.label}</div>
                                                {column?.icon ? <FontIcon iconName={column.icon} className={iconClass1} /> : null}
                                            </div>
                                    </th>)}
                            </tr>
                        </thead>

                       
                        <tbody>
                            {items.map(item => 
                                <tr className={styles.table_row} key={item.employeeID.label}>
                                    <td className={styles.table_dataContents}><div className={styles.status} ></div></td>
                                    <td className={styles.table_dataContents}>{item.employeeID.label}</td>
                                    <td className={styles.table_dataContents}>{item.fullName.label}</td>
                                    <td className={styles.table_dataContents}>{item.designation.label}</td>
                                    <td className={styles.table_dataContents}>{item.lead.label}</td>
                                    <td className={styles.table_dataContents}>{item.manager.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.joiningDate.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}
                                {items.map(item => 
                                <tr className={styles.table_row} key={item.employeeID.label}>
                                    <td className={styles.table_dataContents}><div className={styles.status} ></div></td>
                                    <td className={styles.table_dataContents}>{item.employeeID.label}</td>
                                    <td className={styles.table_dataContents}>{item.fullName.label}</td>
                                    <td className={styles.table_dataContents}>{item.designation.label}</td>
                                    <td className={styles.table_dataContents}>{item.lead.label}</td>
                                    <td className={styles.table_dataContents}>{item.manager.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.joiningDate.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}
                                {items.map(item => 
                                <tr className={styles.table_row} key={item.employeeID.label}>
                                    <td className={styles.table_dataContents}><div className={styles.status} ></div></td>
                                    <td className={styles.table_dataContents}>{item.employeeID.label}</td>
                                    <td className={styles.table_dataContents}>{item.fullName.label}</td>
                                    <td className={styles.table_dataContents}>{item.designation.label}</td>
                                    <td className={styles.table_dataContents}>{item.lead.label}</td>
                                    <td className={styles.table_dataContents}>{item.manager.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.joiningDate.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}
                                {items.map(item => 
                                <tr className={styles.table_row} key={item.employeeID.label}>
                                    <td className={styles.table_dataContents}><div className={styles.status} ></div></td>
                                    <td className={styles.table_dataContents}>{item.employeeID.label}</td>
                                    <td className={styles.table_dataContents}>{item.fullName.label}</td>
                                    <td className={styles.table_dataContents}>{item.designation.label}</td>
                                    <td className={styles.table_dataContents}>{item.lead.label}</td>
                                    <td className={styles.table_dataContents}>{item.manager.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.joiningDate.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}
                                {items.map(item => 
                                <tr className={styles.table_row} key={item.employeeID.label}>
                                    <td className={styles.table_dataContents}><div className={styles.status} ></div></td>
                                    <td className={styles.table_dataContents}>{item.employeeID.label}</td>
                                    <td className={styles.table_dataContents}>{item.fullName.label}</td>
                                    <td className={styles.table_dataContents}>{item.designation.label}</td>
                                    <td className={styles.table_dataContents}>{item.lead.label}</td>
                                    <td className={styles.table_dataContents}>{item.manager.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.joiningDate.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}
                                {items.map(item => 
                                <tr className={styles.table_row} key={item.employeeID.label}>
                                    <td className={styles.table_dataContents}><div className={styles.status} ></div></td>
                                    <td className={styles.table_dataContents}>{item.employeeID.label}</td>
                                    <td className={styles.table_dataContents}>{item.fullName.label}</td>
                                    <td className={styles.table_dataContents}>{item.designation.label}</td>
                                    <td className={styles.table_dataContents}>{item.lead.label}</td>
                                    <td className={styles.table_dataContents}>{item.manager.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.joiningDate.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
             </div>
  );

};

export default EmployeeListing;







