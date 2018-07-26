// import React from "react";
// import { Jumbotron } from 'reactstrap';

// const Pacifierholders = (props) => {
//   return (
//     <div>
//       <Jumbotron>
//         <h2>Pacifier Holders</h2>
//       </Jumbotron>

//         <div class="container">
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-1">Pacifier Holders!</h1> */}
//         <p className="lead">Personalized Pacifier Holders</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29243660_334396827048561_7685591586009570379_n.jpg?_nc_cat=0&oh=334622140802b8bf735b58004b3a9af1&oe=5BC7F21F"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Pacifier Holder $0.00</h3>
//         <hr className="my-1" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-2">Pacifier Holders!</h1> */}
//         <p className="lead">Personalized Pacifier Holders</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29243643_334396860381891_9096611942158481198_n.jpg?_nc_cat=0&oh=03164a655eedf7857c809ae31d4c64a0&oe=5BCD3E8E"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Pacifier Holder $0.00</h3>
//         <hr className="my-2" />
//     </div>
//   </div>
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-3">Pacifier Holders!</h1> */}
//         <p className="lead">Personalized Pacifier Holders</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29187273_334396863715224_6607178374702222221_n.jpg?_nc_cat=0&oh=d685492e6c2fec3903e6cb27d8baed58&oe=5BEAD1F6"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Pacifier Holder $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Pacifier Holders!</h1> */}
//         <p className="lead">Personalized Pacifier Holders</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30571654_344668792688031_8715529785830243129_n.jpg?_nc_cat=0&oh=be05dc59d0636f00e1de5ba0cc2a40b2&oe=5BD2CF20"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Pacifier Holder $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Pacifier Holders!</h1> */}
//         <p className="lead">Personalized Pacifier Holders</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30594234_344668856021358_4893439677500833612_n.jpg?_nc_cat=0&oh=e21f5ea6d4ee9dcd80517e42e7203567&oe=5BCF0B53"alt="img" width="400px" onClick=""/></a>
//         <h3>Baby Name Pacifier Holder $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Pacifier Holders!</h1> */}
//         <p className="lead">Personalized Pacifier Holders</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30571619_344668929354684_800821133937486893_n.jpg?_nc_cat=0&oh=d22255e2f6fb1103512da3bcfd40c130&oe=5BDE9711"alt="img" width="400px" onCLick=""/></a>
//         <h3> Baby Name Pacifier Holder $0.00</h3>
//         <hr className="my-3" />
//     </div>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Pacifierholders;

import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from 'axios';
import Items from '../Items';


class Pacifierholders extends Component {
  state = {
    items: [],
    name: "",
    price: "",
    image: "",
    category: "",
    description: ""
  };

  componentDidMount() {
    axios.get('/api/items')
      .then(res => {
        this.setState({ items: res.data.filter(item => item.category === 'Pacifierholders') }, () => console.log(this.state));
        console.log(this.state.items);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  loadItems = () => {
    API.getItems()
      .then(res => {
        console.log(res)
        this.setState({ items: res.data, name: "", price: "", image: "", category: "", description: "" })
      }
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

filterItems(pacifierholders) {
    const myItems = this.state.items
    const newArray = myItems.filter(item => item.category !== 'Pacifierholders')
    this.setState({
      items: newArray
    })
    console.log('handle remove runned', pacifierholders, myItems, newArray)
  }




  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-9 sm-12">
            <Jumbotron>
              <h1>Items Currently for Sale</h1>
            </Jumbotron>
            {this.state.items.length ? (
              <List>
                {this.state.items.map(item => (
                  <ListItem key={item._id}>
                    <Link to={"/items/" + item._id}>
                    <div className='Card'>
                      <strong>
                        {item.name} priced at {item.price} <img src={item.image} />
                      </strong>
                    </div>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteItem(item._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Pacifierholders;
