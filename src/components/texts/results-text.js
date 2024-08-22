import {Card, Col, Container, Row} from "react-bootstrap";
import React from "react";

export function ResultsText(){
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg p-4">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                <h2>Итоги правления</h2>
                            </Card.Title>
                            <Card.Img
                                variant="top"
                                src={"itogi.jpg"}
                                alt="Итоги"
                                className="mb-4"
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Завершение процесса объединения русских княжеств в единое государство с центром в Москве, заложение основ российской государственности.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Освобождение страны от ордынского ига, обеспечение безопасности и независимости России.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Присоединение обширных территорий (Новгород, Тверь, часть Рязани), увеличение площади страны почти в 6 раз.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Проведение реформ по централизации власти и управления.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Добивание признания Москвы наследницей Византии, повышение ее международного авторитета благодаря брачным и дипломатическим союзам.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Заложение основ самодержавия и единого свода законов (Судебника), ставших фундаментом российской государственности.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Способствование развитию русской культуры (строительство нового Московского Кремля, Успенского собора, поддержка летописания).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}