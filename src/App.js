import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useReducer } from 'react';
import Virtualized from './Virtualized'
import Scroll from './Scroll'
function App() {
  const initData = {
    name: 'zhengdayong'
  }

  // 封装了一些处理方法， 根据从传入的类型更改state
  const reduce = function (state, action) {
    console.log(action, 'App-10')
    switch(action.type) {
      case 'changetodada':
        return {name: 'zhengdada'}
      case 'changtodayong':
        return {name: 'zhengdayong'}
      default:
        return new Error()
    }
  }

  // useReducer 返回 state, dispatch
  const [state, dispatch] = useReducer(reduce, initData)
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/virtualized" element={<Virtualized />} />
    <Route path="/scroll" element={<Scroll />} />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
