import Image  from "./Image";

function DogCard(props){
    let title = "hello world"
    return(
        
        < >
            <h2 style={{fontSize:'10px',color:'red'}}>{title}</h2>
            <h3 src= {props.name} />
            <Image src= {props.image} />
            
        </>
    )
}
export default DogCard;