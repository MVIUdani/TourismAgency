import React from 'react';
import '../../css/customer/favourite_list.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function FavouriteList(){
    return(
        <div className='favorite-container'>
            <br></br>
            <br></br>
        <h1 style={{fontFamily:"Helvetica Neue"}}>My Favourite Locations in Sri Lanka</h1>
        <br></br>
        <h2 style={{marginLeft:"45px"}}>Sigiriya</h2>
    <br></br>
    <div className="Sigiriya">
       

        <img className="Picture" src='sigiriya.jpg' alt="" width="260" height="220"></img>
      <div>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      </div>

        <div className="Sigiriya-des">

        Sigiriya or Sinhagiri (Lion Rock Sinhala: සීගිරිය, Tamil: சிகிரியா/சிங்ககிரி, pronounced see-gi-ri-yə) is an ancient rock fortress located in the northern Matale District near the town of  Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock around 180 metres (590 ft) high.[2]

According to the ancient Sri Lankan chronicle the Culavamsa, this site was selected by King Kashyapa (477 – 495 AD) for his new capital. He built his palace on the top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure — Sīnhāgiri, the Lion Rock (an etymology similar to Sinhapura, the Sanskrit name of Singapore, the Lion City).

The capital and the royal palace were abandoned after the king's death. It was used as a Buddhist monastery until the 14th century.[3] Sigiriya today is a UNESCO listed World Heritage Site. It is one of the best preserved examples of ancient urban planning. 
        </div>
        
    </div>

    <h2 style={{marginLeft:"45px"}}>Polonnaruwa</h2>
    <br></br>
    <div className="Sigiriya"> 
    <img className="Picture" src='polonnaruwa.jpg' alt="" width="260" height="220"></img>
    <div>
    <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
        </div>

      <div className="Sigiriya-des">
      Poḷonnaruwa (Sinhala: පොළොන්නරුව, romanized: Poḷonnaruva; Tamil: பொலன்னறுவ, romanized: Polaṉṉaṟuvai) is the main town of Polonnaruwa District in North Central Province, Sri Lanka. Kaduruwela area is the Polonnaruwa New Town and the other part of Polonnaruwa remains as the royal ancient city of the Kingdom of Polonnaruwa.

The second most ancient of Sri Lanka's kingdoms, Polonnaruwa was first established by the Chola dynasty after their successful invasion of the country's then capital, Anuradhapura, in the 10th century. The Ancient City of Polonnaruwa has been declared a World Heritage Site.[1]

Currently the new Polonnaruwa is undergoing a major development project known as the "Awakening of Polonnaruwa" under the concept of former President Maithripala Sirisena. It envisions the development of all sectors in Polonnaruwa including roads, electricity, agriculture, education, health and environment will be developed comprehensively.

    </div>
</div>

        </div>

        

    );
}

export default FavouriteList;