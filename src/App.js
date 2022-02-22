import soup from "./assets/soup.jpg"
import './App.css';
import NavComponent from './components/NavComponent';
import UserInfo from './profile/profile component/UserInfo';
import Img from "./profile/profile component/Img";




function App() {

  const UserImg= [
  {
    id:1,
    imgSrc: soup ,
  }
  ]
  return (
    <div className="App">
      <NavComponent />
      <UserInfo name="Dante-666" bio="Autistic Retard with ADHD" profession="WebDev(Full stack JS) Student" comment="mzalt 5dma ne9sa chnt3da ll coure w nkml b3d" />
      
    </div>
  );
}

export default App;
