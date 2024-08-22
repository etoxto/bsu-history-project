import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export function HomeText(){
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg p-4">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                <h2>Иван III Великий</h2>
                            </Card.Title>
                            <Card.Img
                                variant="top"
                                src={"ivan-3.webp"}
                                alt="Иван III Великий"
                                className="mb-4"
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Иван III сумел собрать воедино русские земли, находившиеся до этого в удельных владениях, и за это его назвали Великим. По мнению Николая Карамзина, он сделал для России больше, чем Петр I, потому что сумел обойтись без насилия над собственным народом. За 43 года правления великого князя Московского территория страны увеличилась в несколько раз, с 24 км² до 64 км². Можно сказать, что государство, в том виде, что сейчас, создал именно Иван III. Однако еще большей заслугой государя было избавление Руси от огромного оброка, который она платила ежегодно Золотой Орде.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}