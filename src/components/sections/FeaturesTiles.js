import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = 
({className}) => {

  const outerClasses = classNames(
    'features-tiles section',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
  );

  const sectionHeader = {
    title: 'Packed with awesomeness',
    paragraph: 'Fokus is filled with amazing features that helps the user boost their productivity. Fokus is all about getting tasks done on time with focus. '
  };

  return (
    <section
      className={outerClasses}
    >
      <div style={{height:70}}></div>
      <div className="container mt-32" >
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/tasks.png')}
                      alt="Features tile icon 01"
                      width={346}
                      height={346} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Create Timed Tasks
                    </h4>
                  <p className="m-0 text-sm">
                    You assign each <b>task with a time</b> to complete it in. 
                    Now, when you need to pick a task, <b>fokus</b> on it, start the <b>timer</b>
                    and complete it before the timer goes off.  
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/sounds.png')}
                      alt="Features tile icon 02"
                      width={346}
                      height={346} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Soundscapes
                    </h4>
                  <p className="m-0 text-sm">
                    Play soothing soundscapes as you focus on a task to <b>improve concentration</b>. Also, it keeps you on track to get task done and acts as a gentle reminder of the tasks in <b>fokus</b>.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/summary.png')}
                      alt="Features tile icon 03"
                      width={346}
                      height={346} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Track your progress
                    </h4>
                  <p className="m-0 text-sm">
                    Fokus lets you <b>track your progress live</b> w.r.t. the <b>time worked</b> and also the <b>tasks completed</b>. This way you know not only what is left, but exactly how much is left.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/fokusBox.png')}
                      alt="Features tile icon 04"
                      width={346}
                      height={346} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Fokus Timer
                    </h4>
                  <p className="m-0 text-sm">
                    Choose a task to "fokus" on. <b>Start timer</b> and execute task. 
                    The countdown timer shows you the task under fokus, and the tasks' time left.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/labels.png')}
                      alt="Features tile icon 05"
                      width={346}
                      height={346} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Tasks' distribution
                    </h4>
                  <p className="m-0 text-sm">
                    Assign <b>labels</b> to your tasks and the <b>Pie chart</b> beautifully visualizes the distribution. Also, we have a <b>daily quote</b> to motivate you for the day.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/tasksDark.png')}
                      alt="Features tile icon 06"
                      width={346}
                      height={346} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Dark Mode
                    </h4>
                  <p className="m-0 text-sm">
                    How can we ignore this! Dark Mode is a must these days and Fokus brings in built Dark Mode for your users. It looks elegant and simply beautiful.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;