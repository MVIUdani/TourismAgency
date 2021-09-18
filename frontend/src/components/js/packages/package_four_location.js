import React, { useState,useEffect } from "react";
import '../../css/package-location.css';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Package_four_location() {

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
        Axios.post("http://localhost:5000/addFavouriteP4",{
            user_id: {user_id},
        }).then((response) => {
            console.log(response);
          });
    } ;

        return (    

            <div className="Locations">
        <br></br>
<Link to='/maps'><h5 style={{color:"#fff",marginLeft:"40px"}}>Get Map of locations</h5></Link>
    <h1>01.Galle Fort</h1>
    <br></br>
    <div className="Sigiriya">
       

        <img className="Picture" src='Package4/gallefort.jpg' alt="" width="260" height="220"></img>
        <div>
        <IconButton color="secondary" aria-label="add to favorite">
        <FavoriteIcon onClick={addFavourite}/>
       </IconButton>
        </div>

        <div className="Sigiriya-des">

        Galle Fort (Sinhala: ගාලු කොටුව Galu Kotuwa; Tamil: காலிக் கோட்டை, romanized: Kālik Kōṭṭai), in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards. It is a historical, archaeological and architectural heritage monument, which even after more than 432 years maintains a polished appearance, due to extensive reconstruction work done by Archaeological Department of Sri Lanka.[1]

The fort has a colourful history, and today has a multi-ethnic and multi-religious population.[2][3][4] The Sri Lankan government and many Dutch people who still own some of the properties inside the fort are looking at making this one of the modern wonders of the world.[4][5] The heritage value of the fort has been recognized by the UNESCO and the site has been inscribed as a cultural heritage UNESCO World Heritage Site under criteria iv, for its unique exposition of "an urban ensemble which illustrates the interaction of European architecture and South Asian traditions from the 16th to the 19th centuries."[3]

The Galle Fort, also known as the Dutch Fort or the "Ramparts of Galle", withstood the Boxing Day tsunami which damaged part of coastal area Galle town. It has been since restored.

        </div>
        
    </div>

    <h1>02.Rumassala/Unawatuna</h1>
    <br></br>
    <div className="Sigiriya"> 
    <img className="Picture" src='Package4/rumassala_2.jpg' alt="" width="260" height="220"></img>
    <div>
        <IconButton color="secondary" aria-label="add to favorite">
        <FavoriteIcon />
       </IconButton>
        </div>

      <div className="Sigiriya-des">
      The description of the beach paradises in Valmiki's epic Ramayana sounds like Unawatuna.

"a seashore dotted with thousands of trees, coconuts, and palms dominating, strings of houses and hermitages along the coastline, human beings and superior beings such as Gandharvas, Siddhas, and ascetics, living in them and countless bejewelled celestial nymphs thronging the shore, the coast intermittently visited by heavenly beings, Gods and demons.":
Unawatuna traces its roots to the great epic Ramayana. In the epic, the monkey-warrior Hanuman was sent back to India to fetch the four medicinal herbs by Jambavan namely, mritasanjeevani, vishalyakarani, suvarnakarani, and sandhani from the Himalayas in order to heal Lakshman who was wounded trying to save the abducted Princess Sita from the demon king Ravana. Hanuman failed to identify these herbs, so he lifted the entire mountain and carried it to the battlefield to try to save Lakshman, but in the process, a chunk of it "fell-down" in the location of the present day Unawatuna, the name of the village derives from "Una-watuna" meaning "fell down".

Currently, an edifice is being built in honour of Hanuman on the harbour end of Rumassala Hill by Japanese monks of the Mahayana sect of Buddhism near the Peace Pagoda that they built.
    </div>


</div>
<h1>03.Jungle Beach</h1>
    <br></br>
<div className="Sigiriya">
       

        <img className="Picture" src='Package4/jungle_beach.jpg' alt="" width="265" height="220"></img>
        <div>
        <IconButton color="secondary" aria-label="add to favorite">
        <FavoriteIcon />
       </IconButton>
        </div>

        <div className="Sigiriya-des">
    
        The description of the beach paradises in Valmiki's epic Ramayana sounds like Unawatuna.

"a seashore dotted with thousands of trees, coconuts, and palms dominating, strings of houses and hermitages along the coastline, human beings and superior beings such as Gandharvas, Siddhas, and ascetics, living in them and countless bejewelled celestial nymphs thronging the shore, the coast intermittently visited by heavenly beings, Gods and demons.":
Unawatuna traces its roots to the great epic Ramayana. In the epic, the monkey-warrior Hanuman was sent back to India to fetch the four medicinal herbs by Jambavan namely, mritasanjeevani, vishalyakarani, suvarnakarani, and sandhani from the Himalayas in order to heal Lakshman who was wounded trying to save the abducted Princess Sita from the demon king Ravana. Hanuman failed to identify these herbs, so he lifted the entire mountain and carried it to the battlefield to try to save Lakshman, but in the process, a chunk of it "fell-down" in the location of the present day Unawatuna, the name of the village derives from "Una-watuna" meaning "fell down".

Currently, an edifice is being built in honour of Hanuman on the harbour end of Rumassala Hill by Japanese monks of the Mahayana sect of Buddhism near the Peace Pagoda that they built.

        </div>
</div>
<br></br><br></br>
<h1>04.Hikkaduwa coral garden</h1>
    <br></br>

<div className="Sigiriya">
       

        <img className="Picture" src='Package4/hikkaduwa-coral-reef.jpg' alt="" width="270" height="200"></img>
        <div>
        <IconButton color="secondary" aria-label="add to favorite">
        <FavoriteIcon />
       </IconButton>
        </div>

        <div className="Sigiriya-des">
            <br></br>
            Hikkaduwa National Park is one of the three marine national parks in Sri Lanka. The national park contains a fringing coral reef of high degree of biodiversity. The area was declared a wildlife sanctuary on May 18, 1979, and then on August 14, 1988, upgraded to a nature reserve with extended land area.[1] The growth of the number of visitors in the next 25 years increased the degradation of the coral reef. To reduce the effects to the ecosystem, the reef was declared a national park on September 19, 2002
            Hikkaduwa coral reef is a typical shallow fringing reef with an average depth of around 5 metres (16 ft).[2] The coral reef reduces the coastal erosion and forms a natural breakwater.[1] The coast of the national park extends four km. Generally the coast is narrow, ranging from 5–50 m according to the climatic conditions of the year. Scuba diving is a popular recreation here.
        </div>

</div>

<h1>05.Hambantota national port and city</h1>
    <br></br>
<div className="Sigiriya">
      

        <img className="Picture" src='Package4/port.jpg' alt="" width="265" height="250"></img>
        <div>
        <IconButton color="secondary" aria-label="add to favorite">
        <FavoriteIcon />
       </IconButton>
        </div>

        <div className="Sigiriya-des">

        Hambantota (Sinhala: හම්බන්තොට, Tamil: அம்பாந்தோட்டை) is the main town in Hambantota District, Southern Province, Sri Lanka. This underdeveloped area was hit hard by the 2004 Indian Ocean tsunami and is undergoing a number of major development projects including the construction of a new sea port and international airport finished in 2013. These projects and others such as Hambantota Cricket Stadium are said to form part of the government's plan to transform Hambantota into the second major urban hub of Sri Lanka, away from Colombo
        The Hambantota International Port (also known as the Magampura Mahinda Rajapaksa Port or the Magam Ruhunupura Mahinda Rajapaksa Port) is a deep water port in Hambantota, Sri Lanka. It was opened on 18 November 2010, and is Sri Lanka's second largest port, after the Port of Colombo. In 2020, the port handled 1.8 million tonnes of LPG and dry bulk cargo.[3]

Construction of the port commenced in January 2008. In 2016, reported an operating profit of US$1.81 million but was considered economically unviable.[4] As debt repayment got difficult, the newly-elected government decided to privatise an 80% stake of the port to raise foreign exchange in order to repay maturing sovereign bonds unrelated to the port.[5][6] Of the two bidding companies, China Merchants Port was chosen,[5] which was to pay US$1.12 billion to Sri Lanka and spend additional amounts to develop the port into full operation
        </div>

    </div>

<br></br><br></br><br></br><br></br>
<h1>06 Thirukoneswaram Kovil</h1>
    <br></br>
<div className="Sigiriya">
      

        <img className="Picture" src='Package4/trinco-covil.jpg' alt="" width="265" height="230"></img>
        <div>
        <IconButton color="secondary" aria-label="add to favorite">
        <FavoriteIcon />
       </IconButton>
        </div>

        <div className="Sigiriya-des">
        Koneswaram temple of Trincomalee (Tamil: திருக் கோணேச்சரம் கோயில்) or Thirukonamalai Konesar Temple – The Temple of the Thousand Pillars and Dakshina-Then Kailasam is a classical-medieval Hindu temple complex in Trincomalee, a Hindu religious pilgrimage centre in Eastern Province, Sri Lanka. The most sacred of the Pancha Ishwarams of Sri Lanka, it was built significantly during the reign of the early Cholas and the Five Dravidians of the Early Pandyan Kingdom on top of Konesar Malai, a promontory overlooking Trincomalee District, Gokarna bay and the Indian Ocean. Its Pallava, Chola, Pandyan and Jaffna design reflect a continual Tamil Saivite influence in the Vannimai region from the classical period. The monument contains its main shrine to Shiva in the form Kona-Eiswara, shortened to Konesar. Connected at the mouth of the Mahavilli Ganga River to the footprint of Shiva at Sivan Oli Padam Malai at the river's source, the temple symbolically crowns the flow of the Ganges River from Shiva's head of Mount Kailash to his feet.


        </div>


        </div>
        
<h1>07.Nilaveli Uppuveli beach</h1>
    <br></br>
<div className="Sigiriya">
      

        <img className="Picture" src='Package4/beach.jpg' alt="" width="265" height="250"></img>
        <div>
        <IconButton color="secondary" aria-label="add to favorite">
        <FavoriteIcon />
       </IconButton>
        </div>

        <div className="Sigiriya-des">
        Nilaveli (Tamil: நிலாவெளி, romanized: Nilāveḷi; Sinhala: නිල්වැල්ල, romanized: Nilvælla) is a coastal resort town and suburb of the Trincomalee District, Sri Lanka located 16 km northwest of the city of Trincomalee. A historically popular Tamil village and tourist destination of the district alongside the nearby Uppuveli, the numbers of visitors declined following the 2004 Indian Ocean tsunami and Sri Lankan Civil War, but have risen again since 2010. Pigeon Island National Park, one of the two marine national parks of the region is situated 1 km off the coast of Nilaveli, its many species of vegetation, coral and reef fish contributing to Nilaveli's rich biodiversity.
        The 10th century CE Tamil Nilaveli inscriptions mention the Koneswaram temple as having received a land grant in the Tamil country of one thousand seven hundred and ten acres (two hundred and fifty four vèli) of dry and wet land to meet its daily expenses - revealing the temple's role in providing various services to the local community by 900-1000 CE
        </div>

    </div>

<br></br><br></br><br></br><br></br>
        <br></br>


 </div>

        );
}