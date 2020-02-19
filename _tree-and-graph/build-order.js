class Project {
  constructor(name) {
      this.name = name;
      this.children = [];
  }

  addChild(project) {
      this.children.push(project);
  }
}

function findProject(projects, name) {
  return projects.find(p => p.name === name);
}

function createBuildOrder(projects, dep) {
  for (let [name1, name2] of dep) {
      let projectA = findProject(projects, name1);
      let projectB = findProject(projects, name2);
      projectA.addChild(projectB);
  }
  let result = [];

  for (let project of projects) {
      doDFS(project, result);
  }
  return result.reverse();
}

function doDFS(project, result) {
  if (project.inProgress !== undefined) {
      throw 'Project in cycle list!';
  }

  project.inProgress = true;
  for (let child of project.children) {
      doDFS(child, result);
  }
  delete project.inProgress;
  if (result.includes(project) === false) {
      result.push(project);
  }
}

let buildOrder = createBuildOrder(
  [
      new Project('a'),
      new Project('b'),
      new Project('c'),
      new Project('d'),
      new Project('e'),
      new Project('f')
  ],
  [
      ['a', 'd'],
      ['f', 'b'],
      ['b', 'd'],
      ['f', 'a'],
      ['d', 'c']
  ]
);

console.log(buildOrder);