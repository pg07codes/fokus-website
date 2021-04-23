import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
  );

  const splitClasses = classNames(
    'split-wrap',
  );

  const sectionHeader = {
    title: 'How to use',
    paragraph: 'Fokus is all about getting your tasks done. Helping you to stop postponing or just making another todolist. It helps in getting the task done without being overly complicated and pushy.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Create your List
                  </h3>
                <ul className="m-0">
                  <li>Add tasks, and assign time you want to spend on that task.</li> 
                  <li>Add labels and reorder tasks according to priority</li>
                </ul>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/taskCreation.gif')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Fokus.Execute.Done.
                  </div>
                <h3 className="mt-0 mb-12">
                  Time to work through the list now.
                  </h3>
                  <ul className="m-0">
                  <li>Pick a task. "Fokus" on it. This task will be your priority now.</li> 
                  <li>Yes. Just the one step.</li>
                </ul>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/reOrder.gif')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Fokus on one thing.
                  </div>
                <h3 className="mt-0 mb-12">
                  Start task execution.
                  </h3>
                  <ul className="m-0">
                  <li>Start the task timer. "Fokus" on it.</li> 
                  <li>Add more time to the task, incase required.</li>
                  <li>Select a soothing soundscape as a reminder of the task in "fokus".</li>
                  <li>Reset/Pause the timer in case there is some very urgent matter to tend to. </li>
                </ul>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/soundscapes.gif')}
                  alt="Features split 04"
                  width={528}
                  height={396} />
              </div>
            </div>


            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Simple.Intuitive.Amazing.
                  </div>
                <h3 className="mt-0 mb-12">
                  Track progress easily.
                  </h3>
                <ul className="m-0">
                <li>Fokus comes with a real time progress tracker that updates as you work through your tasks list</li> 
                <li>Tracking progress both w.r.t time and total tasks count helps
                   in maintaining momentum and peace of mind</li>
              </ul>
              
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/progressSummary.gif')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;