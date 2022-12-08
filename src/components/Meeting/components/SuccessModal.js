import React from 'react';
import { Modal,Table } from 'antd';
const SuccessModal = (props) => {
  const {openModal,setOpenModal,guests,description,setGuests,setDescription} = props;
  const handleCancel = () => {
    setOpenModal(false);
    setGuests([]);
    setDescription('')
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
      <Modal title="Event Successfully scheduled" open={openModal} onOk={handleCancel} onCancel={handleCancel}>
      <Table columns={columns} dataSource={guests}  rowKey={(columns) => columns.email}/>
      {description !=='' &&<span><h4>Key Information:</h4>{description}</span>}
      </Modal>
    </>
  );
};
export default SuccessModal;