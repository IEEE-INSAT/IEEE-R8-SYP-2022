import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextBlock from "../../components/TextBlock";
import TwoElementsBlock from "../../components/TwoElementsBlock";
import sponsorshipDossier from "../../assets/images/sponsorshipDossier.png";
import ThemedButton from "../../components/ThemedButton";

export default function Sponsoring(){
    return(
        <div className="sponsoring">
            <Fade>
                <Header title={"SPONSORS"} description=""/>
            </Fade>  
            <TwoElementsBlock>
            <TwoElementsBlock>
                    <TextBlock title="Do you want to be part of SYP?">
                        The IEEE R8 Students and Young Professionals Congress is the largest student event in all of region 8 (Europe, Middle East, Africa). It occurs every two years and gathers both students and young professionals members from all Sections in this Region. Sponsorship helps us bring together this event, a Congress that not only consists of <span className="gras" >social and networking events</span>, but also <span className="gras" >technical events</span>, such as <span className="gras" >workshops</span> and <span className="gras" >talks</span>.
                        If you want to increase awareness for your company, showcase which great products and projects your company is working on, network with other companies from all over the world, acquire new clients or partners,  get direct access to enthusiastic students with leadership qualifications and extracurricular experience or even propose local and international internships and job offers. You&apos;re in the right place ! 
                        If you&apos;re interested in being a part of SYP 2022, find our sponsorship dossier below, feel free to <a href="mailto:r8syp@ieee.org">leave us a message!</a>
                    </TextBlock>
                    <div style={{ display: "flex", flexDirection: "column", padding : "150px", justifyContent: "center", alignItems: "center", height : "100%" }} >
                        <img src={sponsorshipDossier} alt="sponsorshipDossier" width={250} />
                        <a href="/Sponsorship-Dossier.pdf" download><ThemedButton text="DOWNLOAD" color="secondary" width="400px" style={{ marginTop: "50px" }} /></a> 
                    </div>
            </TwoElementsBlock>
            </TwoElementsBlock>
            <Footer/>
        </div>
    );
}
