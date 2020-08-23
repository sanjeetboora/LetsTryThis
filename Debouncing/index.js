let counter = 0;

const getData = () => {
  console.log('getData called', counter++);
};

const debounce = function (fn, del) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      getData();
    }, del);
  };
};

const betterFetch = debounce(getData, 300);
