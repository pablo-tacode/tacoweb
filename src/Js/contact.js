const contactsRef = firebase.database().ref('contacts');
  
  
  
// Submit form
const submitForm=(e)=>{
  e.preventDefault();

  // Get values
  let name = getInputVal('name');
  let email = getInputVal('email');
  let phone = getInputVal('phone');
  let idea= getInputVal('idea');

  // Save message
  saveContact(name, email, phone, idea);

  

  // Hide alert after 1/2 seconds
  setTimeout(()=>{
  clearForm()
  },500);

// Clear form
clearForm=() =>{
    document.getElementById("name").value = document.getElementById("name").defaultValue;
    document.getElementById("email").value = document.getElementById("email").defaultValue;
    document.getElementById("phone").value = document.getElementById("phone").defaultValue;
    document.getElementById("idea").value = document.getElementById("idea").defaultValue;
  }
 

}


// Function to get get form values
const getInputVal=(id)=>{
  return document.getElementById(id).value;
}

// Save message to firebase
const saveContact=(name, email, phone, idea)=>{
  let newContactRef = contactsRef.push();
  newContactRef.set({
    name: name,
    email:email,
    phone:phone,
    idea:idea
  });
}

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);