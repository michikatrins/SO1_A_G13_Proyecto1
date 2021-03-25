import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import './bootstrap.min.css'; 
import DynamicRam from './dynamic charts/Dynamic Ram';
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


class Reporte10 extends Component {  
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
									<Route exact path="/" component={DynamicRam}/>
								</div>
							</Container>
						</Col>					
					</Row>			
			  </BrowserRouter>
		</div>
    );
  }
}

export default Reporte10;