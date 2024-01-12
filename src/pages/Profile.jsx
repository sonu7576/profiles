import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Heart, PhoneCall, Send } from 'react-feather'



function Profile() {
    return (
        <>
            <Container style={{ paddingLeft: "10px", paddingTop: "50px" }}>

                <Row>
                    <Col>



                    </Col>
                    <Col xs={5} >
                        <div>
                            <Card className='mb-5' style={{ width: '25rem', borderRadius: "10px" }}>
                                <Card.Img className='w-100' variant="top" src="https://st3.depositphotos.com/4218696/33218/i/450/depositphotos_332180778-stock-photo-portrait-of-smiling-arabic-girl.jpg" />


                            </Card>
                        </div>






                    </Col >

                    <Col xs={5}>

                        <div>
                            <Card className='ms-2 mb-5' style={{ width: '35rem', borderRadius: "10px" }}>

                                <Card.Body>
                                    <Card.Title>faheema</Card.Title>
                                    <div className='d-flex justify-content-between '>
                                        <div className='fw-light pb-2 ' > 52km from you</div>
                                        <div className='d-flex justify-content-between '>

                                            <div className='ms-2' style={{ width: "40px", height: "40px", borderRadius: "50%", alignItems: "center" }}></div>

                                            <div className='ms-2' style={{ width: "40px", height: "40px", borderRadius: "50%" }}></div>

                                            <div className='ms-2' style={{ width: "40px", height: "40px", borderRadius: "50%" }}></div>

                                        </div>
                                    </div>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque perferendis consectetur ut nisi quaerat recusandae aliquam ea, perspiciatis accusamus neque non consequatur quo expedita qui eum, labore, quae illo?
                                    </Card.Text>

                                    <h6>Interests</h6>
                                    <div className='d-flex p-4'>
                                        <div className='me-3 fw-bolder text-light' style={{ backgroundColor: "#E70F4F", borderRadius: "30px", paddingLeft: "10px", paddingRight: "10px" }}>TV Shows</div>

                                        <div className='me-3 fw-bolder text-light' style={{ backgroundColor: "#E70F4F", borderRadius: "30px", paddingLeft: "10px", paddingRight: "10px" }}>Photography</div>

                                        <div className='me-3 fw-bolder text-light' style={{ backgroundColor: "#E70F4F", borderRadius: "30px", paddingLeft: "10px", paddingRight: "10px" }}>Design</div>

                                        <div className='me-3 fw-bolder text-light' style={{ backgroundColor: "#E70F4F", borderRadius: "30px", paddingLeft: "10px", paddingRight: "10px" }}>Acting</div>



                                    </div>
                                    <div className='d-flex p-4'>
                                        <div className='me-3 fw-bolder text-light' style={{ backgroundColor: "#E70F4F", borderRadius: "30px", paddingLeft: "10px", paddingRight: "10px" }}>Art Gallery</div>

                                        <div className='me-3 fw-bolder text-light' style={{ backgroundColor: "#E70F4F", borderRadius: "30px", paddingLeft: "10px", paddingRight: "10px" }}>Board Games</div>

                                        <div className='me-3 fw-bolder text-light ' style={{ backgroundColor: "#E70F4F", borderRadius: "30px", paddingLeft: "10px", paddingRight: "10px" }}>Cricket</div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <Button style={{ backgroundColor: "pink", fontWeight: "bold", color: "black" }} ><Heart style={{ color: "#E70F4F" }} />Show intrest</Button>
                                        <Button style={{ backgroundColor: "lightyellow", fontWeight: "bold", color: "black" }}><Send />Share Profile</Button>
                                    </div>
                                    <div>
                                        <Button className='mt-5' style={{ width: "100%" }} variant="secondary" >
                                            <PhoneCall /> Request Call
                                        </Button>
                                    </div>
                                </Card.Body>

                            </Card>
                        </div>








                    </Col>
                </Row>

                <Row>

                    <Col></Col>
                    <Col xs={10}>

                        <div>

                            <Row>
                                <Col xs={3}><Card className='ms-2 mb-5' style={{ width: '60rem', borderRadius: "10px" }}>

                                    <Card.Body>
                                        <Card.Title>Bio</Card.Title>
                                        <p className='fw-bold' style={{ color: "grey" }} >Basic information</p>




                                        <h6>Date of Birth</h6>
                                        <h6>Email Id</h6>
                                        <h6>Blood Group</h6>
                                        <h6>Hight</h6>
                                        <h6>Wight</h6>

                                        <p className='fw-bold' style={{ color: "grey" }} >Religion Information</p>




                                        <h6>Religion</h6>
                                        <h6>Sect</h6>
                                        <h6>Perform Namaz</h6>
                                        <h6>Read Qur`an Daily</h6>
                                        <h6>Religlousness</h6>
                                        <p className='fw-bold' style={{ color: "grey" }} >Educational and Professional Information</p>




                                        <h6>education</h6>
                                        <h6>Profession</h6>
                                       



                                    </Card.Body>

                                </Card></Col>
                                <Col xs={3}>

                                    <p>hh</p>

                                    
                                </Col>
                            </Row>


                        </div>


                    </Col>

                </Row>




            </Container>
        </>
    )
}

export default Profile