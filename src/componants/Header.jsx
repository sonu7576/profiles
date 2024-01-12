import React from 'react'
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LogOut } from 'react-feather';





function Header() {
    return (
        <>


            <Navbar className="bg-body-tertiary">
                <Container>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a className='text-decoration-none fw-bolder' href="#logout">LOG OUT <LogOut /> </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            









        </>
    )
}

export default Header