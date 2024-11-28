import './App.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Condizione per lo schermo specifico
      if (width <= 1366 && height <= 679) {
        alert("For optimal viewing, please set your browser zoom to 75%.");
      }
    };

    // Controllo iniziale
    checkScreenSize();

    // Aggiunge un listener per aggiornamenti della finestra
    window.addEventListener('resize', checkScreenSize);

    // Cleanup del listener
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      <div className='container'>

        <main className='main'>
          
          <div className="rings">
            <div className="sun"></div>
            <div className="mercury"></div>
          </div>

          <div className="rings-2">
            <div className="venus"></div>
          </div>

          <div className="rings-3">
            <div className="earth">
              <div className="moon"></div>
            </div>
          </div>

          <div className="rings-4">
            <div className="mars"></div>
          </div>

          <div className="rings-5">
            <div className="jupiter"></div>
          </div>

          <div className="rings-6">
            <div className="saturn">
              <div className="ring-saturn"></div>
            </div>
          </div>

          <div className="rings-7">
            <div className="uranus"></div>
          </div>

          <div className="rings-8">
            <div className="neptune"></div>
          </div>

        </main>

      </div>
    </>
  )
}

export default App
