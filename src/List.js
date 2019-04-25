import React from "react";
import { Button, message } from "antd";
import ModalForm from "./ModalForm";

export default class List extends React.PureComponent {
  state = {};
  onCancel = () => {
    this.setState({ visible: false });
  };
  edit(id) {
    this.setState({ visible: true, id });
  }
  toast() {
    message.success("chenggong", 0);
  }
  render() {
    const { visible, id } = this.state;
    return (
      <div>
        <div style={{ padding: "1rem" }}>
          <Button
            type="primary"
            style={{ margin: "0 2rem" }}
            onClick={() => this.edit(1)}
          >
            编辑1
          </Button>
          <Button type="primary">编辑2</Button>
        </div>
        <div style={{ padding: "1rem" }}>
          <Button
            type="primary"
            style={{ margin: "0 2rem" }}
            onClick={() => this.edit(2)}
          >
            编辑1
          </Button>
          <Button type="primary" onClick={this.toast}>
            编辑2
          </Button>
        </div>
        <ModalForm id={id} visible={visible} onCancel={this.onCancel} />
      </div>
    );
  }
}
