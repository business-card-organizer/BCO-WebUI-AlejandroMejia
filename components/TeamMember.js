class Person {
  constructor(person)
  {
    this.name = person.name;
  }
}

class TeamMember extends Person {
  constructor(member)
  {
    super(member);
    this.role = member.role;
    this.img = member.img;
  }
}

const alejandro = new TeamMember({
  name: "Jose Alejandro Mejia",
  role: "Web UI Developer",
  img: "img/14102541_679140405567831_3053663963574060014_n.jpg"
});


const marina = new TeamMember({
  name: "Marina Baskova",
  role: "Backend Developer",
  img: "https://avatars0.githubusercontent.com/u/42049915?s=460&v=4"
});

const david = new TeamMember({
  name: "David Clavijo",
  role: "Frontend Developer",
  img: "http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+"
});

const matthew = new TeamMember({
  name: "Matthew Lewis",
  role: "Frontend Developer",
  img: "http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+"
});

const richard = new TeamMember({
  name: "Richard Scott Prins",
  role: "Web UI Developer",
  img: "http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+"
});

const laryna = new TeamMember({
  img: "Laryna Billinghurst",
  role: "Scrum Master",
  img: "http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+"
});
