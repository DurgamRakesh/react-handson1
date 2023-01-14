
import './App.css';
import './Appstyles.css'
import Funcomponent from './component/Funcomponent';
import Classcomponent from './component/Classcomponent'
import { useState } from 'react';

function App() {
  const [funShow, setshow1] = useState(false);
  const [cShow, setShow2] = useState(false);

  const Clickfun = () => {
      setshow1(!funShow);
  }

  const ClickClass = () => {
    setShow2(!cShow)
  }
  return (
    <div className="container">
       <h2 className='h2tag'>Styling using functional and class components</h2>
            <div className='btns'>
                <button onClick={Clickfun} className="btn">To see styling in functional component</button>
                <button onClick={ClickClass} className="btn">To see styling in class component</button>
            </div>
            <div className='components'>
                <div className="">
                    {funShow ? <Funcomponent/> : ' '}
                </div>
                <div className="">
                    {cShow ? <Classcomponent/> : ' '}
                </div>
            </div>
    </div>
  );
}

export default App;
