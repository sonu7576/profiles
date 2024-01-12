import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart, Info, MapPin, Send } from 'react-feather';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { Link } from 'react-router-dom';


function Home() {

    const [value, setValue] = useState([1, 3]);

  
  const handleChange = (val) => setValue(val);

    return (
        <>



            <Container style={{ paddingLeft: "10px", paddingTop: "50px" }}>

                <Row>
                    <Col>
                    


                    </Col>
                    <Col xs={7} ><div>
                        <Card className='mb-5' style={{ width: '40rem', borderRadius: "10px"  }}>
                           <Link to={'/profile'}> <Card.Img className='w-100' variant="top" src="https://st3.depositphotos.com/4218696/33218/i/450/depositphotos_332180778-stock-photo-portrait-of-smiling-arabic-girl.jpg" /></Link>
                            <Card.Body>
                                <Card.Title>faheema</Card.Title>
                                <div className='d-flex justify-content-between '>
                                    <div className='fw-light pb-2 ' ><MapPin /> 52km from you</div>
                                    <div className='d-flex justify-content-between '>

                                        <div className='ms-2' style={{  width: "40px", height: "40px", borderRadius: "50%", alignItems: "center" }}><Heart /></div>

                                        <div className='ms-2' style={{  width: "40px", height: "40px", borderRadius: "50%" }}><Send /></div>

                                        <div className='ms-2' style={{ width: "40px", height: "40px", borderRadius: "50%" }}><Info /></div>

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
                            </Card.Body>

                        </Card>
                    </div>

                    <div>
                        <Card className='mb-5' style={{ width: '40rem', borderRadius: "10px", paddingBottom:"40px" }}>
                            <Link to={'/profile2'}><Card.Img onClick={"/profile"} className='w-100' variant="top" src="https://st3.depositphotos.com/4218696/33218/i/450/depositphotos_332180778-stock-photo-portrait-of-smiling-arabic-girl.jpg" /></Link>
                            <Card.Body>
                                <Card.Title>faheema</Card.Title>
                                <div className='d-flex justify-content-between '>
                                    <div className='fw-light pb-2 ' ><MapPin /> 52km from you</div>
                                    <div className='d-flex justify-content-between '>

                                        <div className='ms-2' style={{  width: "40px", height: "40px", borderRadius: "50%", alignItems: "center" }}><Heart /></div>

                                        <div className='ms-2' style={{  width: "40px", height: "40px", borderRadius: "50%" }}><Send /></div>

                                        <div className='ms-2' style={{ width: "40px", height: "40px", borderRadius: "50%" }}><Info /></div>

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
                            </Card.Body>

                        </Card>
                    </div>

                    <div>
                        <Card className='mb-5' style={{ width: '40rem', borderRadius: "10px", paddingBottom:"40px" }}>
                            <Link to={'/profile2'}><Card.Img onClick={"/profile"} className='w-100' variant="top" src="https://st3.depositphotos.com/4218696/33218/i/450/depositphotos_332180778-stock-photo-portrait-of-smiling-arabic-girl.jpg" /></Link>
                            <Card.Body>
                                <Card.Title>faheema</Card.Title>
                                <div className='d-flex justify-content-between '>
                                    <div className='fw-light pb-2 ' ><MapPin /> 52km from you</div>
                                    <div className='d-flex justify-content-between '>

                                        <div className='ms-2' style={{  width: "40px", height: "40px", borderRadius: "50%", alignItems: "center" }}><Heart /></div>

                                        <div className='ms-2' style={{  width: "40px", height: "40px", borderRadius: "50%" }}><Send /></div>

                                        <div className='ms-2' style={{ width: "40px", height: "40px", borderRadius: "50%" }}><Info /></div>

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
                            </Card.Body>

                        </Card>
                    </div>
                    <div>
                        <Card className='mb-5' style={{ width: '40rem', borderRadius: "10px", paddingBottom:"40px" }}>
                            <Link to={'/profile2'}><Card.Img onClick={"/profile"} className='w-100' variant="top" src="https://st3.depositphotos.com/4218696/33218/i/450/depositphotos_332180778-stock-photo-portrait-of-smiling-arabic-girl.jpg" /></Link>
                            <Card.Body>
                                <Card.Title>faheema</Card.Title>
                                <div className='d-flex justify-content-between '>
                                    <div className='fw-light pb-2 ' ><MapPin /> 52km from you</div>
                                    <div className='d-flex justify-content-between '>

                                        <div className='ms-2' style={{  width: "40px", height: "40px", borderRadius: "50%", alignItems: "center" }}><Heart /></div>

                                        <div className='ms-2' style={{  width: "40px", height: "40px", borderRadius: "50%" }}><Send /></div>

                                        <div className='ms-2' style={{ width: "40px", height: "40px", borderRadius: "50%" }}><Info /></div>

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
                            </Card.Body>

                        </Card>
                    </div>
                    
                    
                    
                    </Col>
                    <Col>

                        <Card style={{ width: '18rem', borderRadius: "10px" }}>

                            <Card.Body>

                                <div>

                                    <h6 className='fw-bold' >Messages <span style={{ color: "crimson", fontSize: "small", paddingLeft: "50%" }} >see all</span></h6>

                                    <div className='d-flex justify-content-center border-bottom'>

                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://st3.depositphotos.com/4218696/33218/i/450/depositphotos_332180778-stock-photo-portrait-of-smiling-arabic-girl.jpg" alt="..." />
                                        <div className='ps-3 pe-3' >
                                            <h6>faheema</h6>
                                            <p>talk to u latr</p>
                                        </div>
                                        <h6 className='fw-normal'>12:06</h6>

                                    </div>

                                    <div className='d-flex justify-content-center border-bottom'>

                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://st3.depositphotos.com/4218696/33218/i/450/depositphotos_332180778-stock-photo-portrait-of-smiling-arabic-girl.jpg" alt="..." />
                                        <div className='ps-3 pe-3' >
                                            <h6>Jesna</h6>
                                            <p>talk to u latr</p>
                                        </div>
                                        <h6 className='fw-normal'>12:06</h6>

                                    </div>

                                    <div className='d-flex justify-content-center border-bottom'>

                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://st3.depositphotos.com/4218696/33218/i/450/depositphotos_332180778-stock-photo-portrait-of-smiling-arabic-girl.jpg" alt="..." />
                                        <div className='ps-3 pe-3' >
                                            <h6>Hiba</h6>
                                            <p>talk to u latr</p>
                                        </div>
                                        <h6 className=' fw-normal'>12:06</h6>

                                    </div>



                                </div>

                            </Card.Body>
                        </Card>
                        <Card className='mt-5' style={{ width: '18rem', borderRadius: "10px" }}>

                            <Card.Body>
                                <div>

                                    <h6 className='fw-bolder' style={{ fontSize: "15px" }} >Likes and Matches <span style={{ color: "crimson", fontSize: "small", paddingLeft: "25%" }} >see all</span></h6>


                                    <div className='text-center pt-3 pb-3'>
                                        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                            <ToggleButton style={{backgroundColor:"pink"}} id="tbg-btn-1" value={1}>
                                                Likes
                                            </ToggleButton>
                                            <ToggleButton style={{backgroundColor:"pink"}} id="tbg-btn-2" value={2}>
                                                Matches
                                            </ToggleButton>
                                            
                                        </ToggleButtonGroup>
                                    </div>


                                    <div className='d-flex justify-content-center border-bottom'>

                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://st3.depositphotos.com/4218696/33218/i/450/depositphotos_332180778-stock-photo-portrait-of-smiling-arabic-girl.jpg" alt="..." />
                                        <div className='ps-3 pe-3' >
                                            <h6>faheema</h6>
                                            <p>liked you 3 minutes</p>
                                        </div>
                                        <h6 className='fw-normal'>12:06</h6>

                                    </div>

                                    <div className='d-flex justify-content-center border-bottom'>

                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://st3.depositphotos.com/4218696/33218/i/450/depositphotos_332180778-stock-photo-portrait-of-smiling-arabic-girl.jpg" alt="..." />
                                        <div className='ps-3 pe-3' >
                                            <h6>Jesna</h6>
                                            <p>liked you 3 minutes</p>
                                        </div>
                                        <h6 className='fw-normal'>12:06</h6>

                                    </div>

                                    <div className='d-flex justify-content-center border-bottom'>

                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://st3.depositphotos.com/4218696/33218/i/450/depositphotos_332180778-stock-photo-portrait-of-smiling-arabic-girl.jpg" alt="..." />
                                        <div className='ps-3 pe-3' >
                                            <h6>Hiba</h6>
                                            <p>liked you 3 minutes</p>
                                        </div>
                                        <h6 className=' fw-normal'>12:06</h6>

                                    </div>



                                </div>
                            </Card.Body>
                        </Card>

                        

                        <div className='d-flex justify-content-between'>
                            <a className='text-decoration-none' href='' style={{fontSize:"small" , color:"black"}} >privacy policy </a><a
                            className='text-decoration-none' href='' style={{fontSize:"small", color:"black"}}>terms and condition</a><a className='text-decoration-none' href=''  style={{fontSize:"small", color:"black"}}> pricing</a>

                            
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <a className='text-decoration-none' href='' style={{fontSize:"small", color:"black"}} >feedback </a><a className='text-decoration-none' href='' style={{fontSize:"small", color:"black"}}>help</a>
                        </div>


                    </Col>
                </Row>
            </Container>




        </>
    )
}

export default Home