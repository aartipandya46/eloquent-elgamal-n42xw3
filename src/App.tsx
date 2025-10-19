import { useState } from "react";

interface Country {
  title: string;
  open: boolean;
  detail: string;
}

export default function App() {
  const [data, setData] = useState<Country[]>([
    {
      title: "Germany",
      detail:
        "Germany is known for its strong engineering, automotive, and technology industries.",
      open: false,
    },
    {
      title: "USA",
      detail:
        "The USA is a global leader in innovation and technology, home to Silicon Valley and top universities.",
      open: false,
    },
    {
      title: "London",
      detail:
        "London is a global financial and cultural hub with a rich history and vibrant city life. ",
      open: false,
    },
    {
      title: "India",
      detail:
        "India is one of the fastest-growing economies with a thriving IT and startup ecosystem.",
      open: false,
    },
  ]);

  function handleOpen(index: string) {
    setData((prevData) =>
      prevData.map((item) =>
        item.title == index
          ? { ...item, open: !item.open }
          : { ...item, open: false }
      )
    );
  }
  return (
    <div>
      {data.map((country, index) => {
        return (
          <div key={index}>
            <h2 onClick={() => handleOpen(country.title)}>{country.title}</h2>
            <div style={{ display: country.open ? "block" : "none" }}>
              {country.detail}
            </div>
          </div>
        );
      })}
    </div>
  );
}
