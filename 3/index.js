document.addEventListener("DOMContentLoaded", function () {
  // console.log("project 3");

  // creating object templete

  const Contact = {
    // SerialNo: 0,
    Name: null,
    ContactNo: null,
  };

  // creating array of all contacts

  const ContactList = [];
  var dynamicSerialNo = 1;

  // creating factory function

  function addContact(Name = null, ContactNo = null) {
    let NewContact = {
      // SerialNo: SerialNo,
      Name: Name,
      ContactNo: ContactNo,
    };
    return NewContact;
  }

  // Creating sample contacts

  let contact1 = addContact("Dikshant Sharma", "9782128602");
  ContactList.push(contact1);

  // console.log(ContactList[0].Name);

  // function to display all the contacts

  ContactList.forEach((item) => {
    let contactTable = document.querySelector("#contactTable");

    // creating new html element

    let newRow = document.createElement("tr");

    //html content

    newRow.innerHTML = `
                <td class="row">${dynamicSerialNo}</td>
                <td class="row maindetails">${item.Name}</td>
                <td class="row maindetails">${item.ContactNo}</td>                        
        `;

    contactTable.appendChild(newRow);
  });

  // function to add contact

  document.querySelector("#add").addEventListener("click", () => {
    // let newSerial = document.querySelector("#SerialNo").value;
    let newName = document.querySelector("#Name").value;
    let newContact = document.querySelector("#ContactNo").value;

    // adding base condition

    if (newName.trim() === "" || newContact.trim() === "") {
      alert("to add new contact Enter all detail");
      emptyFields();
      return;
    }

    // validating the data

    if (
      typeof newName !== "string" ||
      isNaN(newContact) ||
      newContact.length != 10
    ) {
      alert("to add new contact Enter all detail");
      emptyFields();
      return;
    }

    // checking the duplication of number

    try {
      ContactList.forEach((value) => {
        if (value.ContactNo === newContact) {
          throw new Error("phone number is duplicated !");
        }
      });
    } catch (error) {
      alert(error.message);
      emptyFields();
      return;
    }

    // creating object for the given values

    let inputContact = addContact(newName, newContact);
    dynamicSerialNo++;

    let newRow = document.createElement("tr");

    //html content

    newRow.innerHTML = `
    <td class="row">${dynamicSerialNo}</td>
    <td class="row main">${newName}</td>
    <td class="row main">${newContact}</td>                        
    `;

    contactTable.appendChild(newRow);
    ContactList.push(inputContact);

    // clearing the input field
    // document.querySelector("#SerialNo").value = '';
    function emptyFields() {
      document.querySelector("#Name").value = "";
      document.querySelector("#ContactNo").value = "";
    }

    emptyFields();
  });

  document.querySelector("#update").addEventListener("click", () => {
    //fetching data

    let updateSerialNo = document.querySelector("#updateSerialNo").value;
    let updateName = document.querySelector("#updateName").value;
    let updateContact = document.querySelector("#updateContact").value;

    // function to empty the values of field

    let emptyInputs = function () {
      document.querySelector("#updateSerialNo").value = "";
      document.querySelector("#updateName").value = "";
      document.querySelector("#updateContact").value = "";
    };

    // checking empty fields

    if (
      updateSerialNo.trim() == "" ||
      updateContact == "" ||
      updateName.trim() == ""
    ) {
      alert("Enter all the details");
      emptyInputs();
      return;
    }

    // checking  validity of inputs

    if (
      isNaN(updateContact) ||
      updateContact.length != 10 ||
      isNaN(updateSerialNo) ||
      typeof updateName != "string"
    ) {
      alert("Invalid Inputs !");
      emptyInputs();
      return;
    }

    // checking value of serial noumber

    if (updateSerialNo > dynamicSerialNo || updateSerialNo <= 0) {
      alert("match not found!");
      emptyInputs();
      return;
    }

    // now updating the value

    ContactList[updateSerialNo - 1].ContactNo = updateContact;
    ContactList[updateSerialNo - 1].Name = updateName;

    // console.log(ContactList[updateSerialNo - 1].ContactNo);
    // console.log(ContactList[updateSerialNo - 1].Name);
    // console.log(updateContact);
    // console.log(updateName);

    dynamicSerialNo++;

    let updatedRow = document.querySelector(
      `#contactTable tr:nth-child(${updateSerialNo})`
    );
    updatedRow.innerHTML = `
        <td class="row">${updateSerialNo}</td>
        <td class="row">${updateName}</td>
        <td class="row">${updateContact}</td>
    `;

    alert("Contact updated successfully!");
    emptyInputs();
  });
});
