import { MouseEvent } from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { HeadCell, Order, Product } from '../../types';


interface EnhancedTableProps {
    order: Order;
    orderBy: keyof Product;
    rowCount: number;
    onRequestSort: (event: MouseEvent<unknown>, property: keyof Product) => void;
}

const headCells: readonly HeadCell[] = [
    { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'count', numeric: true, disablePadding: false, label: 'Count' },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
    { id: 'discount', numeric: true, disablePadding: false, label: 'Discount (%)' },
    { id: 'actions', numeric: false, disablePadding: false, label: '' }
];

export function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property: keyof Product | 'actions') => (event: MouseEvent<unknown>) => {
        if (property !== 'actions') {
            onRequestSort(event, property);
        }
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => headCell.id !== 'id' && (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.id !== 'actions' ? (
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        ) : (
                            headCell.label
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}