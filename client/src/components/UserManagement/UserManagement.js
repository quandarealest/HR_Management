import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

import UserEditModal from '../UserEditModal/UserEditModal';
export default class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      editing: false,
      record: null,
      openModal: false,
    }
  }
  
  componentDidMount(){
    const { getUserList } = this.props;
    getUserList();
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  handleDelete = (key) => {
    const { deleteUser } = this.props;
    deleteUser(key);
  };

  handleEdit = (values) => {
    const { updateUser } = this.props;
    updateUser(values);
  };

  openEditModal = (record) => {
    this.setState(prevState => ({
      record,
      openModal: !prevState.openModal,
    })
    )
  }
  
  toggle = () => {
    this.setState(prevState => ({
      openModal: !prevState.openModal
    }))
  }

  render() {
    const { userList = {} } = this.props;
    const { openModal, record } = this.state;
    const columns = [
      {
        title: 'Full Name',
        dataIndex: 'fullName',
        key: 'fullName',
        width: '20%',
        ...this.getColumnSearchProps('fullName'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: '30%',
        // ...this.getColumnSearchProps('address'),
        render: address => (
          <>
            {address.map(item => (
              <p>
                {item}
              </p>
            ))}
          </>
        )
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        render: phone => (
          <>
            {phone.map(item => (
              <p>
                {item}
              </p>
            ))}
          </>
        )
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: email => (
          <>
            {email.map(item => (
              <p>
                <a href="/">
                {item}
                </a>
              </p>
            ))}
          </>
        )
      },
      {
        title: 'Id License',
        dataIndex: 'idLicense',
        key: 'idLicense',
        ...this.getColumnSearchProps('idLicense'),
      },
      {
        title: 'Action',
        render: (text, record) => (
          <>
            <Button onClick={() => this.openEditModal(record)} style={{ marginRight: "1em", marginBottom: "1em", width: "72.47px" }} type="primary">
              Edit
            </Button>
            <Button style={{ marginRight: "1em", marginBottom: "1em", width: "72.47px" }}>
              Detail
            </Button>
            <Button onClick={() => this.handleDelete(record._id)} type="danger">
              Delete
            </Button>
          </>
        )
      }
    ];

    return (
      <div>
        <Table bordered={true} className="custom-table" columns={columns} dataSource={userList}/>
        <UserEditModal open={openModal} toggle={this.toggle} record={record} update={this.handleEdit} />
      </div>
    )
  }
}
