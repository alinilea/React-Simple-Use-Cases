import React from 'react';
import CompNavigation from './CompNavigation';

const CompFooter = () => (
  <footer className="container-fluid">
    <div className="container text-center">
      <CompNavigation fromFooter={true} />
    </div>
  </footer>
);

export default CompFooter;