import React, {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';

function App() {
  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);

  const getUsers = async (e, users) => {
    const response = await fetch('http://localhost:4000');
    const data = await response.json();
  setUsers(data)
  }

  useEffect(() => {
    getUsers();
  }, [])

  const showUsers = () => {
    if(users.length > 0){
      users.forEach(element => {
        let newElement = Object.keys(element);
          return(
            <TableRow>
              {newElement.map(newElement => <TableCell key = {newElement._id}>{element[newElement].firstName}</TableCell>)}
              {newElement.map(newElement => <TableCell key = {newElement._id}>{element[newElement].lastName}</TableCell>)}
              {newElement.map(newElement => <TableCell key = {newElement._id}>{element[newElement].email}</TableCell>)}
              {newElement.map(newElement => <TableCell key = {newElement._id}>{element[newElement].age}</TableCell>)}
              <TableCell>
                <Button onClick = {showFavorites}></Button>
              </TableCell>
            </TableRow>
        )
      })
    }
  }

  const showFavorites = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/songs');
    const data = await response.json();
    setSongs(data);
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {showUsers()}
        </TableBody>
      </Table>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Album</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Artist</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {songs.map(songs => <TableCell key = {users.favorite}>{songs.name}</TableCell>)}
            {songs.map(songs => <TableCell key = {users.favorite}>{songs.album}</TableCell>)}
            {songs.map(songs => <TableCell key = {users.favorite}>{songs.duration}</TableCell>)}
            {songs.map(songs => <TableCell key = {users.favorite}>{songs.artist}</TableCell>)}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
