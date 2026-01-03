import React, { useEffect, useState } from "react";
import Cards from "../src/components/Cards";

const App = () => {
  const [userData, setuserData] = useState([]);
  const [page, setpage] = useState(1);

  const getData = async () => {
    const data = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );
    setuserData(await data.json());
  };

  useEffect(() => {
    getData();
  }, [page]);

  let printdata = <h3 className="font-bold text-xl">Loading...</h3>;
  if (userData.length > 0) {
    console.log(printdata);
    printdata = userData.map(function (elem, idx) {
      return <Cards key={idx} elem={elem} />;
    });
    console.log(printdata);
  }

  function next() {
    setpage(page + 1);
    setuserData([]);
  }
  function prev() {
    if (page > 1) {
      setpage(page - 1);
      setuserData([]);
    }
  }

  return (
    <div className="min-h-screen flex gap-10 justify-between items-center pb-5 flex-col bg-blue-950 h-fit text-white p-3">
      <h1 className="text-3xl font-bold">Api Based Gallery</h1>

      <div className="flex gap-5 flex-wrap justify-center">{printdata}</div>
      <div className="flex gap-2">
        <button
          onClick={prev}
          style={{ opacity: page == 1 ? 0.5 : 1 }}
          className=" py-2 rounded text-blue-950 font-bold px-5 bg-amber-500"
        >
          Prev
        </button>
        <span className="py-2 rounded text-blue-950 font-bold px-5 bg-amber-500">
          {page}
        </span>
        <button
          onClick={next}
          className="py-2 rounded text-blue-950 font-bold px-5 bg-amber-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
