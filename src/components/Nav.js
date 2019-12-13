import React, {useState} from 'react';
import navStack from '../svgs/navstack.svg';
import exit from '../svgs/exit.svg';
import { slide as Menu } from 'react-burger-menu';
import cookie from '../svgs/n_cookie.svg';
import apple from '../svgs/n_apple.svg';
import prunes from '../svgs/n_prunes.svg';
import apricot from '../svgs/n_apricot.svg';
import mixedNuts from '../svgs/n_mixednuts.svg';
import greekYogurt from '../svgs/n_greekyogurt.svg';
import darkChocolate from '../svgs/n_darkchocolate.svg';

let nutritionInfo = [
  {
    name: 'Cookie',
    url: cookie
  },
  {
    name: 'Apple',
    url: apple
  },
  {
    name: 'Prune',
    url: prunes
  },
  {
    name: 'Apricot',
    url: apricot
  },
  {
    name: 'Mixed Nuts',
    url: mixedNuts
  },
  {
    name: 'Greek Yogurt',
    url: greekYogurt
  },
  {
    name: 'Dark Chocolate',
    url: darkChocolate
  }
];

let styles =  {bmOverlay: {
  zIndex: 1
}}

function Nav() {
  const [image,setImage] = useState(null);
  console.log(image);

  function handleStateChange(state) {
    console.log(state);
    if (!state.isOpen) {
      setImage(null);
    }
  }
  
  return (
    <div>
      
        {image && image.url && (<div id="nutritionInfo"><img src={image.url} alt="asdf"/></div>)}
        
      <Menu className="menu" styles={styles} right 
      customBurgerIcon={ <img src={navStack} alt="burger icon"/> }
      customCrossIcon={ <img src={exit} /> }
      onStateChange={handleStateChange}
      >

      {nutritionInfo.map(option => ( 
          <li onClick={() => {
          setImage(option);
        }}>{option.name}</li> 
      ))}
    </Menu>  
 
    </div>
    
    );
  }

export default Nav;