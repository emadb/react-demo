import { Component } from 'react';

class MyList extends Component {
  render() {

    const users =[
      {id: 1, name: 'emanuele'}, //0 
      {id: 2, name: 'alessandro'}, //1
      {id: 3, name: 'paolo'}
    ]

    const userList = users.map(u => {
      return <MyItem key={u.id} user={u} />
    })

    // const userList2 = users.map((u, i) => {
    //   return <MyItem key={i} user={u} />   //BAD
    // })

    return (
      <div>
        <ul>
          {userList}
        </ul>
      </div>
    );
  }
}

function MyItem({user}) {
  return <li>{user.name}</li>
}



export default MyList;

