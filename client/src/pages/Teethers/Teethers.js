// import React from "react";
// import { Jumbotron } from 'reactstrap';

// const Teethers = (props) => {
//   return (
//     <div>
//         <Jumbotron>
//             <h2>Teethers</h2>
//         </Jumbotron>
//       <div class="container">
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-1">Teethers!</h1> */}
//         <p className="lead">Personalized Teethers</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/27973289_325633084591602_5029702829412128179_n.jpg?_nc_cat=0&oh=8c5f083ef1e34f9f7ea2b06e87ece6cd&oe=5BCCCEA2"alt="img" width="400px" onCLick=""/></a>
//         <h3> Baby Name Teether $0.00</h3>
//         <hr className="my-1" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-2">Teethers!</h1> */}
//         <p className="lead">Personalized Teethers</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/28168076_325633127924931_3318407062343312459_n.jpg?_nc_cat=0&oh=f9bbd9baafdb39e113ad6db91a9fd6c5&oe=5BCF7FE4"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Teether $0.00</h3>
//         <hr className="my-2" />
//     </div>
//   </div>
//   <div class="row">
//     <div class="col">
//     {/* <h1 className="display-3">Teethers!</h1> */}
//         <p className="lead">Personalized Teethers</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/27972674_325633174591593_5432447413240257522_n.jpg?_nc_cat=0&oh=7490056b9c8f2b1cab7a9774fc909acf&oe=5BE76342"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Teether $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Teethers!</h1> */}
//         <p className="lead">Personalized Teethers</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/28059215_325633197924924_8483100059065651402_n.jpg?_nc_cat=0&oh=5adcdad77f4212b9604ce5f5298e0165&oe=5BE1345E"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Teether $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Teethers!</h1> */}
//         <p className="lead">Personalized Teethers</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30624526_344669239354653_1218400474618148491_n.jpg?_nc_cat=0&oh=9da8830f6246ce603ec13eac3eed34cf&oe=5BCA5844"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Teether $0.00</h3>
//         <hr className="my-3" />
//     </div>
//     <div class="col">
//     {/* <h1 className="display-3">Teethers!</h1> */}
//         <p className="lead">Personalized Teethers</p>
//         <a><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30515711_344669279354649_4393466501271026584_n.jpg?_nc_cat=0&oh=3774a5df4f6df767f0c235aeb4ec3a11&oe=5BC6A118"alt="img" width="400px" onClick=""/></a>
//         <h3> Baby Name Teether $0.00</h3>
//         <hr className="my-3" />
//     </div>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Teethers;

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
import "./Teethers.css"


class Teethers extends Component {
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
        this.setState({ items: res.data.filter(item => item.category === 'Teethers') }, () => console.log(this.state));
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

filterItems(teethers) {
    const myItems = this.state.items
    const newArray = myItems.filter(item => item.category !== 'Teethers')
    this.setState({
      items: newArray
    })
    console.log('handle remove runned', teethers, myItems, newArray)
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
               <img class="teether-img" src={item.image} />
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

export default Teethers;