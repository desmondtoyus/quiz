
import React from 'react';
import { Link } from 'react-router-dom';

const Views = () => (
  <div className="col-md-6">
    <div className="panel panel-success">
      <div className="panel-heading">
        <h3 className="panel-title">
                        My Pages
        </h3>
      </div>
      <ul className="list-group">
        <Link to="/" className="list-group-item active"> Sample Page </Link>
        <Link className="list-group-item active" to="/home"> Home </Link><Link className="list-group-item active" to="/about"> About </Link>
      </ul>
    </div>
  </div>
);
export default Views;
