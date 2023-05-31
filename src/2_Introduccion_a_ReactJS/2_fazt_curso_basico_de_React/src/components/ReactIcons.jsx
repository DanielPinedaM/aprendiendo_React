/* eslint-disable react/jsx-no-target-blank */

import { AiFillAudio } from 'react-icons/ai';
import { DiAngularSimple } from 'react-icons/di';

const ReactIcons = () => {
  return (
    <>
      <h1>
        <a
          href="https://www.youtube.com/watch?v=rLoWMU4L_qE&t=8164s"
          target="_blank"
        >
          <code>react-icons</code>
        </a>
      </h1>
      <AiFillAudio style={{ display: 'block' }} />
      <DiAngularSimple />
    </>
  );
};

export default ReactIcons;
