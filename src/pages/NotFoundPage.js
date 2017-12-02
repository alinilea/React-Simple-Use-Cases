import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container">
    <div className="not-found">
      <h1>Soryy! We didn't find the page you were looking for!
        <div>
          <Link to="/"><Button>HomePage</Button></Link>
        </div>
      </h1>
    </div>
  </div>
);

export default NotFoundPage;
