

var selectedRecord = null;
var selectedRecordID = null;

var baseUrl = "https://waterco.herokuapp.com";

$(document).ready(function () {
    
});

// members
function addRecordToTable(data){
    var memberslist = document.getElementById("memberslist").getElementsByTagName("tbody")[0];
    var newRecord = memberslist.insertRow(memberslist.length);

    
    var cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.client_id;
    var cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.first_name;
    var cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.last_name;
    var cell4 = newRecord.insertCell(3);
    cell4.innerHTML = data.email;
    var cell5 = newRecord.insertCell(4);
    cell5.innerHTML = data.client_password;
    var cell6 = newRecord.insertCell(5);
    cell6.innerHTML = data.balance;
    var cell7 = newRecord.insertCell(6);
    cell7.innerHTML = data.payment_plan;
    var cell8 = newRecord.insertCell(7);
    cell8.innerHTML = data.client_sector_id;
    var cell9 = newRecord.insertCell(8);
    cell9.innerHTML = data.client_address;
    var cell10 = newRecord.insertCell(9);
    cell10.innerHTML = data.client_zone_id;
}

function onFormSubmit(){
    var formData = {};
    formData["first_name"] = document.getElementById("first_name").value;
    formData["last_name"] = document.getElementById("last_name").value;
    formData["email"] = document.getElementById("email").value;
    formData["client_password"] = document.getElementById("client_password").value;
    formData["payment_plan"] = document.getElementById("payment_plan").value;
    formData["client_sector_id"] = document.getElementById("client_sector_id").value;
    formData["client_address"] = document.getElementById("client_address").value;
    formData["client_zone_id"] = document.getElementById("client_zone_id").value;

    if (selectedRecord == null) {
        saveFormData(formData);
    } 
    clearForm();
}

function saveFormData(data){
    var postData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: baseUrl + "/members",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (response) {
            addRecordToTable(response.data);
        }
    });
}

function clearForm() {
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("client_password").value = "";
    document.getElementById("payment_plan").value = "";
    document.getElementById("client_sector_id").value = "";
    document.getElementById("client_address").value = "";
    document.getElementById("client_zone_id").value = "";
}

// members details
function onFormSubmission() {
    var formData = {};
    formData["client_id"] = document.getElementById("client_id").value;
    var clientId = document.getElementById("client_id").value;
    
    $.ajax({
        type:  "GET",
        url: baseUrl + "/members/" + clientId,
        cache: false,
        success: function (response) {
            addRecordToTable(response.data);
        }
    });
    clearDetailsForm();
}
function clearDetailsForm(){
    document.getElementById("client_id").value = "";
}

// capture payment
function onFormClick(){
    var formData = {};
    formData["payment_client_id"] = document.getElementById("payment_client_id").value;
    formData["payment"] = document.getElementById("payment").value;
    formData["payment_date"] = document.getElementById("payment_date").value;
    formData["payment_premise_id"] = document.getElementById("payment_premise_id").value;

    if (selectedRecord == null) {
        saveFormInfo(formData);
    } 
    clearPaymentForm();
}

function saveFormInfo(data){
    var postData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: baseUrl + "/payments",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (response) {
            addPaymentToTable(response.data);
        }
    });
}

function addPaymentToTable(data){
    var memberslist = document.getElementById("memberslist").getElementsByTagName("tbody")[0];
    var newRecord = memberslist.insertRow(memberslist.length);

    
    var cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.payment_client_id;
    var cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.payment;
    var cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.payment_date;
    var cell4 = newRecord.insertCell(3);
    cell4.innerHTML = data.payment_premise_id;
    
}

function clearPaymentForm(){
    document.getElementById("client_id").value = "";
    document.getElementById("payment").value= "";
    document.getElementById("payment_date").value= "";
    document.getElementById("payment_premise_id").value= "";
}

// view member bill
function onFormEntry() {
    var formData = {};
    formData["bill_id"] = document.getElementById("bill_id").value;
    var billId = document.getElementById("bill_id").value;
    
    $.ajax({
        type:  "GET",
        url: baseUrl + "/bill/" + billId,
        cache: false,
        success: function (response) {
            addBillToTable(response.data);
        }
    });
    clearBillForm();
}
function addBillToTable(data){
    var memberslist = document.getElementById("memberslist").getElementsByTagName("tbody")[0];
    var newRecord = memberslist.insertRow(memberslist.length);

    
    var cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.bill_id;
    var cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.balance;
    var cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.bill_client_id;
    var cell4 = newRecord.insertCell(3);
    cell4.innerHTML = data.bill_staff_id;
    
}
function clearBillForm(){
    document.getElementById("bill_id").value = "";
}











