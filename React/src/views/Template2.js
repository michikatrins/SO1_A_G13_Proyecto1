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
import Reporte3 from './Reporte3';
import Reporte9 from './Reporte9';
import Consulta1 from './Consulta1';
import Consulta1B from './Consulta1B';
import Consulta1C from './Consulta1C';
import Consulta1D from './Consulta1D';
import Consulta1E from './Consulta1E';
import Consulta2 from './Consulta2';
import Consulta4 from './Consulta4';
import Consulta5 from './Consulta5';
import Consulta6 from './Consulta6';
import ConsultaJossie from './ConsultaJossie';

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
          <Navbar.Brand href="/">CanvasJS Examples</Navbar.Brand><span className="hidden-xs text-muted">React</span>
          </Navbar>		  
          <BrowserRouter>		  
            <Row>
              
              <Nav to="/" className="flex-sm-column" id="sidebar">
                <ListGroup className="nav nav-sidebar flex-sm-column">
                  <ListGroup.Item>
                    <a href="#overview" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>REPORTES</span></a>
                  </ListGroup.Item>
                  <ListGroup>
                    <ListGroup className="sub-menu collapse" id="overview">
                      <ListGroup.Item> <NavLink exact to="/Consulta1">Reporte1</NavLink></ListGroup.Item>
                      <ListGroup.Item> <NavLink exact to="/Consulta1b">Reporte1b</NavLink></ListGroup.Item>
                      <ListGroup.Item> <NavLink exact to="/Consulta1c">Reporte1c</NavLink></ListGroup.Item>
                      <ListGroup.Item> <NavLink exact to="/Consulta1d">Reporte1d</NavLink></ListGroup.Item>
                      <ListGroup.Item> <NavLink exact to="/Consulta1e">Reporte1e</NavLink></ListGroup.Item>
                      <ListGroup.Item> <NavLink exact to="/Consulta2">Reporte2</NavLink></ListGroup.Item>
                      <ListGroup.Item> <NavLink exact to="/ConsultaJossie">Reporte2.1</NavLink></ListGroup.Item>
                      <ListGroup.Item> <NavLink exact to="/Reporte3">Reporte3</NavLink></ListGroup.Item>
                      <ListGroup.Item> <NavLink exact to="/Consulta4">Reporte4</NavLink></ListGroup.Item>
                      <ListGroup.Item> <NavLink exact to="/Consulta5">Reporte5</NavLink></ListGroup.Item>
                      <ListGroup.Item> <NavLink exact to="/Consulta6">Reporte6</NavLink></ListGroup.Item>
                      <ListGroup.Item> <NavLink exact to="/Reporte9">Reporte9</NavLink></ListGroup.Item>
                    </ListGroup>
                  </ListGroup>
                </ListGroup>
              </Nav>
              
              <Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                <Container>
                  <div className="content">
                    <Route exact path="/" component={ColumnChart}/>
                    <Route exact path="/Consulta1" component={Consulta1}/>
                    <Route exact path="/Consulta1B" component={Consulta1B}/>
                    <Route exact path="/Consulta1C" component={Consulta1C}/>
                    <Route exact path="/Consulta1D" component={Consulta1D}/>
                    <Route exact path="/Consulta1E" component={Consulta1E}/>
                    <Route exact path="/Consulta2" component={Consulta2}/>
                    <Route exact path="/ConsultaJossie" component={ConsultaJossie}/>
                    <Route exact path="/Reporte3" component={Reporte3}/>
                    <Route exact path="/Consulta4" component={Consulta4}/>
                    <Route exact path="/Consulta5" component={Consulta5}/>
                    <Route exact path="/Consulta6" component={Consulta6}/>
                    <Route exact path="/Reporte9" component={Reporte9}/>
                  </div>
                </Container>
              </Col>					
            </Row>			
          </BrowserRouter>	
        </div>
    );
  }
}

export default Template;