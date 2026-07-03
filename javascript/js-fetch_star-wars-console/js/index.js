console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    console.log(data.results[2].eye_color);
    return data;
    
}

fetchData();
