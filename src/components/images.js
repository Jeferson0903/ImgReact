import mountain from '../assets/f6.jpg';
import flor from '../assets/f3.jpg';
import cidade from '../assets/f5.jpg';
import cidades from '../assets/f8.jpg';
import cid from '../assets/f7.jpg';
import cids from '../assets/f2.jpg';
import cida from '../assets/f9.jpg';


const Images = () => {
    return(
        <div>
            <img src={cida} />   
            <img src={cids} />
           <img src={mountain} />
           <img src={flor} />
           <img src={cidade} />
           <img src={cidades} />
           <img src={cid} />     
        </div>
    );
};

export default Images;