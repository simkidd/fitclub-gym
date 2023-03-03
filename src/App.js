import './App.css'
import Hero from './sections/hero/Hero';
import Join from './sections/join/Join';
import Plans from './sections/plans/Plans';
import Programs from './sections/programs/Programs';
import Reasons from './sections/reasons/Reasons';
import Testimonials from './sections/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
    </div>
  );
}

export default App;