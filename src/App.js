import Firstcomp from "./prop/Firstcomp"
import Secondcomp from "./prop/Secondcomp"
import Thirdcomp from "./prop/Thirdcomp"
import Fourthcomp from "./prop/Fourthcomp"
import './App.css';

function app() {
  const user={
    name:"teja",
    age:21,
    city:"hyd",
  };
  return (
    <div>
      <Firstcomp name={user.name}/>
      <Secondcomp name="ravi" />
      <Thirdcomp name="lavi" />
      <Fourthcomp name="sai" />
    </div>
  )
}

export default app