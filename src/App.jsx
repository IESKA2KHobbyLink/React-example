import { useState, useEffect } from "react";
import "./App.css";
import events from "./data/events";
import groups from "./data/groups";

function eventList() {
  return events.map((e) => {
    return (
      <div className="list">
        <img src={e.imgUrl} alt="" width={180} />

        <div>
          <h2>{e.title}</h2>
          <p>{e.desc}</p>
        </div>
      </div>
    );
  });
}

function groupList() {
  return groups.map((g) => {
    return (
      <div className="group">
        <img src={g.imgUrl} alt="" width={180} />

        <div>
          <h2>{g.title}</h2>
          <p>{g.desc}</p>
        </div>
      </div>
    );
  });
}

function App() {
  const [showList, SetshowList] = useState("");

  const handleEventbtn = () => {
    SetshowList("event");
  };
  const handleGroupbtn = () => {
    SetshowList("group");
  };

  useEffect(() => {
    console.log(showList);
  }, [showList]);
  return (
    <>
      <h1>data fetching example</h1>
      <div className="card">
        <button onClick={() => handleEventbtn()}>events</button>
        <button onClick={() => handleGroupbtn()}>groups</button>
        {showList === "event" ? eventList() : groupList()}
      </div>
    </>
  );
}

export default App;
