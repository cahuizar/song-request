import React from 'react';

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className='welcome--section'>
        <div className='welcome__heading'>Song Request</div>
        <div className='welcome__text'>
          Add your song to our playlist and we will play it during the
          reception!
        </div>
        <div className='welcome--div__button'>
          <button className='welcome__button'>get started</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
