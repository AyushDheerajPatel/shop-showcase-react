import Price from "./price"
import "./products.css"

export default  function Products({title,idx}){
    let oldPrice=["12,495","11,900","1,599","599"];
    let newPrice=["8,999","9,900","899","399"];
    let desc=[["Wireless Mouse with battery life of 1 year", "5 Programmable Buttons "],["Pencil designed for iPad","designed for ipad pro"],["Transformer into Tablet","intuitive surface"],["Toad 23 is a wireless mouse","optical orientation"]];
    return (
        <div className="Product">
            <div>
                <h2>{title}</h2>
                <p>{desc[idx][0]}</p>
                <p>{desc[idx][1]}</p>
            </div>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
} 