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
import "./Rattlers.css"


class Rattlers extends Component {
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
        this.setState({ items: res.data.filter(item => item.category === 'Rattlers') }, () => console.log(this.state));
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

filterItems(rattlers) {
    const myItems = this.state.items
    const newArray = myItems.filter(item => item.category !== 'Rattlers')
    this.setState({
      items: newArray
    })
    console.log('handle remove runned', rattlers, myItems, newArray)
  }




  render() {
    return (
      <Container fluid>
      <Row>
       {this.state.items.map(item => (
       <Col size="md-4" className="item-card">
       <ListItem key={item._id}>
         <List view={"/items/" + item._id}>
           <div className='Card'>
           <strong>

             <p>
               <img class="rattler-img" src={item.image} />
             </p>
             <h4>
               {item.name} {item.price}
             </h4>
             <p>Category: {item.category}</p>
             <p>{item.description}</p>
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

export default Rattlers;