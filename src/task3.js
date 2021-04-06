// 3-е задание
const path = {
  mile: 0,
  forward() {
    this.mile++;
    return this;
  },
  backward() {
    this.mile--;
    return this;
  },
  stayInPlace(){
    this.mile = this.mile;
    return this;
  },
  goToStart() {
    this.mile = 0;
    return this;
  },
  showMile: function() { // показывает текущую милю
    console.log(this.mile);
    return this;
  }
};

// Возращает 1
path.stayInPlace().goToStart().forward().backward().forward().showMile();
