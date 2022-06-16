import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import
{
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import image3 from "./2.png";
import image4 from "./MASKS INDIA WITHOUT BG.png";
import image5 from "./SpendVest (300 × 300 px).png";

function About(){
  return(
    <div>
      <h1>
        About
      </h1>
      <p>
        Born and raised in Chennai, I love being a part of this city. However, I am ready and exicted to move onto the next chapters of my life. 
        Pursued my education from Sishya School and my journey there was nothing short of incredible, filled with learning and growth in multiple dimensions. School life was filled with sports, academics and a lot more. I am a sports enthusiast and love playing football, basketball, tennis and more. Going from being an average student to a prefect, director of the Rotary Club and engaging in a ton of activities was a wonderful journey for me. 
        After Sishya, I went on to pursue engineering at SSNCE in Chennai. A very prestigious organization, found a ton of great friends and learning more from them everyday. My life at SSNCE was interruped by the nationwide lockdown due to the dreaded pandemic. I hate being idle, this nature of mine pushed me to start interning at various organisations and even starting something myself.
        I engaged in multiple activities during the pandemic and found that my interests lie in the fields of finance and business and I would like to continue my journey in those fields.
        I have founded 2 companies during the lockdown and interned at over 8 companies to understand the market well and upskill myself, indeed a very enriching journey.
      </p>


      <ul id="companies">
       The Companies I am working on now are:<br></br>
       <br></br><li id="sv"> SpendVest </li>
          <p> We at SpendVest want to revolutionize the fintech industry and change how people use their invested funds. 
            We aim to eliminate the multistep process involved in selling and using your assets and reinvesting in them at a later point. 
            We believe that investments should serve both short term and long-term purposes and should be available quick, efficiently and safely for investors to use. 
            Currently we are in the ideation phase and charting out our plan to bring this to all users in the near future. 
            We have a team of student professionals working to ensure the success of our product.  
        </p>
        <img src={image5} height="300px" width="250px" />
       
        <li id="od"> OneDrop India </li>
          <p> OneDrop is a customized clothing company founded by my friend Yuvan Arvind and me. 
          OneDrop makes premium tees, polos, hoodies and jackets, high quality ones only. OneDrop goes the extra mile to deliver every product to you individually, be it 1 tee, or 500 tees. Order merch for your whole organization and everyone gets their customized product delivered right at their doorstep! That’s our USP.
        OneDrop was founded in October 2020 during the pandemic with the intention to learn more about the startup ecosystem and businesses in general. We grossed 7 digit revenues within the first year of operations, learning and growing as a company more each day. 
        OneDrop has catered to a large number of organisations pan India including popular college clubs from SSN, VIT and companies like PaperFlite, WildWarrior, Red Bull and Sevens Entertainment. 
        At OneDrop, we believe that with the right mindset and desire, everyone can achieve their dreams. 
        </p>
        
        <img src={image3} height="300px" width="250px" />
        <li id="mi">Masks India</li>
          <p>Masks India is a cotton masks business I started in 2020 . 
        The story behind it was to help out the unemployed tailors during the nationwide lockdown by creating work opportunities for them and also filling a gap that existed in the market. 
        There were companies and stores providing cotton masks that were expensive and others that provided cheaper but low-quality ones. We bridged the gap by selling high quality masks at affordable prices. We were able to do this because of our inhouse mask manufacturing process- we got the masks made from scratch and were not mere resellers like a large portion of the market. 
        The business started off with an Instagram page selling masks to the people of Chennai alone, after which we expanded to the rest of the country quite rapidly delivering masks to remote towns in Himachal Pradesh and inner towns of Tamil Nadu. 
        Owing to the national response, we got queries to supply masks for events held abroad as well. We have successfully supplied masks for a couple of events in Singapore and for several households in Australia as well. 
        The first investment into this business was merely 500 rupees that was spent on getting the first batch of 10 masks made, the packaging and the labels that were procured for delivery. From there on, we have seen consistent growth and now supply masks to various stores across the city on a monthly basis. Small businesses with very low investments can help you learn a lot about the business world, always try giving it a shot. 
</p>
        
      </ul>
      <img src={image4} height="250px" width="250px" />
      <footer>Designed by Tushar Shah, developed using React, inline CSS, external CSS and HTML elements
            </footer>
    </div>
  );
}

export default About;