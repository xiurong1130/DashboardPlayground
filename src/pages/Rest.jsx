import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";




function Rest() {
  const [id, setId] = useState();

  const {
    data: results, 
    isLoading, 
    isError 
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => 
      await axios.get("https://api.escuelajs.co/api/v1/products"),
    staleTime: 100000,
  });

  const {
    data: productResult, 
  } = useQuery({
    queryKey: [`product${id}`],
    queryFn: async () => 
      await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`),
    enabled: Boolean(id),
    staleTime: 100000,
  });

  const mutation = useMutation({
    mutationFn: (body) => {
      axios.put('https://api.escuelajs.co/api/v1/products/112', body);
    },
  });

  if(isLoading) {
    return <p>Loading ...</p>;
  }

  if(isError) {
    return <p>Error ...</p>;
  }

  return (
    <>
      <h1>{productResult?.data.title}</h1>
      <button onClick={() => mutation.mutate({title: 'Test1 1'})}>
        Update item
      </button>
      <ul>
        {results?.data.map((item) => (
          <li onClick={() => setId(item.id)} key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Rest;