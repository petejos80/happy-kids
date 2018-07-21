import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
//import './Footer.css';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer>
                <div className="container-fluid text-center text-md-center">
                    <Container>
                        <Row className="py-4 d-flex align-items-bottom">
                            {/* <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                            </Col> */}
                            <Col md="6" lg="7" className="text-center text-md-right">
                                <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
                                <a className="tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                                <a className="gplus-ic"><i className="fa fa-google-plus white-text mr-lg-4"> </i></a>
                                <a className="li-ic"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>
                                <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold"><strong>Happy Kids</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.</p>
                        </Col>
                        <Col md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold"><a href="/api/items"><strong>Items</strong></a></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><a href="/bracelets" className="dark-grey-text">Bracelets</a></p>
                            <p><a href="/keychains" className="dark-grey-text">Keychains</a></p>
                            <p><a href="/pacifierholders" className="dark-grey-text">Pacifierholders</a></p>
                            <p><a href="/rattlers" className="dark-grey-text">Rattlers</a></p>
                            <p><a href="/teethers" className="dark-grey-text">Teethers</a></p>
                        </Col>
                        <Col md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><a href="#!" className="dark-grey-text">Your Account</a></p>
                            <p><a href="#!" className="dark-grey-text">Become an Affiliate</a></p>
                            <p><a href="#!" className="dark-grey-text">Shipping Rates</a></p>
                            <p><a href="#!" className="dark-grey-text">Help</a></p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-envelope mr-3"></i> happykids.accessaries.llc@gmail.com</p>
                            <p><i className="fa fa-phone mr-3"></i> (651) 460-0579 </p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="/"> Happy-kids </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;



// import React from "react";
// import "./Footer.css";
// const Footer = () => (
//   <footer className="page-footer font-large fixed-bottom">
//     <div className="container-fluid text-center text-md-center">
//       <div className="row">
//         <div className="col-md-6 mt-md-0 mt-3">
//           <h5 className="text-uppercase">Happy Kids Accessories</h5>
//               <ul className="list-unstyled list-inline text-center">
//                 <li className="list-unstyled">
//                   <a href="https://github.com/sandimas01/happy-kids">
//                     <img
//                       className="responsive-image one"
//                       src="..\images\LinkedIn.png"
//                       alt="image"
//                       height="10px"
//                       width="10px"
//                     />
//                   </a>
//                 </li>
             
//                   <li className="list-unstyled list-inline">
//                     <a href="https://www.facebook.com/pg/happykidsbeads/photos/?tab=albums">
//                       <img
//                         className="responsive-image two"
//                         src="..\images\FacebookIcon.png"
//                         alt="image"
//                         height="1px"
//                         width="1px"
//                       />
//                     </a>
//                   </li>
//                 </ul>
//           </div>
//         </div>
//       </div>
//   </footer>
// );


// export default Footer;
//           <h5 className="text-uppercase">Happy Kids Accessories</h5>
      
//        <div className="container">
//        <div className="row">
//  <ul className="list-unstyled list-inline text-center"> 
//    <li className="list-unstyled">
//      <a href="">
//       <img className="responsive-image one" src="..\images\LinkedIn.png" alt="image" height="10px" width="10px">
//       </img>
//     </a>
//     </li>
//     </ul>
//     <div className="row">
//     <ul>
//   <li className="list-unstyled list-inline">
//      <a href="">
//      <img className="responsive-image two" src="..\images\FacebookIcon.png" alt="image" height="1px" width="1px">
//    </img>
//    </a>
//    </li>
//  </ul>
//  </div>
// </div>
// </div>
// </div>
// </div>
// </div>
//   </footer>
// );

//   export default Footer;

