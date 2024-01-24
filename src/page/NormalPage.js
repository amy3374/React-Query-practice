import React, { useEffect, useState } from "react";

const NormalPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const fetchPost = async () => {
    setIsLoading(true);
    let url = "http://localhost:5000/posts";
    let response = await fetch(url);
    let data = await response.json();
    setIsLoading(false);
    setData(data);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <div>{data && data.map((item) => <div>{item.title}</div>)}</div>;
};

export default NormalPage;
