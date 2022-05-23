import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    if (term && !results.length) {
      search();
    } else {
      const timeOutId = setTimeout(() => {
        if (term) search();
      }, 500);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [term]);
  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <div className="header">
            <a
              className="link"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
              target="_blank"
            >
              {result.title}
            </a>
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
