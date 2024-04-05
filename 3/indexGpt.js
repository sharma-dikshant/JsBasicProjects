document.addEventListener("DOMContentLoaded", function () {
    const ContactList = [];
    var dynamicSerialNo = 1;
  
    function addContact(Name = null, ContactNo = null) {
      let NewContact = {
        Name: Name,
        ContactNo: ContactNo,
      };
      return NewContact;
    }
  
    // Populate existing contacts
    ContactList.forEach((item) => {
      renderContact(item);
    });
  
    // Add contact event listener
    document.querySelector("#add").addEventListener("click", () => {
      let newName = document.querySelector("#Name").value;
      let newContact = document.querySelector("#ContactNo").value;
  
      if (newName.trim() === "" || newContact.trim() === "") {
        alert("To add a new contact, enter all details.");
        clearInputs();
        return;
      }
  
      if (
        typeof newName !== "string" ||
        isNaN(newContact) ||
        newContact.length !== 10
      ) {
        alert(
          "To add a new contact, enter all details correctly. The contact number should be a 10-digit number."
        );
        clearInputs();
        return;
      }
  
      if (isContactDuplicate(newContact)) {
        alert("Phone number is duplicated!");
        clearInputs();
        return;
      }
  
      let inputContact = addContact(newName, newContact);
      ContactList.push(inputContact);
  
      renderContact(inputContact);
      clearInputs();
    });
  
    // Update contact event listener
    document.querySelector("#update").addEventListener("click", () => {
      let updateSerialNo = document.querySelector("#updateSerialNo").value;
      let updateName = document.querySelector("#updateName").value;
      let updateContact = document.querySelector("#updateContact").value;
  
      if (
        updateSerialNo.trim() === "" ||
        updateName.trim() === "" ||
        updateContact.trim() === ""
      ) {
        alert("Enter all the details.");
        clearUpdateInputs();
        return;
      }
  
      if (
        isNaN(updateContact) ||
        updateContact.length !== 10 ||
        isNaN(updateSerialNo) ||
        typeof updateName !== "string"
      ) {
        alert("Invalid inputs!");
        clearUpdateInputs();
        return;
      }
  
      if (updateSerialNo > dynamicSerialNo || updateSerialNo <= 0) {
        alert("Match not found!");
        clearUpdateInputs();
        return;
      }
  
      ContactList[updateSerialNo - 1].ContactNo = updateContact;
      ContactList[updateSerialNo - 1].Name = updateName;
  
      clearUpdateInputs();
      alert("Contact updated successfully!"); // Provide feedback to the user
    });
  
    // Helper function to render a contact in the table
    function renderContact(contact) {
      let contactTable = document.querySelector("#contactTable");
      let newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td class="row">${dynamicSerialNo++}</td>
        <td class="row">${contact.Name}</td>
        <td class="row">${contact.ContactNo}</td>                        
      `;
      contactTable.appendChild(newRow);
    }
  
    // Helper function to clear add contact inputs
    function clearInputs() {
      document.querySelector("#Name").value = "";
      document.querySelector("#ContactNo").value = "";
    }
  
    // Helper function to clear update contact inputs
    function clearUpdateInputs() {
      document.querySelector("#updateSerialNo").value = "";
      document.querySelector("#updateName").value = "";
      document.querySelector("#updateContact").value = "";
    }
  
    // Helper function to check if a contact with the given contact number already exists
    function isContactDuplicate(contactNo) {
      return ContactList.some((contact) => contact.ContactNo === contactNo);
    }
  });
  