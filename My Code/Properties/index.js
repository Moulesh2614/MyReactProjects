class App extends React.Component {
    render(){
        return(
            <div>
            <Hello to="Moulesh" from="Jef"/>
            <Hello to="Jef" from="Bezoz"/>
            </div>
        )
        
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));