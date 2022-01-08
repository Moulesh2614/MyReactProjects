// function getMood(){
//     const moods = ['Angry','Happy','Hungry','Silly','Wasted','Quiet'];
//     return moods[Math.floor(Math.random() * moods.length)];
// }

function getNum(){    
    return Math.floor(Math.random() * 10) +1;
}

class JSXDemo extends React.Component {
    // render(){
    //     return(
    //         // <div>
    //         //     <h1>My Image</h1>
    //         //     <img src="https://images.unsplash.com/photo-1629839958207-5400ab5e1e7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
    //         // </div>

    //         //Embedding JavaScript in JSX example 1
    //         // <div>
    //         //     <h1>My number is: {2 * 14+30}</h1>
    //         // </div>

    //         //Embedding JavaScript in JSX example 2
    //         <div>
    //             <h1>My current mood is: {getMood()}</h1>
    //         </div>

    //     );
    // }

}


//Conditionals in JSX
class NumPicker extends React.Component{
    
    // render(){
    //     const num = getNum();

    //     return(
    //     <div>
    //         <h1>Your Number is....{num}</h1>
    //         <p>{num === 7 ? 'Congrats': 'Unlucky'}</p>
    //         {
    //             // the boolean && will check the first condition and if it is false then the
    //             //image will not be rendered thus we need not use ternary operators here.
    //             num === 7  &&
    //              <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
    //         }
    //     </div>
    //     )
    // }

    //another way
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
 
ReactDOM.render(<JSXDemo/>, document.getElementById('root'));

ReactDOM.render(<NumPicker/>, document.getElementById('root'));