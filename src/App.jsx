import './App.css'
import Counter from './Counter'
import ScoreKeeper from './ScoreKeeper'
import EmojiAdd from './EmojiAdd'
import ScoreKeep from './ScoreKeep'
// In the Counter function you see a test Case of Counter using State Rendering !

function App() {

  return (
    <>
      <h2 style={{textAlign:"center"}}>State Demo</h2>
      <ScoreKeep x={4} target={5}/>
    </>
  )
}

export default App
