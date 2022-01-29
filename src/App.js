import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import locationData from "./data.js";

function App() {
  const cards = locationData.map(item => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Header />
      <div className="container">{cards}</div>
      <Footer />
    </div>
  );
}

export default App;
