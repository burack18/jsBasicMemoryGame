import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Card } from './components/Card';

const initArr = [];

const cardCount=20;

for (let i = 0; i < cardCount; i++) {
  initArr.push({ id: i, value: 0 })
}

for (let i = 0; i < cardCount; i++) {
  const num = Math.floor(Math.random() * cardCount + 1)
  while (initArr.filter(x => x.value == num).length < 2) {
    const emptySlots = initArr.filter(x => x.value == 0)
    if (emptySlots.length == 0) {
      break;
    }
    const randomSlot = Math.floor(Math.random() * emptySlots.length + 1);
    const position = initArr.findIndex(x => x.id == emptySlots[randomSlot - 1]?.id);
    initArr[position].value = num
  }
}

function App() {


  const [selecteds,setSelecteds]=useState([]);

  const [data, setData] = useState(initArr)

  const isSelected=(id)=>{
    return selecteds.indexOf(x=>x.id==id)!=-1
  }

  const checkSelecteds=({id,value})=>{
    if(selecteds.length<=2 && selecteds.indexOf(x=>x.id==id)==-1){
        if(selecteds[0]?.value==value &&selecteds[0]?.id!=id)
        {
          setData([...data.filter(x=>x.value!=value)])
          if(data.filter(x=>x.value!=value).length==0){
            alert('Congratulations')
          }
        }
        else if(selecteds[0]?.value==value &&selecteds[0]?.id==id){
          setSelecteds([{}])
        }else{
          setSelecteds([{id,value}])
        }
    }
  }

  return (
    <div className="App"  style={{ display: 'grid',gridTemplateColumns:'auto auto auto auto',justifyContent:'center', width: '600px', margin: 'auto' }}>
      {data.map((card, index) =>
        <div style={{
          border: '1px solid',
          width:  '100px',
          height: '100px'
        }} key={card.id}>
          <Card isSelected={isSelected} selecteds={selecteds} checkSelecteds={checkSelecteds} data={card} />
        </div>)}
    </div>
  );
}

export default App;
