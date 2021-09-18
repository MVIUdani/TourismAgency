import React, { useState,useEffect } from "react";
import '../../css/package-location.css';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


export default function Package_two_location(){

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
    Axios.post("http://localhost:5000/addFavouriteP2",{
        user_id: {user_id},
    }).then((response) => {
        console.log(response);
      });
} ; 

    return ( 

        <div className="Locations">
        <br></br>
<Link to='/package_map_two'><h5 style={{color:"#fff",marginLeft:"40px"}}>Get Map of locations</h5></Link>

<h1>01.Polonnaruwa</h1>
    <br></br>

<div className="Sigiriya">
       

       <img className="Picture" src='Package2/location/polonnaruwa2.jpg' alt="" width="260" height="220"></img>
       <div>
       <IconButton color="secondary" aria-label="add to favorite">
       <FavoriteIcon onClick={addFavourite}/>
      </IconButton>
       </div>

       <div className="Sigiriya-des">
       Poḷonnaruwa (Sinhala: පොළොන්නරුව, romanized: Poḷonnaruva; Tamil: பொலன்னறுவ, romanized: Polaṉṉaṟuvai) is the main town of Polonnaruwa District in North Central Province, Sri Lanka. Kaduruwela area is the Polonnaruwa New Town and the other part of Polonnaruwa remains as the royal ancient city of the Kingdom of Polonnaruwa.

The second most ancient of Sri Lanka's kingdoms, Polonnaruwa was first established by the Chola dynasty after their successful invasion of the country's then capital, Anuradhapura, in the 10th century. The Ancient City of Polonnaruwa has been declared a World Heritage Site.[1]

Currently the new Polonnaruwa is undergoing a major development project known as the "Awakening of Polonnaruwa" under the concept of former President Maithripala Sirisena. It envisions the development of all sectors in Polonnaruwa including roads, electricity, agriculture, education, health and environment will be developed comprehensively.
      
       </div>
       
   </div>

   <h1>02.Bopath Ella Falls</h1>
    <br></br>

<div className="Sigiriya">
       

       <img className="Picture" src='Package2/location/waterfall02.jpg' alt="" width="260" height="220"></img>
       <div>
       <IconButton color="secondary" aria-label="add to favorite">
       <FavoriteIcon />
      </IconButton>
       </div>

       <div className="Sigiriya-des">
       Bopath Ella (Sinhala: බෝපත් ඇල්ල) is a waterfall situated in the Ratnapura District of Sri Lanka. It has a shape very similar to the leaf of the Sacred fig or "Bo" tree, which has earned it this name. The waterfall is a major tourist attraction in the country. Local myths say that it is haunted and that it hides a treasure trove.
       Bopath Ella is located in a village named Agalwatte in Kuruwita in the Ratnapura District of Sri Lanka.
      
       </div>
       
   </div>


   <h1>03.Atamasthana</h1>
    <br></br>

<div className="Sigiriya">
       

       <img className="Picture" src='Package2/location/atamasthanaya2.jpg' alt="" width="280" height="230"></img>
       <div>
       <IconButton color="secondary" aria-label="add to favorite">
       <FavoriteIcon />
      </IconButton>
       </div>

       <div className="Sigiriya-des">
       Atamasthana (අටමස්ථාන) or Eight sacred places are a series of locations in Sri Lanka where the Buddha had visited during his three visits to the country. The sacred places are known as Jaya Sri Maha Bodhiya, Ruwanwelisaya, Thuparamaya, Lovamahapaya, Abhayagiri Dagaba, Jetavanarama, Mirisaveti Stupa and Lankarama. They are situated in Anuradhapura, the capital of the ancient Anuradhapura Kingdom.

The sacred city of Anuradhapura exerted a considerable influence on the development of architecture in the country during several centuries. The city is nominated as a UNESCO World Heritage Site in 1982, it lies 205 km north of the current capital Colombo in island's North Central Province, on the banks of the historic Malvathu Oya.

According to the Mahavansa the sacred city was found around 350 BC by Pandukabhaya, the 1st king of the Anuradhapura kingdom and sixth since the arrival of Vijaya. It eventually become the principal shrines of Buddhism including the branch planted of the sacred fig tree, Bodhi tree from Bodhgaya, under which Siddharta attained spiritual enlightenment and supreme wisdom. The sacred tree brought there in the 3rd century BC during the second mission, led by Sangamitta, a Buddhist nun and daughter of Emperor Ashoka. The relics of Buddha have, moreover, shaped the religious topography of Anuradhapura, where the Thuparamaya was built by Devanampiya Tissa in the 3rd century BC to house the clavicle of Buddha, an important religious relic presented by Emperor Ashoka.[1]

The city's apogee was reached under the reign of Dutthagamani who, in 161 BC, defeated the South Indian invader Ellalan re-establishing Buddhism in the place of Brahminism and endowed the site with extraordinary monuments including the Mirisaveti Stupa, Ruwanwelisaya, and the Brazen Palace. The city flourished for 1,300 years, then was abandoned after an invasion in 993.

       </div>
       
   </div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>

   <h1>04.Kurunegala- Athagala</h1>
    <br></br>

<div className="Sigiriya">
       

       <img className="Picture" src='Package2/location/athugala.jpg' alt="" width="260" height="260"></img>
       <div>
       <IconButton color="secondary" aria-label="add to favorite">
       <FavoriteIcon />
      </IconButton>
       </div>

       <div className="Sigiriya-des">
       Athugala also called as ethagala is a very splendid rock that overlooks the Kurunegala town in Sri Lanka. Athugala is situated just around 1km away from Kurunegala town. The rock gets the name “athugala” due to its shape of an elephant. This is "the" iconic landmark of Kurunegala.


You could select two ways to reach to the top of the rock. Either following the steps in the rock or riding your vehicle to the top. Walk to the top of the rock is little tiring and take around 15-20mins, but you'll forget that by watching around. Sometimes, you can find few monkey groups in the middle of the rock. So, it is always better to watch out your stuff.

As you reach to the top of the rock you could see the temple (Athugala Viharaya) and massive snow white Buddha statue. This temple houses to the huge 88 ft Buddha statue. The great bare rock mountain provides a perfect setting for the Buddha statue. The night view of the Buddha statue from Kurunegala town is simply a breath taking view. Only the snow white Buddha statue can be seen in the sky while the whole surrounding is in dark. It is like the Buddha statue is floating in the sky. It is a worth visit view and these views make the place memorable.If you are to get the perfect view you need to start climbing the rock in the evening. Stay there at the top of the rock till it gets little dark.

The view of Kurunagela city from the top of the rock is panoramic and a treat to the eyes. If you are passing the busy Kurunegala town athugala is a must visit place. Also, if you are to say you visited Kurunegala you need to climb athugala.

       </div>
       
   </div>
   <br></br>
   <br></br>
   <br></br>

   <h1>05.Nallur Kandaswamy Kovil</h1>
    <br></br>

<div className="Sigiriya">
       

       <img className="Picture" src='Package2/location/nallur2.jpg' alt="" width="260" height="220"></img>
       <div>
       <IconButton color="secondary" aria-label="add to favorite">
       <FavoriteIcon />
      </IconButton>
       </div>

       <div className="Sigiriya-des">
       Nallur Kandaswamy Kovil (Tamil: நல்லூர் கந்தசுவாமி கோவில் Sinhala: නල්ලුරුව ස්කන්ධ කුමාර කෝවිල) is a significant Hindu temple, located in Nallur, Northern Province, 
       Sri Lanka.[2] The presiding deity is Lord Murugan in the form of the holy 'Vel' in the Sanctum, the primary shrine, and in other forms, namely, Shanmugar, Muthukumaraswami, Valli Kaanthar with consorts Valli and Deivayanai, and Thandayuthapani, sans consorts in secondary shrines in the temple.[3]
      
       </div>
       
   </div>

        </div>

    );
}