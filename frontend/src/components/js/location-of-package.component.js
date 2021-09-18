import React, { useState,useEffect } from "react";
import '../css/package-location.css'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
/*import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";*/
import Axios from "axios";

function Packagelocation(){

  /*const [open, setOpen] = React.useState(false);
  
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };*/

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
    Axios.post("http://localhost:5000/addFavouriteP1",{
        user_id: {user_id},
    }).then((response) => {
        console.log(response);
      });
} ;   

return(

    <div className="Locations">
        <br></br>
<Link to='/maps'><h5 style={{color:"#fff",marginLeft:"40px"}}>Get Map of locations</h5></Link>
    <h1>01.Sigiriya</h1>
    <br></br>
    <div className="Sigiriya">
       

        <img className="Picture" src='sigiriya.jpg' alt="" width="260" height="220"></img>
        <div>
        <IconButton color="secondary" aria-label="add to favorite">
        <FavoriteIcon onClick={addFavourite}/>
       </IconButton>
        </div>

        <div className="Sigiriya-des">

        Sigiriya or Sinhagiri (Lion Rock Sinhala: සීගිරිය, Tamil: சிகிரியா/சிங்ககிரி, pronounced see-gi-ri-yə) is an ancient rock fortress located in the northern Matale District near the town of  Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock around 180 metres (590 ft) high.[2]

According to the ancient Sri Lankan chronicle the Culavamsa, this site was selected by King Kashyapa (477 – 495 AD) for his new capital. He built his palace on the top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure — Sīnhāgiri, the Lion Rock (an etymology similar to Sinhapura, the Sanskrit name of Singapore, the Lion City).

The capital and the royal palace were abandoned after the king's death. It was used as a Buddhist monastery until the 14th century.[3] Sigiriya today is a UNESCO listed World Heritage Site. It is one of the best preserved examples of ancient urban planning. 
        </div>
        
    </div>

    <h1>02.Polonnaruwa</h1>
    <br></br>
    <div className="Sigiriya"> 
    <img className="Picture" src='polonnaruwa.jpg' alt="" width="260" height="220"></img>
    <div>
        <IconButton color="secondary" aria-label="add to favorite">
        <FavoriteIcon />
       </IconButton>
        </div>

      <div className="Sigiriya-des">
      Poḷonnaruwa (Sinhala: පොළොන්නරුව, romanized: Poḷonnaruva; Tamil: பொலன்னறுவ, romanized: Polaṉṉaṟuvai) is the main town of Polonnaruwa District in North Central Province, Sri Lanka. Kaduruwela area is the Polonnaruwa New Town and the other part of Polonnaruwa remains as the royal ancient city of the Kingdom of Polonnaruwa.

The second most ancient of Sri Lanka's kingdoms, Polonnaruwa was first established by the Chola dynasty after their successful invasion of the country's then capital, Anuradhapura, in the 10th century. The Ancient City of Polonnaruwa has been declared a World Heritage Site.[1]

Currently the new Polonnaruwa is undergoing a major development project known as the "Awakening of Polonnaruwa" under the concept of former President Maithripala Sirisena. It envisions the development of all sectors in Polonnaruwa including roads, electricity, agriculture, education, health and environment will be developed comprehensively.

    </div>


</div>
<h1>03.Horton Plains National Park</h1>
    <br></br>
<div className="Sigiriya">
       

        <img className="Picture" src='hortan.jpg' alt="" width="265" height="220"></img>
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
<br></br><br></br>
<h1>04.Bopath Ella Falls</h1>
    <br></br>

<div className="Sigiriya">
       

        <img className="Picture" src='waterfall02.jpg' alt="" width="270" height="200"></img>
        <div>
        <IconButton color="secondary" aria-label="add to favorite">
        <FavoriteIcon />
       </IconButton>
        </div>

        <div className="Sigiriya-des">
            <br></br>
        Bopath Ella (Sinhala: බෝපත් ඇල්ල) is a waterfall situated in the Ratnapura District of Sri Lanka. It has a shape very similar to the leaf of the Sacred fig or "Bo" tree, which has earned it this name. The waterfall is a major tourist attraction in the country. Local myths say that it is haunted and that it hides a treasure trove.
        Bopath Ella is located in a village named Agalwatte in Kuruwita in the Ratnapura District of Sri Lanka.
        </div>

</div>

<h1>05.Atamasthana</h1>
    <br></br>
<div className="Sigiriya">
      

        <img className="Picture" src='atamasthanaya.jpg' alt="" width="265" height="250"></img>
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

<br></br><br></br><br></br><br></br>
<h1>06.Kurunegala- Athagala</h1>
    <br></br>
<div className="Sigiriya">
      

        <img className="Picture" src='athugala02.jpg' alt="" width="265" height="230"></img>
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


 </div>


);

}
export default Packagelocation;

/*
<Dialog open={open} onClose={handleToClose}>
    
<DialogContent>
  <DialogContentText>
    Are you sure you want to add this place to your favourite list?
  </DialogContentText>
</DialogContent>
<DialogActions>
  <Button onClick={handleToClose} 
          color="primary" autoFocus>
    No
  </Button>
  <Button onClick={addFavourite} 
          color="primary" autoFocus>
    Yes
  </Button>
</DialogActions>
</Dialog>*/