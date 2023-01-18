import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, title, onClose } = props;
   return <>
      <h1 className={onClose? styles.h1SelCards: styles.h1SelCardsFav}>{title}</h1> 
      <div className={styles.divContCards} > 
      {
         characters.map(({id, name, species, gender, image}) => 
         <Card
         key={id}
         id={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         onClose={onClose}
         />)
      }
      </div>;
   </>
}
