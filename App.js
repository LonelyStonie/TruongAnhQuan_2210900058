import './App.css';
import TAQ_classcomps from './components/TAQ_classcomp';
import TAQ_funcDemo from './components/TAQ_funcDemo';

function App() {
  /*khai bao bien doi tuong */ 
  const user = {
    username:"quan",
    password:"030924",
    firstname:"truong",
    lastname:"anhquan"
  }

  //khai bao doi tuong ham
  function formatname(user){
    return <h2>Xin Chao {user.firtsname} {user.lastname} </h2>;
  }
  return (
    <div className="App">
      {/*bieu thuc jsx */}
      <div>
        <p> fullname : {user.firstname} {user.lastname} </p>
        {formatname(user)}
      </div>
    <div>
      <TAQ_funcDemo/>
      {/*su dung func co props */}
      <TAQ_funcDemo username="TAQ" fullname="truong anh quan " age="20"/>
      </div>

    {/*su dung class comps */}
    <div>
      {/*dung khong su dung props */}
      <TAQ_classcomps.js/>
      {/* su dung props */}
      <TAQ_classcomps.js company="fit-ntu - k22cnt3" course="reactjs"/>
    </div>
    </div>
  
  );
}

export default App;
