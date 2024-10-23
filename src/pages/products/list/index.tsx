import { useEffect, useState, useMemo, MouseEvent, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { https } from '../../../services/https';
import { useNavigate } from 'react-router-dom';
import { Order, Product } from '../../../types';
import { EnhancedTableHead } from '../../../components/products';


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
}


function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function ProductList() {
    const navigate = useNavigate()
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof Product>('name');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const [rows, setRows] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        const fetchProducts = async (page: number) => {
            try {
                const res = await https.get(`/products?page=${page + 1}`);
                console.log(res.data);
                setRows(res.data.results);
                setTotalCount(res.data.count);
                setLoading(false);
            } catch (err) {
                alert('Error fetching products');
                setLoading(false);
            }
        };

        fetchProducts(page);
    }, [page]);

    const handleRequestSort = (
        event: MouseEvent<unknown>,
        property: keyof Product
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const visibleRows = useMemo(() => {
        if (loading || rows.length === 0) {
            return [];
        }

        return [...rows].sort(getComparator(order, orderBy));
    }, [order, orderBy, rows, loading]);


    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            rowCount={totalCount}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center">
                                        Loading...
                                    </TableCell>
                                </TableRow>
                            ) : (
                                visibleRows?.map((row) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="right">{row.count}</TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.discount}</TableCell>
                                        <TableCell align="right">
                                            <button className='p-2 bg-blue-600 rounded-lg mr-3' onClick={() => { navigate(`/products/${row.id}`) }}>
                                                <VisibilityIcon className='text-white' fontSize="small" />
                                            </button>
                                            <button className='p-2 bg-red-600 rounded-lg'>
                                                <DeleteIcon className='text-white' fontSize="small" />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[8]}
                    component="div"
                    count={totalCount}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
