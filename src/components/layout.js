import React from "react"
import {Link} from "gatsby"
const ListLink = (props) => (
  <li style={{display: `inline-block`, marginRight:`1rem`}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 1200, padding: `0 1rem` }}>
    <header style={{marginBottom: `1.5rem`}}>
      <Link to="/" style={{textShadow: `none`, backgroundImage: `none`}}>
        <h3 style={{display: `inline`}}>DCAC UFRN</h3>
      </Link>
      <ul style={{listStyle:`none`,float:`right`}}>
        <ListLink to="/sobre/">Sobre</ListLink>
        <ListLink to="/graduacao/">Graduação</ListLink>
        <ListLink to="/posgraduacao/">Pós-Graduação</ListLink>
        <ListLink to="/pesquisa/">Pesquisa</ListLink>
        <ListLink to="/extensao/">Extensão</ListLink>
        <ListLink to="/internacional/">Internacional</ListLink>
        <ListLink to="/alumni/">Alumni</ListLink>
      </ul>
      {children}
    </header>
    <footer style={{backgroundColor:`grey`,padding:10}}>
      <h3>DCAC UFRN</h3>
      <p>Departamento de Ciências Atmosféricas e Climáticas</p>
      <p>Universidade Federal do Rio Grande do Norte</p>
      <p>Avenida Endereço, 000 - Nome do Bairro - Cidade/UF - 00000-000</p>
  </footer>    
  </div>
  
)
