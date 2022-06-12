import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [titleField, setTitleField] = useState("Monster Rolodex");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await response.json();
      setMonsters(json);
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const titleFieldString = event.target.value.toLocaleLowerCase();

    setTitleField(titleFieldString);
    if (titleFieldString === "") return setTitleField("Monster Rolodex");
  };

  return (
    <div className="App">
      <h1 className="app-title">{titleField}</h1>
      <SearchBox className="title-search-box" onChangeHandler={onTitleChange} placeholder="set title" />
      <br />
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
