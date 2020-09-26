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
  clearFormInputs();
  renderNewStudentCard(newStudent.id, newStudent.firstName, newStudent.lastName, newStudent.emailAddress);
  updateUI();
};

const randomPairsHandler = () => {
  if (students.length % 2 != 0 || students.length === 0) {
    if (students.length === 0) {
      alert(
        `Add some students first, FOOL!`
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
    var arr1 = students.slice(0, students.length / 2),
    arr2 = students.slice(students.length / 2, students.length);

    arr1 = arr1.map((el) => {
      let firstName = el.firstName
      let lastName = el.lastName
      return firstName, lastName
    });

    arr2 = arr2.map((el) => {
      let firstName = el.firstName
      let lastName = el.lastName
      return firstName, lastName
    });

    arr1.sort(function() {
      return 0.5 - Math.random();
    });
    arr2.sort(function() {
      return 0.5 - Math.random();
    });

    const randomPairs = [];

    while (arr1.length) {
      var name1 = arr1.pop(),
      name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
      randomPairs.push({'name1': name1, 'name2': name2});
    }

    randomPairs.map(pair => {
      let firstName1 = pair.name1
      let firstName2 = pair.name2

      const newStudentMatch = document.createElement('div');
      newStudentMatch.className = 'content-section-card-student-match';
      newStudentMatch.id = 'content-section-card-student-match';
      newStudentMatch.innerHTML = `
      <div class="student-match-inner inner-left">
        <div class="content-section-profile">
          <div class="content-section-profile-image student-page-image-match">
            <div id="" class="content-section-profile-image-pic">
              <img src="./assets/profile-picture-none.jpg" alt="No Picture" width="100%" height="100%">
            </div>
          </div>
        </div>
        <div class="section-card-student-right">
          <!-- Content: New Row -->
          <div class="content-section-row content-section-row-card card-match">
            <div id="" class="content-section-row-field content-section-row-field-card">${firstName1}</div>
          </div>
          <!-- Content End -->
          <!-- Content: New Row -->
          <div class="content-section-row content-section-row-card card-match">
            <div id="" class="content-section-row-field content-section-row-field-card"></div>
          </div>
          <!-- Row End -->
        </div>
      </div>
      <div class="student-match-inner inner-right">
        <div class="content-section-profile">
          <div class="content-section-profile-image student-page-image-match">
            <div id="" class="content-section-profile-image-pic">
              <img src="./assets/profile-picture-none.jpg" alt="No Picture" width="100%" height="100%">
            </div>
          </div>
        </div>
        <div class="section-card-student-right">
          <!-- Content: New Row -->
          <div class="content-section-row content-section-row-card card-match">
            <div id="" class="content-section-row-field content-section-row-field-card">${firstName2}</div>
          </div>
          <!-- Content End -->
          <!-- Content: New Row -->
          <div class="content-section-row content-section-row-card card-match">
            <div id="" class="content-section-row-field content-section-row-field-card"></div>
          </div>
          <!-- Row End -->
        </div>
      </div>
      `;
      const listRoot = document.getElementById('student-cards-match');
      listRoot.append(newStudentMatch);
    });
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

btnCreateNewStudent.addEventListener('click', addStudentHandler);
btnGeneratePairs.addEventListener('click', randomPairsHandler);
btnSubNavMobileLeftOpen.addEventListener('click', openLeftMobileNavMenuHandler);
btnSubNavMobileLeftClose.addEventListener('click', closeLeftMobileNavMenuHandler);

