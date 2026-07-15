import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 banana",
      color: "yellow",
      isFruit: true,
      weight: 0.15,
    },
    {
      id: 2,
      name: "🍅 tomato",
      color: "red",
      isFruit: true,
      weight: 0.5,
    },
    {
      id: 3,
      name: "🍊 orange",
      color: "orange",
      isFruit: true,
      weight: 0.2,
    },
    {
      id: 4,
      name: "🥦 broccoli",
      color: "green",
      isFruit: false,
      weight: 0.3,
    },
    {
      id: 5,
      name: "🫐 blueberry",
      color: "blue",
      isFruit: true,
      weight: 0.1,
    },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}
      {fruits.map((fruit, id) => {
        return <Card name={fruit.name} key={fruit.id} color={fruit.color} />;
      })}
    </div>
  );
}
