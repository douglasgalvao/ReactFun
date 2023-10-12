import React from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import './Index.css';

interface NavbarProps {
  // Defina as propriedades da Navbar, se necessário
}

interface MeuLinkProps {
  to: string;
  children: React.ReactNode;
}

const MeuLink: React.FC<MeuLinkProps> = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <LogoDevIcon fontSize='large'/>
      </div>
      <div className="nav-items">
        <div className="nav-item">
          <HomeIcon />
          <MeuLink to="/">Home</MeuLink>
        </div>
        <div className="nav-item">
          <ShoppingCartIcon />
          <MeuLink to="/produtos">Produtos</MeuLink>
        </div>
        <div className="nav-item">
          <LoginIcon />
          <MeuLink to="/login">Log out</MeuLink>
        </div>
      </div>
    </nav>
  );
};

