import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  Button,
  CardActions,
  CardContent,
  // Avatar,
  // Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination, ListItem, colors
} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';

import { getInitials } from 'helpers';
import AddIcon from '@material-ui/icons/Add';
import { Link as RouterLink } from 'react-router-dom';
import { CheckBox } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  button: {
    color: colors.blue[800],
    padding: '0px 0px',
    justifyContent: 'flex-start',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 14
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const UsersTable = props => {
  const { className, users, handleSelect, getOrderDetail, ...rest } = props;
  const classes = useStyles();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [ orderNumber, setOrderNumber ] = useState(0);

  const handleSelectAll = event => {
    const { users } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = users.map(user => user.id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  {/*<TableCell padding="checkbox">*/}
                  {/*  <Checkbox*/}
                  {/*    checked={selectedUsers.length === users.length}*/}
                  {/*    color="primary"*/}
                  {/*    indeterminate={*/}
                  {/*      selectedUsers.length > 0 &&*/}
                  {/*      selectedUsers.length < users.length*/}
                  {/*    }*/}
                  {/*    onChange={handleSelectAll}*/}
                  {/*  />*/}
                  {/*</TableCell>*/}
                  <TableCell>Order ID</TableCell>
                  <TableCell>Order Status</TableCell>
                  <TableCell>Recipent</TableCell>
                  <TableCell>Delivery Address</TableCell>
                  <TableCell>Delivery Time</TableCell>
                  <TableCell>Order Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, rowsPerPage).map(user => (
                  <TableRow
                    className={classes.tableRow}
                    // hover = {() => setOrderNumber(orderNumber => orderNumber = user.orderID)}
                    hover
                    // onClick={ () => setOrderNumber(orderNumber => orderNumber + 1) }
                    onClick={ () => handleSelect(user.orderID) }
                    key={user.id}
                    selected={selectedUsers.indexOf(user.id) !== -1}
                  >
                    {/*<TableCell padding="checkbox">*/}
                    {/*  <Checkbox*/}
                    {/*    checked={selectedUsers.indexOf(user.id) !== -1}*/}
                    {/*    color="primary"*/}
                    {/*    onChange={event => handleSelectOne(event, user.id)}*/}
                    {/*    value="true"*/}
                    {/*  />*/}
                    {/*</TableCell>*/}
                    <TableCell>
                      <div className={classes.nameContainer}>
                        {/*<Avatar*/}
                        {/*  className={classes.avatar}*/}
                        {/*  src={user.avatarUrl}*/}
                        {/*>*/}
                        {/*  {getInitials(user.name)}*/}
                        {/*</Avatar>*/}
                        <Typography variant="body1">{user.orderID}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.status}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>
                      {user.address.street}, {user.address.city}
                    </TableCell>
                    <TableCell>{user.deliveryTime ? user.deliveryTime :
                      <Button
                        activeClassName={classes.active}
                        className={classes.button}
                        to={page.href}
                      >
                        Tracking
                      </Button>
                    }
                      {/*<Fab*/}
                      {/*  color="secondary"*/}
                      {/*  variant="extended">*/}
                      {/*  Tracking*/}
                      {/*</Fab>*/}
                    </TableCell>
                    <TableCell>
                      {moment(user.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersTable;
