import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Ambient, StyledInput, InfiniteScroller } from "./style";
import { useOnScreen, useLocalStorage, useDebounce } from "../../utils/hooks";

function Feed() {
  const [repositories, setRepositories] = useState([]);
  const [value, setValue] = useState({ user: "" });
  const [page, setPage] = useState(0);
  const [user, setUser] = useLocalStorage("user_preference", "");
  const [status, setStatus] = useState("Loading");
  const ref = useRef();
  const top = useRef();
  const handleChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };
  useOnScreen(ref, setPage);

  async function getData() {
    if (user === "") {
      alert("You doesn't have any preference yet");
      return;
    }
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos?order=desc&page=${page}&per_page=10`
      );
      const { data } = response;
      if (
        data[0]?.owner?.avatar_url !== repositories[0]?.owner?.avatar_url &&
        data.length !== 0
      ) {
        top.current.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
        setRepositories([]);
      }
      if (data.length === 0) setStatus("End");
      setRepositories((prev) => [...prev, ...data]);
    } catch (error) {
      alert("This user doesn't exists");
      setValue({ user: "" });
      setStatus("We didn't find your user preference");
    }
  }

  useDebounce(() => setUser(value.user), 2000, [value.user]);
  useEffect(() => {
    if (page > 0) getData();
  }, [page, user]);
  return (
    <Ambient>
      <StyledInput
        type="text"
        value={value.user}
        onChange={handleChange("user")}
        placeholder="Search here"
      />
      <InfiniteScroller ref={top}>
        {repositories.length > 1 &&
          repositories.map((repo) => (
            <div className="box" key={repo?.node_id}>
              <div className="wrapper">
                <img src={repo?.owner?.avatar_url} alt="" />
                <p>{repo?.name}</p>
                <p>{repo?.stargazers_count}</p>
              </div>
            </div>
          ))}
        <div className="observer" ref={ref}>
          <p> {status}</p>
        </div>
      </InfiniteScroller>
    </Ambient>
  );
}

export default Feed;
