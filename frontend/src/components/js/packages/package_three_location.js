import React, { useState,useEffect } from "react";
import '../../css/package-location.css';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Axios from 'axios';


export default function Package_three_location(){

    const [user_id, setUser_id] = useState("");

Axios.defaults.withCredentials = true;
useEffect(() => {
  Axios.get("http://localhost:5000/sign-in").then((response) => {
    if (response.data.loggedIn == true) {
      setUser_id(response.data.user[0].user_id);
    }
  });
}, []); 

const addFavourite = () =>{
    Axios.post("http://localhost:5000/addFavouriteP3",{
        user_id: {user_id},
    }).then((response) => {
        console.log(response);
      });
} ; 

    return ( 
        <div className="Locations">
            <br></br>
<Link to='/package_map_three'><h5 style={{color:"#fff",marginLeft:"40px"}}>Get Map of locations</h5></Link>

<h1>01.Nuwara Eliya</h1>
    <br></br>

<div className="Sigiriya">
       

       <img className="Picture" src='Package3/location/Nuwara-Eliya2.jpg' alt="" width="260" height="220"></img>
       <div>
       <IconButton color="secondary" aria-label="add to favorite">
       <FavoriteIcon onClick={addFavourite}/>
      </IconButton>
       </div>

       <div className="Sigiriya-des">
       Nuwara Eliya (Sinhala: නුවර එළිය [nuwərə ɛlijə]; Tamil: நுவரெலியா) is a city in the hill country of the Central Province, Sri Lanka. Its name means "city on the plain (table land)" or "city of light". 
       The city is the administrative capital of Nuwara Eliya District, with a picturesque landscape and temperate climate. It is at an altitude of 1,868 m (6,128 ft) and is considered to be the most important location for tea production in Sri Lanka.
       The city is overlooked by Pidurutalagala, the tallest mountain in Sri Lanka. Nuwara Eliya is known for its temperate, cool climate – the coolest area in Sri Lanka.
       </div>
       
   </div>

   <h1>02.Horton Plains National Park</h1>
    <br></br>

<div className="Sigiriya">
       

       <img className="Picture" src='Package3/location/horton-plains2.jpg' alt="" width="260" height="220"></img>
       <div>
       <IconButton color="secondary" aria-label="add to favorite">
       <FavoriteIcon />
      </IconButton>
       </div>

       <div className="Sigiriya-des">
       Horton Plains National Park (Sinhala: හෝර්ටන් තැන්න ජාතික උද්‍යානය Hortan Thanna Jathika Udyanaya) is a national park in the central highlands of Sri Lanka that was designated in 1988. It is located at an elevation of 2,100–2,300 m (6,900–7,500 ft) and encompasses montane grassland and cloud forest. It is rich in biodiversity and many species found here are endemic to the region. It is also a popular tourist destination and is situated 8 kilometres (5.0 mi) from Ohiya, 6 kilometres (3.7 mi) from the world-famous Ohiya Gap/Dondra Watch and 32 kilometres (20 mi) from Nuwara Eliya.

The Horton Plains are the headwaters of three major Sri Lankan rivers, the Mahaweli, Kelani, and Walawe. In Sinhala the plains are known as Maha Eliya Plains (මහ එළිය තැන්න). Stone tools dating back to Balangoda culture have been found here. The plains' vegetation is grasslands interspersed with montane forest and includes many endemic woody plants. Large herds of Sri Lankan sambar deer feature as typical mammals and the park is also an Important Bird Area with many species not only endemic to Sri Lanka but restricted to the Horton Plains. Forest dieback is one of the major threats to the park and some studies suggest that it is caused by a natural phenomenon.

The sheer precipice of World's End and Baker's Falls are among the tourist attractions of the park.

In 20th century there are some records of elephants again in the park.
       </div>
       
   </div>
   <br></br>
   <br></br>

   <h1>03.Rawana Falls</h1>
    <br></br>

<div className="Sigiriya">
       

       <img className="Picture" src='Package3/location/ravana-ella2.jpg' alt="" width="250" height="270"></img>
       <div>
       <IconButton color="secondary" aria-label="add to favorite">
       <FavoriteIcon />
      </IconButton>
       </div>

       <div className="Sigiriya-des">
       Ravana Falls (popularly known as Ravana Alla රාවණා ඇල්ල in Sinhala) is a popular sightseeing attraction in Sri Lanka. It currently ranks as one of the widest falls in the country.

This waterfall measures approximately 25 m (82 ft) in height and cascades from an oval-shaped concave rock outcrop. During the local wet season, the waterfall turns into what is said to resemble an areca flower with withering petals. 
But this is not the case in the dry season, where the flow of water reduces dramatically. 
The falls form part of the Ravana Ella Wildlife Sanctuary, and is located 6 km (3.7 mi) away from the local railway station at Ella.[2]
       </div>
       
   </div>

   <h1>04.Yala National Park Safari</h1>
    <br></br>

<div className="Sigiriya">
       

       <img className="Picture" src='Package3/location/yala1.jpg' alt="" width="260" height="220"></img>
       <div>
       <IconButton color="secondary" aria-label="add to favorite">
       <FavoriteIcon />
      </IconButton>
       </div>

       <div className="Sigiriya-des">
       Yala (යාල) National Park is the most visited and second largest national park in Sri Lanka, bordering the Indian Ocean. The park consists of five blocks, two of which are now open to the public, and also adjoining parks. The blocks have individual names such as, Ruhuna National Park (Block 1), and Kumana National Park or 'Yala East' for the adjoining area. It is situated in the southeast region of the country, and lies in Southern Province and Uva Province. The park covers 979 square kilometres (378 sq mi) and is located about 300 kilometres (190 mi) from Colombo. Yala was designated as a wildlife sanctuary in 1900, and, along with Wilpattu was one of the first two national parks in Sri Lanka, having been designated in 1938. The park is best known for its variety of wild animals. It is important for the conservation of Sri Lankan elephants, Sri Lankan leopards and aquatic birds.

There are six national parks and three wildlife sanctuaries in the vicinity of Yala. Among the largest is Lunugamvehera National Park. The park is situated in the dry semi-arid climatic region and rain is received mainly during the northeast monsoon. Yala hosts a variety of ecosystems ranging from moist monsoon forests to freshwater and marine wetlands. It is one of the 70 Important Bird Areas (IBAs) in Sri Lanka. Yala harbours 215 bird species including six endemic species of Sri Lanka. The number of mammals that has been recorded from the park is 44, and it has one of the highest leopard densities in the world.

The area around Yala has hosted several ancient civilizations. Two important pilgrim sites, Sithulpahuwa and Magul Vihara, are situated within the park. The 2004 Indian Ocean tsunami caused severe damage on the Yala National Park and 250 people died in its vicinity. The number of visitors has been on the rise since 2009, after the security situation in the park improved.
       </div>
       
   </div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>

   <h1>05.Hummanaya</h1>
    <br></br>

<div className="Sigiriya">
       

       <img className="Picture" src='Package3/location/hummanaya2.jpg' alt="" width="260" height="220"></img>
       <div>
       <IconButton color="secondary" aria-label="add to favorite">
       <FavoriteIcon />
      </IconButton>
       </div>

       <div className="Sigiriya-des">
       Hummanaya Blowhole is the only known blowhole in Sri Lanka and it is considered to be the second largest blowhole in the world.
       [1] Hummanaya (Sinhala: හුම්මානය = හූ+මානය) refers to the noise, "hoo", that can be heard a distance away when the blowhole is active.[2]
       </div>
       
   </div>
   <br></br>

   <h1>06.Galle Dutch Fort</h1>
    <br></br>

<div className="Sigiriya">
       

       <img className="Picture" src='Package3/location/Galle-Fort2.jpg' alt="" width="260" height="220"></img>
       <div>
       <IconButton color="secondary" aria-label="add to favorite">
       <FavoriteIcon />
      </IconButton>
       </div>

       <div className="Sigiriya-des">
       Galle Fort (Sinhala: ගාලු කොටුව Galu Kotuwa; Tamil: காலிக் கோட்டை, romanized: Kālik Kōṭṭai), in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards. It is a historical, archaeological and architectural heritage monument, which even after more than 432 years maintains a polished appearance, due to extensive reconstruction work done by Archaeological Department of Sri Lanka.[1]

The fort has a colourful history, and today has a multi-ethnic and multi-religious population.[2][3][4] The Sri Lankan government and many Dutch people who still own some of the properties inside the fort are looking at making this one of the modern wonders of the world.[4][5] The heritage value of the fort has been recognized by the UNESCO and the site has been inscribed as a cultural heritage UNESCO World Heritage Site under criteria iv, for its unique exposition of "an urban ensemble which illustrates the interaction of European architecture and South Asian traditions from the 16th to the 19th centuries."[3]

The Galle Fort, also known as the Dutch Fort or the "Ramparts of Galle", withstood the Boxing Day tsunami which damaged part of coastal area Galle town. It has been since restored.[2]
       </div>
       
   </div>
        </div>
    );
}