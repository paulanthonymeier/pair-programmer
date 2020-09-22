const createStudentForm = document.getElementById('create-student-form');
const userInputs = createStudentForm.querySelectorAll('input');
const btnCreateNewStudent = createStudentForm.querySelector('#btn-create-student');
const btnGeneratePairs = document.getElementById('generate-pairs');
const btnDeleteStudent = document.getElementById('delete-student');
const noStudentsText = document.getElementById('no-students');

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
    id: Math.random().toString(),
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
  // pairing logic
};

btnCreateNewStudent.addEventListener('click', addStudentHandler);
btnGeneratePairs.addEventListener('click', randomPairsHandler);
