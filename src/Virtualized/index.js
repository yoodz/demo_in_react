import { useEffect, useRef, useState } from "react";
import './index.css'

// 虚拟列表100000条数据的渲染
function Index({ state, dispatch }) {
  const [list, setList] = useState([])
  const [totalListHeight, setTotalListHeight] = useState(0)
  const [visibleData, setVisibleDate] = useState([])
  const listRef = useRef()
  const contentHeight = 300 // 容器高度
  const everyDivHeight = 30 // 每一项的高度
  const visibleCount = contentHeight / everyDivHeight // 视图内可以看到的元素个数

  useEffect(() => {
    // 设置列表的总高度
    setTotalListHeight(list.length * everyDivHeight)
  }, [list])

  useEffect(() => {
    const tmp = []
    for (let index = 0; index < 1000; index++) {
      tmp.push(index)
    }
    setList(tmp)
    setVisibleDate(tmp.slice(0, visibleCount))
  }, [])

  function handlerScroll(e) {
    // listRef.current.scrollTop 列表内容滚动的高度
    // 计算应该从下标为几的数组展示
    // 滚动的时候切分数组放到新的数组里
    const startIndex = Math.ceil(listRef.current.scrollTop / everyDivHeight)
    const visibleList = list.slice(startIndex, startIndex + visibleCount)
    setVisibleDate(visibleList)
  }

  return (
    <div className="virtualized">
      <h1>如何渲染100000条数据</h1>
      <div className="warpper">
      <div className="content" ref={listRef} onScroll={(e) => handlerScroll(e)}>
        {/* 这里设置列表的总高度，用来撑开容器显示滚动条 */}
        <div className="scrollBar" style={{ height: `${totalListHeight}px` }}></div>
        <div className="contentList">
          {visibleData.map(item => {
            return <div key={item} className="everyDiv">{item}</div>
          })}
        </div>
      </div>
      </div>
     
      {visibleData.join(',')}
    </div>
  );
}

export default Index;
