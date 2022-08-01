import './App.css';
import Profil from './Profil/Profil';
import image from './photo.jpg'
function App() {

  const greeting =(props)=>{
    alert (`Hello ${props.fullName}`)
  }

  return (
    <div className="App">
      <Profil  fullName="DHIFAOUI MAkREM" profession="FullStack JS Developer" 
      bio="Je suis FullStack Developer, Dynamique, rigoureuse et polyvalente, je tiens à vous assurer de ma motivation" greeting={greeting}>
    <img style={{width:"400px" ,height:"400px"}} src={image} /></Profil>
    </div>
  );
}

export default App;
