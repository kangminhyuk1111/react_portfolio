import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/projects.css'

export default function Example(props) {
  console.log(props.title);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <div className='project_img' onClick={handleShow}>{props.title}</div>


      <Modal show={show} onHide={handleClose} size='xl' centered>
        <div className='top_modal'>
          <div className='modal_div'>
            <div className='flex_col'>
              <div className='modal_left_1'>
                <p className='modal_left_sidelink'>Project</p>
                <p className='modal_left_title'>{props.title}</p>
                <p className='modal_left_summary'>{props.shortsummary}</p>
              </div>
              <div className='modal_left_2'>
                <p className='modal_left_2_personal'>
                  Personal Work
                </p>
                <p className='modal_left_2_time'>
                  Development Time : {props.lesstime}
                </p>
              </div>
            </div>
            <div className='right'>
              <img src={props.projectImg} />
              <div className='modal_right_link'>
                <p className='header_second_logos'><a href={props.gitlink}>LINK TO GIT HUB</a></p>
                <p className='header_second_logos'><a href={props.liveserver}>LIVE PAGES</a></p>
              </div>
              <div className='modal_right_summary'>
                <div className='modal_right_summary_skills'>
                  Stack : {props.usedskills}
                </div>
                <div className='pt-6'>{props.summary}</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
