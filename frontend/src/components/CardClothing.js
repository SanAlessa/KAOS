const CardClothing = ({product}) => {
    const {name, stock,price} = product
    return(
        <div className='containerCardCloth'>
            <div className='containerCardClothPic'>
              <div className='CardClothPicBG firstImage'  style={{backgroundImage: `url(${stock[0].images[0]})`}}></div>
              <div className='CardClothPicBG secondImage' style={{backgroundImage: `url(${stock[0].images[1]})`}}></div>
            </div>

            <div className='containerCardClothName'>{name.toUpperCase()}</div>
            <div className='containerCardClothPrice'>{`$ ${price}`}</div>
        </div>
    )
}
/* .containerCartCards {
  background-color: var(--primary-color);
  width: 27vw;
   height: 75%;
  border: 1px solid black;
  margin-bottom: 5vw;
  margin-right: 3vw;
} */
/* .containerPhotoClothing{
  background-color:red;
  width: 100%;
  height: 60vh;
   background-position: center; 
  background-repeat: no-repeat;
  background-size: 60vh ;
} */
/* .containerTitle{ 
  background-color: yellowgreen;
  height: 5%;
} */
/* .containerPrice{
  background-color: whitesmoke;
  height: 10%;
} */
export default CardClothing