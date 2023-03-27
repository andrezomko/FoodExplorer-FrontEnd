import { useState } from 'react';
import { useAuth} from '../../hooks/auth';
import {useNavigate } from 'react-router-dom';
import { Container, Logo, Search, IconButton, Sidebar } from './styles';
import { ButtonText } from '../ButtonText';
import { Button } from '../Button';
import { RiSearchLine, RiUser3Line, RiLogoutBoxRLine, RiMenuFill } from "react-icons/ri";
import polygon from '../../assets/polygon.svg';
import receipt from '../../assets/receipt.svg';

export function Header({search}){
  const { signOut, user} = useAuth();
  const navigation = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const isAdmin = user && user.is_admin === 1 ;

  function handleProfile() {
    navigation("/profile");
  }

  function handleSignOut() {
    alert("You will now sign out from your account");
    signOut();
    navigation("/");
  }

  function handleBackHome() {
    navigation("/")
  }

  function handleToAddPlate(){
    navigation("/addfood")
  }

  function handleSidebar() {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true);
  }

  return(
    <Container>
      <div className="desktop">
      <Logo onClick={handleBackHome}>
        <img src={polygon} alt="logo" />
        <span>
          food explorer
         {isAdmin && <div className='admin'>admin</div>}
        </span>
      </Logo>

      {
      isAdmin != 1 && 
        <ButtonText
          ismyfavorites
          to={`/favorites/${user.id}`}
         >
            Favorites 
        </ButtonText> 
      }

      <Search>
        <RiSearchLine />
        <input 
          type="text" 
          placeholder="Search" 
          onChange={event => search(event.target.value)}
        />
      </Search>

      {user.is_admin ===1 ? (
        <Button className='newPlateBtn' onClick={handleToAddPlate} isRed>
         <span> New plate</span>
        </Button>):(
        <Button isRed >
          <img src={receipt} alt="receipt" />
          <span>Cart(2)</span>
      </Button>
      )}

      <IconButton
        onClick={handleProfile}
      >
        <RiUser3Line />
      </IconButton>

      <IconButton
        onClick={handleSignOut}
      >
        <RiLogoutBoxRLine />
      </IconButton>
      </div>

{/* mobile --------------------------- */}
      <div className="mobile">
        <Logo
          onClick={handleBackHome}
        >
          <img src={polygon} alt="logo" />
          <span>
            food explorer
            {isAdmin && <div className='admin'>admin</div>}
          </span>
        </Logo>
        <Search>
          <RiSearchLine />
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={event => search(event.target.value)}
          />
        </Search>
        
        <IconButton
          onClick={handleSidebar}
        >
          <RiMenuFill/>
        </IconButton>

        <Sidebar showSidebar={showSidebar}>
          <ul>
            <li>
              <a href="">Favorites</a>
            </li>
            <li>
              <a href="">Cart (2)</a>
            </li>
            <li>
              <a onClick={handleProfile}>Profile</a>
            </li>
            <li>
              <a onClick={handleSignOut}>Sign Out</a>
            </li>
          </ul>
        </Sidebar>
        
      </div>

    </Container>
  );
}