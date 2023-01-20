const btnAddContact = document.getElementById("btn-add-contact")
const firstName = document.getElementById("name")
const email = document.getElementById("email")
const mobileNumber = document.getElementById("mobile-number")
const contactList = document.getElementById("contact-list")

createContact()


// created array to store contacts in key : value pair
var allContacts = []

btnAddContact.addEventListener("click", function(e){
    e.preventDefault()
    const isValid = form.checkValidity()
    if(isValid) {
        //old data from local storage
        var contactData = localStorage.getItem("contacts");
        var result = JSON.parse(contactData);
        //created object to store key:value pair
        var contactDetails = {
            firstName : firstName.value,
            email : email.value,
            mobileNumber : mobileNumber.value
        }

        if(result == null) {
            allContacts.push(contactDetails);
            localStorage.setItem("contacts", JSON.stringify(allContacts));
        } else {
            //adding this object to allContacts array
            //allContacts.push(contactDetails);
            result.push(contactDetails);
            // To save data in local storage
            //can't pass array to local storage function so converted into string
            localStorage.setItem("contacts", JSON.stringify(result));
        }
        

        //To create contact HTML - new div element
        //To remove old contacts
        contactList.innerHTML = null
        createContact()
        contactAddedMessage();

        //To delete old entered values
        firstName.value = ""
        email.value = ""
        mobileNumber.value = ""
    } else {
        invalidInputMessage()
    }
    
})

// function createContact(){
//     const contactItem = document.createElement("div");
//     contactItem.classList.add("contact")
//     contactItem.innerHTML = `<p id="name-display">${firstName.value}</p>
//     <p id="email-display">${email.value}</p>
//     <p id="mobile-display">${mobileNumber.value}</p>
//     <button id="btn-delete" onclick="removeContact(this)">Delete</button>`
//     contactList.appendChild(contactItem);
//     contactAddedMessage();
// }

function removeContact(contact, contactDetails){
    var confirm = window.confirm("Do you want to delete this contact")

    if(confirm){
    //retriving local storage
    var contactData = localStorage.getItem("contacts"); 
    var result = JSON.parse(contactData);
    //used to remove contact from local storage (index, how many?)
    result.splice(contactDetails, 1)
    localStorage.setItem("contacts", JSON.stringify(result));
    var element = contact;
    element.parentElement.remove()
    contactDeleteMessage();
    // createContact();
    } else {
        cancelled()
    }
    
}

function contactDeleteMessage() {
    var message = document.getElementById("message");
    message.innerText = "One contact deleted successfully!"
    message.className = "show";
    setTimeout(function(){ message.className = message.className.replace("show", ""); }, 3000);
}
function contactAddedMessage() {
    var message = document.getElementById("message");
    message.innerText = "One contact added successfully!"
    message.className = "show";
    setTimeout(function(){ message.className = message.className.replace("show", ""); }, 3000);
}
function invalidInputMessage() {
    var message = document.getElementById("message");
    message.innerText = "Invalid Input!"
    message.className = "show";
    setTimeout(function(){ message.className = message.className.replace("show", ""); }, 3000);
}
function cancelled() {
    var message = document.getElementById("message");
    message.innerText = "Cancelled"
    message.className = "show";
    setTimeout(function(){ message.className = message.className.replace("show", ""); }, 3000);
}

//to retrive and show save local storage data on screen

function createContact() {
    var contactData = localStorage.getItem("contacts"); 
    var result = JSON.parse(contactData);

    result.forEach((contactDetails) => {
        console.log(contactDetails);
        const contactItem = document.createElement("div");
        contactItem.classList.add("contact")
        contactItem.innerHTML = `<p id="name-display">${contactDetails.firstName}</p>
        <p id="email-display">${contactDetails.email}</p>
        <p id="mobile-display">${contactDetails.mobileNumber}</p>
        <button id="btn-delete" onclick="removeContact(this, ${result.indexOf(contactDetails)})">Delete</button>`
        contactList.appendChild(contactItem);
    });
}

