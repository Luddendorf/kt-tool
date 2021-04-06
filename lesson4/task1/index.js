function main(a, b, c, d) {
    const tempA = a.call(this, b, c, d);
    tempMain = () => [tempA, b, c, d];
    console.log(tempMain());
  }

  function b() {
    this.color = 'blue';
    return this;
  }

  function a(b, c, d) {
    this.color = 'red';
    const tempB = b.call(this);
      return [this, tempB];
  }

  
  const c = {
    width: 30,
    height: 30
  }
  
  const d = {
    width: 50,
    height: 10
  }

  const funcB = b.bind(d);
  const funcA = a.bind(c);
  
  main(funcA, funcB, c, d);