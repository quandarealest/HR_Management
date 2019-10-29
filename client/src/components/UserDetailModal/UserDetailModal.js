import React, { Component } from 'react';
import { Button, Input, Modal, Form, Select } from 'antd';

import './styles.css';


class UserDetailModal extends Component {
  render() {
    const { open, toggle, record = {}, account = {} } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="user-add-new-container">
        <Modal 
          title="User's Detail"
          style={{ top: 20 }}
          width="60%"
          visible={open}
          onCancel={toggle}
          footer={[]}
        >
          <Form>
          {record && (
            <>
              <Form.Item>
                <label>Full Name</label>
                {getFieldDecorator('fullName', {
                  initialValue: record.fullName
                })(
                  <Input disabled placeholder="Full Name" />
                )}
              </Form.Item>
              <Form.Item>
                <label>Address</label>
                {getFieldDecorator('address', {
                  initialValue: record.address
                })(
                  <Select disabled placeholder="Address" mode="tags" />
                )}
              </Form.Item>
              <Form.Item>
                <label>Phone</label>
                {getFieldDecorator('phone', {
                  initialValue: record.phone
                })(
                  <Select disabled placeholder="Phone Number" mode="tags" />
                )}
              </Form.Item>
              <Form.Item>
                <label>Email</label>
                {getFieldDecorator('email', {
                  initialValue: record.email
                })(
                  <Select disabled placeholder="Email" mode="tags" />
                )}
              </Form.Item>
              <Form.Item>
                <label>Id License</label>
                {getFieldDecorator('idLicense', {
                  initialValue: record.idLicense
                })(
                  <Input disabled placeholder="Id License" />
                )}
              </Form.Item>
              </>
          )}
          {
            account && (
              <>
              <Form.Item>
                <label>Account's Username</label>
                {getFieldDecorator('username', {
                  initialValue: account.username
                })(
                  <Input disabled placeholder="Username" />
                )}
              </Form.Item>
              <Form.Item>
              <label>Account's Password</label>
              {getFieldDecorator('password', {
                initialValue: account.password
              })(
                <Input disabled placeholder="Password" />
              )}
            </Form.Item>
            </>
            )
          }
          </Form>
        </Modal>
      </div>
    )
  }
}

const UserDetailModalForm = Form.create({ name: 'DETAIL_FORM' })(UserDetailModal);

export default UserDetailModalForm;