import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ReactQueryPage = () => {
  const fetchPost = (queryData) => {
    const id = queryData.queryKey[1];
    return axios.get(`http://localhost:5000/posts/${id}`);
  };
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts", 1],
    queryFn: fetchPost,
    retry: 1,
    select: (data) => {
      return data.data;
    },
    staleTime: 20000, //기본값은 0 fresh에서 stale로 바뀌는데 걸리는 시간
    // gcTime: 5000, // 설정 안하면 기본값은 5분 gcTime > staleTime
    // enabled: false, //초기에 api호출이 안됨, 기본값은 true
  });

  console.log(data, isLoading);
  console.log("error", isError, error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {/* {data?.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))} */}
      <button onClick={refetch}>post 리스트 다시 들고오기</button>
    </div>
  );
};

export default ReactQueryPage;
