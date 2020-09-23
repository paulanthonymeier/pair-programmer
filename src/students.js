const createStudentForm = document.getElementById('create-student-form');
const userInputs = createStudentForm.querySelectorAll('input');
const btnCreateNewStudent = createStudentForm.querySelector('#btn-create-student');
const btnGeneratePairs = document.getElementById('generate-pairs');
const btnDeleteStudent = document.getElementById('delete-student');
const noStudentsText = document.getElementById('no-students');

const btnSubNavMobileLeftOpen = document.getElementById('sub-nav-mobile-btn-left-open');
const btnSubNavMobileLeftClose = document.getElementById('sub-nav-mobile-btn-left-close');

const students = [];

const updateUI = () => {
  if (students.length === 0) {
    noStudentsText.style.display = 'flex';
  } else {
    noStudentsText.style.display = 'none';
  }
};

const clearFormInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const renderNewStudentCard = (id, firstName, lastName, emailAddress) => {
  const newStudentCardElement = document.createElement('div');
  newStudentCardElement.className = 'content-section-card-student';
  newStudentCardElement.id = 'content-section-card-student';
  newStudentCardElement.innerHTML = `
  <div class="content-section-profile">
    <div class="content-section-profile-image student-page-image">
      <div id="" class="content-section-profile-image-pic">
        <img src="./assets/profile-picture-none.jpg" alt="No Picture" width="100%" height="100%">
      </div>
    </div>
    <div class="content-section-profile-icons">
      <a id="delete-student" class="student-photo-edit-btn" href="#"><i class="fas fa-trash"></i> delete</a>
    </div>
  </div>
  <!-- Content End -->
  <div class="section-card-student-right">
    <!-- Content: New Row -->
    <div class="content-section-row content-section-row-card">
      <div class="content-section-row-label content-section-row-label-card">name</div>
      <div id="" class="content-section-row-field content-section-row-field-card">${firstName} ${lastName}</div>
    </div>
    <!-- Content End -->
    <!-- Content: New Row -->
    <div class="content-section-row content-section-row-card">
      <div class="content-section-row-label content-section-row-label-card">email address</div>
      <div id="content-section-row-field-downcase" class="content-section-row-field content-section-row-field-card">${emailAddress}</div>
    </div>
    <!-- Row End -->
  </div>
  `;
  const listRoot = document.getElementById('student-cards');
  listRoot.append(newStudentCardElement);
};

const addStudentHandler = () => {
  const firstNameValue = userInputs[0].value;
  const lastNameValue = userInputs[1].value;
  const emailAddressValue = userInputs[2].value;
  if (
    firstNameValue.trim() === '' || 
    lastNameValue.trim() === '' || 
    emailAddressValue.trim() === ''
    ) {
      alert('Hey! The form is invalid ... FOOL!');
      return;
  }
  const newStudent = {
    id: Math.floor((Math.random() * 10000000000) + 1),
    firstName: firstNameValue,
    lastName: lastNameValue,
    emailAddress: emailAddressValue
  };
  students.push(newStudent);
  console.log(students);
  clearFormInputs();
  renderNewStudentCard(newStudent.id, newStudent.firstName, newStudent.lastName, newStudent.emailAddress);
  updateUI();
};

const randomPairsHandler = () => {
  console.log(students);
  if (students.length % 2 != 0 || students.length === 0) {
    if (students.length === 0) {
      alert(
        `
        Add some students first, FOOL!
        `
      );
    } else if (students.length === 1) {
      alert(
        `
        You must have an even number of students!
        You currently have only ${students.length} student.
        `
      );
    } else {
      alert(
        `
        You must have an even number of students!
        You currently have ${students.length} students.
        `
      );
    }
  } 
  else {
    var arr1 = students.firstName.slice(0, students.length / 2), // copy array
    arr2 = students.firstName.slice(students.length / 2, students.length); // copy array again
    console.log('ARRAY 1', arr1);
    console.log('ARRAY 2', arr2);

    // arr1.sort(function() {
    //   return 0.5 - Math.random();
    // }); // shuffle arrays
    // arr2.sort(function() {
    //   return 0.5 - Math.random();
    // });

    // // creating an empty array to save the pairs in it
    // const pairs = [];

    // while (arr1.length) {
    //   var name1 = arr1.pop(), // get the last value of arr1
    //     name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
    //   //        ^^ if the first value is the same as name1,
    //   //           get the last value, otherwise get the first

    //   pairs.push(`${capitalize(name1)} gets ${capitalize(name2)}`); //  updating the pairs array with each pair by using push, here i am using a function capitalize to captalize each name, the function is at the bottom of this file
    // }

    // console.log(pairs);

    // // creating a variable to catch the empty place in html using id-pairs
    // const display = document.getElementById("pairs");

    // //  setting a variable to create an empty element in html, mapping the whole pairs array, and setting each pair as an inner text value of each element
    // pairs.map(pair => {
    //   const element = document.createElement("div");
    //   element.innerText = pair;
    //   // <div>pair</div>

    //   // at last appendchild(element) is giving us every pair in the div of html by adding the pairs in display varable
    //   display.appendChild(element);
    // });
  }
};

const capitalize = (word) => {
  return (
    word
      .trim()
      .charAt(0)
      .toUpperCase() + word.trim().slice(1)
  );
};

const openLeftMobileNavMenuHandler = () => {
  const navContainer = document.getElementById('container-sub-nav-mobile-left-flyout');
  navContainer.style.display = 'flex';
};

const closeLeftMobileNavMenuHandler = () => {
  const navContainer = document.getElementById('container-sub-nav-mobile-left-flyout');
  navContainer.style.display = 'none';
};

const rightMobileNavMenuHandler = () => {};

btnCreateNewStudent.addEventListener('click', addStudentHandler);
btnGeneratePairs.addEventListener('click', randomPairsHandler);
btnSubNavMobileLeftOpen.addEventListener('click', openLeftMobileNavMenuHandler);
btnSubNavMobileLeftClose.addEventListener('click', closeLeftMobileNavMenuHandler);

