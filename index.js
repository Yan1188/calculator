const inputANode = document.querySelector(".js-number-a");
const inputBNode = document.querySelector(".js-number-b");
const btnResultNode = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output");
const selectOperationNode = document.querySelector(".js-select-operation");

btnResultNode.addEventListener("click", function () {
  const a = Number(inputANode.value);
  const b = Number(inputBNode.value);
  const operation = selectOperationNode.value;

  const result = calculate({
    a,
    b,
    operation,
  });

  console.log(result);
  outputNode.innerHTML = result;
});
