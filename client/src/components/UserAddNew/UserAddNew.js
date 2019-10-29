import React, { Component } from 'react';
import './styles.css';
import { Button, Input, Modal, Form, Select } from 'antd';

class UserAddNew extends Component {
  state = {
    open: false,
  }

  componentDidMount(){
    this.props.form.validateFields();
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field])
  } 

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { validateFields } = this.props.form;
    const { addUser } = this.props;
    validateFields((err, values) => {
      if(!err) {
        const stringArray = values.fullName.split(" ");
        let username = stringArray[0];
        for( let index = 1; index < stringArray.length; index++) {
          username = username.concat(stringArray[index].charAt(0));
        }
        username = username.toLowerCase();
        const newAccount = {
          username,
          password: "123"
        }
        addUser({ newUser: values, newAccount});
        // addAccount(newAccount);
        setTimeout(this.toggle, 1000);
      }
    })
  }

  render() {
    const { open } = this.state;
    const { getFieldDecorator, isFieldTouched, getFieldError, getFieldsError } = this.props.form;

    const nameError = isFieldTouched('fullName') && getFieldError('fullName');
    const emailError = isFieldTouched('email') && getFieldError('email');
    const addressError = isFieldTouched('address') && getFieldError('address');
    const phoneError = isFieldTouched('phone') && getFieldError('phone');
    const idError = isFieldTouched('idLicense') && getFieldError('idLicense');

    return (
      <div className="user-add-new-container">
        <Button type="primary" onClick={this.toggle}>
          Add New User
        </Button>
        <Modal
          title="Add new User"
          style={{ top: 20 }}
          visible={open}
          onCancel={this.toggle}
          footer={[]}
        >
          <Form onSubmit={this.handleSubmit}>
            <Form.Item validateStatus={nameError ? 'error': ''} help={nameError || ''} >
              <label>Full Name</label>
              {getFieldDecorator('fullName', {
                rules: [{ required: true, message: 'Please input your full name' }],
              })(
              <Input placeholder="Full Name" />
              )}
            </Form.Item>
            <Form.Item validateStatus={addressError ? 'error': ''} help={addressError || ''}>
              <label>Address</label>
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Please input your address' }]
              })(
              <Select placeholder="Address" mode="tags" />
              )}
            </Form.Item>
            <Form.Item validateStatus={phoneError ? 'error': ''} help={phoneError || ''}>
              <label>Phone</label>
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number' }]
              })(
              <Select placeholder="Phone" mode="tags" tokenSeparators={[',']} />
              )}
            </Form.Item>
            <Form.Item validateStatus={emailError ? 'error': ''} help={emailError || ''}>
              <label>Email</label>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email' }]
              })(
              <Select placeholder="Email" mode="tags" tokenSeparators={[',']} />
              )}
            </Form.Item>
            <Form.Item validateStatus={idError ? 'error': ''} help={idError || ''}>
              <label>Id License</label>
              {getFieldDecorator('idLicense',{
                rules: [{ required: true, message: 'Please input your id license' }]
              })(
                <Input placeholder="Id License" />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())} >
                Add new User
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

const UserAddNewForm = Form.create({ name: 'ADD_NEW_FORM' })(UserAddNew);

export default UserAddNewForm;