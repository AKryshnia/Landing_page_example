import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoBlock from './components/VideoBlock';
import WorkStages from './components/WorkStages';
import CNCSection from './components/CNCSection';
import GallerySection from './components/GallerySection';
import ContactsSection from './components/ContactsSection';
import Footer from './components/Footer';
import BackToTopButton from "./components/BackToTopButton.tsx";

function App() {
  return (

        <div className="bg-[#242424] flex flex-col min-h-screen font-sans text-gray-100">
          <Header />
          <HeroSection />
          <VideoBlock />
          <WorkStages />
          <CNCSection />
          <GallerySection />
          <ContactsSection />
          <Footer />
          <BackToTopButton />
        </div>

  );
}

export default App;
