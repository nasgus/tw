import React from 'react';
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu';
import { FormControl} from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import NumberFormat from 'react-number-format';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

function maxNum(value, e) {
    e.target.maxLength = 2
}

const styles = {
    button: {
    },
    root: {
        width: 100,
    },
    formControl: {
        margin: 5,
        display: 'inline'

    },
    numField: {
        width: 30,
        marginLeft: 10
    }
}

class List extends React.Component {
    constructor(){
        super();
        this.state = {
            product: '',
            name: '',
            close: true,

        }
        this.delete = this.delete.bind(this)
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    componentWillReceiveProps(props) {

    }

    delete() {
        this.setState({
            close: false
        })
    }

    render() {
        const { classes } = this.props;
        if(!this.state.close) {
            return null;
        }
        return(
            <li id={this.state.id} style={{listStyleType: 'none'}}>
                <form autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <Select value={this.state.product}
                                onChange={this.handleChange}
                                className={classes.root}
                                inputProps={{
                                    name: 'product',
                                    id: 'product-simple',
                                }}>
                            <MenuItem value={'Potato'}>Potato</MenuItem>
                            <MenuItem value={'Tomato'}>Tomato</MenuItem>
                            <MenuItem value={'Egg'}>Egg</MenuItem>
                            <MenuItem value={'Carrot'}>Carrot</MenuItem>
                            <MenuItem value={'Garlic'}>Garlic</MenuItem>
                        </Select>
                    </FormControl>
                    <NumberFormat customInput={TextField} onValueChange={maxNum} className={classes.numField }/>
                    <IconButton className={classes.button} aria-label="Delete" onClick={this.delete}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
                    </IconButton>
                </form>
            </li>
        )
    }
}

export default withStyles(styles)(List)