// src/pages/Profile.js
import React,{useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/profile.css';


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


const Profile = () => {
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidades, setCidades] = useState([]);

  const handleEstadoChange = (event) => {
    const estado = event.target.value;
    setEstadoSelecionado(estado);
    setCidades(estadosECidades[estado] || []);
  };
  return (
    <div className="profile-container">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="profile-content">
          <h2>Perfil do Artista</h2>
          <form className="profile-form">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" placeholder="Nome" />
            </div>
            <div className="form-group">
              <label>Sobrenome</label>
              <input type="text" placeholder="Sobrenome" />
            </div>
            <div className="form-group">
              <label>Data de Nascimento</label>
              <input type="date" placeholder="Nascimento" />
            </div>
            <div className="form-group">
              <label>CPF</label>
              <input type="text" placeholder="CPF" />
            </div>
            <div className="form-group">
              <label>Instrumentos</label>
              <input type="text" placeholder="Instrumentos" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Telefone</label>
              <input type="tel" placeholder="Telefone" />
            </div>
            <div className="ender">
              <label>Endereço:</label>
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
            </div>

            <button type="submit" className="save-btn">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
