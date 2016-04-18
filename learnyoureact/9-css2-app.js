import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/9-css2.jsx';
    
let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));

