import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import UsersContainer from "../UsersContainer/UsersContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <UsersContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
