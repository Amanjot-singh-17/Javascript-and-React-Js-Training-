import logo from './logo.svg';
import './App.css';
import Card from './Card'
import {useState} from 'react';
import Home from './Home'

function App() {
const[count,setCount]=useState(10);
const[image,setImage]=useState("https://media.istockphoto.com/id/1335845017/photo/pink-blooming-lotus-close-up.webp?b=1&s=612x612&w=0&k=20&c=YPaaYHhamEtpDhNfV2cylLzyQqA_IJNy_36PdX_qO9g=");
const IncNum=()=>{
  
  setCount(count+1);
}
const ChnImg=()=>{
  setImage("https://media.istockphoto.com/id/1534040386/photo/an-outdoor-bamboo-gazebo-nestled-amidst-lush-greenery-offering-serene-relaxation-after-a.webp?b=1&s=612x612&w=0&k=20&c=vuWY9Cw4TjBDhJLyMVL20Qm5gddDNQ3UmHATP_s2Xvw=");
}
  const ChnImg1=()=>{
  setImage("https://cdn.pixabay.com/photo/2024/06/22/20/07/ai-generated-8846957_960_720.jpg");
}
const ChnImg2=()=>{
  setImage("https://cdn.pixabay.com/photo/2024/06/23/18/46/dragonfly-8848603_960_720.jpg");
}
const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
    this is my first react application
    <Card></Card>
    <h1> {count}</h1>
    <button onClick={IncNum}>add</button>
    <div><img src={image}/></div>
    <button onClick={ChnImg}>image 1</button>
    <button onClick={ChnImg1}>image 2</button>
    <button onClick={ChnImg2}>image 3</button> 
    <input type="text" value={value} onChange={handleChange} />
      <p>Value: {value}</p>

    </div>
  
  
  );
}

export default App;
