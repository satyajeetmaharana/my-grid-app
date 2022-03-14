import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCard from "./CustomCard";
import './CustomGrid.css';

export default function CustomGrid(props) {
    const list = props.list;
    return (
      <Container className="container">
           <Row xs={1} md={2} lg={3} className="row">
              {list && list.map(item => 
                <Col className="col" key={item.linked_resource}>
                  <CustomCard className="item" item={item}/>
                </Col>
              )}
          </Row>
      </Container>
    );
  }