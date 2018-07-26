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
import "./Pacifierholders.css"


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
       {this.state.items.map(item => (
       <Col size="md-4" className="item-card">
       <ListItem key={item._id}>
         <List view={"/items/" + item._id}>
           <div className='Card'>
           <strong>

             <p>
               <img class="pacifierholder-img" src={item.image} />
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

export default Pacifierholders;
