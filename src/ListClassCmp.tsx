import React from "react";

class ListClassCmp extends React.Component {
    state = {
        numbers: [1, 2, 3]
    }

    public addRandomNumber = () => {
        const randNumb = Math.round(Math.random() * 10);
        this.setState({
            numbers: [...this.state.numbers, randNumb]
        });
    }

    //when one of those is gona happen render() will be called

    componentDidMount(): void {
        console.log('component did mount');
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        //console.log({ prevProps, prevState, nextProps: this.props, nextState: this.state });
        console.log('Component did update');
    }

    componentWillUnmount(): void {
        // before component will unmount will print this 
        console.log('component did unmount');
    }

    render(): React.ReactNode {
        return (
            <div>
                <ul className="list-group">
                    {this.state.numbers.map((num, index) => <li className="list-group-item" key={index}>{num}</li>)}
                </ul>
                <button onClick={this.addRandomNumber} className="btn btn-warning">add Number</button>
            </div>
        )
    }
}

export default ListClassCmp;