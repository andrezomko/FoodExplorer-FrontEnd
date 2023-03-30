import { Container } from './styles';
import ameixa from  '../../assets/ingredients/ameixa.png';
import aniz from  '../../assets/ingredients/aniz.png';
import cafe from  '../../assets/ingredients/cafe.png';
import camarao from  '../../assets/ingredients/camarao.png';
import canela from  '../../assets/ingredients/canela.png';
import damasco from  '../../assets/ingredients/damasco.png';
import farinha from  '../../assets/ingredients/farinha.png';
import limao from  '../../assets/ingredients/limao.png';
import maca from  '../../assets/ingredients/maca.png';
import maracuja from  '../../assets/ingredients/maracuja.png';
import massa from  '../../assets/ingredients/massa.png';
import pepino from  '../../assets/ingredients/pepino.png';
import pessego from  '../../assets/ingredients/pessego.png';
import pesto from  '../../assets/ingredients/pesto.png';
import presunto from '../../assets/ingredients/presunto.png';
import rabanete from  '../../assets/ingredients/rabanete.png';
import rucula from '../../assets/ingredients/rucula.png';
import tomate from '../../assets/ingredients/tomate.png';
import whiskey from '../../assets/ingredients/rucula.png';
import onion from '../../assets/ingredients/onion.png';
import tangie from '../../assets/ingredients/tangie.png';
import sugar from '../../assets/ingredients/sugar.png';
import ice from '../../assets/ingredients/ice.png';
import almond from '../../assets/ingredients/almond.png'


export function IngredientCard({name}){
    let ingredientName = String(name.trim('').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    let ingredientPicture;

    function fetchIngredientPicture(){
      switch(ingredientName){
        
        case "ice":
          return ingredientPicture = ice;
        case "sugar":
          return ingredientPicture = sugar;
        case "tangy sauce":
          return ingredientPicture = tangie; 
        case "plum":
          return ingredientPicture = ameixa; 
        case "anise":
          return ingredientPicture = aniz; 
        case "coffee":
          return ingredientPicture = cafe; 
        case "shrimp":
          return ingredientPicture = camarao; 
        case "cinnamon":
          return ingredientPicture = canela;
        case "apricot":
          return ingredientPicture = damasco;
        case "flour":
          return ingredientPicture = farinha;
        case "lemon":
          return ingredientPicture = limao;
        case "apple":
          return ingredientPicture = maca;
        case "passionfruit":
          return ingredientPicture = maracuja;
        case "pasta":
          return ingredientPicture = massa;
        case "cucumber":
          return ingredientPicture = pepino;
        case "peach":
          return ingredientPicture = pessego;
        case "pesto sauce":
          return ingredientPicture = pesto;
        case "jamon":
          return ingredientPicture = presunto;
        case "radish":
          return ingredientPicture = rabanete;
        case "arugula":
          return ingredientPicture = rucula;
        case "tomato":
          return ingredientPicture = tomate;
        case "bourbon":
          return ingredientPicture = whiskey;
        case "onion":
          return ingredientPicture = onion
        case "almond":
          return ingredientPicture = almond
        case "apricot":
          return ingredientPicture = damasco
      }
    }
    
    let searchPicture = fetchIngredientPicture(ingredientName);

  return(
    <Container>
      <img src={searchPicture} alt="ingredient picture" />
      <span>{name}</span>
    </Container>
  );
}