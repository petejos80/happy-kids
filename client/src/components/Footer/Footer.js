import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import './Footer.css';
import Facebook from 'react-share-icons/lib/Facebook';
import { Link } from "react-router-dom";


class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="blue-grey" className="page-footer font-small lighten-5">
                <div className="container-fluid text-center text-md-center">
                    <Container className ="footer-contents">
                        <Row  className ="footer-contents" className="py-4 d-flex align-items-center">
                      
                          {/* <Col md="4" lg="4" xl="3" className="text-center">
                                <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
                                <a className="tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                                <a className="gplus-ic"><i className="fa fa-google-plus white-text mr-lg-4"> </i></a>
                                <a className="li-ic"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>
                                <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                          </Col> */}
                       
                          <Col md="4" lg="4" xl="4" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold"><strong>Happy Kids</strong>
                           
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p >I am a mother of two little angels!<br/><br/>They inspired me <br/>to start making personalized <br/>wooden toys that are fun and <br/>safe for children any age. <br/><br/><strong>-Ekaterina Hawthorne</strong></p>
                          </Col>

                          <Col md="4" lg="4" xl="4" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold"><Link to="/alltoys"><strong>Items</strong></Link></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><Link to="/bracelets" className="dark-grey-text">Bracelets</Link></p>
                            <p><Link to="/keychains" className="dark-grey-text">Keychains</Link></p>
                            <p><Link to="/pacifierholders" className="dark-grey-text">Pacifierholders</Link></p>
                            <p><Link to="/rattlers" className="dark-grey-text">Rattlers</Link></p>
                            <p><Link to="/teethers" className="dark-grey-text">Teethers</Link></p>
                        </Col>
                        <Col md="4" lg="4" xl="4" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-envelope mr-3"></i> happykids.accesories.llc@gmail.com</p>
                            <p><i className="fa fa-phone mr-3"></i> (651) 460-0579 </p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="/"> Happy-kids </a> <a href="https://www.facebook.com/happykidsbeads/"><Facebook style={{ height: 50 }} /></a>
                    </Container>
                </div>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;




