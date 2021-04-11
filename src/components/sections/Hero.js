import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
// import Image from '../elements/Image';
// import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
}) => {

  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }   

  const outerClasses = classNames(
    'hero section center-content',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
  );

  return (
    <section
      className={outerClasses}
    >
      <div style={{height:50}}></div>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-32 mb-32 reveal-from-bottom" data-reveal-delay="200">
              Get tasks done with <span className="text-color-primary">Fokus</span>
            </h1>
            <div className="container-s">
              <p className="mt-32 mb-32 reveal-from-bottom" data-reveal-delay="400">
                To put it simply, Fokus is a <b>todolist on Steroids</b>. It is <b>Free</b>, <b>Opensource</b>, Offline-first web application, and designed to respect users' privacy. Fokus helps the user to turn their long todo lists into tasks with pre-specified times, tracks users' progress and actually gets the work done with focus.
                </p>
                <div style={{height:30}}></div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button style={{color:"#121212"}} tag="a" target="_blank" rel="noopener noreferrer"  color="primary" wideMobile href="https://fokus-prototype.netlify.com">
                      Get Fokus
                    </Button>
                  <Button tag="a"target="_blank" rel="noopener noreferrer"  color="dark" wideMobile href="https://github.com/pg07codes/fokus/">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;