import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Shopping Bayside</h3>
          <p>
            Uma experiência completa de compras online. Produtos de qualidade, entrega rápida e atendimento eficiente.
          </p>
        </div>

        <div className="footer-column">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="/contato" aria-label="Página de contato">Contato</a></li>
            <li><a href="/sobre" aria-label="Sobre nós">Sobre Nós</a></li>
            <li><a href="/politica" aria-label="Política de Privacidade">Política de Privacidade</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Atendimento</h4>
          <p>Email: <a href="mailto:contato@shoppingbayside.com.br">contato@shoppingbayside.com.br</a></p>
          <p>Telefone: <a href="tel:+5521999999999">(21) 99999-9999</a></p>
          <p>Endereço: Av. Exemplo, 123 - RJ</p>
        </div>

        <div className="footer-column">
          <h4>Siga-nos</h4>
          <div className="social-icons" aria-label="Redes sociais do Shopping Bayside">
            <a href="https://facebook.com/shoppingbayside" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/shoppingbayside" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/shoppingbayside" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shopping Bayside. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;