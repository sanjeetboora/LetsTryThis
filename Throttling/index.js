const loggerFunc = () => {
  console.log('throttled function');
};

const throttle = (func, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterloggerFunc = throttle(loggerFunc, 500);

window.addEventListener('resize', betterloggerFunc);

const normalloggerFunc = () => {
  console.count('Normal logger function');
};

window.addEventListener('resize', normalloggerFunc);
