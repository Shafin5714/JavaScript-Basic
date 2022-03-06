const data = [
    {
      name: "a",
      q: 1,
    },
    {
      name: "b",
      q: 1,
    },
    {
      name: "a",
      q: 1,
    },
    {
      name: "a",
      q: 1,
    },
  ];
  
  // console.log(data);
  const filter = [];
  const test = data.map((d, i) => {
    const contains = filter.some((p) => {
      return p.name === d.name;
    });
    if (!contains) {
      filter.push(d);
    } else {
      const index = filter.findIndex((i) => i.name === d.name);
      filter[index].q = filter[index].q + 1;
    }
  });
  
  console.log(filter);
  