import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(campany, date, period, fat, carbs) {
    return { campany, date, period, fat, carbs };
}

const rows = [
    createData('프롬투정보통신', '2007. 10 ~ 2012. 03 df', '1~1', '소프트웨어팀 주임연구원', '- 8/16 Bit and Embedded Board Device Driver 개발'),
    createData('삼성전기', '2007. 10 ~ 2012. 03', '2 ~ 2', 37, 4.3),
    createData('솔루엠', '2007. 10 ~ 2012. 03', '3 ~ 3', 24, 6.0),
    createData('웹프라자', '2007. 10 ~ 2012. 03', '4 ~ 4', 67, 4.3),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">재직 기간</StyledTableCell>
                        <StyledTableCell align="center">회사명</StyledTableCell>
                        <StyledTableCell align="center">부서&nbsp;/&nbsp;직급</StyledTableCell>
                        <StyledTableCell align="center">담당 업무</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.campany}>
                            <StyledTableCell component="th" scope="row">
                                {row.date}  &nbsp;
                                {row.period}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.campany}</StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}