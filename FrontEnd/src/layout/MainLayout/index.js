import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function MainLayout({ children }) {
    return ( 
        <>
            <Navbar />
                {children}
            <Footer />
        </>
     );
}

export default MainLayout;