import { useEffect, useState } from "react";
import './index.css'

// 无限向上滚动列表
function Index() {
  const arr = [
    {
      name: 'zdy',
      goods: '飞机'
    },{
      name: 'zdy1',
      goods: '飞机2'
    },{
      name: 'zdy2',
      goods: '飞机4'
    },{
      name: 'zdy3',
      goods: '飞机5'
    }
  ]
  const [index, setIndex] = useState(0)
  const [arrTmp, setArrTmp] = useState([...arr, ...arr])

  useEffect(()=>{
    let tmpIndex
    // 20 是每个元素的高度，这里每隔60ms会增加一定的高度，直到超过列表的总高度，就重置到0开始滚动
    if (index >= (arr.length) * 20) {
      tmpIndex = 0
    } else {
      tmpIndex = index + 1
    }
    setTimeout(() => {
      setIndex(tmpIndex)
    }, 60);
  }, [index])
  

  return (
    <div className="scroll">
      <div className="content">
        <div className="warrper" style={{transform: `translateY(${-index}px)`}}>
        {arrTmp.map((item, index) => {
          return <div key={index} className="everyItemHeight">{item.name}刚刚获得了{item.goods}</div>
        })}
        </div>
       
      </div>
    </div>
  );
}

export default Index;
