let counter = 0;

const getData = () => {
  console.log('getData called', counter++);
};

const debounce = function (fn, del) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, del);
  };
};

const betterFetch = debounce(getData, 300);
