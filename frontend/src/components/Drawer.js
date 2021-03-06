import React from 'react'
import { Link } from 'react-router-dom';
import { Drawer, ButtonToolbar, IconButton ,Icon } from 'rsuite'
import {FcMenu} from 'react-icons/fc'
import logo from '../Backgrounds/logodrawer.png'
import '../../node_modules/rsuite/dist/styles/rsuite-default.css'

class MenuUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  close() {
    this.setState({
      show: false
    });
  }
  toggleDrawer(placement) {
    this.setState({placement , show: true });
  }

  render() {

    return (
      <div>
          <ButtonToolbar>
        <IconButton
            icon={<FcMenu icon="angle-right" />}
            onClick={() => this.toggleDrawer('left')}
          />
          </ButtonToolbar>
        <Drawer
          className="drawer"
          placement={this.state.placement}
          show={this.state.show}
          onHide={this.close}
          
        >
          <Drawer.Header>
            <Drawer.Title>KAOS LANZAMIENTO AW/2021 </Drawer.Title>
          </Drawer.Header>
          
          <Drawer.Body>
          <br/>
          <Link to="/ProductStore"><h4>Mujer</h4></Link>
          
          <br/>
          <Link to="/ProductStore"><h4>Hombre</h4></Link>
           
          </Drawer.Body>
          <Drawer.Footer>
          <div style={{backgroundImage:`url("${logo}")`,height:"15vh", width:"15vw",backgroundRepeat:'no-repeat', backgroundSize: 'contain'}}> 
          </div>
          <h6>KAOS AW/2021--</h6>
         
        </Drawer.Footer>
        </Drawer>
       
        

      </div>
    );
  }
}


export default (MenuUser)