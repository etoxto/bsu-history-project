import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export function ManText(){
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg p-4">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                <h2>Языджан Арсений Артурович</h2>
                            </Card.Title>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                20 лет
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Студент педагогического института НИУ “БелГУ”
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Направление подготовки 46.03.01 “История”
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Телефон: 89304509967
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}