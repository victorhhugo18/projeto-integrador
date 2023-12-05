import { Col, Row } from "reactstrap"
import ItemFilmes from '../ItemFilmes';
import jogosvorazes from '../images/jogosvorazes.jpg';
import invencivel from '../images/invencivel.jpg';
import loki from '../images/loki.jpg';
import genv from '../images/genv.jpg';
import rodadotempo from '../images/rodadotempo.jpg';
import game from '../images/game.jpg';
import naruto from '../images/naruto.jpg';
import anime from '../images/yu-gi-oh.jpg';
import pokemon from '../images/pokemon.jpg';
import ItemSeries from "../ItemSeries";
import ItemAnimes from "../ItemAnimes";
import CarouselInicio from "../CarouselInicio";


function Home() {
    return (
        <div>
            <Row>
                <Col>
                    {/* Aqui vai o carousel */}
                    <CarouselInicio />
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1 className="mt-3 mb-3">Filmes:</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ItemFilmes titulo="Jogos Vorazes" img={jogosvorazes} sinopse="Anos antes de se tornar o tirânico Presidente de Panem, Coriolanus Snow, aos 18 anos, vê uma chance de mudança de sorte quando é escolhido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>

                <Col>
                    <ItemFilmes titulo="Invencível" img={invencivel} sinopse="Mark Grayson, de 17 anos, é como qualquer outro garoto da sua idade, só que o seu pai é o super-herói mais poderoso do planeta." />
                </Col>

                <Col>
                    <ItemFilmes titulo="Loki" img={loki} sinopse="O vilão Loki reempreende seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de Vingadores: Ultimato" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1 className="mt-3 mb-3">Séries:</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ItemSeries titulo="Gen V" img={genv} sinopse="Do mundo de The Boys vem Gen V que explora a primeira geração de super-heróis saber que seus superpoderes são do Composto V Esses heróis colocam seus limites físicos e morais..." />
                </Col>

                <Col>
                    <ItemSeries titulo="A Roda do Tempo" img={rodadotempo} sinopse="Situada em um mundo de alta fantasia onde a magia existe, mas apenas alguns podem acessá-la, uma mulher chamada Moiraine cruza o caminho com cinco rapazes e moças..." />
                </Col>

                <Col>
                    <ItemSeries titulo="Game of Thrones" img={game} sinopse="Nove famílias nobres lutam pelo controle sobre as terras míticas de Westeros, enquanto um antigo inimigo retorna depois de estar adormecido por milhares de anos." />
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1 className="mt-3 mb-3">Animes:</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ItemAnimes titulo="Naruto" img={naruto} sinopse="Guiado pelo espírito demoníaco dentro dele, o órfão Naruto aprende a controlar seus poderes como um ninja nesta série de aventura anime." />
                </Col>

                <Col>
                    <ItemAnimes titulo="Yu-Gi-Oh!" img={anime} sinopse="Tudo muda para o jovem Yugi Muto e seus amigos Joey, Tristan e Téa quando a vida deles passa a girar em torno de um jogo de cartas fantásticas." />
                </Col>

                <Col>
                    <ItemAnimes titulo="Pokémon" img={pokemon} sinopse="Explore o mundo de Pokémon com Ash e seu parceiro Pikachu em busca do sonho do menino de ser um mestre Pokémon." />
                </Col>
            </Row>
        </div>
    )
}

export default Home