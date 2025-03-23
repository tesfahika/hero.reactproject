import "./styles.css";
import { UsableCard } from "./UsableCard";
import { Counter } from "./Counter";

export default function App() {
  const UserInfo = {
    name: "tesfa",
    email: "tesfahika634@gmail.com",
    age: 19,
  };
  return (
    <div className="App">
      <h1>User Information </h1>
      <UsableCard
        name={UserInfo.name}
        email={UserInfo.email}
        age={UserInfo.age}
      />
      <Counter />
    </div>
  );
}
