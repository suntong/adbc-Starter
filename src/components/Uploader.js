import React from "react";
import { Upload, Button, Icon, Form } from "antd";

class Uploader extends React.Component {
  state = {};
  componentWillReceiveProps() {
    console.log("change");
  }

  render() {
    console.log("fileList:", this.state.fileList);
    return (
      <Upload
        name="logo"
        action="//jsonplaceholder.typicode.com/posts/"
        listType="picture-card"
      >
        <Button>
          <Icon type="upload" /> Click to upload
        </Button>
      </Upload>
    );
  }
}

class FormUploader extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { validateFields } = this.props.form;
    validateFields((err, values) => {
      console.log(values);
    });
  };
  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("upload", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
          })(<Uploader />)}
        </Form.Item>
        <Button htmlType="submit">提交</Button>
      </Form>
    );
  }
}

export default Form.create()(FormUploader);
