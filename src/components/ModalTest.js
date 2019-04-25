import React from "react";
import { Button, Modal } from "antd";
import modal from "./Modal";

class MyModal extends React.Component {
  onOk = () => {
    console.log(1);
    this.props.onCancel();
    this.props.resolve(3);
  };
  render() {
    return (
      <Modal {...this.props} onOk={this.onOk}>
        heheh
      </Modal>
    );
  }
}

class ModalTest extends React.Component {
  handleTest = () => {
    modal({
      Component: MyModal
    }).result.then(res => {
      console.log("res:", res);
    });
  };
  render() {
    return <Button onClick={this.handleTest}>test</Button>;
  }
}

export default ModalTest;
