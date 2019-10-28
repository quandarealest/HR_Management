import React, { Component } from 'react';
import { Button, Input, Modal, Form, Select } from 'antd';

import './styles.css';


class UserEditModal extends Component {
  componentDidMount(){
    this.props.form.validateFields();
  }

  handleSubmit= e => {
    e.preventDefault();
    const { update, record, toggle } = this.props;
    const {validateFields} = this.props.form;
    validateFields((err, values) => {
      if(!err) {
        const userInfo = {
          ...values,
          _id: record._id
        }
        update(userInfo);
        setTimeout(toggle, 500);
      }
    })
  }

  render() {
    const { open, toggle, record = {} } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="user-add-new-container">
        <Modal
          title="Edit User"
          style={{ top: 20 }}
          visible={open}
          onCancel={toggle}
          footer={[]}
        >
          {record && (
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                <label>Full Name</label>
                {getFieldDecorator('fullName', {
                  initialValue: record.fullName
                })(
                  <Input placeholder="Full Name" />
                )}
              </Form.Item>
              <Form.Item>
                <label>Address</label>
                {getFieldDecorator('address', {
                  initialValue: record.address
                })(
                  <Select placeholder="Address" mode="tags" />
                )}
              </Form.Item>
              <Form.Item>
                <label>Phone</label>
                {getFieldDecorator('phone', {
                  initialValue: record.phone
                })(
                  <Select placeholder="Phone Number" mode="tags" />
                )}
              </Form.Item>
              <Form.Item>
                <label>Email</label>
                {getFieldDecorator('email', {
                  initialValue: record.email
                })(
                  <Select placeholder="Email" mode="tags" />
                )}
              </Form.Item>
              <Form.Item>
                <label>Id License</label>
                {getFieldDecorator('idLicense', {
                  initialValue: record.idLicense
                })(
                  <Input placeholder="Id License" />
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update User
                </Button>
              </Form.Item>
            </Form>
          )}
        </Modal>
      </div>
    )
  }
}

const UserEditModalForm = Form.create({ name: 'EDIT_FORM' })(UserEditModal);
export default UserEditModalForm;