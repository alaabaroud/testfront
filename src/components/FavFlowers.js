import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FavCards from "./FavCards";
import FavModal from "./FavModal"
class FavFlowers extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    dataCrud: [],
    showData: false,
    UpdateData:{},
    ShowModal: false

  }
}

componentDidMount = async ()=> {
  await axios.get('http://localhost:3333/Flower/fav')
  .then(result =>{
    this.setState({
      dataCrud:result.data,
      showData: true
    })
  }).catch (err => {
    console.log(err);
  })
}

deleteFavorite = async (id) => {
  await axios.delete(`http://localhost:3333/Flower/fav/${id}`)
  const item =this.state.dataCrud.filter(i=> i._id !== id)
  this.setState ({
    dataCrud:item,
  })
}

UpdateFavorite = (item)=> {
  this.setState({ShowModal: true , UpdateData:item  })
}

UpdateFav = (e)=> {
  const id =this.state.UpdateData._id;
  const body = {
    name: e.target.name.value,
    instructions: e.target.instructions.value
  }
  const req= axios.put (`http://localhost:3333/Flower/fav/${id}, body`)
  const newItem = this.state.dataCrud.map(obj => {
    if(obj._id === id) {
     obj.instructions= req.data.instructions
     obj.name= req.data.name
     return obj
    }
    return obj
  });
  this.setState({dataCrud: newItem});
  this.UpdateFavorite({});
  this.setState({ShowModal: false})
}

close =() => {
  this.setState({
    ShowModal: false
  })
}


  render() {
    return (
      <>
        <h1>My Favorite Flowers</h1>
        {this.state.showData &&
         <FavCards
         dataCrud = {this.state.dataCrud}
         deleteFavorite = {this.deleteFavorite}
          /> }
       {this.state.ShowModal && 
       <FavModal 
       UpdateData= {this.state.UpdateData}
       UpdateFav ={this.UpdateFav}
       ShowModal = {this.ShowModal}
       close= {this.close}
       />
       }
      </>
    );
  }
}

export default FavFlowers;
