import React from 'react';
import { Modal,Table } from 'antd';
const SuccessModal = (props) => {
  const {openModal,setOpenModal,guests,description,setGuests} = props;
  const handleOk = () => {
    setOpenModal(false);
    setGuests([]);
  };
  const handleCancel = () => {
    setOpenModal(false);
    setGuests([]);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];
  return (
    <>
      <Modal title="Event Successfully scheduled" open={openModal} onOk={handleOk} onCancel={handleCancel}>
      <Table columns={columns} dataSource={guests} />
      <span><h4>Key Information:</h4>{description}</span>
      </Modal>
    </>
  );
};
export default SuccessModal;