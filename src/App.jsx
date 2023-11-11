import Hero from "./components/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="h-[100svh] snap-center" id="Home">
        <Navbar/>
        <Hero/>
      </div>
      <div className="h-[100svh] snap-center" id="About">
        parallax
      </div>
      <div className="h-[100svh] snap-center" id="Projects">
        services
      </div>
      <div className="h-[100svh] snap-center" id="Contact">
        parallax
      </div>
      <div className="h-[100svh] snap-center">
        portfolio 1
      </div>
      <div className="h-[100svh] snap-center">
        portfolio 2
      </div>
      <div className="h-[100svh] snap-center">
        portfolio 3
      </div>
      <div className="h-[100svh] snap-center" id="footer">
        contact      
      </div>

    </>
  );
};

export default App;
