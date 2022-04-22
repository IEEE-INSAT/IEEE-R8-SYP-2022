import React from "react";
import CurrencyConverter from "../../components/CurrencyConverter";
import Header from "../../components/Header";
import TwoElementsBlock from "../../components/TwoElementsBlock";
import Footer from "../../components/Footer";
import CurrencyBills from "../../components/CurrencyBills";
import TextBlock from "../../components/TextBlock";
import tunLocation from './../../assets/images/loc-tunisia.png';
import './style.css';
import VideoDisplay from "../../components/VideoDisplay";
import CurvedWaveSection from "../../components/CurvedWaveSection";
import Gallery from "../../components/Gallery";

export default function AboutTn() {
    return (
        <>
                <Header title={"ABOUT TUNISIA"} description="Know more about Tunisia" />
                <div className="infoContainer">
                    <TwoElementsBlock>
                        <TextBlock title="Tunisia - تونس">
                        There’s so much to see and do in each region of Tunisia: a wide variety of landscapes, a coastline spanning 1,250km, studded with islands and archipelagos, a fantastic array of traditions and customs and a rich historical heritage. We are delighted to introduce you to these regions by breaking them down into this video.
                        </TextBlock>
                        <VideoDisplay />
                    </TwoElementsBlock>

                    <TwoElementsBlock direction="reverse">
                        <img className="blockElement" src={tunLocation} />
                        <TextBlock title="From North Africa">
                            <>
                            Tunisia is a vibrant country located in North Africa. It is characterized by the many cultures and civilizations that were established on its land. Tunisia is a true melting pot of  Amazigh, Arab Muslim, Ottoman, Roman, and  Carthage cultures. 

                            </>
                        </TextBlock>
                    </TwoElementsBlock>

                    <TwoElementsBlock>
                        <CurrencyConverter coversionCoef={3.01} />
                        <div className="desktopBills">
                            <CurrencyBills />
                        </div>
                    </TwoElementsBlock>
                </div>
          
            
                <CurvedWaveSection title="Tunisia" content="It has a long coastline spanning 1,250km which makes Tunisia a prime destination for tourists during summer to enjoy its sunny beaches. 
                Tunisia is famous for its historic sites including  eight UNESCO World Heritage Sites(Amphitheatre of El Jem, Archaeological Site of Carthage, Dougga / Thugga, Kairouan, Medina of Sousse, Medina of Tunis, Punic Town of Kerkuane and its Necropolis). Besides its aerobiological and historic sites, Tunisia is famous for its breathtaking touristic places such as Sidi Bou Said, tozeur and Nefta, Tataouine, Gabes and matmata, Tabarka, Djerba, Sbetla
                Tunisia also is famous for her unique and special Meals. Actually Tunisian cuisine has similarities with the Middle Eastern cuisine, and mainly builds on the Northern African Maghreb tradition.
                " />

                <Gallery
                    title="sneak peek from your next destination"
                    description="The culture of Tunisia is mixed due to its long established history of outside influence from people."
                />
           
            <Footer />
        </>
    );
}