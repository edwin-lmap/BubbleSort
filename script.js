var numbers = [];
var barColor = "#0b5083";
var selectedColor = "#e05e2b";

function aleatoire()  {
  const sizeElem = 20;
  const sortie =  document.getElementById("sortie");
  sortie.innerHTML = "";

  const heightSortie = sortie.clientHeight;
  let nbElem = parseInt(sortie.clientWidth / sizeElem);
  console.log("Element  " + nbElem);

  numbers = [];
  let position = 0;
  
  for(let i = 0; i < nbElem; i++) {
    let elem = document.createElement("div");
    let nb = Math.floor(Math.random() * nbElem) + 1;
    elem.textContent = nb;
    elem.style.position = "absolute";
    elem.style.left = position;
    elem.style.backgroundColor = barColor;
    elem.style.bottom = 0;
    elem.style.color = "white";
    elem.style.fontWeight = "bold"
    elem.style.height = (nb * heightSortie) / nbElem;
    elem.style.width = sizeElem;

    sortie.appendChild(elem);
    numbers.push(nb);

    position += sizeElem;
    document.getElementById("total-time").innerHTML = "";
    //console.log("elem : " + nb);
  }
}

function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function swapNode(node1, node2) {
  var clonedElement1 = node1.cloneNode(true);
  var clonedElement2 = node2.cloneNode(true);

  node2.parentNode.replaceChild(clonedElement1, node2);
  node1.parentNode.replaceChild(clonedElement2, node1);
}

// An optimized version of Bubble Sort
function bubbleSort( arr, n)
{
  var startDate, endDate;
  startDate = new Date();
  var i, j;
  for (i = 0; i < n-1; i++)
  {
      for (j = 0; j < n-i-1; j++)
      {
          if (arr[j] > arr[j+1])
          {
            swap(arr,j,j+1);          
          }
      }  
  }

  endDate = new Date();
  var timeDiff = endDate - startDate;
}

async function trieBulle() {
  bubbleSort(numbers, numbers.length);
  console.log("sorted", numbers);

  var startDate, endDate;
  startDate = new Date();

  const sortie =  document.getElementById("sortie");
  const elements = sortie.children;

  let N = elements.length;
  for(let i = 0; i < N-1; i++) {
    for(let j = 0; j < N-i-1; j++) {
      let elem1 = elements.item(j);
      let elem2 = elements.item(j+1);
      elem1.style.backgroundColor = selectedColor;

      if (parseInt(elem2.innerHTML) < parseInt(elem1.innerHTML)) {          
        let pos = elem2.style.left;
        elem2.style.left = elem1.style.left;
        elem1.style.left = pos;

        swapNode(elem1, elem2);
      }

      await sleep(100);


      elem1.style.backgroundColor = barColor;
    }

    elements.item(N-i-1).style.backgroundColor = barColor;
  }

  endDate = new Date();
  var timeDiff = endDate - startDate;
  var seconds = timeDiff/1000;
  document.getElementById("total-time").innerHTML = seconds;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}