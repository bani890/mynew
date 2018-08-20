import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';

class Linestat extends Component{

    constructor(props) {
        super(props);
        this.state = {
            Data: {}
        }
    }
    componentDidMount() {
        fetch('/api/solardata')
        .then(res=>res.json())
            .then(solardata => {
            const info=solardata
                let bills = [];
                let savings = [];

                info.forEach(element => {
                    bills.push(element.bill);
                    savings.push(element.savings);
                });
                this.setState({
                    Data: {
                        labels:bills,
                        datasets: [
                            {
                                label: 'My Chart',
                                data: savings,
                                backgroundColor: [
                                    'rgba(255,105,145,0.6)',
                                    'rgba(155,100,210,0.6)',
                                    'rgba(90,178,255,0.6)',
                                    'rgba(240,134,67,0.6)',
                                    'rgba(120,120,120,0.6)',
                                    'rgba(250,55,197,0.6)'
                                ]
                            }
                        ]
                    }
                });
            })
    }
    render() {
        return (
            <section>
                <div>
                <Bar
                    data={this.state.Data}
                    options={{ maintainAspectRatio: false }}
                    height={300}
                    width={300}
                     />
           </div>
           <div>
            < Line
                data={this.state.Data}
                height={300}
                width={300}
                options={{ maintainAspectRatio: false }}
            />
            </div>
            </section>
        )
    }
}





export default Linestat;