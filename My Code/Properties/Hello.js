class Hello extends React.Component {
    render(){
        //console.log(this.props);
        return <h1>{this.props.from} says Hi to {this.props.to} !</h1>
    }
}