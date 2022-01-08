function getNum(){    
    return Math.floor(Math.random() * 10) +1;
}
class NumPicker extends React.Component{
    render(){
        const num = getNum();
        let msg;
        if(num === 7){
            msg = 
                <div>
                    <h2>Congrats you got number 7!</h2>
                    <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
                </div>
        } else {
            msg = <h1>Sorry bad luck! :( </h1>
        }

        return(
        <div>
            <h1>Your Number is: {num}</h1>
            {msg}
        </div>
        )
    }
}