import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/projects.css'

export default function Example() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>현대 모비스 오토벨 풀스택 프로젝트</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='modal_div'>
          <div className='left'>
            1
          </div>
          <div className='right'>
          2
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            HI
          </Button>
          <Button variant="primary" onClick={handleClose}>
            BYE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }
