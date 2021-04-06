const result = document.querySelector("#result__3");

export const path = {
  mile: 0,
  forward() {
    this.mile++;
    return this;
  },
  backward() {
    this.mile--;
    return this;
  },
  stayInPlace() {
    this.mile = this.mile;
    return this;
  },
  goToStart() {
    this.mile = 0;
    return this;
  },
  showMile: function () {
    // показывает текущую милю
    result.innerHTML = `must be: ${this.mile}`;
  },
};

// Возращает 1
path.stayInPlace().goToStart().forward().backward().forward().showMile();
