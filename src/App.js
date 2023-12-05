import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Col, Row } from "reactstrap"
import Home from './components/pages/Home';
import Tendencias from './components/pages/Tendencias';
import Login from './components/pages/Login';
import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rodape from './components/Rodape';

function App() {
  return (
    <div>
      <Container fluid>

        <BrowserRouter>
          <Row>
            <Col>
              {/* Aqui vai o navbar */}
              <Menu />
            </Col>
          </Row>

          <Row>
            {/* Aqui vai o conteudo(rotas) do site */}
            <Col>
              {/* Rotas */}
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/tendencias" element={<Tendencias />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Col>
          </Row>

          <Row>
            <Rodape />
          </Row>
        </BrowserRouter>

      </Container >
    </div>

  );
}

export default App;
