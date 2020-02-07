// class Project {
//     constructor(name) {
//         this.name = name;
//         this.parents = [];
//     }

//     addParent(project) {
//         this.parents.push(project);
//     }

//     removeParent(project) {
//         this.parents = this.parents.filter(p => p !== project);
//     }
// }

// function createBuildOrder(projects, dep) {
//     let buildOrder = [];
//     for (let [name1, name2] of dep) {
//         let projectA = findProject(projects, name1);
//         let projectB = findProject(projects, name2);
//         projectB.addParent(projectA);
//     }

//     while (projects.length > 0) {
//         const temp = projects.filter(p => p.parents.length === 0);
//         projects = projects.filter(p => p.parents.length !== 0);
//         temp.map(p => {
//             updateProjectParents(projects, p);
//             buildOrder.push(p);
//         });
//     }

//     return buildOrder;
// }

// function updateProjectParents(projects, project) {
//     for (let p of projects) {
//         p.removeParent(project);
//     }
// }

// function findProject(projects, name) {
//     return projects.find(p => p.name === name);
//}

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
