// import React from "react";
// import { Jumbotron } from 'reactstrap';

// const Rattlers = (props) => {
//   return (
//     <div>
//         <Jumbotron>
//             <h2>Rattlers</h2>
//         </Jumbotron>
//         {/* <h1 className="display-1">Rattlers</h1> */}
//         <div class="container">
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-1">Rattlers!</h1> */}
//         <p className="lead">Personalized Rattlers</p>
//         <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29196896_334395413715369_8614460186519681002_n.jpg?_nc_cat=0&oh=510c04f6bc4b8616f2a97701e93eb32f&oe=5BD1B1BC"alt="img" width="400px" />
//         <h3> Baby Name Rattle $0.00</h3>
//         <hr className="my-1" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-2">Rattlers!</h1> */}
//         <p className="lead">Personalized Rattlers</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29214206_334395417048702_4948867766961074096_n.jpg?_nc_cat=0&oh=7c721695a1f2b0007f2b0b5b0d9acbbd&oe=5BE62C6E"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Rattle $0.00</h3>
//         <hr className="my-2" />
//     </div>
//   </div>
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-3">Rattlers!</h1> */}
//         <p className="lead">Personalized Rattlers</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29214077_334395500382027_470310622769049398_n.jpg?_nc_cat=0&oh=bf2f0db9b8c34c446e693f672131a670&oe=5BC7C83A"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Rattle $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Rattlers!</h1> */}
//         <p className="lead">Personalized Rattlers</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29177824_334395503715360_7365768343672911006_n.jpg?_nc_cat=0&oh=9db72672c6ae2b1017958c14ee858660&oe=5BD05E8E"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Rattle $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Rattlers!</h1> */}
//         <p className="lead">Personalized Rattlers</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29178006_334395533715357_4465046068512833499_n.jpg?_nc_cat=0&oh=df65aeb01f2612a27d269792e58a8958&oe=5BE46BAE"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Rattle $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Rattlers!</h1> */}
//         <p className="lead">Personalized Rattlers</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30515728_344668296021414_4184767623930924587_n.jpg?_nc_cat=0&oh=ec971cba097909f7a2c9aa36e082f6f9&oe=5BE52C36"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Rattle $0.00</h3>
//         <hr className="my-3" />
//     </div>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Rattlers;

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
         <Link to={"/items/" + item._id}>
           <div className='Card'>
           <strong>

             <p>
               <img class="rattler-img" src={item.image} />
             </p>
             <h4>
               {item.name} {item.price}
             </h4>
             <p>Category: {item.category}</p>
           </strong>
           </div>
         </Link>
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