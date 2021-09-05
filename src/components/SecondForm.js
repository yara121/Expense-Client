import React, { Component } from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'
 
class SecondForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal : false
        };
        this.toggle = this.toggle.bind(this)
    }
    toggle(){
        this.setState({
            modal:!this.state.modal
        })
    }
    render() { 
        return (
            <div>
              <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
              <Modal isOpen={this.state.modal} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
         
              </Modal>
            </div>
        )
    }
        
}
 
export default SecondForm;