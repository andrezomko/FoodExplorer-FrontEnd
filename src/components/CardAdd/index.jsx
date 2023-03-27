import { Container } from './styles';
import { RiAddCircleLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export function CardAdd(){
  const navigation = useNavigate();
  function handleAddFood() {
    navigation("/addfood")
  }

  return(
    <Container onClick={handleAddFood} >
      <span>Create new dish</span>
      <RiAddCircleLine />
    </Container>
  );
}