const btnAddContact = document.getElementById("btn-add-contact")
const firstName = document.getElementById("name")
const email = document.getElementById("email")
const mobileNumber = document.getElementById("mobile-number")
const contactList = document.getElementById("contact-list")

btnAddContact.addEventListener("click", function(e){
    e.preventDefault()
    const isValid = form.checkValidity()
    if(isValid) {
        createContact()
        firstName.value = ""
        email.value = ""
        mobileNumber.value = ""
    } else {
        alert("Invalid Input")
    }
    
})

function createContact(){
    const contactItem = document.createElement("div");
    contactItem.setAttribute("id", "contact");
    contactItem.innerHTML = `<p id="name-display">${firstName.value}</p>
    <p id="email-display">${email.value}</p>
    <p id="mobile-display">${mobileNumber.value}</p>
    <button id="btn-delete" onclick="removeContact(this)">Delete</button>`
    contactList.appendChild(contactItem);
}

function removeContact(contact){
    var contactToDelete = contact;
    contactToDelete.parentElement.remove();
    deleteMessage();
}

function deleteMessage() {
    var deletMessage = document.getElementById("delete-message");
    deletMessage.className = "show";
    setTimeout(function(){ deletMessage.className = deletMessage.className.replace("show", ""); }, 3000);
}