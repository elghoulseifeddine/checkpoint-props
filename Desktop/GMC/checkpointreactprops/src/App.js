
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Profile/Header/Header';
import Student from './Profile/Student/Student';



function App() {
  const datas=[
    {FullName: "Seifeddine Elghoul", age: "Age: 28", Profession: "Profession: Web developer"},
    {FullName: "Med Ali BenNasr", age: "Age: 30", Profession: "Profession: Web developer"},
    {FullName: "Ghassen Mo", age: "Age: 28", Profession: "Profession: Buisness Developer"},
    {FullName: "Rabi Bouden", age: "Age: 56", Profession: "Profession: Wiiiiiw"},
    {FullName: "Hamza Bouchnak", age: "Age: 33", Profession: "Profession: Realisateur"},
    {FullName: "Weld Aouatef", age: "Age: 3", Profession: "Profession: Artist"},
    {FullName: "Leonel Messi", age: "Age: 35", Profession: "Profession: Plombier"},
    { },
    {FullName: "Samir Pesiron", age: "Age: 40", Profession: "Profession: Kadhaia"}
  ]
  return (
    <div className="App">
     <Header />
     <Student data={datas} />
    </div>
  );
}

export default App;
