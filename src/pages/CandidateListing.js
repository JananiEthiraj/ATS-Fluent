import React from "react";
import styles from "./ManageEmployee.module.css"
import {PrimaryButton, SearchBox, initializeIcons, FontIcon, mergeStyles } from '@fluentui/react';
import AddCandidateModal from "./AddCandidateModal";
import { useState } from "react";



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
    candidateID: {
        label: 'CD_22_16489'
    },
    candidateName: {
        label: 'Desiree Stamm'
    },
    dateOfSourcing: {
        label: '26 Dec 2021'
    },
    mobile: {
        label: '9512345678'
    },
    emailID: {
        label: 'qgarcia@hotmail.com'
    },
    recruiter: {
        label: 'Carla Septimus'
    },
    primarySkill: {
        label : 'Angular'
    },
    primarySkillExperience: {
        label : '3 years'
    },
    secondarySkill: {
        label : 'HTML CSS'
    },
    secondarySkillExperience: {
        label : '3 years'
    },
    otherSkill: {
        label : 'dotNET'
    },
    otherSkillExperience: {
        label : '3 years'
    },
    totalExperience: {
        label: '3 years'
    },
    moreOptions: {
        icon : 'MoreVertical'
    },
},
{
    candidateID: {
        label: 'CD_22_16489'
    },
    candidateName: {
        label: 'Desiree Stamm'
    },
    dateOfSourcing: {
        label: '26 Dec 2021'
    },
    mobile: {
        label: '9512345678'
    },
    emailID: {
        label: 'qgarcia@hotmail.com'
    },
    recruiter: {
        label: 'Carla Septimus'
    },
    primarySkill: {
        label : 'Angular'
    },
    primarySkillExperience: {
        label : '3 years'
    },
    secondarySkill: {
        label : 'HTML CSS'
    },
    secondarySkillExperience: {
        label : '3 years'
    },
    otherSkill: {
        label : 'dotNET'
    },
    otherSkillExperience: {
        label : '3 years'
    },
    totalExperience: {
        label: '3 years'
    },
    moreOptions: {
        icon : 'MoreVertical'
    },
},{
    candidateID: {
        label: 'CD_22_16489'
    },
    candidateName: {
        label: 'Desiree Stamm'
    },
    dateOfSourcing: {
        label: '26 Dec 2021'
    },
    mobile: {
        label: '9512345678'
    },
    emailID: {
        label: 'qgarcia@hotmail.com'
    },
    recruiter: {
        label: 'Carla Septimus'
    },
    primarySkill: {
        label : 'Angular'
    },
    primarySkillExperience: {
        label : '3 years'
    },
    secondarySkill: {
        label : 'HTML CSS'
    },
    secondarySkillExperience: {
        label : '3 years'
    },
    otherSkill: {
        label : 'dotNET'
    },
    otherSkillExperience: {
        label : '3 years'
    },
    totalExperience: {
        label: '3 years'
    },
    moreOptions: {
        icon : 'MoreVertical'
    },
},];




  const columns = [
{
    columnKey: 'Candidate ID',
    label: 'Candidate ID'
},{
    columnKey: 'Candidate Name',
    label: 'Candidate Name'
},{
    columnKey: 'Date of Sourcing',
    label: 'Date of Sourcing',
  }, {
    columnKey: 'Recruiter',
    label: 'Recruiter',
  },{
    columnKey: 'Mobile',
    label: 'Mobile'
  },{
    columnKey: 'Email ID',
    label: 'Email ID'
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
  },{
    columnKey: 'Other Skill',
    label: 'Other Skill '
  },{
    columnKey: 'Other Skill Experience',
    label: 'Other Skill Experience',
  },{
    columnKey: 'Total Experience',
    label: 'Total Experience',
  },{
    columnKey: 'More Options',
    label: ' '
}];

function CandidateListing() {

    const [ isModalOpen , setIsModalOpen] = useState(false);

    initializeIcons();
      
    return(
    
            <div className={styles.container}>
                {<AddCandidateModal isModalOpen = {isModalOpen} setIsModalOpen = {setIsModalOpen}/>}

                <div className={styles.nav_container}>
                    <div className={styles.title}>Candidate Listing</div>

                    <div className={styles.nav_items}>
                        <SearchBox placeholder=" " iconProps={searchIcon} className={styles.search}  />
                        <FontIcon iconName="Breadcrumb" className={iconClass} />
                        <PrimaryButton text="Add Candidate" iconProps={addIcon} onClick={() => setIsModalOpen(!isModalOpen)} />
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
                                <tr className={styles.table_row} key={item.candidateID.label}>
                                    <td className={styles.table_dataContents}>{item.candidateID.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateName.label}</td>
                                    <td className={styles.table_dataContents}>{item.dateOfSourcing.label}</td>
                                    <td className={styles.table_dataContents}>{item.recruiter.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.secondarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.otherSkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.otherSkillExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
             </div>
        );

};

export default CandidateListing;





