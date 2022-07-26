import React from 'react';
import '../Sponsoring/sponsoring.css'; //the page style is the same as sponsorship's page style
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from 'react-reveal/Fade';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sponsors, { SponsorItem } from '../../components/Sponsors';
import partnersList from '../../data/sponsors and partners/partners.json';

export default function PartnersPage() {
    return (
        <div className="sponsoring">
            <Header title={'IEEE PARTNERS'} description={<p>Meet our partners</p>} />
            <Fade>
                <Sponsors items={partnersList as SponsorItem[]} types={['Society']} />
            </Fade>
            <Footer />
        </div>
    );
}
