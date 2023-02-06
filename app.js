// class identifier
function gt(params) {
  if (document.querySelector(params)) {
    // console.log(document.querySelector(params));
    return document.querySelector(params);
  } else {
    console.log(`'${params}' is not correct class/id`);
  }
}
let date = gt('#date');
let budgetAmount = gt('#b-amount');
let bSubmit = gt('.b-submit');
let bTotal = gt('.b-total');
let eTotal = gt('.e-total');
let theBalance = gt('.the-balance');
let eError = gt('.e-error');
let bError = gt('.b-error');
let eDesc = gt('#e-desc');
let eAmount = gt('#e-amount');
let eSubmit = gt('.e-submit');
let data = gt('.js-data');
let jsBtn = gt('.js-btn');
let totalExp = 0;
let finalBalance = 0;
let record = [];

// the budget function
bSubmit.addEventListener('click', () => {
  if (budgetAmount.value === '' || budgetAmount.value < 0) {
    bError.classList.remove('hide');
  } else {
    bError.classList.add('hide');

    bTotal.textContent = budgetAmount.value;
    theBalance.textContent = eval(budgetAmount.value);
    finalBalance = eval(budgetAmount.value);
    budgetAmount.value = '';
  }
  return eval(budgetAmount.value);
});
eSubmit.addEventListener('click', () => {
  if (eAmount.value === '' || eAmount.value < 0 || eDesc === '') {
    eError.classList.remove('hide');
  } else {
    eError.classList.add('hide');
    totalExp += eval(eAmount.value);
    eTotal.textContent = totalExp;
    theBalance.textContent = finalBalance - totalExp;

    record.push(`${date.value} ${eDesc.value} ${eAmount.value}`);
    // for (x in record) {
    //   let thedata = `<div class='single-js'>${record[x]}</div>`;
    //   data.innerHTML += thedata;
    // }
  }
  eAmount.value = '';
  eDesc.value = '';
});
console.log(record);
jsBtn.addEventListener('click', () => {
  data.innerHTML = '';
  for (x in record) {
    console.log(record[x]);
    let thedata = `<div class='single-js'>${record[x]}</div>`;

    data.innerHTML += thedata;
  }
});
