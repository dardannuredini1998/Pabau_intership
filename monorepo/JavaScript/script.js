// Variables
const shuffleBtn = document.getElementById("shuffle");
const changeValuesBtn = document.getElementById("change-values");
const showValuesBtn = document.getElementById("show-values");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const divContainer = document.querySelector(".container");



// Shuffle all the values of checkboxes
function shuffleAll() {
   function shuffleFirstItem(name) {
    const firstLable = document.querySelector('#label1');
    const labelEl = document.createElement("label");
    labelEl.setAttribute('for','checkbox1');
    labelEl.innerHTML = `${name}`;
    firstLable.replaceWith(labelEl)
    


    const firstInput = document.getElementById('checkbox1')
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type','checkbox')
    inputEl.setAttribute('id','checkbox1')
    inputEl.setAttribute('value',`${name}`)

    firstInput.replaceWith(inputEl)
  }

  function shuffleSecondItem(name) {
    const secondLable = document.querySelector('#label2');
    const labelEl = document.createElement("label");
    labelEl.setAttribute('for','checkbox2');
    labelEl.innerHTML = `${name}`;
    secondLable.replaceWith(labelEl)
    


    const thirdInput = document.getElementById('checkbox2')
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type','checkbox')
    inputEl.setAttribute('id','checkbox2')
    inputEl.setAttribute('value',`${name}`)
    
    thirdInput.replaceWith(inputEl)


   // We can do this way too
    // const secondLable = document.querySelector('label[for="checkbox2"]');

    // const labelEl = document.createElement("label");
    // labelEl.innerHTML = `<label for="checkbox2">${name}</label>`;
    // secondLable.replaceWith(labelEl);
  }

  function shuffleThirdItem(name) {
    const thirdLable = document.querySelector('#label3');
    const labelEl = document.createElement("label");
    labelEl.setAttribute('for','checkbox3');
    labelEl.innerHTML = `${name}`;
    thirdLable.replaceWith(labelEl)
    


    const thirdInput = document.getElementById('checkbox3')
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type','checkbox')
    inputEl.setAttribute('id','checkbox3')
    inputEl.setAttribute('value',`${name}`)
 
    thirdInput.replaceWith(inputEl)
  }

  function shuffleFourthItem(name) {
    const fourthLable = document.querySelector('#label4');
    const labelEl = document.createElement("label");
    labelEl.setAttribute('for','checkbox4');
    labelEl.innerHTML = `${name}`;
    fourthLable.replaceWith(labelEl)
   


    const fourthInput = document.getElementById('checkbox4')
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type','checkbox')
    inputEl.setAttribute('id','checkbox4')
    inputEl.setAttribute('value',`${name}`)
    fourthInput.replaceWith(inputEl)
 
  
  }

  shuffleFirstItem("Career");
  shuffleSecondItem("Employmen");
  shuffleThirdItem("Pabau");
  shuffleFourthItem("Intership");

 
}

// Changing the values of checkboxes
function changeValues() {
   

        // First checkbox
        const firstLable = document.querySelector('#label1');
        const firstlabelEl = document.createElement("label");
        firstlabelEl.setAttribute('for','checkbox1');
        firstlabelEl.innerHTML = 'Office';
        firstLable.replaceWith(firstlabelEl)
        
        const firstInput = document.getElementById('checkbox1')
        const firstinputEl = document.createElement('input');
        firstinputEl.setAttribute('type','checkbox')
        firstinputEl.setAttribute('id','checkbox1')
        firstinputEl.setAttribute('value','Office')
        firstInput.replaceWith(firstinputEl)

        //Second checkbox
        const secondLable = document.querySelector('#label2');
        const secondlabelEl = document.createElement("label");
        secondlabelEl.setAttribute('for','checkbox2');
        secondlabelEl.innerHTML = 'Job';
        secondLable.replaceWith(secondlabelEl)        
    
        const secondInput = document.getElementById('checkbox2')
        const secondinputEl = document.createElement('input');
        secondinputEl.setAttribute('type','checkbox')
        secondinputEl.setAttribute('id','checkbox2')
        secondinputEl.setAttribute('value','Job')
        secondInput.replaceWith(secondinputEl)

        //Third checkbox
        const thirdLable = document.querySelector('#label3');
        const thirdlabelEl = document.createElement("label");
        thirdlabelEl.setAttribute('for','checkbox3');
        thirdlabelEl.innerHTML = 'PC';
        thirdLable.replaceWith(thirdlabelEl)
 
        const thirdInput = document.getElementById('checkbox3')
        const thirdinputEl = document.createElement('input');
        thirdinputEl.setAttribute('type','checkbox')
        thirdinputEl.setAttribute('id','checkbox3')
        thirdinputEl.setAttribute('value','PC')
        thirdInput.replaceWith(thirdinputEl)

        //Forth checkbox
        const fourthLable = document.querySelector('#label4');
        const fourthlabelEl = document.createElement("label");
        fourthlabelEl.setAttribute('for','checkbox4');
        fourthlabelEl.innerHTML = 'Programming';
        fourthLable.replaceWith(fourthlabelEl)
 
        const fourthInput = document.getElementById('checkbox4')
        const fourthinputEl = document.createElement('input');
        fourthinputEl.setAttribute('type','checkbox')
        fourthinputEl.setAttribute('id','checkbox4')
        fourthinputEl.setAttribute('value','Programming')        
        fourthInput.replaceWith(fourthinputEl)


    // We can do this way too

    // const secondtItem = labels[1];
    // secondtItem.innerText = "Programing";
    // const thirdtItem = labels[2];
    // thirdtItem.innerText = "Office";
    // const fourthtItem = labels[3];
    // fourthtItem.innerText = "PC";
}

// Displaying the selected checkboxes
function showSelectedValues() {
  const selectedValuesEl = document.getElementById("selected-values");

  selectedValuesEl.textContent = "";

  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  let selectedValues = [];
  

  if (checkboxes.length === 0) {
    alert("You need to select at least one checkbox");
    return;
  }

  for (let i = 0; i < checkboxes.length; i++) {
    selectedValues.push(checkboxes[i].value.charAt(0).toUpperCase() + checkboxes[i].value.slice(1))
  }

  selectedValuesEl.textContent =
    "Selected items: " + selectedValues.join(', ');


}


// AddEvenetListeners
shuffleBtn.addEventListener("click", shuffleAll);
changeValuesBtn.addEventListener("click", changeValues);
showValuesBtn.addEventListener("click", showSelectedValues);
