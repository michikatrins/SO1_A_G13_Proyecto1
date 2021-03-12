import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';


import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import ChartWithZoom from "./overview/Chart with Zoom";

import ColumnChart from "./column charts/Column Chart";
import PieChart from "./pie & funnel charts/Pie Chart";
import PieChartWithCustomization from "./pie & funnel charts/Pie Chart with Customization";
import './bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';

const person = [
    {id: 1, name: 'Gob', value: '2'},
    {id: 2, name: 'Buster', value: '5'},
    {id: 3, name: 'George Michael', value: '4'}
  ];
  const columns = [{
    dataField: 'id',
    text: 'PID'
  },
  {
    dataField: 'name',
    text: 'Name'
  },
  {
    dataField: 'value',
    text: 'Father PID'
  },
  {
    dataField: 'value',
    text: 'Status'
  }];


class Template extends Component {  
  render() {    
    return (
		<div>
			<Navbar bg="dark" variant="dark">
				<button className="d-lg-none toggle-sidebar"><span className="navbar-toggler-icon"></span></button>
				<Navbar.Brand href="/">System Monitor</Navbar.Brand><span className="hidden-xs text-muted">Grupo_13</span>
			  </Navbar>		  
			  <BrowserRouter>		  
					<Row>
						<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container>
								<div className="content">
									<Route exact path="/" component={PieChart}/>
								</div>
							</Container>
						</Col>					
					</Row>			
			  </BrowserRouter>
			<div className="App">
            	<p className="Table-header"></p>
            	<BootstrapTable keyField='id' data={ person } columns={ columns } />
          	</div>
		</div>
    );
  }
}

export default Template;