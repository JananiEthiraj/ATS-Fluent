import React,{useState} from "react";
import styles from "./ManageEmployee.module.css"
import {PrimaryButton, SearchBox, initializeIcons, FontIcon, mergeStyles } from '@fluentui/react';
import AddSubmissionModal from "../pages/AddSubmissionModal";




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
    recruiterName: {
        label: 'Carla Septimus'
    },
    submissionID: {
        label: '5_22_16547'
    },
    submissionDate: {
        label: '26 Dec 2021'
    },
    candidateID: {
        label: 'CD_22_16489'
    },
    candidateName: {
        label: 'Desiree Stamm'
    },
    mobile: {
        label: '9512345678'
    },
    emailID: {
        label: 'qgarcia@hotmail.com'
    },
    totalExperience: {
        label: '3 years'
    },
    primarySkill: {
        label : 'Angular'
    },
    primarySkillExperience: {
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
    recruiterName: {
        label: 'Carla Septimus'
    },
    submissionID: {
        label: '5_22_16547'
    },
    submissionDate: {
        label: '26 Dec 2021'
    },
    candidateID: {
        label: 'CD_22_16489'
    },
    candidateName: {
        label: 'Desiree Stamm'
    },
    mobile: {
        label: '9512345678'
    },
    emailID: {
        label: 'qgarcia@hotmail.com'
    },
    totalExperience: {
        label: '3 years'
    },
    primarySkill: {
        label : 'Angular'
    },
    primarySkillExperience: {
        label : '3 years'
    },
    moreOptions: {
        icon : 'MoreVertical'
    },
},{
    demandID: {
        label: 'D1221_1962'
    },
    recruiterName: {
        label: 'Carla Septimus'
    },
    submissionID: {
        label: '5_22_16547'
    },
    submissionDate: {
        label: '26 Dec 2021'
    },
    candidateID: {
        label: 'CD_22_16489'
    },
    candidateName: {
        label: 'Desiree Stamm'
    },
    mobile: {
        label: '9512345678'
    },
    emailID: {
        label: 'qgarcia@hotmail.com'
    },
    totalExperience: {
        label: '3 years'
    },
    primarySkill: {
        label : 'Angular'
    },
    primarySkillExperience: {
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
    columnKey: 'Recruiter Name',
    label: 'Recruiter Name',
  }, {
    columnKey: 'Submission ID',
    label: 'Submission ID',
  }, {
    columnKey: 'Submission Date',
    label: 'Submission Date'
  },{
    columnKey: 'Candidate ID',
    label: 'Candidate ID'
  },{
    columnKey: 'Candidate Name',
    label: 'Candidate Name'
  },
  {
    columnKey: 'Mobile',
    label: 'Mobile'
  },{
    columnKey: 'Email ID',
    label: 'Email ID'
  },{
    columnKey: 'Total Experience',
    label: 'Total Experience',
  },{
    columnKey: 'Primary Skill',
    label: 'Primary Skill '
  },{
    columnKey: 'Primary Skill Experience',
    label: 'Primary Skill Experience',
  }, {
    columnKey: 'More Options',
    label: ' '
}];

function SubmissionListing() {
    const [ isModalOpen , setIsModalOpen] = useState(false);


    initializeIcons();
      
    return(
            <div className={styles.container}>
                {<AddSubmissionModal isModalOpen = {isModalOpen} setIsModalOpen = {setIsModalOpen}/>}

                <div className={styles.nav_container}>
                    <div className={styles.title}>Submission Listing</div>

                    <div className={styles.nav_items}>
                        <SearchBox placeholder=" " iconProps={searchIcon} className={styles.search}  />
                        <FontIcon iconName="Breadcrumb" className={iconClass} />
                        <PrimaryButton text="Add Submission" iconProps={addIcon} onClick={() => setIsModalOpen(!isModalOpen)}/>
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
                                    <td className={styles.table_dataContents}>{item.recruiterName.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionID.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionDate.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateID.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateName.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}

                                {items.map(item => 
                                <tr className={styles.table_row} key={item.demandID.label}>
                                    <td className={styles.table_dataContents}>{item.demandID.label}</td>
                                    <td className={styles.table_dataContents}>{item.recruiterName.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionID.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionDate.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateID.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateName.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}

                                {items.map(item => 
                                <tr className={styles.table_row} key={item.demandID.label}>
                                    <td className={styles.table_dataContents}>{item.demandID.label}</td>
                                    <td className={styles.table_dataContents}>{item.recruiterName.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionID.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionDate.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateID.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateName.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}

                                {items.map(item => 
                                <tr className={styles.table_row} key={item.demandID.label}>
                                    <td className={styles.table_dataContents}>{item.demandID.label}</td>
                                    <td className={styles.table_dataContents}>{item.recruiterName.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionID.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionDate.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateID.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateName.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}

                                {items.map(item => 
                                <tr className={styles.table_row} key={item.demandID.label}>
                                    <td className={styles.table_dataContents}>{item.demandID.label}</td>
                                    <td className={styles.table_dataContents}>{item.recruiterName.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionID.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionDate.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateID.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateName.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}

                                {items.map(item => 
                                <tr className={styles.table_row} key={item.demandID.label}>
                                    <td className={styles.table_dataContents}>{item.demandID.label}</td>
                                    <td className={styles.table_dataContents}>{item.recruiterName.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionID.label}</td>
                                    <td className={styles.table_dataContents}>{item.submissionDate.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateID.label}</td>
                                    <td className={styles.table_dataContents}>{item.candidateName.label}</td>
                                    <td className={styles.table_dataContents}>{item.mobile.label}</td>
                                    <td className={styles.table_dataContents}>{item.emailID.label}</td>
                                    <td className={styles.table_dataContents}>{item.totalExperience.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkill.label}</td>
                                    <td className={styles.table_dataContents}>{item.primarySkillExperience.label}</td>
                                    <td className={styles.table_dataContents}><FontIcon iconName={item.moreOptions.icon} className={iconClass1} /></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
             </div>
       );

};

export default SubmissionListing;







