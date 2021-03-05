import React from 'react'
import { Drawer, ButtonToolbar, IconButton ,Icon } from 'rsuite'
import '../../node_modules/rsuite/dist/styles/rsuite-default.css'
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
            <Drawer.Title>KAOS LANZAMIENTO AW/2021 </Drawer.Title>
          </Drawer.Header>
          
          <Drawer.Body>
          <br/>
          <h4>Mujer</h4>
          <br/>
           <h4>Hombre</h4>
          </Drawer.Body>
          <Drawer.Footer>
          <h6>KAOS AW/2021--</h6>
        </Drawer.Footer>
        </Drawer>
       
        

      </div>
    );
  }
}


export default (MenuUser)