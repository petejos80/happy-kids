import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from 'axios';
import "./AllToys.css"



class AllToys extends Component {
  state = {
    items: [],
    name: "",
    price: "",
    category: "",
    description: ""
  };

  componentDidMount() {
    this.loadItems();
  }

//   componentDidMount() {
//     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
//     axios.get('/api/items')
//       .then(res => {
//         this.setState({ items: res.data });
//         console.log(this.state.items);
//       })
//       .catch((error) => {
//         if(error.response.status === 401) {
//           this.props.history.push("/login");
//         }
//       });
//   }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  loadItems = () => {
    API.getItems()
      .then(res => {
        console.log(res)
        this.setState({ items: res.data, name: "", price: "", category: "", description: "" })
      }
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.price) {
      API.saveItem({
        name: this.state.name,
        price: this.state.price,
        description: this.state.description
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid className="fluid-container">
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
            <Jumbotron className='toy-jumbo'>
              <h1 className='toy-title'>All Items Currently for Sale</h1>
           
            </Jumbotron>
            {this.state.items.length ? (
          
               <Container fluid>
               <div className='row-objects'>
                 <Row className="row" >
                {this.state.items.map(item => (
                    <Col size="md-6">
                  <ListItem key={item._id}>
                    <List value={"/items/" + item._id}>
                    <div className='Card'>
                      <strong>
                        <p>
                          <img class = "allimg" src={item.image} />
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
                </div>
                </Container>
              
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AllToys;
