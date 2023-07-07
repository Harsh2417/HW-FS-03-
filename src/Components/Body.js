import { AiTwotoneInfoCircle } from 'react-icons/ai';
function Body(){
    return(
        <div>
            <div style={{backgroundColor:"#ECE6E1",height:"240px",display:"flex"}}>
                <div style={{width:"50%",marginLeft:"5%",padding:"25px 0"}}>
                    <h1 style={{fontSize:"35px"}}>Header Footer</h1>
                    <p style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, adipisci!Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, adipisci! </p>
                   <div style={{fontSize:"25px",margin:"30px 30px",color:"#F0740F"}}><AiTwotoneInfoCircle/>
                    <AiTwotoneInfoCircle/></div> 
                </div>
                <div >
                    <img src="https://static.toiimg.com/photo/59054761.cms"style={{height:"200px",width:"340px",padding:"20px"}} />
                </div>
            </div>
        </div>
    )
}
export default Body