import { useEffect } from "react";

function Index({state, dispatch}) {
    console.log(dispatch, 'index-6')
    useEffect(()=>{
      dispatch({type:'changetodada'})
    },[])
  return (
    <div className="App">
      {state.name}
    </div>
  );
}

export default Index;
