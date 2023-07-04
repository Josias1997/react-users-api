import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // const response = await axios.get(
    //   "https://random-data-api.com/api/users/random_user?size=10"
    // );
    // setUsers(response.data);
  };

  return (
    <div className="App">
      <button onClick={fetchData}>Fetch Random</button>
      <div className="users">
        {users.map((user) => (
          <div className="user">
            <img src={user.avatar} />
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <p>{user.employment.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
