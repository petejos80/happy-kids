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
import "./Beads.css"


class Beads extends Component {
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
        this.setState({ items: res.data.filter(item => item.category === 'Beads') }, () => console.log(this.state));
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

filterItems(bracelets) {
    const myItems = this.state.items
    const newArray = myItems.filter(item => item.category !== 'Beads')
    this.setState({
      items: newArray
    })
    console.log('handle remove runned', bracelets, myItems, newArray)
  }




  render() {
    return (
      <Container fluid>
                 <Row>
                  {this.state.items.map(item => (
                  <Col size="md-4" className="item-card">
                  <ListItem key={item._id}>
                    <List value={"/items/" + item._id}>
                      <div className='Card'>
                      <strong>

                        <p>
                          <img class="bead-img" src={item.image} />
                        </p>
                        <h4>
                          {item.name} {item.price}
                        </h4>
                        <p>Category: {item.category}</p>
                      </strong>
                      </div>
                    </List>
                    <DeleteBtn onClick={() => this.deleteItem(item._id)} />
                  </ListItem>
                  </Col>
                ))}
                
                </Row>
                </Container>
    );
  }
}

export default Beads;











// import React from "react";
// import { Jumbotron } from 'reactstrap';

// const Bracelets = (props) => {
//   return (
//     <div>
//         <Jumbotron>
//             <h2>Bracelets</h2>
//         </Jumbotron>
//       <div class="container">
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-1">Bracelets!</h1> */}
//         <p className="lead">Personalized Bracelets</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/p200x200/29187031_334471810374396_282263315034933398_n.jpg?_nc_cat=0&oh=f36590018dd745004395378aa70616da&oe=5BE6EDE7"alt="img" width="400px" onCLick=""/></a>
//         <h3> Baby Name with Crown Bead Bracelet $0.00</h3>
//         <hr className="my-1" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-2">Bracelets!</h1> */}
//         <p className="lead">Personalized Bracelets</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30582157_344667109354866_2588682906968552893_n.jpg?_nc_cat=0&oh=c611de8b7ebb009a21b015f7244613bb&oe=5BE2FFF9"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Bracelet with bell $0.00</h3>
//         <hr className="my-2" />
//     </div>
//   </div>
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-3">Bracelets!</h1> */}
//         <p className="lead">Personalized Bracelets</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30594499_344667119354865_8664196475192133823_n.jpg?_nc_cat=0&oh=48ed9196d04228df9e33f39e76a06b38&oe=5BE33A57"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name with Star Bead Bracelet $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Bracelets!</h1> */}
//         <p className="lead">Personalized Bracelets</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30595054_344667136021530_7101673075619063207_n.jpg?_nc_cat=0&oh=1c49a1043fb94d8f1b70bdc2e2ded63a&oe=5BCD3B56"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name with Flower Bead Bracelet $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Bracelets!</h1> */}
//         <p className="lead">Personalized Bracelets</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30531333_344667146021529_1310139035605556885_n.jpg?_nc_cat=0&oh=01ec457328c2d086de79dc32341ed074&oe=5BE992CB"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name with Star Bead Bracelet $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Bracelets!</h1> */}
//         <p className="lead">Personalized Bracelets</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30623724_344667156021528_724379104431942178_n.jpg?_nc_cat=0&oh=0aa7043be0e420a63808cb558df536e8&oe=5BD850DF"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name with Character Bead Bracelet $0.00</h3>
//         <hr className="my-3" />
//     </div>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Bracelets;
