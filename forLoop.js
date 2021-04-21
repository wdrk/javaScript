const colors = ['red', 'green', 'blue'];

// 이터레이터가 없는 for loop
for (let i = 0; i < colors.length; ++i) {
  console.log(i, colors[i]);
}

// for in
let props;
for (props in colors) {
  console.log(props, colors[props]);
}

// for of
for (props of colors) {
  console.log(props);
}
