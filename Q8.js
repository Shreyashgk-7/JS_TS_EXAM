class CustomersupportAgent {
  name;
  id;
  dept;
  exp;

  constructor(name, id, dept, exp) {
    this.name = name;
    this.id = id;
    this.dept = dept;
    this.exp = exp;
  }

  displayInfo(){
    console.log(this.id+"  "+this.name+" "+this.dept+"  "+this.exp);
    
  }
}

const ob14 = new CustomersupportAgent("Shreyash",45,"IT","4 years");
ob14.displayInfo();
