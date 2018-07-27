import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import ModalExample from "../../components/ModalExample"
import axios from 'axios';
import "./AllToys.css"



class AllToys extends Component {
  state = {
    items: [],
    name: "",
    price: "",
    image: "",
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
        image: this.state.image,
        category: this.state.category,
        description: this.state.description
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

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
                          <img className = "all-img" alt="" src={item.image} />
                        </p>
                        <h4>
                          {item.name} {item.price}
                        </h4>
                        <p>Category: {item.category}</p>
                        <p>{item.description}</p>
                      </strong>
                      </div>
                    </List>
                    <button className="btn btn-danger"><ModalExample />Add To Cart</button>
                  </ListItem>
                  </Col>
                ))}
                
            
        </Row>
      </Container>
    );
  }
}

export default AllToys;
