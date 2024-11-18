import { useState } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TableSortLabel, TablePagination } from "@mui/material";
import { Container, Box } from "@mui/system";

function HomePage() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: ''
  });
  const [editForm, setEditForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: ''
  });
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, form]);
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      jobTitle: ''
    });
    setOpenAdd(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedContacts = contacts.map((contact, index) => 
      index === editIndex ? editForm : contact
    );
    setContacts(updatedContacts);
    setEditForm({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      jobTitle: ''
    });
    setOpenEdit(false);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  const handleEdit = (index) => {
    const contactToEdit = contacts[index];
    setEditForm(contactToEdit);
    setEditIndex(index);
    setOpenEdit(true);
  };

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setEditIndex(null);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedContacts = contacts.sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    } else {
      return a[orderBy] > b[orderBy] ? -1 : 1;
    }
  });

  return (
    <Container className="container mx-auto p-4">
      <Typography variant="h4" component="h1" gutterBottom>
        Rohan's Project - Eleno
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClickOpenAdd}>
        Add Contact
      </Button>
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle>Add Contact</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              autoFocus
              margin="dense"
              name="firstName"
              label="First Name"
              type="text"
              fullWidth
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="lastName"
              label="Last Name"
              type="text"
              fullWidth
              value={form.lastName}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={form.email}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="phoneNumber"
              label="Phone Number"
              type="text"
              fullWidth
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="company"
              label="Company"
              type="text"
              fullWidth
              value={form.company}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="jobTitle"
              label="Job Title"
              type="text"
              fullWidth
              value={form.jobTitle}
              onChange={handleChange}
              required
            />
            <DialogActions>
              <Button onClick={handleCloseAdd} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Add
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <TextField
              autoFocus
              margin="dense"
              name="firstName"
              label="First Name"
              type="text"
              fullWidth
              value={editForm.firstName}
              onChange={handleEditChange}
              required
            />
            <TextField
              margin="dense"
              name="lastName"
              label="Last Name"
              type="text"
              fullWidth
              value={editForm.lastName}
              onChange={handleEditChange}
              required
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={editForm.email}
              onChange={handleEditChange}
              required
            />
            <TextField
              margin="dense"
              name="phoneNumber"
              label="Phone Number"
              type="text"
              fullWidth
              value={editForm.phoneNumber}
              onChange={handleEditChange}
              required
            />
            <TextField
              margin="dense"
              name="company"
              label="Company"
              type="text"
              fullWidth
              value={editForm.company}
              onChange={handleEditChange}
              required
            />
            <TextField
              margin="dense"
              name="jobTitle"
              label="Job Title"
              type="text"
              fullWidth
              value={editForm.jobTitle}
              onChange={handleEditChange}
              required
            />
            <DialogActions>
              <Button onClick={handleCloseEdit} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Box mt={4}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'firstName'}
                    direction={orderBy === 'firstName' ? order : 'asc'}
                    onClick={() => handleRequestSort('firstName')}
                  >
                    First Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'lastName'}
                    direction={orderBy === 'lastName' ? order : 'asc'}
                    onClick={() => handleRequestSort('lastName')}
                  >
                    Last Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'email'}
                    direction={orderBy === 'email' ? order : 'asc'}
                    onClick={() => handleRequestSort('email')}
                  >
                    Email
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'phoneNumber'}
                    direction={orderBy === 'phoneNumber' ? order : 'asc'}
                    onClick={() => handleRequestSort('phoneNumber')}
                  >
                    Phone Number
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'company'}
                    direction={orderBy === 'company' ? order : 'asc'}
                    onClick={() => handleRequestSort('company')}
                  >
                    Company
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'jobTitle'}
                    direction={orderBy === 'jobTitle' ? order : 'asc'}
                    onClick={() => handleRequestSort('jobTitle')}
                  >
                    Job Title
                  </TableSortLabel>
                </TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedContacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact, index) => (
                <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                  <TableCell>{contact.firstName}</TableCell>
                  <TableCell>{contact.lastName}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phoneNumber}</TableCell>
                  <TableCell>{contact.company}</TableCell>
                  <TableCell>{contact.jobTitle}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(index)} color="primary">
                      Edit
                    </Button>
                    <Button onClick={() => handleDelete(index)} color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={contacts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Container>
  );
}

export default HomePage;