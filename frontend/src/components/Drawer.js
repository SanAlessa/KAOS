import React from 'react'
import { Link } from 'react-router-dom';
import { Drawer } from 'rsuite'
import {connect} from 'react-redux'
import { IoMenu } from 'react-icons/io5'
import userAction from '../redux/actions/userAction'
import logo from '../Backgrounds/logodrawer.png'
import '../../node_modules/rsuite/dist/styles/rsuite-default.css'

class MenuUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      loggedUser:this.props.loggedUser
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.loggedUser = this.props.loggedUser

  }
  close() {
    this.setState({
      show: false
    });
  }
  toggleDrawer(placement) {
    this.setState({ placement, show: true });
  }
  
  render() {
    return (
      <div>
        <IoMenu style={{ fontSize: '180%', marginLeft: '2vw', color: 'red', cursor: 'pointer' }} className='menu' icon="angle-right" onClick={() => this.toggleDrawer('left')} />
        <Drawer
          className="drawer"
          placement={this.state.placement}
          show={this.state.show}
          onHide={this.close}
          size={'xs'}
        >
          <Drawer.Header>
            <Drawer.Title>KAOS LANZAMIENTO AW/2021 </Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            <br />
            <Link to="/ProductStore" onClick={() => this.close()} ><h4>Shop</h4></Link>

            <br />
            {this.state.loggedUser ? <h1 onClick={()=> this.props.logOut()}>hola</h1> : <Link to="/signin" onClick={() => this.close()}><h4>Sign In</h4></Link>}

          </Drawer.Body>
          <Drawer.Footer>
            <div style={{ backgroundImage: `url("${logo}")`, height: "15vh", width: "15vw", backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
            </div>
            <h6>KAOS AW/2021--</h6>

          </Drawer.Footer>
        </Drawer>



      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
      loggedUser: state.userR.loggedUser
  }
}

const mapDispatchToProps = { // map the actions
  logOut: userAction.disconnectUser //mapDispachToProps object that has an action value
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuUser)