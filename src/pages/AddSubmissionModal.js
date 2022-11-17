import React,{useState} from 'react'
import { Modal } from '@fluentui/react'
import { Toggle } from '@fluentui/react/lib/Toggle';
import styles from './AddSubmissionModal.module.css'
import { Icon } from '@fluentui/react/lib/Icon';
import { TextField, PrimaryButton, DatePicker} from '@fluentui/react';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { mergeStyles, mergeStyleSets} from '@fluentui/react';
import { Popup } from '../components/Popup';
import { ActionButton  } from '@fluentui/react/lib/Button';

// regex
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex= /^[A-Za-z]+$/;
const mobileRegex=/^[6-9]\d{9}$/;
const panNumberRegex= /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
const adhaarNumberRegex= /[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;

const contractIconClass = mergeStyles({
	fontSize: 20,
	height: '20px',
	width: '20px',
	cursor: 'pointer',
});

const closeIconClass = mergeStyles({
	fontSize: 16,
	height: '20px',
	width: '20px',
	cursor: 'pointer'

});

const calendarClass = mergeStyleSets({
	root: {'*' : {width: '100%', fontSize: 12, height: '22px !important', lineHeight: '20px !important',}},
	icon: {height: 10, width: 10, left: '85%', padding: '0px 0px',},
	fieldGroup:{border:'0.5px solid grey !important'},
	statusMessage:{marginBottom:'-25px'},
  });

const dropDownStyles = mergeStyleSets({
	dropdown: { minWidth: '160px', minHeight:'20px', },
	title :{ height: '22px', lineHeight:'18px', fontSize: '12px', border:'0.5px solid grey' },
	caretDownWrapper : {height: '22px', lineHeight:'20px !important'},
});

const dropDownStyles2 = mergeStyleSets({
	dropdown: { minHeight:'20px', },
	title :{ height: '22px', lineHeight:'18px', fontSize: '12px', border:'0.5px solid grey' },
	caretDownWrapper : {height: '22px', lineHeight:'20px !important'},
});

const toggleStyles = mergeStyleSets({
	root: {marginBottom : '0px',width:'120px'},
	label:{width:'190px'}
});

const dropDownRole =  [
  { key: 'recruiter', text: 'Recruiter' },
  { key: 'teamLead', text: 'Team Lead' },
  { key: 'accountManager', text: 'Reporting Manager'},
  { key: 'admin', text: 'Admin' },
  { key: 'businessLead', text: 'Business Lead' },
];

const dropDownTeamLead =  [
	{ key: 'TL', text: 'Bruce Wayne' },
	{ key: 'TL', text: 'Tommy Shelby' },
];

const dropDownReportingManager =  [
	{ key: 'RM', text: 'Alfred Pennyworth' },
	{ key: 'RM', text: 'Arthur' },
	{ key: 'RM', text: 'Jhon'},
];

const dropDownStatus =  [
	{ key: '1', text: 'Open' },
	{ key: '2', text: 'Close' },
	{ key: '3', text: 'On Hold'},
	{ key: '4', text: 'In progress' },
];

const dropDownLocation =  [
	{ key: '1', text: 'Gotham' },
	{ key: '2', text: 'USA' },
];

const dropDownMaritalStatus =  [
	{ key: '1', text: 'Married' },
	{ key: '2', text: 'Unmarried' },
	{ key: '3', text: 'Others'},
];

const dropDownGender =  [
	{ key: '1', text: 'Male' },
	{ key: '2', text: 'Female' },
	{ key: '3', text: 'Others'},
];




const AddSubmissionModal = (props) => {

	let isModalOpen = props.isModalOpen;

	const  setIsModalOpen = props.setIsModalOpen;

	const [isModalShrunk,setIsModalShrunk] = useState(false);
	const [autoGeneratePass,setAutoGeneratePass] = useState(true);

	const [employeeData,setEmployeeData] = useState({
		role: '',
		firstName:'',
		lastName:'',
		email:'',
		mobile:'',
		dateOfHire: '',
		dateOfJoin: '',
		dateOfBirth: '',
		maritalStatus: '',
		address1:'',
		address2:'',
		city:'',
		pincode:'',
		gender:'',
		panNumber:'',
		adhaarNumber:'',
	});

	const [errors,setErrors] = useState({
		role: '',
		firstName:'',
		lastName:'',
		email:'',
		mobile:'',
		dateOfHire: '',
		dateOfJoin: '',
		dateOfBirth: '',
		maritalStatus: '',
		address1:'',
		address2:'',
		city:'',
		pincode:'',
		gender:'',
		panNumber:'',
		adhaarNumber:'',
 });

	const [showPass, setShowPass] = useState(true);
	const [showPopup, setShowPopup] = useState(false);


	const modalSizeHandler =()=>{
     setIsModalShrunk(!isModalShrunk)
	}

	const dropDownHandler=(e,item,name)=>{
    setEmployeeData((prevData)=>{

			return{
				...prevData,
				[name]: item.text,
			}
      
		})
	setErrors({
			...errors,
			[name]: ''
		})
	};

	const dateHandler=(date,name)=>{
    setEmployeeData((prevData)=>{

			return{
				...prevData,
				[name]: date,
			}
      
		})
		setErrors({
			...errors,
			[name]: ''
		})
	};

	const inputChangeHandler =(e,name)=>{
		const {value} = e.target;
		let inputValue = value;

		if(name==='firstName' && inputValue.length > 40){
			inputValue = inputValue.slice(0,40)
		}

		if(name==='lastName' && inputValue.length > 40){
			inputValue = inputValue.slice(0,40)
		}

		if(name==='email' && inputValue.length > 320){
			inputValue = inputValue.slice(0,320)
		}

		if(name==='mobile' && inputValue.length > 10){
			inputValue = inputValue.slice(0,10)
		}

		if(name==='panNumber' && inputValue.length > 10){
			inputValue = inputValue.slice(0,10)
		}

		if(name==='adhaarNumber' && inputValue.length >12){
			inputValue = inputValue.slice(0,12)
		}

		setEmployeeData({
      ...employeeData,
			[name]: inputValue
		})

		setErrors({
			...errors,
			[name]: ''
		})
     
	};




	const submitHandler=()=>{
		if(isEmailValid(employeeData.email)){
			setErrors((prevState)=>{
				return{
					...prevState,
					email: ""
				}
			})
		}

		if(isNameValid(employeeData.firstName,'firstName')){
			setErrors((prevState)=>{
				return{
					...prevState,
					firstName: ""
				}
			})
		}

		if(isNameValid(employeeData.lastName,'lastName')){
			setErrors((prevState)=>{
				return{
					...prevState,
					lastName: ""
				}
			})
		}

		if(isMobileValid(employeeData.mobile)){
			setErrors((prevState)=>{
				return{
					...prevState,
					mobile: ""
				}
			})
		}


		if(isPanNumberValid(employeeData.panNumber)){
			setErrors((prevState)=>{
				return{
					...prevState,
					panNumber: ""
				}
			})
		}

		if(isAdhaarNumberValid(employeeData.adhaarNumber)){
			setErrors((prevState)=>{
				return{
					...prevState,
					adhaarNumber: ""
				}
			})
		}
		
		if(isDateOfHireValid(employeeData.dateOfHire)){
			setErrors((prevState)=>{
				return{
					...prevState,
					dateOfHire: ""
				}
			})
		}

		if(isDateOfJoinValid(employeeData.dateOfJoin)){
			setErrors((prevState)=>{
				return{
					...prevState,
					dateOfJoin: ""
				}
			})
		}

		if(isDateOfBirthValid(employeeData.dateOfBirth)){
			setErrors((prevState)=>{
				return{
					...prevState,
					dateOfBirth: ""
				}
			})
		}

		if(isAddress1Valid(employeeData.address1)){
			setErrors((prevState)=>{
				return{
					...prevState,
					address1: ""
				}
			})
		}

		if(isAddress2Valid(employeeData.address2)){
			setErrors((prevState)=>{
				return{
					...prevState,
					address2: ""
				}
			})
		}

		if(isMaritalStatusValid(employeeData.maritalStatus)){
			setErrors((prevState)=>{
				return{
					...prevState,
					maritalStatus: ""
				}
			})
		}

		if(isGenderValid(employeeData.gender)){
			setErrors((prevState)=>{
				return{
					...prevState,
					gender: ""
				}
			})
		}



	
	}
	const options = [
		{ key: "remote", text: " Remote" },
		{ key: "office", text: " Office" },
		{ key: "hybrid", text: " Hybrid" },
	  ];
	
	  const empTypeOption = [
		{ key: "Contract ", text: "Contract" },
		{ key: "Permanent", text: "Permanent" },
	  ];

	// validations

	const isEmailValid = (value)=>{

		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					email: "Required"
				}
			})
			return false;
		}

		if(!String(value).toLowerCase().match(emailRegex)){
			setErrors((prevState)=>{
				return{
					...prevState,
					email: "Invalid Email"
				}
			})

			return false;
		}

		return true;
	}

	const isNameValid = (value,name)=>{

		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					[name]: "Required"
				}
			})
			return false;
		}

		if(!value.match(nameRegex)){
			setErrors((prevState)=>{
				return{
					...prevState,
					[name]: "Invalid Name"
				}
			})
			return false;
		}
		return true;
		
     
	}

	const isMobileValid =(value)=>{

		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					'mobile': "Required"
				}
			})
			return false;
		}

		if(!value.match(mobileRegex)){
			setErrors((prevState)=>{
				return{
					...prevState,
					mobile: "Invalid Number"
				}
			})
			return false;
		}
		return true;
		
	}

	const isPanNumberValid=(value)=>{
		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					'panNumber': "Required"
				}
			})
			return false;
		}
		if(!value.match(panNumberRegex)){
			setErrors((prevState)=>{
				return{
					...prevState,
					panNumber: "Invalid Pan Number"
				}
			})
			return false;
		}
		return true;

	}

	const isAdhaarNumberValid=(value)=>{
		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					adhaarNumber: "Required"
				}
			})
			return false;
		}
		if(!value.match(adhaarNumberRegex)){
			setErrors((prevState)=>{
				return{
					...prevState,
					adhaarNumber: "Invalid Adhaar Number"
				}
			})
			return false;
		}
		return true;
	}


	const isDateOfHireValid=(value)=>{
		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					dateOfHire: "Required"
				}
			})
			return false;
		}

	}

	const isDateOfJoinValid=(value)=>{
		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					dateOfJoin: "Required"
				}
			})
			return false;
		}

	}

	const isDateOfBirthValid=(value)=>{
		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					dateOfBirth: "Required"
				}
			})
			return false;
		}

	}

	const isAddress1Valid=(value)=>{
		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					address1: "Required"
				}
			})
			return false;
		}
	}

	const isAddress2Valid=(value)=>{
		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					address2: "Required"
				}
			})
			return false;
		}
	}

	const isMaritalStatusValid=(value)=>{
		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					maritalStatus: "Required"
				}
			})
			return false;
		}
	}

	const isGenderValid=(value)=>{
		if(value.length===0){
			setErrors((prevState)=>{
				return{
					...prevState,
					gender: "Required"
				}
			})
			return false;
		}
	}



	const closeHandler = () => {

		setShowPopup(!showPopup);		
		// setIsModalOpen(!isModalOpen);
	}
    const handleAddField=()=>{
        setfieldList([...fieldList, {
         CompanyName:'',StartDate:'',EndDate:'',JobRole:'',WorkModel:'',CTC:'',EmployementType:'',
         IndustryType:'',C2H:'',JobSKils:'',closeImage:''
       }])
       }
    const handleRemoveField=(index)=>{
        const values=[...fieldList]
        values.splice(values.findIndex(value => value.index === index), 1)
        setfieldList(values);
    
      }
    const addIcon= { iconName: 'Add' };
    const closeIcon= { iconName: 'Cancel' };
    const classNames = mergeStyleSets({
        Red: [{ color: 'red' }],
       
      });
      const [fieldList,setfieldList]=useState([
        {
          CompanyName:'',StartDate:'',EndDate:'',JobRole:'',WorkModel:'',CTC:'',EmployementType:'',
          IndustryType:'',C2H:'',JobSKils:'',closeImage:''
        }
       
      ])
	return (

		<div>
			{<Popup showPopup={showPopup} setShowPopup={setShowPopup} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
			<Modal scrollableContentClassName={styles.addSubmission_modal_scrollable_content} containerClassName={`${isModalShrunk ? styles.addSubmission_modal_container_shrunk : styles.addSubmission_modal_container}`}
			  isOpen={isModalOpen}>
				<div className={styles.addSubmission_modal_header_container}>
					<div className={styles.header_tag_expand_close_icon_container}>

						<div className={styles.header_tag_container}>
							Submission
						</div>

						
						<div className={styles.header_expand_close_icon_container}>
							<div onClick={modalSizeHandler} className={styles.header_expand_icon_container}>
								{isModalShrunk ? <Icon iconName='FullScreen' className={contractIconClass}/>:
								<Icon iconName='BackToWindow' className={contractIconClass}/>}
							</div>
							<div onClick={()=>closeHandler()} className={styles.header_close_icon_container}>
								<Icon iconName='ChromeClose' className={closeIconClass}/>
							</div>

						</div>
		
					</div>

					<div className={styles.header_content_container}>

						<div className={styles.header_content_title_container}>
							<div className={styles.header_content_title_container}>
								Add Submission
							</div>

							<div className={styles.header_content_save_container}>
								
								<div className={styles.header_save_close_btns_container}>
									<PrimaryButton text={`Save & Close`} onClick={submitHandler} iconProps={{iconName:"Save"}}/>
								</div>
								
							</div>
						</div>
					</div>
				</div>

				<div className={styles.addemployee_modal_main_container}>

					<div className={styles.main_filter_options_container}>

						<div className={styles.subcontainer}>
							<div className={styles.main_dropdown_container}>
								<div className={styles.main_teamlead_title}>Demand ID </div>
								<Dropdown placeholder='select an option' styles={dropDownStyles} disabled={employeeData.role==='Team Lead'|| employeeData.role==='Reporting Manager' || employeeData.role==='Admin'}
								options={dropDownTeamLead} className={styles.loc_dropdown_teamlead}/>
							</div>

							<div className={styles.main_dropdown_container}>
								<div className={styles.main_status_title}>Status</div>
								<Dropdown placeholder='select an option' styles={dropDownStyles} options={dropDownStatus}className={styles.loc_dropdown_status}/>
							</div>
						</div>

						<div className={styles.subcontainer}>
							<div className={styles.main_dropdown_container}>
								<div className={styles.main_repotingmanager_title}>Expected CTC</div>
								<Dropdown placeholder='select an option' styles={dropDownStyles} disabled={employeeData.role==='Recruiter'|| employeeData.role==='Reporting Manager' || employeeData.role==='Admin' } 
								options={dropDownReportingManager} className={styles.loc_dropdown_reportingmanager}/>
							</div>

							<div className={styles.main_dropdown_container}>
								<div className={styles.main_location_title}>Prefered Mode of Hire</div>
								<Dropdown placeholder='select an option' styles={dropDownStyles} options={dropDownLocation} className={styles.loc_dropdown_location}/>
							</div>

						</div>

						<div className={styles.subcontainer}>
							<div className={styles.main_dropdown_container}>
								<div className={styles.main_repotingmanager_title}>Notice Period</div>
								<Dropdown placeholder='select an option' styles={dropDownStyles} disabled={employeeData.role==='Recruiter'|| employeeData.role==='Reporting Manager' || employeeData.role==='Admin' } 
								options={dropDownReportingManager} className={styles.loc_dropdown_reportingmanager}/>
							</div>
						</div>

					</div>

					<div className={styles.main_information_container}>

						<div className={styles.main_basic_information_container}>

							<div className={styles.main_basic_information_title}>
                 				BASIC INFORMATION
							</div>

							<div className={styles.main_basic_information_content_container}>
								<div className={styles.main_from_field}>
									<div className={styles.main_sub_from_field}>

										<div>First Name</div>
										<div className={(employeeData.firstName || errors.firstName)? styles.showfield : styles.hidefield } >
												<TextField  type="text" name="firstName" value={employeeData.firstName}
												onChange={(e)=>inputChangeHandler(e,'firstName')} errorMessage={errors.firstName} styles={Field} />
										</div>

									</div>

									<div className={styles.main_sub_from_field}>

										<div>Last Name</div>
										<div className={(employeeData.lastName || errors.lastName) ? styles.showfield : styles.hidefield } >
												<TextField  type="text" name="lastName" styles={Field} value={employeeData.lastName}
												onChange={(e)=>inputChangeHandler(e,'lastName')} errorMessage={errors.lastName}  />
										</div>

									</div>

									<div className={styles.main_sub_from_field}>

										<div>Email ID</div>
										<div className={(employeeData.email || errors.email) ? styles.showfield : styles.hidefield } >
												<TextField  type="email" name="email" errorMessage={errors.email} styles={Field}  value={employeeData.email}
												onChange={(e)=>inputChangeHandler(e,'email')} />
										</div>

									</div>

									<div className={styles.main_sub_from_field}>

										<div>Mobile Number</div>
										<div className={(employeeData.mobile || errors.mobile) ? styles.showfield : styles.hidefield } >
												<TextField  type="text" name="mobile"  styles={Field} value={employeeData.mobile} errorMessage={errors.mobile}
												onChange={(e)=>inputChangeHandler(e,'mobile')}/>
										</div>

									</div>

									<div className={styles.main_sub_from_field_gender}>
										<div>Gender</div>
										<div className={(employeeData.gender || errors.gender) ? styles.showfield : styles.hidefield } >
												<Dropdown placeholder='select an option'  options={dropDownGender} onChange={(e,item)=>dropDownHandler(e,item,'gender')}
												 errorMessage={errors.gender} styles={dropDownStyles2}/>
										</div>
									</div>

									<div className={styles.main_sub_from_field}>
										<div>State</div>
										<div className={(employeeData.city || errors.city) ? styles.showfield : styles.hidefield } >
												<TextField  type="text" name="state" styles={Field} onChange={(e)=>inputChangeHandler(e,'state')} />
											</div>
									</div>

									<div className={styles.main_sub_from_field}>
										<div>City</div>
										<div className={(employeeData.city || errors.city) ? styles.showfield : styles.hidefield } >
												<TextField  type="text" name="city" styles={Field} onChange={(e)=>inputChangeHandler(e,'city')} />
											</div>
									</div>

									<div className={styles.main_sub_from_field}>
										<div>Pincode</div>
										<div className={(employeeData.pincode || errors.pincode) ? styles.showfield : styles.hidefield } >
												<TextField  type="text" name="pincode" styles={Field} onChange={(e)=>inputChangeHandler(e,'pincode')}/>
										</div>
									</div>
								</div>
							</div>

						</div>

						<div className={styles.main_basic_information_container}>
                        
                        <div className={styles.main_basic_header}>
                           <div className={styles.main_basic_header_title}>
                 				EMPLOYMENT DETAILS
							</div>
                            <div className={styles.main_basic_header_title2}>
                            <ActionButton    iconProps={addIcon} ariaLabel='Add' onClick={()=>{handleAddField()}} >
                            Add
          </ActionButton > </div>
                            </div>
							<div className={styles.main_basic_information_content_container}>

								<div className={styles.table_container}>
									<table>
										<thead className={styles.table_header}>
											<tr className={styles.table_row}>
												<th className={styles.table_headerContents} >
													<div className={styles.table_heading}>
														Company Name
													</div>
												</th>

												<th className={styles.table_headerContents} >
													<div className={styles.table_heading}>
														Start Date
													</div>
												</th>

												<th className={styles.table_headerContents} >
													<div className={styles.table_heading}>
														End Date
													</div>
												</th>

												<th className={styles.table_headerContents} >
													<div className={styles.table_heading}>
														Job Role
													</div>
												</th>

												<th className={styles.table_headerContents} >
													<div className={styles.table_heading}>
														Work Model
													</div>
												</th>

												<th className={styles.table_headerContents} >
													<div className={styles.table_heading}>
														CTC
													</div>
												</th>

												<th className={styles.table_headerContents} >
													<div className={styles.table_heading}>
														Employment Type
													</div>
												</th>

												<th className={styles.table_headerContents} >
													<div className={styles.table_heading}>
														Industry Type
													</div>
												</th>

												<th className={styles.table_headerContents} >
													<div className={styles.table_heading}>
														C2H Payroll
													</div>
												</th>

												<th className={styles.table_headerContents} >
													<div className={styles.table_heading}>
														Job Skills
													</div>
												</th>
											</tr>
										</thead>
										
                                        {fieldList.map( (field,index)=>(
										<tbody>
											
											<tr className={styles.table_row}>

												<td className={styles.table_dataContents}>
													<div className={(employeeData.pincode || errors.pincode) ? styles.showfield : styles.hidefield } >
														<TextField  type="text"   value={field.CompanyName} name="pincode" styles={Field} onChange={(e)=>inputChangeHandler(e,'pincode')}
														errorMessage={errors.gender}/>
                                                       
                                                    </div>
												</td>

												<td className={styles.table_dataContents}>
													<div className={(employeeData.dateOfHire || errors.dateOfHire ) ? styles.showfield : styles.hidefield } >
														<DatePicker placeholder='DD/MM/YYYY' name='StartDate' value={field.StartDate}  onSelectDate={(date)=>dateHandler(date,'dateOfHire')} 
														isRequired={errors.dateOfHire}  styles={calendarClass} />
													</div>
												</td>


												<td className={styles.table_dataContents}>
													<div className={(employeeData.dateOfHire || errors.dateOfHire ) ? styles.showfield : styles.hidefield } >
														<DatePicker placeholder='DD/MM/YYYY' name='EndDate' value={field.EndDate} onSelectDate={(date)=>dateHandler(date,'dateOfHire')} 
														isRequired={errors.dateOfHire}  styles={calendarClass} />
													</div>
												</td>

												<td className={styles.table_dataContents}>
													<div className={(employeeData.gender || errors.gender) ? styles.showfield : styles.hidefield } >
														<Dropdown placeholder='select an option' name='JobRole' value={field.JobRole} options={options} onChange={(e,item)=>dropDownHandler(e,item,'gender')}
												 		errorMessage={errors.gender} styles={dropDownStyles2}/>
													</div>
												</td>

												<td className={styles.table_dataContents}>
													<div className={(employeeData.pincode || errors.pincode) ? styles.showfield : styles.hidefield } >
														<TextField  type="text" name='WorkModel' value={field.WorkModel} styles={Field} onChange={(e)=>inputChangeHandler(e,'pincode')} errorMessage={errors.gender}/>
													</div>
												</td>

												<td className={styles.table_dataContents}>
													<div className={(employeeData.pincode || errors.pincode) ? styles.showfield : styles.hidefield } >
														<TextField  type="text" name='CTC' value={field.CTC} styles={Field} onChange={(e)=>inputChangeHandler(e,'pincode')} errorMessage={errors.gender}/>
													</div>
												</td>

												<td className={styles.table_dataContents}>
													<div className={(employeeData.gender || errors.gender) ? styles.showfield : styles.hidefield } >
														<Dropdown placeholder='select an option'name='EmployementType' options={empTypeOption} value={field.EmployementType}   onChange={(e,item)=>dropDownHandler(e,item,'gender')}
												 		errorMessage={errors.gender} styles={dropDownStyles2}/>
													</div>
												</td>

												<td className={styles.table_dataContents}>
													<div className={(employeeData.gender || errors.gender) ? styles.showfield : styles.hidefield } >
														<Dropdown placeholder='select an option'  name='IndustryType' options={options} value={field.IndustryType}  onChange={(e,item)=>dropDownHandler(e,item,'gender')}
												 		errorMessage={errors.gender} styles={dropDownStyles2}/>
													</div>
												</td>

												<td className={styles.table_dataContents}>
													<div className={(employeeData.pincode || errors.pincode) ? styles.showfield : styles.hidefield } >
														<TextField  type="text" name='C2H' value={field.C2H} styles={Field} onChange={(e)=>inputChangeHandler(e,'pincode')} errorMessage={errors.gender}/>
													</div>
												</td>

												<td className={styles.table_dataContents}>
													<div className={(employeeData.pincode || errors.pincode) ? styles.showfield : styles.hidefield } >
														<TextField  type="text" name='JobSKils' value={field.JobSKils}  styles={Field} onChange={(e)=>inputChangeHandler(e,'pincode')} errorMessage={errors.gender}/>
													</div>
												</td>
												<td className={styles.table_dataContents}>
                                                <ActionButton  name='closeImage' className={classNames.Red} value={field.closeImage} iconProps={closeIcon} onClick={()=>{handleRemoveField(index)}}  >
          </ActionButton >
												</td>

											</tr>
												
										</tbody>
                                        ))}
									</table>
								</div>

							</div>

							<div className={styles.main_information_container2}>
								<div>
									<div className={styles.main_basic_information_title}>
                 						PREFERENCES
									</div>

									<div className={styles.main_basic_information_container2}>

										<div className={styles.main_sub_from_field}>
										
											<div>Current Location</div>
											<Dropdown placeholder='select an option'  options={dropDownGender} onChange={(e,item)=>dropDownHandler(e,item,'gender')}
											errorMessage={errors.gender} styles={dropDownStyles2}/>
										</div>

										<Toggle label="Willing to relocate" defaultChecked onText="Yes" offText="No" styles={toggleStyles} />

										<div className={styles.main_sub_from_field}>
											<div>Prefered Location</div>
											<Dropdown placeholder='select an option'  options={dropDownGender} onChange={(e,item)=>dropDownHandler(e,item,'gender')}
											errorMessage={errors.gender} styles={dropDownStyles2}/>
										</div>
									</div>


								</div>

								<div> 
									<div className={styles.main_basic_information_title}>
                 						SKILL SET
									</div>

									<div  className={styles.main_basic_information_container2}>

										<div className={styles.main_sub_from_field}>
												<div className>Skill Set</div>
												<Dropdown placeholder='select an option'  options={dropDownGender} onChange={(e,item)=>dropDownHandler(e,item,'gender')}
												errorMessage={errors.gender} styles={dropDownStyles2}/>
										</div>

										<div className={styles.main_sub_from_field}>
											<div>Realavent Skill Enperience</div>
											<div className={(employeeData.pincode || errors.pincode) ? styles.showfield : styles.hidefield } >
													<TextField  placeholder= 'Year(s)' type="text" name="pincode" styles={Field} onChange={(e)=>inputChangeHandler(e,'pincode')}/>
											</div>
										</div>

										<div className={styles.main_sub_from_field}>
											<div className={(employeeData.pincode || errors.pincode) ? styles.showfield : styles.hidefield } >
													<TextField  type="text" placeholder= 'Months(s)' name="pincode" styles={Field} onChange={(e)=>inputChangeHandler(e,'pincode')}/>
											</div>
										</div>

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

function halfField(props) {
	  return ({fieldGroup: [{width:'50%',height:'22px', border:'0.5px solid grey'},]})
  }

  function Field(props) {
	  return ({fieldGroup: [{height:'22px',width:'100%', border:'0.5px solid grey'},]})
  }

export default AddSubmissionModal;