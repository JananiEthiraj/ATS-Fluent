import React,{ useState } from "react";
import styles from "./ManageEmployee.module.css"
import {PrimaryButton, SearchBox, FontIcon, mergeStyles } from '@fluentui/react';
import AddDemandModal from "./AddDemandModal";


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
    demandID: {
        label: 'D1221_1962'
    },
    requirement: {
        label: 'dot NET'
    },
    receivedDate: {
        label: '26 Dec 2021'
    },
    PDC: {
        label: 'Elango'
    },
    subVector: {
        label: 'Naukri'
    },
    lead: {
        label: 'Desiree Stamm'
    },
    client: {
        label: 'Sight Spectrum'
    },
    totalExperience: {
        label: '3 years'
    },
    primarySkill: {
        label : 'HTML CSS'
    },
    primarySkillExperience: {
        label : '3 years'
    },
    secondarySkill: {
        label : 'dot NET'
    },
    secondarySkillExperience: {
        label : '3 years'
    }, 
    moreOptions: {
        icon : 'MoreVertical'
    },
},
{
    demandID: {
        label: 'D1221_1962'
    },
    requirement: {
        label: 'dot NET'
    },
    receivedDate: {
        label: '26 Dec 2021'
    },
    PDC: {
        label: 'Elango'
    },
    subVector: {
        label: 'Naukri'
    },
    lead: {
        label: 'Desiree Stamm'
    },
    client: {
        label: 'Sight Spectrum'
    },
    totalExperience: {
        label: '3 years'
    },
    primarySkill: {
        label : 'HTML CSS'
    },
    primarySkillExperience: {
        label : '3 years'
    },
    secondarySkill: {
        label : 'dot NET'
    },
    secondarySkillExperience: {
        label : '3 years'
    }, 
    moreOptions: {
        icon : 'MoreVertical'
    },
},{
    demandID: {
        label: 'D1221_1962'
    },
    requirement: {
        label: 'dot NET'
    },
    receivedDate: {
        label: '26 Dec 2021'
    },
    PDC: {
        label: 'Elango'
    },
    subVector: {
        label: 'Naukri'
    },
    lead: {
        label: 'Desiree Stamm'
    },
    client: {
        label: 'Sight Spectrum'
    },
    totalExperience: {
        label: '3 years'
    },
    primarySkill: {
        label : 'HTML CSS'
    },
    primarySkillExperience: {
        label : '3 years'
    },
    secondarySkill: {
        label : 'dot NET'
    },
    secondarySkillExperience: {
        label : '3 years'
    }, 
    moreOptions: {
        icon : 'MoreVertical'
    },
},];

  const columns = [
    {
    columnKey: 'Demand ID',
    label: 'Demand ID',
  }, {
    columnKey: 'Requirement',
    label: 'Requirement',
  }, {
    columnKey: 'Recieved Date',
    label: 'Recieved Date',
  }, {
    columnKey: 'PDC',
    label: 'PDC'
  },{
    columnKey: 'Sub Vector',
    label: 'Sub Vector'
  },{
    columnKey: 'Lead',
    label: 'Lead'
  },{
    columnKey: 'Client',
    label: 'Client'
  },{
    columnKey: 'Total Experience',
    label: 'Total Experience',
  },{
    columnKey: 'Primary Skill',
    label: 'Primary Skill '
  },{
    columnKey: 'Primary Skill Experience',
    label: 'Primary Skill Experience',
  },{
    columnKey: 'Secondary Skill',
    label: 'Secondary Skill '
  },{
    columnKey: 'Secondary Skill Experience',
    label: 'Secondary Skill Experience',
  }, {
    columnKey: 'More Options',
    label: ' '
}];

function DemandListing() {

    const [ isModalOpen , setIsModalOpen] = useState(false);

      
    return(
            <div className={styles.container}>
                 {<AddDemandModal isModalOpen = {isModalOpen} setIsModalOpen = {setIsModalOpen}/>}

                <div className={styles.nav_container}>
                    <div className={styles.title}>Demand Listing</div>

                    <div className={styles.nav_items}>
                        <SearchBox placeholder=" " iconProps={searchIcon} className={styles.search}  />
                        <FontIcon iconName="Breadcrumb" className={iconClass} />
                        <PrimaryButton onClick={()=>setIsModalOpen(!isModalOpen)} text="Add Demand" iconProps={addIcon} />
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
                                <tr className={styles.table_row} key={item.demandID.label}>
                                    <td className={styles.table_dataContents}>{item.demandID.label}</td>
                                    <td className={styles.table_dataContents}>{item.requirement.label}</td>
                                    <td className={styles.table_dataContents}>{item.receivedDate.label}</td>
                                    <td className={styles.table_dataContents}>{item.PDC.label}</td>
                                    <td className={styles.table_dataContents}>{item.subVector.label}</td>
                                    <td className={styles.table_dataContents}>{item.lead.label}</td>
                                    <td className={styles.table_dataContents}>{item.client.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}
                            
                                {items.map(item => 
                                <tr className={styles.table_row} key={item.demandID.label}>
                                    <td className={styles.table_dataContents}>{item.demandID.label}</td>
                                    <td className={styles.table_dataContents}>{item.requirement.label}</td>
                                    <td className={styles.table_dataContents}>{item.receivedDate.label}</td>
                                    <td className={styles.table_dataContents}>{item.PDC.label}</td>
                                    <td className={styles.table_dataContents}>{item.subVector.label}</td>
                                    <td className={styles.table_dataContents}>{item.lead.label}</td>
                                    <td className={styles.table_dataContents}>{item.client.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}

                                {items.map(item => 
                                <tr className={styles.table_row} key={item.demandID.label}>
                                    <td className={styles.table_dataContents}>{item.demandID.label}</td>
                                    <td className={styles.table_dataContents}>{item.requirement.label}</td>
                                    <td className={styles.table_dataContents}>{item.receivedDate.label}</td>
                                    <td className={styles.table_dataContents}>{item.PDC.label}</td>
                                    <td className={styles.table_dataContents}>{item.subVector.label}</td>
                                    <td className={styles.table_dataContents}>{item.lead.label}</td>
                                    <td className={styles.table_dataContents}>{item.client.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}

                                {items.map(item => 
                                <tr className={styles.table_row} key={item.demandID.label}>
                                    <td className={styles.table_dataContents}>{item.demandID.label}</td>
                                    <td className={styles.table_dataContents}>{item.requirement.label}</td>
                                    <td className={styles.table_dataContents}>{item.receivedDate.label}</td>
                                    <td className={styles.table_dataContents}>{item.PDC.label}</td>
                                    <td className={styles.table_dataContents}>{item.subVector.label}</td>
                                    <td className={styles.table_dataContents}>{item.lead.label}</td>
                                    <td className={styles.table_dataContents}>{item.client.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}

                                {items.map(item => 
                                <tr className={styles.table_row} key={item.demandID.label}>
                                    <td className={styles.table_dataContents}>{item.demandID.label}</td>
                                    <td className={styles.table_dataContents}>{item.requirement.label}</td>
                                    <td className={styles.table_dataContents}>{item.receivedDate.label}</td>
                                    <td className={styles.table_dataContents}>{item.PDC.label}</td>
                                    <td className={styles.table_dataContents}>{item.subVector.label}</td>
                                    <td className={styles.table_dataContents}>{item.lead.label}</td>
                                    <td className={styles.table_dataContents}>{item.client.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}

                        </tbody>
                    </table>
                </div>
             </div>
       );

};

export default DemandListing;







