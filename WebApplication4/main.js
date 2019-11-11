
$(document).ready(function () {
    debugger
    renderTemplete("<tr data-id='{{ID}}><td>{{fname}} {{mname}} {{lname}} </td><td>{{age}}", { fname: 'anas', age: 20 });

    hideAllDivs();

    $(".navigation").click(function () {
        debugger
        hideRelatedDiv(this);
    });


    renderTable();

});


function renderTable() {
    var i = 0;
    for (i; i < patientsData.length; i++) {
        var data = patientsData[i];
        var genderString;
        if (data.gender == 1) {
            genderString = "male";
        }
        else {
            genderString = "female";
        }
        $("#patientsTable")
            .append(`<tr>
                <td>`+ data.ID + `</td>
                <td> `+ data.fname + " " + data.mname + " " + data.lname + `</td>
                <td>`+ data.email + ` </td>
                <td>`+ genderString + `</td>
                <td>`+ data.DOB + ` </td>
                <td>`+ data.Active + ` </td>
                <td>`+ data.creationDate + ` </td>
                <td> <button type="button" onclick="myFunction(this)" data-related-div="patient-edit" data-id="` + data.ID + `" class="btn btn-primary btn-sm navigation">Edit</button></td>
                <tr>`);
    }
}

function renderTemplete(templeteString, data) {
    debugger
    var result = [];
    var dataresult = templeteString;
    templeteString.replace(/\{{(.+?)\}}/g, function (_, m) {
        result.push(m);
    });
    var i = 0;
    for (i; i < result.length; i++) {
        debugger
        var value = data["" +result[i]+""];
        if (value) {
            dataresult = dataresult.replace(new RegExp('{{' + result[i] + '}}', 'gi'), value);
        }
    }

    return dataresult;
}

function myFunction(elem) {
    hideAllDivs();
    hideRelatedDiv(elem);
}

function hideRelatedDiv(elem) {
    hideAllDivs();
    var relatedDiv = $(elem).attr('data-related-div');
    $("." + relatedDiv + "").show();
}
function hideAllDivs() {
    $(".screen").hide();
}
