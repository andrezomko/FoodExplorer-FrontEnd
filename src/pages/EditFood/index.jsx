import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Content, Form } from './styles';
import { Header } from '../../components/Header';
import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { FoodItem } from '../../components/FoodItem';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { RiUpload2Line } from 'react-icons/ri';

export function EditFood() {

  const navigate = useNavigate();
  const params = useParams();
  const [category, setCategory] = useState("");
  const [pictureFile, setPictureFile] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [width, setWidth] = useState(13);
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  useEffect(() => {
    async function fetchFood() {

      const response = await api.get(`/foods/${params.id}`);
      const { category, picture, name, price, description, ingredients } = response.data

      setCategory(category);
      setPictureFile(picture);
      setName(name);
      setPrice(price);
      setDescription(description);
      setIngredients(ingredients.map(ingredient => ingredient.name));

    }fetchFood()}, []);

  /* ingredients */
  function handleChange(event) {
    setWidth(event.target.value.length + 0.4);
    setNewIngredient(event.target.value)
  }

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
    setWidth(10);
  }

  function handleRemove(removedIngredient) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient != removedIngredient))
  }

  function handlePictureFile(event) {
    const fileObj = event.target.files[0];
    setPictureFile(fileObj);
    console.log(fileObj);
  }

  function handleEditFood() {

    if((category === 'Select') || !name || !ingredients || !price || !description) {
      alert("Please, fill in all fields!");
      return
    } 

    api.put(`/foods/${params.id}`, { category, name, price, description, ingredients });
    
    const formData = new FormData();
    formData.append("picture", pictureFile);
    // verificar FormData()
        // for (const [key, value] of formData.entries()) {
        //   console.log(key, value);
        // 
      
    if(typeof pictureFile === 'object' ){
      api.patch(`/foods/picture/${params.id}`, formData) //endereco da rota esta correto      
    }
    alert("Dish edited successfully!");
    navigate(-1);
    }

  async function handleDelete() {
    const confirm = window.confirm('Do you really want to delete?');

    if(confirm) {
      await api.delete(`/foods/${params.id}`);
      alert('Dish deleted successfully!');
      navigate(-1);
    }
  }


  

  return(
    <Container>
      <Header />

      <Content className="content">
        <ButtonBack />

        {/* <Form encType='multipart/form-data'> */}
        <Form>
          <header>
            Edit Dish
          </header>

          <fieldset className="desktop">
            <div className="input-wrapper">
              <div className="small-input" id="picture-input">
                <span>Dish image</span>
                <label htmlFor="food-picture">
                  <RiUpload2Line />
                  <input 
                    type="file" 
                    id="food-picture" 
                    onChange={handlePictureFile}
                  />
                  <span>Select Image</span>
                </label>
              </div>

              <div className="small-input">
                <label for="category">Category</label>
                <select 
                  id="category" 
                  name="category"
                  defaultValue={category}
                  onChange={ event => setCategory(event.target.value)}
                >
                  <option value="select">Select</option>
                  <option value="main_course">Main course</option>
                  <option value="dessert">Dessert</option>
                  <option value="drink">Drink</option>
                </select>
              </div>

              <div className="big-input">
                <Input 
                  label="Name"
                  placeholder="Ex.: Ceasar Salad"
                  type="text"
                  value={name}
                  onChange={ event => setName(event.target.value) }
                />
              </div>
            </div>
              
            <div className="input-wrapper">
              <div className="big-input">
                <span>Ingredients</span>
                <div id="ingredient-input">
                  {
                    ingredients.map((ingredient, index) => (
                      <FoodItem 
                        key={String(index)}
                        value={ingredient}
                        width={ingredient.length + 0.4}
                        onClick={() => handleRemove(ingredient)}
                      />
                    ))
                  }
                  <FoodItem 
                    isNew
                    placeholder="Add"
                    value={newIngredient}
                    onChange={ handleChange }
                    onClick={ handleAddIngredient }
                    width={width}
                  />
                </div>
              </div>

              <div className="small-input">
                <Input 
                  label="Price"
                  placeholder="$ 00,00"
                  type="text"
                  value={price}
                  onChange={ event => setPrice(event.target.value) }
                />
              </div>
            </div>
              

            <div className="text-area">
                <label>Description</label>
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                placeholder="Briefly write about the dish, its ingredients and composition"
                value={description}
                onChange={ event => setDescription(event.target.value) }
                />
            </div>
          </fieldset>

{/* MOBILE -------------------------------------------------- */}
          <fieldset className="mobile">
            <div className="small-input" id="picture-input">
              <span>Dish image</span>
              <label htmlFor="food-picture">
                <RiUpload2Line />
                <input 
                  type="file" 
                  id="food-picture" 
                  onChange={handlePictureFile}
                />
                <span>Select Image</span>
              </label>
            </div>

            <div className="small-input">
              <label for="category">Category</label>
              <select 
                id="category" 
                name="category"
                defaultValue={category}
                onChange={ event => setCategory(event.target.value)}
              >
                <option value="select">Select</option>
                <option value="main_course">Main course</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </div>

            <div className="big-input">
              <Input 
                label="Name"
                placeholder="Ex.: Ceasar Salad"
                type="text"
                value={name}
                onChange={ event => setName(event.target.value) }
              />
            </div>
              
            <div className="big-input">
              <span>Ingredients</span>
              <div id="ingredient-input">
                {
                  ingredients.map((ingredient, index) => (
                    <FoodItem 
                      key={String(index)}
                      value={ingredient}
                      width={ingredient.length + 0.4}
                      onClick={() => handleRemove(ingredient)}
                    />
                  ))
                }
                <FoodItem 
                  isNew
                  placeholder="Add"
                  value={newIngredient}
                  onChange={ handleChange }
                  onClick={ handleAddIngredient }
                  width={width}
                />
              </div>
            </div>

            <div className="small-input">
              <Input 
                label="Price"
                placeholder="$ 00,00"
                type="text"
                value={price}
                onChange={ event => setPrice(event.target.value) }
              />
            </div>
              
            <div className="text-area">
                <label>Description</label>
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                placeholder="Briefly write about the dish, its ingredients and composition"
                value={description}
                onChange={ event => setDescription(event.target.value) }
                />
            </div>
          </fieldset>
          
          <div className="button-wrapper">
            <Button
              onClick={handleDelete}
              isRed
            >
              <span>Delete dish</span> 
            </Button>     

            <Button onClick={handleEditFood} >
              <span>Save</span> 
            </Button>
          </div>
        </Form>
        <Footer />
      </Content>
    </Container>
  );
}
