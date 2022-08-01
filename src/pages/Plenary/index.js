import './style.css';
import React from "react";
import Header from "../../components/Header";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import Footer from '../../components/Footer';
import './style.css';

export default function Plenary() {
    return (
        <>
            <Header title={"Plenary"} description={<p>Know more about plenary sessions</p>}/>

            <Fade>
                <p className='information-page-paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut arcu sit amet felis tincidunt aliquet. In leo purus, egestas vel quam ut, sagittis tristique neque. Sed commodo magna magna, in aliquam quam vulputate vitae. Ut ac magna dapibus, pretium justo ut, gravida nisi. Donec pellentesque, libero quis sodales finibus, sapien erat dapibus tellus, tempus cursus velit libero ac est. Curabitur dui sem, tincidunt sed leo quis, cursus luctus leo. Phasellus pretium erat quam, vehicula aliquam quam suscipit et. Suspendisse eu est non ipsum venenatis porttitor. Nam fermentum, lacus pharetra sodales porta, risus orci blandit tortor, quis tincidunt sapien lectus eget ligula. Nam rhoncus magna sed orci convallis tincidunt. Donec erat lectus, molestie eu libero vel, commodo porttitor nisl. Aenean efficitur nibh sit amet ex laoreet consequat.

                    Nunc in porta elit. Praesent a magna in metus viverra malesuada. Donec porttitor suscipit augue, quis aliquet ligula tincidunt id. Praesent malesuada felis sapien, in luctus ex ornare nec. Quisque eget feugiat risus, ut vulputate nisi. Nullam sit amet magna eget turpis scelerisque eleifend. Integer malesuada, nisi non tincidunt lacinia, quam libero malesuada ligula, ut vestibulum diam urna eget diam. Vivamus cursus eros at ligula tincidunt ultricies. Vestibulum imperdiet sem sit amet ipsum dapibus interdum. Integer vestibulum, ex sit amet sollicitudin efficitur, turpis nisi pellentesque neque, ac eleifend justo sem sed eros. Curabitur nec odio vestibulum, pellentesque enim eget, fermentum orci. Pellentesque eu suscipit lacus, sed ullamcorper eros. Proin rhoncus lacus sed lorem accumsan efficitur. Vestibulum id quam vestibulum, rhoncus erat vitae, faucibus sem. Suspendisse non ex euismod, cursus felis eu, finibus diam.

                    Nullam gravida tortor felis, non condimentum magna vestibulum id. Quisque semper massa in erat sollicitudin, sit amet lobortis magna euismod. Morbi et mollis lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ut luctus sapien, eu mattis arcu. Nulla facilisi. Sed sodales ligula vel enim sodales porttitor. Morbi sed rutrum velit, in porta felis. Nulla tempus orci ante, sed tristique arcu mollis in. Mauris tortor velit, molestie placerat lorem eget, tincidunt volutpat neque. Curabitur suscipit leo id pellentesque sagittis.
                </p>
            </Fade>
            <Footer/>
        </>
    );
}