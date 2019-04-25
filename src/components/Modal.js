import React from "react";
import ReactDOM from "react-dom";
import { Button, Modal } from "antd";

class McModal extends React.Component {
  render() {
    const {
      onOk,
      title,
      visible,
      close,
      okText,
      cancelText,
      content,
      hideCancel,
      Component,
      resolve
    } = this.props;
    const ok = () => {
      if (onOk) {
        onOk();
      } else {
        close();
      }
    };

    const getFooter = () => {
      if (hideCancel) {
        return (
          <div>
            <Button type="primary" onClick={onOk}>
              {okText || "确定"}
            </Button>
          </div>
        );
      }
    };

    return (
      <Component
        title={title}
        width={416}
        visible={visible}
        footer={getFooter()}
        onCancel={close}
        closable={false}
        maskClosable={false}
        keyboard={false}
        onOk={ok}
        okText={okText}
        cancelText={cancelText}
        resolve={resolve}
      />
    );
  }
}
let div = document.createElement("div");
document.body.appendChild(div);

const modal = config => {
  const render = props => {
    ReactDOM.render(<McModal {...props} />, div);
  };

  const destroy = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  const close = () => {
    render({ ...config, visible: false, destroy });
  };
  const result = new Promise(resolve => {
    render({ ...config, visible: true, close, resolve });
  });
  return { result, close, destroy };
};

export default modal;
