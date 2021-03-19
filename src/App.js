import '../src/style/App.css';
import HamBurgerMenu from '../src/components/HamBurgerMenu';

function App() {
  return (
    <div className="App">
      
      <div className="section2">
      
      </div>

      
      <div className="section1">
     
      <HamBurgerMenu />
      <h1>Morella</h1>
      <p>Morella mélységesen művelt volt. Életem merem rátenni: tehetsége magasabb
        rendű volt a közönségesnél - elméjének ereje óriás. Éreztem ezt, és sok dologban
        tanítványa lettem. De hamarosan úgy találtam, hogy pozsonyi nevelése folytán
        azokat a misztikus írásokat rakja elém, egész csomót, amiket általában a korai
        német irodalom puszta salakjának szoktunk tekinteni. Ez volt, el sem tudtam
        képzelni, mi okból, kedvence s állandó tanulmánya - s hogy idő folytán ez lett 
        nekem magamnak is, a példa és szokás egyszerű, de hatékony befolyásának kell tulajdonítani...
      </p>
      <p className="read">READ MORE</p>
      </div>
    </div>
  );
}

export default App;