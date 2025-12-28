
import './App.css'
import './products.css'
import Products from './products'
function App() {
  let style={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"flex-start",
    padding:"20px",
    minHeight:"100vh",
    background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    gap:"10px"
  }
  return (
    <>
    <h4 style={{
      textAlign:"center",
      fontSize:"32px",
      fontWeight:"700",
      color:"white",
      margin:"0 0 30px 0",
      textShadow:"0 4px 8px rgba(0,0,0,0.3)",
      background:"linear-gradient(45deg, #ff6b6b, #4ecdc4)",
      WebkitBackgroundClip:"text",
      WebkitTextFillColor:"transparent",
      backgroundClip:"text"
    }}>BlockBaster Deals || Shop Now</h4>
    <div style={style}> 
      <Products title="logitech MX Master" idx={0}/>
      <Products  title="Apple pencil (2nd Gen)" idx={1}/>
      <Products  title="Zebronic Zeb-transformer" idx={2}/>
      <Products title="Petronics Toad 23" idx={3}/>
    </div>
    </>
  )
}

export default App
