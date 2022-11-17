import React,{useState} from 'react'

import { Modal } from '@fluentui/react'
import { Toggle } from '@fluentui/react/lib/Toggle';

import styles from './AddDemandModal.module.css'
import { Icon } from '@fluentui/react/lib/Icon';
import { DefaultButton, PrimaryButton, DatePicker,ActionButton,Persona,PersonaSize,Callout } from '@fluentui/react';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { TextField } from '@fluentui/react/lib/TextField';

import {EditorState} from 'draft-js';
import {Editor} from "react-draft-wysiwyg"
import 'draft-js/dist/Draft.css';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';





import { mergeStyles,mergeStyleSets } from '@fluentui/react';



const contractIconClass = mergeStyles({
	fontSize: 20,
	height: 20,
	width: 20,
	cursor: 'pointer',
});

const closeIconClass = mergeStyles({
	fontSize: 16,
	height: 20,
	width: 20,
	cursor: 'pointer'

})

const downIconClass=mergeStyles({
	fontSize: 14,
	height: 20,
	width: 20,
	cursor: 'pointer',
});

const textFieldClass={
	fieldGroup: {width:'50%',height:'22px', border:'0.5px solid grey'}
}


const toggleStyles = {
	root:{
		marginBottom: 0,
	},
	label:{
   userSelect: 'none'
	}
}



const cancelButtonStyles={


}



const dropDownOptions =  [
  
  { key: 'apple', text: '123456' },
  { key: 'banana', text: '654321' },
  { key: 'orange', text: '333333'},
  { key: 'grape', text: '70707070' },
  { key: 'broccoli', text: '99999999' },
]



const dropDownStyles = mergeStyleSets({
	dropdown: { width: '160px', minWidth: '160px', minHeight:'20px'},
	title :{ height: '22px', lineHeight:'18px', fontSize: '12px'},
	caretDownWrapper : {height: '22px', lineHeight:'20px !important'}
});

const dropDownRegularStyles=mergeStyleSets({
	dropdown: { minWidth: '100%', minHeight:'20px'},
	title :{ height: '22px', lineHeight:'18px', fontSize: '12px'},
	caretDownWrapper : {height: '22px', lineHeight:'20px !important'}
});

const dropDownSmallStyles = mergeStyleSets({
	root:{ width: '49%'},
	dropdown: { width: '100%', minHeight:'20px'},
	title :{ height: '22px', lineHeight:'18px', fontSize: '12px'},
	caretDownWrapper : {height: '22px', lineHeight:'20px !important'}
});


const calendarClass = mergeStyleSets({
	root: {'*' : {width: '100%', fontSize: 12, height: '22px !important', lineHeight: '20px !important'}},
	icon: {height: 10, width: 10, left: '85%', padding: '0px 0px',},
  });


 const primarySkillTextFieldStyles={
	fieldGroup:{
		height: 22,
	},
	field:{
		fontSize: 12
	}
 }

const jobDescriptionStyles={
	fieldGroup:{
		height: 32,
		width: 450
	},
	field:{
		fontStyle: 'italic'
	}
}

const personaStyles={
	primaryText:{
		height: 13,
	}
}

const personaDropDownStyles={
	root:{
		margin:'0px 5px'
	}
}


const personCalloutStyles={
	 
}

const unassignedDropdownStyles={
  dropdown:{
		width: 120,
	},
	title:{
		height: 30
	}
}

const dropDownStatus =  [
  { key: 'open', text: 'Open' },
  { key: 'close', text: 'Close' },
  { key: 'on hold', text: 'On Hold'},
  { key: 'in progress', text: 'In Progress' }
];

const dropDownPriority =  [
  { key: 'low', text: 'Low' },
  { key: 'medium', text: 'Medium' },
  { key: 'high', text: 'High'},
];

const dropDownNoticePeriod = [
	{key:'lt15', text: '< 15 Days'},
	{key:'lt30', text: '< 30 Days'},
	{key:'lt60', text: '< 60 Days'},
	{key:'gt60', text: '> 60 Days'},
]

const dropDownMonth =[
	{key: '1 month', text: '1 Month' },
	{key: '2 months', text: '2 Months' },
	{key: '3 months', text: '3 Months' },
	{key: '4 months', text: '4 Months' },
	{key: '5 months', text: '5 Months' },
	{key: '6 months', text: '6 Months' },
	{key: '7 months', text: '7 Months' },
	{key: '8 months', text: '8 Months' },
	{key: '9 months', text: '9 Months' },
	{key: '10 months', text: '10 Months' },
	{key: '11 months', text: '11 Months' },
	{key: '12 months', text: '12 Months' },
]

const dropDownYear =[
	{key: '1 year', text: '1 year' },
	{key: '2 years', text: '2 years' },
	{key: '3 years', text: '3 years' },
	{key: '4 years', text: '4 years' },
	{key: '5 years', text: '5 years' },
	{key: '6 years', text: '6 years' },
	{key: '7 years', text: '7 years' },
	{key: '8 years', text: '8 years' },
	{key: '9 years', text: '9 years' },
	{key: '10 years', text: '10 years' },
	{key: '11 years', text: '11 years' },
	{key: '12 years', text: '12 years' },
]

const modeOfHireDropdown=[
	{key: 'C2H', text: 'C2H (contract to Hire) - Client side '},
	{key:'permanent', text:'Permanent  - Internal recruitment'}
]


const personaList =[

	{
		text: 'Maor Sharett',
		imageInitials: 'MS',
		secondaryText: 'maorsharett@gmail.com',
		showSecondaryText: true,
	},
	{
		text: 'Mary Shekar',
		imageInitials: 'MS',
		secondaryText: 'maorsharett1@gmail.com',
		showSecondaryText: true,
	},
	{
		text: 'Miss Shajan',
		imageInitials: 'MS',
		secondaryText: 'maorsharett2@gmail.com',
		showSecondaryText: true,
	},
	{
		text: 'Gowri Shankar',
		imageInitials: 'GS',
		secondaryText:'gowris@gmail.com',
		showSecondaryText: true,
	},
	{
		text: 'Elango Viswanath',
		imageInitials: 'EV',
		secondaryText:'elangoviswa@gmail.com',
		showSecondaryText: true,
	}
]






const AddDemandModal = (props) => {

	let isModalOpen = props.isModalOpen;
	const  setIsModalOpen = props.setIsModalOpen;
	const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

	const [editorState2, setEditorState2] = React.useState(
    () => EditorState.createEmpty(),
  );

	const [demandData,setDemandData] = useState({
		assigned:'',
		jobTitle:'',
		status:'',
		noOfOptions:'',
		priority:'',
		client:''
	})

	const [isModalShrunk,setIsModalShrunk] = useState(false); 
	const [isPersonaOpen, setIsPersonaOpen]= useState(false);


	const toggleHandler =()=>{

	}

	const modalSizeHandler =()=>{
     setIsModalShrunk(!isModalShrunk)
	}

	const personaClickHandler=(secondaryText)=>{
		setDemandData(prevState=>{
			return{
				...prevState,
				assigned: secondaryText
			}
		})
		setIsPersonaOpen(!isPersonaOpen)
	}


	return (

		<div>
			<Modal scrollableContentClassName={styles.adddemand_modal_scrollable_content} containerClassName={`${isModalShrunk ? styles.adddemand_modal_container_shrunk : styles.adddemand_modal_container}`}
			  isOpen={isModalOpen}>
				<div className={styles.adddemand_modal_header_container}>
					<div className={styles.header_tag_expand_close_icon_container}>

						<div className={styles.header_tag_container}>
							Demand
						</div>

						
						<div className={styles.header_expand_close_icon_container}>
							<div onClick={modalSizeHandler} className={styles.header_expand_icon_container}>
								{isModalShrunk ? <Icon iconName='FullScreen' className={contractIconClass}/>:
								<Icon iconName='BackToWindow' className={contractIconClass}/>}
							</div>
							<div onClick={()=>setIsModalOpen(!isModalOpen)} className={styles.header_close_icon_container}>
								<Icon iconName='ChromeClose' className={closeIconClass}/>
							</div>

						</div>


		
					</div>

					<div className={styles.header_content_container}>
						<div className={styles.header_content_job_description_unassigned_save_container}>

							<div className={styles.header_content_job_description_unassigned_container}>
								<div className={styles.header_content_job_description_container}>
									<TextField styles={jobDescriptionStyles} placeholder={"Enter the Job Description Title"} resizable={false}/>
								</div>
								<div id='personaId' onClick={()=>setIsPersonaOpen(!isPersonaOpen)} className={styles.header_content_unassigned_dropdown_container}>

									<div className={styles.unassigned_title_icon_container}>
										 <div className={styles.unassigned_title_container}>
											{demandData.assigned ==='' ? "unassigned" : personaList.filter((person)=> person.secondaryText===demandData.assigned)
											.map((person)=> <Persona {...person} styles={personaStyles} text={person.text} secondaryText={person.secondaryText} size={PersonaSize.size24}/> )}
										 </div>
										 <div className={styles.unassigned_icon_container}>
											 <Icon iconName='ChevronDown' className={downIconClass}/>
										 </div>
									</div>

		
								{	isPersonaOpen && <Callout role='dialog' isBeakVisible={false} calloutMaxHeight={145} target={'#personaId'} >


										{personaList.map((person)=>{
											return (
												<div onClick={()=>personaClickHandler(person.secondaryText)}>
													<Persona {...person} text={person.text} styles={personaDropDownStyles} secondaryText={person.secondaryText} size={PersonaSize.size24}/>
												</div>
											)
											
										})}

									</Callout>
									}
									
								</div>


							</div>
							
						
								
							<div className={styles.header_save_close_btns_container}>
								

								<PrimaryButton text="Save & Close" iconProps={{iconName:"Save"}}/>



							</div>

						</div>
					</div>
				</div>
					<div className={styles.main_filter_options_container}>
						<div className={styles.main_filter_options_sub_container}>
							<div className={styles.main_role_dropdown_container}>

								<div className={styles.main_role_title}>Status </div>
								<Dropdown placeholder='select an option' styles={dropDownStyles} options={dropDownStatus}/>
		
							</div>
							<div className={styles.main_role_dropdown_container}>
							
								<div className={styles.main_role_title}>No of Options</div>
								<Dropdown placeholder='select an option' styles={dropDownStyles} options={dropDownOptions}/>

							</div>

						</div>
						<div className={styles.main_filter_options_sub_container}>
							<div className={styles.main_role_dropdown_container}>

								<div className={styles.main_role_title}>Priority </div>
								<Dropdown placeholder='select an option' styles={dropDownStyles} options={dropDownPriority}/>

							</div>
							<div className={styles.main_role_dropdown_container}>
								
								<div className={styles.main_role_title}>Clients</div>
								<Dropdown placeholder='select an option' styles={dropDownStyles} options={dropDownOptions}/>

							</div>

						</div>


					</div>

					<div className={styles.main_information_container}>
						<div className={styles.main_information_sub_container_left}>
							<div className={styles.main_job_description_demand_vendor_container}>

								<div className={styles.main_basic_information_title}>
									JOB DESCRIPTION
								</div>

								<div className={styles.main_wysiwyg_container}>

									
									<Editor wrapperClassName={styles.editor_wrapper}
									toolbarClassName={styles.editor_toolbar} editorClassName={styles.editor_editor}
										editorState={editorState} onEditorStateChange={(editorState)=>setEditorState(editorState)} />

							
									
								</div>


							</div>
							<div className={styles.main_job_description_demand_vendor_container}>

								<div className={styles.main_basic_information_title}>
									ADDITIONAL INFORMATION
								</div>

								<div className={styles.main_wysiwyg_container}>

									<Editor wrapperClassName={styles.editor_wrapper}
									toolbarClassName={styles.editor_toolbar} editorClassName={styles.editor_editor}
										editorState={editorState2} onEditorStateChange={(editorState2)=>setEditorState2(editorState2)} />



								</div>


							</div>
						</div>
						<div className={styles.main_information_sub_container_right}>
							<div className={styles.main_right_demand_vendor_info_container}>
								<div className={styles.main_right_demand_info_container}> 
									<div className={styles.main_basic_information_title}>
										DEMAND INFORMATION
									</div>
									<div className={styles.main_right_demand_info_content_container}>
										<div className={styles.demand_info_duedate_min_experience_container}>
											<div className={styles.demand_info_due_date_title}>
												Due Date
											</div>
											<div className={styles.demand_info_due_date_dropdown_container}>
												<DatePicker placeholder={'DD/MM/YYYY'} styles={calendarClass}/>
											</div>
											<div className={styles.demand_info_min_experience_title}>
												Minimum Experience
											</div>
											<div className={styles.demand_info_min_experience_dropdown_container}>
												<Dropdown placeholder='months' styles={dropDownSmallStyles} options={dropDownMonth}/>
												<Dropdown placeholder='years' styles={dropDownSmallStyles} options={dropDownYear}/>
											</div>
									

										</div>
										<div className={styles.demand_info_notice_period_min_experience_container}>
											<div className={styles.demand_info_notice_period_title}>
												Notice Period
											</div>
											<div className={styles.demand_info_notice_period_dropdown_container}>
												<Dropdown placeholder={'DD/MM/YYYY'} styles={dropDownRegularStyles} options={dropDownNoticePeriod}/>
											</div>
											<div className={styles.demand_info_max_experience_title}>
												Maximum Experience
											</div>
											<div className={styles.demand_info_max_experience_dropdown_container}>
												<Dropdown placeholder='months' styles={dropDownSmallStyles} options={dropDownMonth}/>
												<Dropdown placeholder='years' styles={dropDownSmallStyles} options={dropDownYear}/>
											</div>
										</div>
										



									</div>
								</div>
								<div className={styles.main_right_vendor_info_container}>
									<div className={styles.main_basic_information_title}>
										VENDOR INFORMATION
									</div>
									<div className={styles.main_right_vendor_info_content_container}>

									 <div className={styles.vendor_info_mode_of_hire_point_of_contact_vendor_job_rr_id_container}>
											<div className={styles.vendor_info_mode_of_hire_title}>
												Mode of Hire
											</div>
											<div className={styles.vendor_info_mode_of_hire_dropdown_container}>
												<Dropdown placeholder='Select' styles={dropDownStyles} options={modeOfHireDropdown}/>
											</div>

											<div className={styles.vendor_info_point_of_contact_vendor_title}>
												Point of contact
											</div>
											<div className={styles.vendor_info_point_of_contact_vendor_dropdown_container}>
												<TextField styles={textFieldClass}/>
											</div>
											<div className={styles.vendor_info_job_rr_id_title}>
												Job / RR ID
											</div>
											<div className={styles.vendor_info_job_rr_id_dropdown_container}>
												<Dropdown placeholder='Select' styles={dropDownStyles} options={dropDownOptions}/>
											</div>
									 </div>
									</div>



								</div>

							</div>

							<div className={styles.main_right_skillset_container}>
								<div className={styles.main_right_skill_set_title_add_icon_container}>
									<div className={styles.main_right_skill_set_title}>
										SKILL SET
									</div>
									<div className={styles.main_right_add_icon_container}>
									</div>
								</div>
								<div className={styles.main_right_skill_set_experience_container}>
									<div className={styles.main_right_skill_set_title_dropdown_container}>
										<div className={styles.main_right_skill_set_title}>
											Primary Skill Set
										</div>
										<div className={styles.main_right_skill_set_dropdown_container}>
											<Dropdown placeholder='Select' styles={dropDownRegularStyles} options={dropDownOptions}/>
										</div>
									</div>
									<div className={styles.main_right_skill_experience_container}>
										<div className={styles.main_right_skill_experience_title}>
											Primary Skill Experience
										</div>
										<div className={styles.main_right_skill_experience_dropdown_container}>
											<TextField placeholder='Year(s)' styles={primarySkillTextFieldStyles}/>
											<TextField placeholder='Month(m)'styles={primarySkillTextFieldStyles}/>
										</div>
									</div>




								</div>
								





							</div>
						





						</div>

						
						

					
			

			



					</div>

				
       

			</Modal>

		</div>
		
	)
}


export default AddDemandModal;
