
// import React from "react";
// import { Jumbotron } from 'reactstrap';


// const Beads = (props) => {
//   return (
//     <div>
//         <Jumbotron>
//             <h2>Beads</h2>
//         </Jumbotron>

//         <div class="container">
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-1">Beads!</h1> */}
//         <p className="lead">Personalized Beads</p>
//        <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/27973289_325633084591602_5029702829412128179_n.jpg?_nc_cat=0&oh=8c5f083ef1e34f9f7ea2b06e87ece6cd&oe=5BCCCEA2"alt="img" width="400px" onClick= "" /></a>
//         <h3> Bear Beads $0.00</h3>
//         <hr className="my-1" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-2">Beads!</h1> */}
//         <p className="lead">Personalized Beads</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/28168076_325633127924931_3318407062343312459_n.jpg?_nc_cat=0&oh=f9bbd9baafdb39e113ad6db91a9fd6c5&oe=5BCF7FE4"alt="img" width="400px" onClick=""/></a>
//         <h3> Butterfly Beads $0.00</h3>
//         <hr className="my-2" />
//     </div>
//   </div>
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-3">Beads!</h1> */}
//         <p className="lead">Personalized Beads</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/27972674_325633174591593_5432447413240257522_n.jpg?_nc_cat=0&oh=7490056b9c8f2b1cab7a9774fc909acf&oe=5BE76342"alt="img" width="400px" onClick=""/></a>
//         <h3> Heart Beads $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Beads!</h1> */}
//         <p className="lead">Personalized Beads</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/28059215_325633197924924_8483100059065651402_n.jpg?_nc_cat=0&oh=5adcdad77f4212b9604ce5f5298e0165&oe=5BE1345E"alt="img" width="400px" onClick=""/></a>
//         <h3> Character Beads $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Beads!</h1> */}
//         <p className="lead">Personalized Beads</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30624526_344669239354653_1218400474618148491_n.jpg?_nc_cat=0&oh=9da8830f6246ce603ec13eac3eed34cf&oe=5BCA5844"alt="img" width="400px" onClick=""/></a>
//         <h3> Train Beads $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Beads!</h1> */}
//         <p className="lead">Personalized Beads</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30515711_344669279354649_4393466501271026584_n.jpg?_nc_cat=0&oh=3774a5df4f6df767f0c235aeb4ec3a11&oe=5BC6A118"alt="img" width="400px" onClick=""/></a>
//         <h3> Flower Beads $0.00</h3>
//         <hr className="my-3" />
//     </div>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Beads;


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

filterItems(beads) {
    const myItems = this.state.items
    const newArray = myItems.filter(item => item.category !== 'Beads')
    this.setState({
      items: newArray
    })
    console.log('handle remove runned', beads, myItems, newArray)
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

         <Row>
         {/* <Col size="md-3">
            <Jumbotron>
              <h1>Add Items for Sale</h1>
              {localStorage.getItem('jwtToken') &&
                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
              }
            </Jumbotron>
           
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="Price (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col> */}
          <Col size="md-9 sm-12">
            <Jumbotron>
              <h1>Items Currently for Sale</h1>
           
            </Jumbotron>
            {this.state.items.length ? (
              <List>
               <Container fluid>
                 <Row>
                {this.state.items.map(item => (
                    <Col size="md-6" className="item-card">
                  <ListItem key={item._id}>
                    <Link to={"/items/" + item._id}>
                      <strong>
                        <p>
                          <img src={item.image} />
                        </p>
                        <h4>
                          {item.name} {item.price}
                        </h4>
                        <p>Category: {item.category}</p>
                      </strong>
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

export default Beads;









