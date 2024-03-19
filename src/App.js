import Navbar from './aakarlanding page/components/Navbar/Navbar';
import Wallpaper from './aakarlanding page/components/wallpaper/Wallpaper';
import Partners from './aakarlanding page/components/Partners-Sponsors/Partners';
import Cards from './aakarlanding page/components/cards/Cards';
import Aboutus from './aakarlanding page/components/Aboutus/aboutus';
import Ourspeaker from './aakarlanding page/components/ourspeakers/ourspeaker';
import Eventschedule from './aakarlanding page/components/event schedule/eventschedule';
import GlimpseEvents from './aakarlanding page/components/glimpseofevents/glimpseEvents';
import Banner from './aakarlanding page/components/banner/banner';
import Footer from './aakarlanding page/components/Footer/footer';
import Location from './aakarlanding page/components/Locationandcontact/Location';
function App() {
  return (
    <div className="">
      <Navbar/>
      <Wallpaper/>
      <Partners/>
      <Cards/>
      <Aboutus/>
      <Ourspeaker/>
      <Eventschedule/>
      <GlimpseEvents/>
      <Banner/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
