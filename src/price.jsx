export default function Price({oldPrice, newPrice}){
    let oldStyles={
        textDecorationLine:"line-through",
        color:"#666",
        fontSize:"14px",
        marginRight:"8px"
    } ;
    let newStyles = {
        fontWeight:"bold",
        fontSize:"18px",
        backgroundColor:"#4CAF50",
        padding:"4px 8px",
        borderRadius:"6px",
        color:"white"
    };
    let styles= {
        backgroundColor:"#f8f9fa",
        padding:"12px",
        borderBottomLeftRadius:"12px",
        borderBottomRightRadius:"12px",
        marginBottom:"0px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderTop:"1px solid #e0e0e0",
        boxShadow:"0 -2px 4px rgba(0,0,0,0.1)"
   }
    
    return (
    <div style={styles}>
        <span style={oldStyles}>₹{oldPrice}</span>
        <span style={newStyles}>₹{newPrice}</span>
    </div>
    );
}