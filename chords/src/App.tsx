import { Component } from 'react';
import AlbumList  from "./components/AlbumSearch/albumsComp"
import axios from "axios";
import React from 'react';
import { Container } from 'react-bootstrap'
import './App.css';
import Collage from './components/Collage/Collage';

class App extends Component {
    state = {
      name: "",
      albums: [],
    };
    
    constructor(props: any){
      super(props)
      this.state = {
          name: '',
          albums: [],
      }
      
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange = (event:any) => {
      this.setState({name: event.target.value})
    };

    handleSubmit = (event: any) => {
        event.preventDefault();
        const posts = {
          name: this.state.name
        }
        console.log(posts.name)
        axios
        .post('http://localhost:3001/songs', posts)
        .then(res => { console.log(res.data); this.setState({ albums: res.data })})
          
    }
    openMenu = () => {
      
    }
      
    render() {
      return (
      <div className="App">
          <form onSubmit={this.handleSubmit}> 
          <label>Enter Album Name </label>
            <input 
                  value={this.state.name}
                  onChange={this.handleChange} required
            />
            <button>Submit</button>
          </form>
          <div className="sideButton">
              <button className="open">
                  <i className="fas fa-arrow-alt-circle-right"></i>
              </button>
          </div>
              <Container id="mySideBar" className="sideBar" fluid>
                      { this.state.albums.length !== 0  && this.state.name !== ""
                        ? <div className="Albums">
                              {
                              this.state.albums.map((elm: any) => {
                                  return <AlbumList albumList={elm} key={elm.id}/> 
                              })}
                          </div>
                        : null
                      } 
                </Container>
          
          <Container className="Collage">
                <Collage/>
          </Container>   
              </div>
    )
  }
}
export default App;
