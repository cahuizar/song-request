import React from 'react';

const StatItem = ({ title, value, icon, color }) => {
  return (
    <div className='col s6 m4'>
      <div className='stat card-panel'>
        <div className='stat-icon' style={{ color: color }}>
          <i class='material-icons small'>{icon}</i>
        </div>

        <div className='stat-value'>{value}</div>
        <div className='stat-title'>{title}</div>
      </div>
    </div>
  );
};

export default StatItem;
