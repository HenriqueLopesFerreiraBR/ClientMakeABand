// src/pages/SearchBands.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/searchBands.css';

const estadosECidades = {
  "AC": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
  "AL": ["Maceió", "Arapiraca", "Palmeira dos Índios"],
  "AP": ["Macapá", "Santana", "Oiapoque"],
  "AM": ["Manaus", "Parintins", "Itacoatiara"],
  "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista"],
  "CE": ["Fortaleza", "Juazeiro do Norte", "Sobral"],
  "DF": ["Brasília"],
  "ES": ["Vitória", "Vila Velha", "Serra"],
  "GO": ["Goiânia", "Anápolis", "Aparecida de Goiânia"],
  "MA": ["São Luís", "Imperatriz", "Caxias"],
  "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis"],
  "MS": ["Campo Grande", "Dourados", "Três Lagoas"],
  "MG": ["Belo Horizonte", "Uberlândia", "Contagem"],
  "PA": ["Belém", "Santarém", "Ananindeua"],
  "PB": ["João Pessoa", "Campina Grande", "Patos"],
  "PR": ["Curitiba", "Londrina", "Maringá"],
  "PE": ["Recife", "Olinda", "Jaboatão dos Guararapes"],
  "PI": ["Teresina", "Parnaíba", "Picos"],
  "RJ": ["Rio de Janeiro", "Niterói", "Nova Iguaçu"],
  "RN": ["Natal", "Mossoró", "Parnamirim"],
  "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas"],
  "RO": ["Porto Velho", "Ji-Paraná", "Ariquemes"],
  "RR": ["Boa Vista", "Rorainópolis", "Caracaraí"],
  "SC": ["Florianópolis", "Joinville", "Blumenau"],
  "SP": ["São Paulo", "Campinas", "Santos"],
  "SE": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
  "TO": ["Palmas", "Araguaína", "Gurupi"]
};

const SearchBands = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidades, setCidades] = useState([]);

  const handleEstadoChange = (event) => {
    const estado = event.target.value;
    setEstadoSelecionado(estado);
    setCidades(estadosECidades[estado] || []);
  };


  return (
    <div className="search-container">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="search-content">
          <h2>Buscar Bandas</h2>
          <form className="search-form">
            <div className="form-group">
              <label htmlFor="banda-nome">Nome da Banda:</label>
              <input type="text" id="banda-nome" placeholder="Nome da Banda" />
            </div>
            <div className="form-group">
              <label htmlFor="genero">Gênero:</label>
              <select id="genero">
                <option value="">Selecione um gênero</option>
                <option value="rock">Rock</option>
                <option value="mpb">MPB</option>
                <option value="samba">Samba</option>
                <option value="pagode">Pagode</option>
                <option value="forro">Forró</option>
                <option value="sertanejo">Sertanejo</option>
                <option value="alternativo">Alternativo</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="estado">Estado:</label>
              <select id="estado" value={estadoSelecionado} onChange={handleEstadoChange}>
                <option value="">Selecione um estado</option>
                {Object.keys(estadosECidades).map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cidade">Cidade:</label>
              <select id="cidade" disabled={!estadoSelecionado}>
                <option value="">Selecione uma cidade</option>
                {cidades.map((cidade) => (
                  <option key={cidade} value={cidade}>
                    {cidade}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="search-btn">Buscar</button>
          </form>
          <hr />
          <div className="bands">
            <div className="band-result-line">
              <div className="band">
                <img src="" alt="Banda" />
                <h4>Nome da banda</h4>
                <a href="#">Informações</a>
              </div>
              <div className="band">
                <img src="" alt="Banda" />
                <h4>Nome da banda</h4>
                <a href="#">Informações</a>
              </div>
              <div className="band">
                <img src="" alt="Banda" />
                <h4>Nome da banda</h4>
                <a href="#">Informações</a>
              </div>
            </div>
            <div className="band-result-line">
              <div className="band">
                <img src="" alt="Banda" />
                <h4>Nome da banda</h4>
                <a href="#">Informações</a>
              </div>
              <div className="band">
                <img src="" alt="Banda" />
                <h4>Nome da banda</h4>
                <a href="#">Informações</a>
              </div>
              <div className="band">
                <img src="" alt="Banda" />
                <h4>Nome da banda</h4>
                <a href="#">Informações</a>
              </div>
            </div>
            <div className="opcao">
              <a href="#">Próximo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBands;
