function calc(day) {
  let sleep = [
    {
      life: 1,
    },
  ];
  const lifeCycle = ['小羊', 1, 0, 1, 'die'];
  const born = mother => {
    // if (mother.life === 0) mother.life++;
    // return lifeCycle[mother.life - 1];
    let result = lifeCycle[mother.life - 1];
    if (result === 1) {
      sleep.push({
        life: 1,
      });
      console.log(`这是第${index + 1}只小羊。的第${item.life}年生了一只小羊`);
    }
    mother.life++;
    if (result === 'die') {
      sleep.splice(index, 1);
      console.log(`这是第${index + 1}只小样。第五年死了`);
    }
  };
  for (let i = 0; i < day; i++) {
    sleep.forEach((item, ind) => {
      let index = ind;
      born(item);
    });
    console.log(`第${i + 1}年`);
  }
  console.log(sleep.length);
}

calc(4);
