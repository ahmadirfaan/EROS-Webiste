import React, {useEffect, useState} from "react";
import ForgetPassword from "./ForgetPassword";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUnlockAlt, faUser} from '@fortawesome/free-solid-svg-icons'
import BgImage from "../../assets/image/signin.svg"
import {Row, Col, FormControl, Container, InputGroup, Form} from "@themesberg/react-bootstrap";
import validate from "./validate";
import Navigation from "../../component/Navigation";
import {useHistory} from "react-router-dom";
import {loginEmployee} from "../../actions/loginAction"
import Swal from 'sweetalert2'
import ReactLoading from "react-loading";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";


const Login = ({loginEmployee, login, isLoading}) => {
    const [values, setValues] = useState({

    });

    /* Loading */
    const delay = 2000
    const color = "#292961"
    const type = "bars"
    /* Loading */

    /*state */
    const [data, setData] = useState({})
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    /* Validation Input */
    const [isValid, setIsValid] = useState(true)
    const [input, setInput] = useState({})
    const [error, setError] = useState({})

    /* Change Path */
    const history = useHistory();
    /* Change Path */

    console.log("login", data)

    useEffect( ()  => {
        if(login) {
            if(login.data.code === 200) {
                Swal.fire({
                    icon:'success',
                    title:'success',
                    text:'Login success...',
                    showConfirmButton: false,
                    timer: 1000
                })
                console.log(login.data)
                if(login.data.data.role.id === 1) {
                    history.push("/dashboard/hc")
                } else {
                    history.push("/dashboard/finance")
                }
                history.push()
            } else {
                Swal.fire({
                    icon:'error',
                    title:'Ooops..',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer:2000,
                })
            }
        }
    }, [login])



    // const handleChange = (event) => {
    //     const {name, value} = event.target;
    //     setValues({
    //         ...values,
    //         [name]: value
    //     });
    // };

    function handleChange(e) {
        const key = e.target.name
        const value = e.target.value

        switch (key) {
            case "email":
                setEmail(value)
                setData({...data, [key]: value})
                break;
            case "password":
                setPassword(value)
                setData({...data, [key]: value})
                break;
            default:
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loginEmployee(data)
    }


    return (
        <main style={{backgroundColor: "white"}}>
            <Navigation/>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                    <Row className="justify-content-center form-bg-image" style={{backgroundImage: `url(${BgImage})`}}>
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <div className="bg-white shadow-soft border rounded border-light p-5 p-lg-5">
                                {isLoading?
                                    <>
                                        <div className="text-center text-md-center mb-2 mt-md-0">
                                            <h3 className="mt-0">Please Wait a Seconds</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <ReactLoading type={"bubbles"} color={color} delay={delay}/>
                                            </div>
                                            <div className="col-md-4">
                                                <ReactLoading type={"bubbles"} color={color} delay={delay}/>
                                            </div>
                                            <div className="col-md-4">
                                                <ReactLoading type={"bubbles"} color={color} delay={delay}/>
                                            </div>
                                        </div>
                                    </>
                               :
                                <div className="text-center text-md-center mb-2 mt-md-0">
                                    <h3 className="mb-0">Sign in</h3>
                                </div>
                                }
                                <Form onSubmit={handleSubmit} className="mt-3">
                                    <Form.Group controlId="formBasicUsername" className="mb-2" style={{width: "300px"}}>
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
                                            <FormControl id="email"
                                                         name="email"
                                                         type="email"
                                                         value={email}
                                                         onChange={handleChange}
                                                         placeholder="Enter email"
                                            />
                                        </InputGroup>
                                        {/*<div className="text-danger">{errors.email}</div>*/}
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="mb-2" style={{width: "300px"}}>
                                        <Form.Label>Password</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text> <FontAwesomeIcon icon={faUnlockAlt}/></InputGroup.Text>
                                            <FormControl id="password"
                                                         name="password"
                                                         value={password}
                                                         type='password'
                                                         placeholder="Enter Password"
                                                         onChange={handleChange}
                                            />
                                            {/*<InputGroup.Prepend position="end">*/}
                                            {/*    <InputGroup.Text id="basic-addon2" style={{height:"38px"}}>*/}
                                            {/*        <IconButton onClick={handleClickShowPassword}*/}
                                            {/*                    onMouseDown={handleMouseDownPassword}>*/}
                                            {/*            {values.showPassword ? <Visibility/> : <VisibilityOff/>}*/}
                                            {/*        </IconButton>*/}
                                            {/*    </InputGroup.Text>*/}
                                            {/*</InputGroup.Prepend>*/}
                                        </InputGroup>
                                        {/*<div className="text-danger">{errors.password}</div>*/}
                                    </Form.Group>
                                    <Button type="submit" value="Sign In"
                                            style={{
                                                backgroundColor: "#292961",
                                                color: "white",
                                                fontSize: "15px",
                                                width: "300px",
                                                marginBottom: "20px"
                                            }}>
                                        Sign In
                                    </Button>

                                    {/*<a href="/dashboard/hc" className="btn btn" type="submit" style={{*/}
                                    {/*    backgroundColor: "#292961",*/}
                                    {/*    marginBottom: "20px",*/}
                                    {/*    width: "300px",*/}
                                    {/*    fontSize: "15px",*/}
                                    {/*    color: "white"*/}
                                    {/*}}>*/}
                                    {/*    Sign In*/}
                                    {/*</a>*/}
                                    <ForgetPassword/>
                                </Form>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
            {/*<Footer/>*/}
        </main>

    )
}

const mapStateToProps = (state) => {
    return {
        login : state.loginEmployee.data,
        isLoading: state.loginEmployee.isLoading
    }
}

const mapDispatchToProps = {loginEmployee}

export default connect(mapStateToProps, mapDispatchToProps)(Login);