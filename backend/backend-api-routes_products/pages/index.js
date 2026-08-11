import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const URL = "/api/products";

export default function HomePage() {
  // data, error and isLoading are the standard for ever useSWR
  const { data, error, isLoading } = useSWR(URL, fetcher);

  // simple error and isLoading
  if (error) return <div>ERROR!</div>;
  if (isLoading) return <div>Currently loading...</div>;

  return (
    <div>
      <h1>Welcome to Next.js API Routes!</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span>{item.price}</span>
            <span>{item.currency}</span>
            <p>{item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
