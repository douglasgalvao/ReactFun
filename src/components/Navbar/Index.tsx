import React from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import './Index.css';
import img from '../../images/eu.png';
import { Profile } from '../Avatar/Index';

interface NavbarProps {
    avatarImagemPath: string
}

interface MeuLinkProps {
  to: string;
  children: React.ReactNode;
}

const MeuLink: React.FC<MeuLinkProps> = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export const Navbar: React.FC<NavbarProps> = ({avatarImagemPath}:NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <LogoDevIcon fontSize='large'/>
      </div>
      <div className="nav-items">
        <div className="nav-item">
          <HomeIcon />
          <MeuLink to="/home">Home</MeuLink>
        </div>
        <div className="nav-item">
          <ShoppingCartIcon />
          <MeuLink to="/products">Products</MeuLink>
        </div>
        <div className="nav-item">
          <LoginIcon />
          <MeuLink to="/login">Log out</MeuLink>
        </div>
          <Profile path={avatarImagemPath}/>
      </div>
    </nav>
  );
};

