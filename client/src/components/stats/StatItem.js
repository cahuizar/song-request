import React from 'react';

const StatItem = ({ title, value, icon, color }) => {
  return (
    <div className='col s12 m4'>
      <div className='card-panel'>
        <div className='stat-title' style={{ color: color }}>
          {title}
        </div>
        <div className='stat-value' style={{ color: color }}>
          {value}
        </div>
        <div className='stat-icon' style={{ color: color }}>
          <i class='large material-icons'>{icon}</i>
        </div>
      </div>
    </div>
  );
};

export default StatItem;
