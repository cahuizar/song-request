import React from 'react';
import SongTable from '../songs/SongTable';
import Stats from '../stats/Stats';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <Stats />
        </div>
        <div className='row'>
          <div className='col s12'>
            <h5 className='dashboard-header'>Songs Requested</h5>
          </div>
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
