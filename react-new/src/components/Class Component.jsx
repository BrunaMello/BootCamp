import React, {useState} from "react";

//using classes

// class ClassComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         };
//         this.increase = this.increase.bind(this);
//     }
//
//     increase() {
//         this.setState({count: this.state.count + 1 });
//     }
// }

function ClassComponent() {

    //using Hooks
    const [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1);
    }


    return <div>
        {/*using classes*/}
        {/*<h1>{this.state.count}</h1>*/}
        {/*<button onClick={this.increase}>Increase Button</button>*/}

        {/*using hooks*/}
        <h1>Hooks instead Classes {count}</h1>
        <button onClick={increase}>Increase Hooks</button>

    </div>
}

export default ClassComponent