function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = () => {
    return "No, I must disagree";
  };
  this.approve = () => {
    return "You can do that!";
  };
  this.doCharity = () => {
    return "I like to help people.";
  };
  this.releasePressStatement = () => {
    return "You will see great things from Scuber.";
  };
  this.sayHi = () => {
    return `Hi, my name is ${name}. I am from ${homeState}, and I was trained in ${training}.`;
  };
}
