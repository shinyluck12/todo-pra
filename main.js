// 유저가 값을 입력한다
// + 버튼을 클릭하면, 할일이 추가된다
// Delete 버튼을 누르면 할일이 삭제된다
// check 버튼을 누르면 할일이 끝나면서 밑줄이 간다 (지워짐)
// 1. check 버튼을  클릭하는 순간 true 를 false로 바꿔준다
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기
// 3. false이면 안 끝난걸로 간ㄴ주하고 그대로

// 진행중 끝남 탭을 누르면, 언더바가 이동한다
// 끝남 탭은 끝난 아이템만, 진행중탭은 진행중인 아이템만 나오게된다
// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-button");
let taskList = [];

addBtn.addEventListener("click", addTask);

function addTask() {
  //   let taskContent = taskInput.value;
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="task">
      <div>${taskList[i].taskContent}</div> 
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
        <button>Delete</button>
      </div>
    </div>`;
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  console.log(id);
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
