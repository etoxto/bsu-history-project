import {Card, Col, Container, Row} from "react-bootstrap";
import React from "react";

export function CulturalText(){
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg p-4">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                <h2>Культурная и идеологическая  политика</h2>
                            </Card.Title>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Объединение страны не могло не сказаться благотворно на культуре России. Масштабное крепостное строительство, возведение храмов, расцвет летописания в эпоху Ивана III являются зримым свидетельством духовного подъёма страны; при этом немаловажным фактом, свидетельствующим об интенсивности культурной жизни, является появление новых идей. Именно в это время появляются концепции, составившие в будущем весомую часть государственной идеологии России.
                            </Card.Text>
                            <Card.Title className="text-center mb-4">
                                <h2>Архитектура</h2>
                            </Card.Title>
                            <Card.Img
                                variant="top"
                                src={"kyltura.jpg"}
                                alt="Архитектура 1"
                                className="mb-4"
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                            <Card.Img
                                variant="top"
                                src={"kyltura2_1.jpg"}
                                alt="Архитектура 2"
                                className="mb-4"
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Большой шаг вперёд при Иване III сделало русское зодчество; немалую роль в этом сыграло то, что по приглашению великого князя в страну прибыл целый ряд итальянских мастеров, познакомивших Россию с архитектурными приёмами бурно развивавшегося Возрождения.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Уже в 1462 году начинается строительство в Кремле: был начат ремонт требовавших починки стен. В дальнейшем масштабное строительство в великокняжеской резиденции продолжилось: в 1472 году по указанию Ивана III на месте обветшавшего собора, построенного в 1326—1327 годах при Иване Калите, было решено возвести новый Успенский собор. Строительство было поручено московским мастерам; однако, когда до окончания работ осталось совсем немного, собор рухнул. В 1475 году в Россию был приглашён Аристотель Фиораванти, который сразу же взялся за дело. Остатки стен были снесены, на их месте был выстроен храм, неизменно вызывавший восхищение современников. 12 августа 1479 года новый собор был освящён митрополитом Геронтием.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                С 1485 года начинается интенсивное строительство в Кремле, не прекращавшееся на протяжении всей жизни великого князя. Взамен старых деревянных и белокаменных укреплений были выстроены кирпичные; к 1515 году итальянские зодчие Пьетро Антонио Солари, Марко Руффо, а также ряд других превратили Кремль в одну из самых сильных крепостей того времени. Продолжалось строительство и внутри стен: в 1489 году псковскими мастерами был выстроен Благовещенский собор, был возведён новый великокняжеский дворец, одной из частей которого стала возведённая итальянскими зодчими в 1491 году Грановитая палата. Всего, по сообщению летописей, в 1479—1505 годах в столице было построено около 25 церквей.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Масштабное строительство (прежде всего оборонной направленности) проводилось и в других частях страны: так, в 1490—1500 годах был перестроен новгородский кремль; в 1492 году на границе с Ливонией, напротив Нарвы, была возведена крепость Ивангород. Обновлялись также крепостные сооружения Пскова, Старой Ладоги, Яма, Орехова, Нижнего Новгорода (с 1500 года); в 1485 и 1492 годах были проведены масштабные работы по укреплению Владимира. По приказу великого князя были построены крепости и на окраинах страны: в Белоозере (1486 год), в Великих Луках (1493 год).
                            </Card.Text>
                            <Card.Title className="text-center mb-4">
                                <h2>Литература</h2>
                            </Card.Title>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Время правления Ивана III было также временем появления ряда оригинальных литературных произведений; так, в частности, в 1470-х годах написал своё «Хожение за три моря» тверской купец Афанасий Никитин. Интересным памятником эпохи является составленная Фёдором Курицыным на основе легенд, услышанных им в ходе пребывания в Валахии, «Повесть о Дракуле», повествующая о прославившемся своей жестокостью валашском господаре Владе Тепеше.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Значительный толчок развитию религиозной литературы был дан борьбой против ереси «жидовствующих»; также в произведениях этой эпохи нашли своё отражение споры о церковных богатствах. Можно отметить ряд произведений Иосифа Волоцкого, в которых он выступает как ярый обличитель ереси; наиболее законченный вид это обличение принимает в «Просветителе» (первая редакция которого, впрочем, составлена не ранее 1502 года).
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Летописание в этот период переживает свой расцвет; при великокняжеском дворе интенсивно составляются и перерабатываются летописные своды. Однако вместе с тем именно в этот период, вследствие объединения страны, полностью исчезает независимое летописание, бывшее характерной чертой предшествующей эпохи. Начиная с 1490-х годов, летописи, создаваемые в русских городах — Новгороде, Пскове, Вологде, Твери, Ростове, Устюге и ещё в ряде мест — представляют собой либо видоизменённый великокняжеский свод, либо летопись местного характера, не претендующую на общерусское значение. Церковное (в частности, митрополичье) летописание в этот период также сливается с великокняжеским. При этом активно ведётся редактирование летописных известий, их переработка как в интересах великокняжеской политики, так и в интересах конкретных группировок, пользующихся наибольшим влиянием в момент написания свода (в первую очередь это было связано с династической борьбой между партией Василия Ивановича и Дмитрия-внука).
                            </Card.Text>
                            <Card.Title className="text-center mb-4">
                                <h2>Идеология власти, титул и герб</h2>
                            </Card.Title>
                            <Card.Img
                                variant="top"
                                src={"kyltura2.png"}
                                alt="Герб"
                                className="mb-4"
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Наиболее заметными воплощениями формировавшейся идеологии объединённой страны в исторической литературе принято считать новый герб — двуглавый орёл, и новый титул великого князя. Кроме того, отмечается, что именно в эпоху Ивана III зарождаются те идеи, которые чуть позже составят официальную идеологию Московского государства.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Перемены в положении великого московского князя, превратившегося из правителя одного из русских княжеств в повелителя обширной державы, не могли не привести к переменам в титулатуре. Уже в июне 1485 года Иван III пользуется титулом «великого князя всея Руси», что означало ещё и претензии на земли, находившиеся под властью великого князя Литовского
                                (именовавшегося, помимо прочего, ещё и «великим князем русским»). В 1494 году литовский великий князь выразил готовность признать этот титул. В полный титул Ивана III были включены также и названия земель, вошедших в состав России; теперь он звучал как «государь всея Руси и великий князь Владимирский, и Московский, и Новгородский, и Псковский, и Тверской, и Пермский, и Югорский, и Болгарский, и иных».
                                Ещё одним нововведением в титулатуре стало появление титула «самодержец», являвшегося калькой византийского титула «автократор». К эпохе Ивана III относятся и первые случаи использования великим князем титула «царь» (или «кесарь») в дипломатической переписке, — пока только в отношениях с мелкими германскими князьями и Ливонским орденом; царский титул начинает широко использоваться в литературных произведениях. Этот факт чрезвычайно показателен: со времён начала монголо-татарского ига «царём» именовался хан Орды; к русским князьям, не имеющим государственной самостоятельности, такой титул почти никогда не применялся. Превращение страны из данника Орды в мощную независимую державу не прошло незамеченным и за границей: в 1489 году посол императора Священной Римской империи Николай Поппель от имени своего сюзерена предложил Ивану III королевский титул. Великий князь отказался, указав, что «мы божиею милостью государи на своей земле изначала, от первых своих прародителей, а поставление имеем от Бога, как наши прародители, так и мы… а поставления как прежде ни от кого не хотели, так и теперь не хотим».
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Появление двуглавого орла в качестве государственного символа Московского государства зафиксировано в конце XV века: он изображён на печати одной из грамот, выданной в 1497 году Иваном III. Несколько ранее аналогичный символ появился на монетах тверского княжества (ещё до присоединения к Москве); ряд новгородских монет, отчеканенных уже под властью великого князя, также несёт этот знак. Относительно происхождения двуглавого орла в исторической литературе существуют различные мнения: так, наиболее традиционный взгляд на его появление в качестве государственного символа заключается в том, что орёл был заимствован из Византии, а принесла его с собой племянница последнего византийского императора и жена Ивана III, Софья Палеолог; восходит это мнение к Карамзину. Как отмечается в современных исследованиях, помимо явных сильных сторон, у этой версии есть и недостатки: в частности, Софья происходила из Мореи — с окраины Византийской империи; орёл появился в государственной практике едва ли не через два десятилетия после брака великого князя с византийской царевной; и, наконец, неизвестно ни о каких претензиях Ивана III на византийский престол. В качестве модификации византийской теории происхождения орла получила некоторую известность южнославянская теория, связанная со значительным использованием двуглавых орлов на окраинах византийского мира. Вместе с тем, следов подобного взаимодействия пока обнаружить не удалось, и сам облик двуглавого орла Ивана III отличается от его предполагаемых южнославянских прототипов. Ещё одной теорией происхождения орла можно считать мнение о заимствовании орла из Священной Римской империи, использовавшей этот символ с 1442 года — и этом случае эмблема символизирует равенство рангов императора Священной Римской империи и великого князя московского. Отмечают также, что одним из символом, изображавшимся на монетах Новгородской республики, являлся одноглавый орёл; в этой версии появление двуглавого орла на печати великого князя выглядит развитием местных традиций. Стоит отметить, что в настоящий момент однозначного мнения о том, какая из теорий точней описывает действительность, не существует.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                Помимо принятия новых титулов и символики, заслуживают внимания также появившиеся в правление Ивана III идеи, составившие идеологию государственной власти. Прежде всего стоит отметить идею преемственности великокняжеской власти от византийских императоров; впервые эта концепция появляется в 1492 году, в труде митрополита Зосимы «Изложение Пасхалии». По мнению автора этого сочинения, Бог поставил Ивана III, как и «новаго царя Константина новому граду Констянтину, — Москве и всей Русской земли и иным многим землям государя». Чуть позже подобное сравнение обретёт стройность в концепции «Москва — третий Рим», окончательно сформулированной монахом псковского Елизарова монастыря Филофеем уже при Василии III. Ещё одной идеей, идеологически обосновывавшей великокняжескую власть, была легенда о регалиях Мономаха и о происхождении русских князей от римского императора Августа. Отражённая в несколько более позднем «Сказании о князьях владимирских», она станет важным элементом государственной идеологии при Василии III и Иване IV. Любопытно, что, как отмечают исследователи, первоначальный текст легенды выдвигал в качестве потомков Августа не московских, а тверских великих князей.
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                При этом стоит отметить, что подобные идеи в период правления Ивана III не получили сколько-нибудь широкого распространения; так, например, показательно то, что новопостроенный Успенский собор сравнивался не с цареградской Святой Софией, а со владимирским Успенским собором; идея о происхождении московских князей от Августа вплоть до середины XVI века отражается лишь во внелетописных источниках. В целом, хотя эпоха Ивана III — это период зарождения значительной части государственной идеологии XVI века, нельзя говорить о какой-либо государственной поддержке этих идей. Летописи этого времени скудны идейным содержанием; в них не прослеживается сколько-нибудь единой идеологической концепции; появление таких идей — дело последующей эпохи.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}