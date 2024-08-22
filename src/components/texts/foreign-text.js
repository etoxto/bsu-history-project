import {Card, Col, Container, Row} from "react-bootstrap";
import React from "react";

export function ForeignText(){
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg p-4">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                <h2>Внешняя политика</h2>
                            </Card.Title>
                            <Card.Img
                                variant="top"
                                src={"/vneshnaa.jpg"}
                                alt="Внешняя"
                                className="mb-4"
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Во время правления Ивана III в 1502 году прекратила существование Золотая Орда.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Москва и Великое княжество Литовское воевали из-за русских земель, находящихся в подчинении Литвы и Польши. С усилением власти великого князя Московского всё больше русских князей переходили с землями к Москве.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                После смерти Казимира Польша и Литва были разделены между его сыновьями, Альбрехтом и Александром. Александр – Великий князь Литовский – женился на дочери Ивана III Елене. Отношения зятя и тестя постепенно ухудшались, и в 1500 году Иван III объявил войну Литве, прошедшую для Руси достаточно успешно: были завоеваны части Новгород-Северского, Смоленского и Черниговского княжеств. В 1503 году было подписано перемирие сроком на 6 лет. Иван III отклонил предложение Литвы о вечном мире до возвращения Смоленска и Киева.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                По результатам войны 1501-1503 годов великий князь Московский принудил платить дань за город Юрьев Ливонский орден.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Иван III Васильевич за время правления предпринял ряд попыток подчинить Казанское ханство. В 1470 году Москва и Казань заключили мир, а в 1487 году Иван III, взяв Казань, возвел на трон Махмет-Аминя, который на протяжении 17 лет был верным союзником московского князя.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}