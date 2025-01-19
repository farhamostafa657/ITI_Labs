class Counter {
  counter: number;
  constructor(counter: number) {
    this.counter = counter;
  }

  increase(): number {
    return (this.counter += 1);
  }

  decrease(): number {
    return (this.counter -= 1);
  }

  reset(): number {
    return (this.counter = 0);
  }
}

let counter1 = new Counter(0);

let para: HTMLElement | null = document.getElementById("counterVlaue");
if (para) para.textContent = counter1.counter.toString();

document.getElementById("inc")?.addEventListener("click", () => {
  let value: number = counter1.increase();
  if (para) {
    para.textContent = value.toString();
  }
});

document.getElementById("dec")?.addEventListener("click", () => {
  let value: number = counter1.decrease();
  if (para) {
    para.textContent = value.toString();
  }
});

document.getElementById("res")?.addEventListener("click", () => {
  let value: number = counter1.reset();
  if (para) {
    para.textContent = value.toString();
  }
});
