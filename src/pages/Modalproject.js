import React, { useState , useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../css/projects.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Example(props) {
  console.log(props.title);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    AOS.init();
  })
  return (
    <>
      <div className='project_img' onClick={handleShow}> {/* data-aos="fade-right" data-aos-duration="1000" */}
          <img src={props.projectImg} />
          <div className='pg_flex_row'>
          <p className='project_second'>{props.title}</p>
          <p className='project_second'>소요기간 : {props.lesstime}</p>
          </div>
      </div>
      

      <Modal show={show} onHide={handleClose} size='xl' centered>
        <div className='top_modal'>
          <div className='modal_div'>
            <div className='flex_col'>
              <div className='modal_left_1'>
                <button className='close_button' onClick={()=>{
                  if(show == true){
                    setShow(false)
                  }
                }}>
                  x
                </button>
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
                {/* <p className='header_second_logos'><a href={props.liveserver}>LIVE PAGES</a></p> */}
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
