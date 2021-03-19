// import {useParams, useHistory, Redirect} from "react-router-dom";
// import {useEffect, useState} from "react";
// import {findById, save} from "../../../actions/employeeAction"
// import {connect} from "react-redux";
// import {Button, Container, Form, Input, Label, FormGroup} from "reactstrap";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";
// import {findAll} from "../../../actions/gradeAction";
//
//
//
// function EditEmployee({employee, findById, isLoading, save, findAll, error, grades, savedEmployee}) {
//
//     const {id} = useParams();
//     const [gradesModel, setGradesModel] = useState([])
//     const history = useHistory();
//     const [data, setData] = useState({
//         id: null,
//         gradeId: null,
//         employeeType: null,
//         employeeStatus: null,
//         nip: null,
//         joinDate: null
//     })
//
// console.log("Error ", error)
//
//     let employeeType = [0, 1]
//     let employeeStatus = [0, 1]
//
//     useEffect( () => {
//         findAll()
//         setData(employee)
//     }, [findAll])
//
//
//     useEffect(() => {
//         findById(id)
//     }, [])
//
//     useEffect(() => {
//         if (id && employee) {
//             setData( {
//                 ...employee
//                 })}
//     }, [id,employee])
//
// //Save
//     useEffect(() => {
//         if (savedEmployee) {
//             history.push('/employee');
//         }
//     }, [savedEmployee, history])
//
//     useEffect( () => {
//         if(id) {
//             findById(id)
//         }
//         if(grades) {
//             setGradesModel(grades)
//         }
//     }, [id, findById, grades])
//
//
//     const handleChange = (event) => {
//         let name = event.target.name
//         let value = event.target.value
//         setData({...data, [name]: value})
//     }
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(data)
//         save(data);
//     }
//
//     console.log("EDIT", data)
//     return (
//         <Container>
//             <div>
//                 {console.log("coba yaa", data?.grade)}
//                 {!isLoading ? grades &&
//                     <Form onSubmit={handleSubmit}>
//                         <FormGroup>
//                             <Input onChange={handleChange} value={data?.id || ''}
//                                    type="text" name="id" hidden={true}/>
//                             <Label style={{fontFamily: "cursive"}}>
//                                 ID Employee
//                             </Label>
//                             <Input onChange={handleChange}
//                                    type="text" value={data?.nip || ''} name="nip"/>
//                         </FormGroup>
//
//                         <FormGroup>
//                             <Label style={{fontFamily: "cursive"}}>Grade</Label>
//                             <Input
//                                    type="select"
//                                    onChange={handleChange}
//                                    value={data?.grade || ''}
//                                    // onChange={e => setData( {...data, gradeId: e.target.value})}
//                                    name="grade">
//                                 {
//                                     gradesModel.data?.map( (element, index) =>
//                                         <option key = {index} value={element.id}>
//                                             {element.grade}
//                                         </option>
//                                     )
//                                 }
//                             </Input>
//
//                         </FormGroup>
//
//                         <FormGroup>
//                             <Label htmlFor="join_date"  style={{fontFamily: "cursive"}}>Join
//                                 Date</Label>
//                             <Input onChange={handleChange} type="date" value={data?.joinDate || ''}
//                                    name="joinDate"/>
//                         </FormGroup>
//
//                         <FormGroup>
//                             <Label style={{fontFamily: "cursive"}}>Employee
//                                 Status</Label>
//                             <Input onChange={handleChange} type="select" value={data?.employeeStatus || ''}
//                                    name="employeeStatus">
//
//                                 <option value="ACTIVE"> ACTIVE</option>
//                                 <option value="NON_ACTIVE"> NON_ACTIVE</option>
//                                 {/*<option> --choose--</option>*/}
//                                 {
//                                     // employeeStatus.map ( (element, index)  =>
//                                     //     <option key = {index} value={index}>
//                                     //         {element}
//                                     //     </option>
//                                     // )
//                                 }
//
//                             </Input>
//                         </FormGroup>
//
//                         <FormGroup>
//                             <Label style={{fontFamily: "cursive"}}>Employee
//                                 Type</Label>
//                             <Input onChange={handleChange} type="select" value={data?.employeeType || ''}
//                                    name="employeeType">
//
//                                 <option value="OFFICE">OFFICE</option>
//                                 <option value="ONSITE">ONSITE</option>
//                                 {/*<option> --choose--</option>*/}
//                                 {
//                                     // employeeType.map ((element, index)  =>
//                                     //     <option key = {index} value={index}>
//                                     //         {element}
//                                     //     </option>
//                                     // )
//                                 }
//
//
//
//                             </Input>
//                         </FormGroup>
//
//                         <Button type="submit">
//                             <FontAwesomeIcon icon={faSave}/>
//                             {id.length > 0 ? " Update" : " save"}
//                         </Button>
//                     </Form> :
//                     <div> Loading ...</div>
//                 }
//             </div>
//         </Container>
//     )
// }
//
// const mapStateToProps = (state) => {
//     console.log("state", state.saveEmployee.error)
//     return {
//         //call reducer
//         employee: state.findEmployeeById.data || [],
//         isLoading: state.findEmployeeById.isLoading,
//         savedEmployee: state.saveEmployee.data,
//         grades: state.findAllGrade.data,
//         error: state.findEmployeeById.error || state.saveEmployee.error,
//         update: state.updateEmployee
//
//     }
// }
// const mapDispatchToProps = {findById, save, findAll}
//
// export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);