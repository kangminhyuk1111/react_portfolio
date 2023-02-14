import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../css/projects.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import prevIcon from "../images/previcon.png";
import nextToIcon from "../images/nexttoicon.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Example(props) {
  const [show, setShow] = useState(false);
  const [propsModalImgs, setPropsModalImgs] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div className='next-to'>
        <img src={nextToIcon} />
      </div>
    ),
    prevArrow: (
      <div className='prev-to'>
        <img src={prevIcon} />
      </div>
    ),
  };
  const mappingPropsImgData = () => {
    const objKeys = Object.keys(props.projectModalImg)
    setPropsModalImgs(objKeys.map((data)=>(
      <img src={props.projectModalImg[data]}/>
    )))
  }

  useEffect(() => {
    mappingPropsImgData();
    AOS.init();
  },[])
  return (
    <>
      <div className='project_img' onClick={handleShow}> {/* data-aos="fade-right" data-aos-duration="1000" */}
        <img src={props.projectImg} />
        <div className='pg_flex_row'>
          <p className='project_second pb-0 f_w_600'>{props.title}</p>
          <p className='project_second pb-2 dis_flex'><p>{props.titleEng}</p></p>
        </div>
      </div>


      <Modal show={show} onHide={handleClose} size='xl' centered>
        <div className='top_modal'>
          <div className='modal_div'>
            <div className='flex_col'>
              <div className='modal_left_1'>
                <button className='close_button' onClick={() => {
                  if (show == true) {
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
              <div className='flex_center'>
                <div className='right_imgs'>
                  <Slider {...settings}>
                    {propsModalImgs}
                  </Slider>
                </div>
                <div className='modal_right_link'>
                  <p className='header_second_logos'><a href={props.gitlink}>LINK TO GIT HUB</a></p>
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
        </div>
      </Modal>
    </>
  );
}
