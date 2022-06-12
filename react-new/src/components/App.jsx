import '../App.css';
import Card from "./Card";

function App() {
  return (
      <div>
          <Card
              name="Beyonce"
              img="https://e3.365dm.com/18/12/768x432/skynews-beyonce-beyonce-jay-z_4507925.jpg?20181203185757"
              tel="+123 456 789"
              email="b@beyonce.com"
          />

          <Card
              name="Jack Bauer"
              img="https://s.yimg.com/os/creatr-uploaded-images/2021-11/f5f8f1f0-3e3e-11ec-bfee-29cb63bf1393"
              tel="+123 456 789"
              email="jb@jackbauer.com"
          />
      </div>

  );
}

export default App;
