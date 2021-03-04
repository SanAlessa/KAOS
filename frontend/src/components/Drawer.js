import React from 'react'
import { Drawer, ButtonToolbar, IconButton ,Icon } from 'rsuite'
import '../../node_modules/rsuite/dist/styles/rsuite-default.css'
import {GiHamburgerMenu ,} from 'react-icons/gi'
import {FcMenu} from 'react-icons/fc'
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
            <Drawer.Title>NEW SEASON IS HERE</Drawer.Title>
          </Drawer.Header>
          
          <Drawer.Body>
          <h4>Coleccion Mujer</h4>
           <h4>Coleccion Hombre</h4>
          </Drawer.Body>
        </Drawer>
      </div>
    );
  }
}


export default (MenuUser)