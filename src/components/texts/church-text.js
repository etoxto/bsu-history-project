import {Card, Col, Container, Row} from "react-bootstrap";
import React from "react";

export function ChurchText(){
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg p-4">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                <h2>Церковная политика</h2>
                            </Card.Title>
                            <Card.Img
                                variant="top"
                                src={"cerkow.jpg"}
                                alt="Церковь"
                                className="mb-4"
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Русская церковь сыграла важную роль в процессе объединения русских земель под властью московских князей.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                В 1448 году митрополитом был избран рязанский епископ Иона, и с этого момента русская церковь стала независимой (автокефальной).
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Внутрицерковная борьба была связана с появлением ересей. Воинствующие церковники во главе с основателем Успенского монастыря Иосифом Волоцким резко выступили против еретиков. Иосиф и его последователи (иосифляне) отстаивали право церкви владеть землёй и крестьянами.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Иван III на церковном соборе в 1502 году выступил в поддержку иосифлян. Еретики были казнены. Церковное и монастырское землевладение сохранялось.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}