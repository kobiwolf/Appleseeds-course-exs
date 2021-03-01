function Name(name) {
  this.name = name;
  this.print = function () {
    console.log(this.name);
  };
  this.print2 = function () {
    setTimeout(this.print, 1000);
  };
}
let kobi = new Name('kobi');
kobi.print = kobi.print.bind(kobi);
kobi.print2();
