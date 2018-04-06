import Table, {TableCell, TableRow} from 'material-ui/Table';
import React from 'react';


class RenderTr extends React.Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }


    componentWillMount() {
        console.log(this.props)
        const product = this.props.product;
        const amount = this.props.amount;
        if(product === '' || amount === '') {
            console.log('open')
            this.setState({
                show: false
            })
        }
    }


    render() {
        if(!this.state.show) {
            return null;
        }

        return (
            <TableRow>
                <TableCell>{this.props.product}</TableCell>
                <TableCell>{this.props.amount}</TableCell>
            </TableRow>
        )
    }
}

export default RenderTr