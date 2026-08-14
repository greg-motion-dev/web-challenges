import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const URL = "/api/random-character";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>ERROR, no character loaded</div>;
  if (isLoading) return <div>character loading</div>;

  return (
    <div>
      <h1>
        <span>{data.firstName} </span>
        <span>{data.lastName}</span>
      </h1>
      <p>{data.profession}</p>
    </div>
  );
}
