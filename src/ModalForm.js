import React from "react";
import { Modal, Form, Input } from "antd";
import { getDetail } from "./api";

const FormItem = Form.Item;

class ModalForm extends React.PureComponent {
  state = {
    data: {}
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      console.log("update");
      getDetail(nextProps.id).then(data => {
        this.props.form.setFieldsValue(data);
      });
    }
  }

  render() {
    const { visible, onCancel, form } = this.props;
    const { getFieldDecorator } = form;
    const { data } = this.state;
    return (
      <Modal visible={visible} onCancel={onCancel}>
        <Form>
          <FormItem label="l1">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "required" }],
              initialValue: data.name
            })(<Input />)}
          </FormItem>
          <FormItem label="l1">
            {getFieldDecorator("mobile", {
              rules: [
                { required: true, message: "required" },
                { len: 11, message: "invalid" }
              ]
              // initialValue: data.mobile
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(ModalForm);
