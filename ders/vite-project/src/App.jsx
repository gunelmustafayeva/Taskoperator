import { useEffect, useState } from 'react'
import './App.css'
import { fetchClients } from './components/fetchClients'
import ClientCard from './components/ClientCard';

function App() {
  const [state, setState] = useState(null)
  useEffect(()=>{
    fetchClients().then((client)=>{
      setState(client);
    });
  },[]);
  return (
    <>
    {
      // state !== null ? <ClientCard name={state.name} phone={state.phone} card={state.card}/> : null
      <ClientCard {...state} />
      
    }
    </>
  )
}

export default App
