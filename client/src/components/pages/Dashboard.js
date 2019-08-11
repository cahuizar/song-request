import React from 'react';
import SongTable from '../songs/SongTable';

const Dashboard = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <div className='card-panel'>
              <SongTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
