// import React from "react";
// import { Jumbotron } from 'reactstrap';

// const Keychains = (props) => {
//   return (
//     <div>
//         <Jumbotron>
//             <h2>Keychains</h2>
//         </Jumbotron>
//         <div class="container">
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-1">Keychains!</h1> */}
//         <p className="lead">Personalized Keychains</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30516601_344674336020810_9159717460168000177_n.jpg?_nc_cat=0&oh=c8eaa0a654455ba7edec03396177db01&oe=5BEB0EE5"alt="img" width="400px" onCLick=""/></a>
//         <h3> Beaded Keychain $0.00</h3>
//         <hr className="my-1" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-2">Keychains!</h1> */}
//         <p className="lead">Personalized Keychains</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30594328_344674349354142_3961415809984212810_n.jpg?_nc_cat=0&oh=35dc03de0160a9137f37c994c59a311a&oe=5B9E3CDE"alt="img" width="400px" onClick=""/></a>
//         <h3> Beaded Keychain $0.00</h3>
//         <hr className="my-2" />
//     </div>
//   </div>
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-3">Keychains!</h1> */}
//         <p className="lead">Personalized Keychains</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30572098_344674366020807_232714719519516071_n.jpg?_nc_cat=0&oh=67a3195acee86f4e767afff1b26a94dc&oe=5BC9CFFD"alt="img" width="400px" onClick="" /></a>
//         <h3> Beaded Keychain $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Keychains!</h1> */}
//         <p className="lead">Personalized Keychains</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30530650_344674369354140_2793761154730585554_n.jpg?_nc_cat=0&oh=be6fc963d66da307c2687e3569667c7a&oe=5BE0D256"alt="img" width="400px" onClick=""/></a>
//         <h3> Beaded Keychain $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Keychains!</h1> */}
//         <p className="lead">Personalized Keychains</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30531140_344674392687471_1441590487643996141_n.jpg?_nc_cat=0&oh=83759331a6c873056cf3ff781bf53b76&oe=5BD16F60"alt="img" width="400px" onClick=""/></a>
//         <h3> Beaded Keychain $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Keychains!</h1> */}
//         <p className="lead">Personalized Keychains</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/32582009_358628314625412_4788001688717885440_n.jpg?_nc_cat=0&oh=b29430e6f6b0175feb1afd0c994fee0c&oe=5BD72613"alt="img" width="400px" onClick=""/></a>
//         <h3> Beaded Keychain $0.00</h3>
//         <hr className="my-3" />
//     </div>
//   </div>
// </div>
//     </div>
    
//   );
// };

// export default Keychains;



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


class Keychains extends Component {
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
        this.setState({ items: res.data.filter(item => item.category === 'Keychains') }, () => console.log(this.state));
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

filterItems(keychains) {
    const myItems = this.state.items
    const newArray = myItems.filter(item => item.category !== 'Keychains')
    this.setState({
      items: newArray
    })
    console.log('handle remove runned', keychains, myItems, newArray)
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

export default Keychains;
