import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class MainComp extends Component {

    constructor() {
        super();
        
    }
render(){
return (
<div>
        <Jumbotron>
            <h5 className="display-3">Why Solar?</h5>
            <p className="lead">Solar energy is derived from the sun’s radiation. The sun is a powerful energy source, and this energy source can be harnessed by installing solar panels. Did you know that the energy it provides to the Earth for one hour could meet the global energy needs for one year? However, we are able to harness only 0.001 percent of that energy</p>
            <hr className="my-2" />
            <p>Click below to learn more about the statistical analysis.</p>

        </Jumbotron>
</div>
);

}

}
export default MainComp;



