import {Col, Row} from "@themesberg/react-bootstrap";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faSave} from "@fortawesome/free-solid-svg-icons";

export default function TrainingClaims() {
    return(
        <div>
            <div className="col-md-6 offset-md-3 mt-5">
                <br/>
                <h1 style={{textAlign:"center", marginBottom:"20px"}}>Form Reimbursement Training Claims</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Full Name</label>
                        <input type="text" name="fullname" className="form-control" id="exampleInputName"
                               placeholder="Enter your full name" required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_employee" required="required">ID Employee</label>
                        <input type="number" name="id_employee" className="form-control" id="id_employee"
                               placeholder="Enter your identity employee"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date_claims" required="required">Date Claims</label>
                        <input type="date" name="date_claims" className="form-control" id="date_claims"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="start_training" required="required">Date Start Training</label>
                        <input type="date" name="start_training" className="form-control" id="start_training"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="end_training" required="required">Date End Training</label>
                        <input type="date" name="end_training" className="form-control" id="end_training"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fee" required = "required">Fee Training</label>
                        <input type="number" name="fee" className="form-control" id="fee" placeholder="Enter fee claims"/>
                    </div>
                    <hr/>
                    <div className="form-group mt-3">
                        <label className="mr-2">Upload your Bills:</label>
                        <input type="file" name="file"/>
                    </div>
                    <hr/>
                    <Row>
                        <Col>
                            <Button type="submit" className="btn btn" style={{backgroundColor:"#292961",color:"white", width:"100px"}}>
                                <FontAwesomeIcon icon={faSave}/> Submit</Button>
                        </Col>
                        <Col>
                            <Col>
                                <a href="/dashboard" className="btn btn-danger" style={{width:"100px",color:"white", marginLeft:"250px"}}>
                                    <FontAwesomeIcon icon={faBackward}/> Back </a>
                            </Col>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>
    )
}