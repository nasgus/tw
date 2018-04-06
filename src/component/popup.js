import React from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import {withStyles} from "material-ui/styles/index";
import List from './list'
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import RenderTr from './tableRow'

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell)


const styles = {
    openBtn: {
        margin: '15px 43px',
    },
    table: {
        width: 200,
    },
    addButton: {
        background: '#42A5F5'
    },
    root: {
        background: '#E0E0E0'
    },
}

class Popup extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            arrList: [],
            resultArr: []
        };
        this.addNewList = this.addNewList.bind(this)
        this.saveData = this.saveData.bind(this)
        this.cancel = this.cancel.bind(this)

    }

    handleClickOpen = () => {
        this.setState({
            open: true,
            arrList: []
        });
    };

    handleClose = () => {
        this.setState({open: false});
    };

    addNewList(e) {
        let arr = this.state.arrList;
        arr.push(<List key={arr.length} id={arr.length}/>)
        this.setState({
            arrList: arr
        })
    }

    saveData() {
        let inputs = document.querySelectorAll('input')
        let arrValue = [];
        let doubleArr = [];
        let result = [];
        inputs.forEach((item) => {arrValue.push(item.value)})

        for(let i = 0; i < inputs.length / 2 ; i++) {
            let arr = []
            arr = arrValue.splice(0, 2);
            doubleArr.push(arr)
        }
        doubleArr.forEach((item) => {

            let arr = [<RenderTr product={item[0]} amount={item[1]} key={doubleArr.length}/>]
            result.push(arr)
        });

        this.setState({
            resultArr: result,
            open: false
        })
    }

    cancel() {
        this.setState({
            arrList: [],
            resultArr: []
        })
        this.handleClose()
    }

    render() {
        const {classes} = this.props;
        const {arrList, resultArr} = this.state
        return (
            <div>
                <Button className={classes.openBtn} variant="raised" color="secondary" onClick={this.handleClickOpen}>Open popup</Button>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Product</CustomTableCell>
                            <CustomTableCell numeric>Amount</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {resultArr}
                    </TableBody>
                </Table>
                <Dialog
                    disableBackdropClick
                    open={this.state.open}
                    onClose={this.handleClose}>

                    <DialogTitle className={classes.root} id="alert-dialog-title">
                        Структура номеров
                        <IconButton aria-label="Delete">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                            </svg>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <ul>
                            {arrList}
                        </ul>
                        <Button onClick={this.addNewList} color="primary" size='small' className={classes.button}>
                            Add
                        </Button>
                    </DialogContent>

                    <DialogActions>
                        <Button variant='raised' onClick={this.saveData} color="primary">
                            Save
                        </Button>
                        <Button onClick={this.cancel} color="primary" autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(Popup);
