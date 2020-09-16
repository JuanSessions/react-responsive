import React from 'react';
import '../../App.scss';
import Cards from '../Cards';
import MainSection from '../MainSection';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <MainSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;