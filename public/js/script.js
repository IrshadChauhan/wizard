console.log("js");
var counter = 2;
var workcounter = 2;
// document.getElementById("ecounter").value = counter;
function addrow() {
  var education_table = document.getElementById("mytable");
  var row_count = education_table.rows.length;
  var row = education_table.insertRow();
  // alert(row_count);

  row.id = "edu" + counter;
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  var cell4 = row.insertCell();
  var cell5 = row.insertCell();

  cell1.innerHTML =
    "<br><label for='course" +
    counter +
    "'>Course name&nbsp;&nbsp;</label>" +
    "<select id='course" +
    counter +
    "' name='course" +
    counter +
    "'>" +
    "<option value='None'>None</option>" +
    "<option value='ssc'>ssc</option>" +
    " <option value='hsc'>hsc</option>" +
    " <option value='bachelor'>bachelor</option>" +
    "<option value='master'>master</option>" +
    "</select>";
  cell2.innerHTML =
    "<label for='board_or_university" +
    counter +
    "'>University&nbsp;&nbsp;</label>" +
    " <input type='text' size='10' id='board_or_university" +
    counter +
    "' name='uni" +
    counter +
    "'>";

  cell3.innerHTML =
    "<label for='pass_year" +
    counter +
    "'>Passing Year&nbsp;&nbsp;</label>" +
    " <input type='text' size='10' id='pass_year" +
    counter +
    "' name='pss" +
    counter +
    "'>";

  cell4.innerHTML =
    "<label for='percentege" +
    counter +
    "'>Percentage&nbsp;&nbsp;</label>" +
    " <input type='text' size='10' id='percentege" +
    counter +
    "' name='per" +
    counter +
    "'>";

  cell5.innerHTML =
    "<input type='button' id='edu" +
    counter +
    "' onclick='removeEdu(this.id)' value='-'>";

  counter = counter + 1;
  document.getElementById("ecounter").value = counter;
  // console.log(document.getElementById("ecounter").value);
}

function removeEdu(n, d1) {
  var td = event.target.parentNode;
  var tr = td.parentNode;
  n = n - 1;
  //console.log((document.getElementById(d1).value = n));
  // console.log(document.getElementById(d1.toString()).value);
  console.log(d1);

  var c = confirm("do you want to delete this row");
  if (c === true) {
    tr.parentNode.removeChild(tr);
  } else {
    event.preventDefault();
  }

  // var element = document.getElementById(n);
  // var choice = confirm("Do you really went to deglete this record?");
  // if (choice == true) {
  //   element.parentNodeg.removeChild(element);
  // }
}

function addwork() {
  var x = document.getElementById("worktable");
  var wrow = x.insertRow();
  wrow.id = "work" + workcounter;
  var wcell1 = wrow.insertCell();
  var wcell2 = wrow.insertCell();
  var wcell3 = wrow.insertCell();
  var wcell4 = wrow.insertCell();
  var wcell5 = wrow.insertCell();

  wcell1.innerHTML =
    "<br> <lable for='c_nm'" +
    workcounter +
    "'>Company Name&nbsp;&nbsp;</lable>" +
    "<input type='text' id='c_nm" +
    workcounter +
    "' name='c_nm" +
    workcounter +
    "'>";
  wcell2.innerHTML =
    "<lable for='design" +
    workcounter +
    "deg'>degsignation&nbsp;&nbsp;</lable>" +
    "<input type='text' id='design" +
    workcounter +
    "' name='design" +
    workcounter +
    "'>";
  wcell3.innerHTML =
    "<lable for='from" +
    workcounter +
    "'>From&nbsp;&nbsp;</lable>" +
    "<input type='date' id='from" +
    workcounter +
    "' name='from" +
    workcounter +
    "'>";
  wcell4.innerHTML =
    "<lable for='tp" +
    workcounter +
    "'>to&nbsp;&nbsp;</lable>" +
    "<input type='date' id='tp" +
    workcounter +
    "' name='tp" +
    workcounter +
    "'>";
  wcell5.innerHTML =
    "<input type='button' id='abc" +
    workcounter +
    "'  onclick='removeEdu(this.id)' value='-'>";

  workcounter = workcounter + 1;

  document.getElementById("wcounter").value = workcounter;
}
var langcounter = 2;
function addlang() {
  var x = document.getElementById("langtable");
  var lrow = x.insertRow();
  lrow.id = "langs" + langcounter;
  var lcell1 = lrow.insertCell();
  var lcell2 = lrow.insertCell();
  var lcell3 = lrow.insertCell();
  var lcell4 = lrow.insertCell();
  var lcell5 = lrow.insertCell();

  lcell1.innerHTML =
    "<br> <select id='lang" +
    langcounter +
    "' name='lang" +
    langcounter +
    "'>" +
    "<option value='select'>Select language</option>" +
    "<option value='hindi'>hindi</option>" +
    " <option value='english'>english</option>" +
    " <option value='gujarati'>gujarati</option>" +
    "</select>";
  lcell2.innerHTML =
    "<input type='checkbox' id='read" +
    langcounter +
    "' name='read" +
    langcounter +
    "' >&nbsp;&nbsp;<Label>read</Label>";
  lcell3.innerHTML =
    "<input type='checkbox' id='write" +
    langcounter +
    "' name='write" +
    langcounter +
    "' >&nbsp;&nbsp;<Label>write</Label>";
  lcell4.innerHTML =
    "<input type='checkbox' id='speak" +
    langcounter +
    "' name='speak" +
    langcounter +
    "' >&nbsp;&nbsp;<Label>speak</Label>";
  lcell5.innerHTML =
    "<input type='button' id='langs" +
    langcounter +
    "'  onclick='removeEdu(this.id)' value='-'>";

  langcounter = langcounter + 1;
  document.getElementById("lcounter").value = langcounter;
}

var techcounter = 2;
function addtech() {
  var x = document.getElementById("techtable");
  var trow = x.insertRow();
  trow.id = "techo" + techcounter;
  var tcell1 = trow.insertCell();
  var tcell2 = trow.insertCell();
  var tcell3 = trow.insertCell();
  var tcell4 = trow.insertCell();
  var tcell5 = trow.insertCell();

  tcell1.innerHTML =
    "<br> <select id='tech" +
    techcounter +
    "' name='tech" +
    techcounter +
    "'>" +
    "<option value='select'>Select technology</option>" +
    "<option value='php'>php</option>" +
    "<option value='mysql'>mysql</option>" +
    "<option value='lavavel'>laravel</option>" +
    "<option value='oracle'>oracle</option>" +
    "</select>";
  tcell2.innerHTML =
    "<input type='radio' id='be" +
    techcounter +
    "'name='teh" +
    techcounter +
    "'  >&nbsp;&nbsp;<Label>Beginer</Label>";
  tcell3.innerHTML =
    "<input type='radio' id='mi" +
    techcounter +
    "'name='teh" +
    techcounter +
    "'  >&nbsp;&nbsp;<Label>Midegator</Label";
  tcell4.innerHTML =
    "<input type='radio' id='ex" +
    techcounter +
    "'name='teh" +
    techcounter +
    "'>&nbsp;&nbsp;<Label>Expert</Label>";
  tcell5.innerHTML =
    "<input type='button' id='b" +
    techcounter +
    "'  onclick='removeEdu(this.id)' value='-'>";

  techcounter = techcounter + 1;
  document.getElementById("tcounter").value = techcounter;
}

function validateform() {
  var x = document.getElementById("fname").value;
  var y = document.getElementById("lname").value;
  var letters = /^[A-Za-z]+$/;
  if (x == "" || x == null) {
    console.log("jsdneflsnelfdsnklfdnlki");
    document.getElementById("fname").innerHTML = "can not be blank";
    alert("enter first name");
    document.getElementById("fname").focus();
    return false;
  } else if (!x.match(letters)) {
    document.getElementById("fname").innerHTML = "enter only alphabets";

    alert("enter wrong first name");
    document.getElementById("fname").focus();
    return false;
  }

  if (y == "" || y == null) {
    document.getElementById("lname").innerHTML = "can not be blank";

    alert("enter last name");
    document.getElementById("lname").focus();
    return false;
  } else if (!y.match(letters)) {
    document.getElementById("lname").innerHTML = "enter only alphabets";

    alert("enter wrong last name");
    document.getElementById("lname").focus();
    return false;
  }

  var y1 = document.getElementById("deg").value;
  if (y1 == "" || y1 == null) {
    document.getElementById("deg").innerHTML = "can not be blank";
    alert("enter degsignation");
    document.getElementById("deg").focus();
    return false;
  }
  if (!y1.match(letters)) {
    document.getElementById("deg").innerHTML = "enter only alphabets";

    alert("enter only alphabets");
    document.getElementById("deg").focus();
    return false;
  }

  var y = document.getElementById("add1").value;
  if (y == "" || y == null) {
    document.getElementById("add1").innerHTML = "can not be blank";

    document.getElementById("add1").focus();
    alert("enter address");
    return false;
  }

  var y = document.getElementById("email").value;
  var emailletters =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-za-z]{2,3})$/;
  if (y == "" || y == null) {
    document.getElementById("email").innerHTML = "can not be blank";

    alert("enter email");
    document.getElementById("email").focus();
    return false;
  } else if (!y.match(emailletters)) {
    document.getElementById("email").innerHTML = "enter wrong email";

    alert("enter proper email");
    document.getElementById("email").focus();
    return false;
  }

  var y = document.getElementById("add2").value;
  if (y == "" || y == null) {
    document.getElementById("add2").innerHTML = "can not be blank";

    document.getElementById("add2").focus();
    alert("enter address");
    return false;
  }

  var y = document.getElementById("phn_no").value;
  var phoneletters = /^\d{10}$/;
  if (y == "" || y == null) {
    document.getElementById("phn_no").innerHTML = "can not be blank";

    alert("enter phone number");
    document.getElementById("phn_no").focus();
    return false;
  } else if (!y.match(phoneletters)) {
    document.getElementById("phn_no").innerHTML = "enter wrong phone number";

    alert("enter Proper phone number");
    document.getElementById("phn_no").focus();
    return false;
  }

  var y = document.getElementById("ci").value;
  if (y == "" || y == null) {
    document.getElementById("ci").innerHTML = "can not be blank";

    alert("enter city");
    document.getElementById("ci").focus();
    return false;
  } else if (!y.match(letters)) {
    document.getElementById("ci").innerHTML = "enter only alphabets";

    document.getElementById("ci").focus();
    alert("enter Proper city");
    return false;
  }

  var genm = document.getElementById("genm");
  var genf = document.getElementById("genf");
  if (genm.checked == false && genf.checked == false) {
    document.getElementById("genm").innerHTML = "enter gendernm";

    alert("You must select genm");
    return false;
  }

  var y = document.getElementById("zip").value;
  var zipletters = /^\d{6}$/;
  if (y == "" || y == null) {
    document.getElementById("zip").innerHTML = "can not be blank";

    alert("enter zipcodeg");
    document.getElementById("zip").focus();
    return false;
  } else if (!y.match(zipletters)) {
    document.getElementById("zip").innerHTML = "enter wrong zip codeg";

    alert("enter Proper zipcodr");
    document.getElementById("zip").focus();
    return false;
  }

  for (let i = 1; i < counter; i++) {
    console.log(i);
    var course = document.getElementById("course" + i).value;
    if (course == "None") {
      alert("select course");
      document.getElementById("course" + i).focus();
      return false;
    } else {
      var aaa = document.getElementById("board_or_university" + i).value;
      var pass = document.getElementById("pass_year" + i).value;
      var per = document.getElementById("percentege" + i).value;
      if (aaa == "" || aaa == null) {
        alert("enter univercity name");
        document.getElementById("board_or_university" + i).focus();
        return false;
      }
      if (pass == "" || pass == null) {
        alert("enter passing year");
        document.getElementById("pass_year" + i).focus();
        return false;
      }
      if (per == "" || per == null) {
        alert("enter percentage");
        document.getElementById("percentege" + i).focus();
        return false;
      }
    }
  }
  for (let i = 1; i < workcounter; i++) {
    console.log(i);
    let work = document.getElementById("com" + i).value;
    console.log(work);
    if (work.length > 1) {
      var des = document.getElementById("des" + i).value;
      var from = document.getElementById("f" + i).value;
      var to = document.getElementById("t" + i).value;

      if (des == "" || des == null) {
        alert("enter Designation");
        document.getElementById("des" + i).focus();
        return false;
      }
      if (from == "" || from == null) {
        alert("enter from data");
        document.getElementById("f" + i).focus();
        return false;
      }
      if (to == "" || to == null) {
        alert("enter to date");
        document.getElementById("t" + i).focus();
        return false;
      }
      var eDate = new Date(to);
      var sDate = new Date(from);
      if (sDate > eDate) {
        alert(
          "Please ensure that the End Date is greater than or equal to the Start Date."
        );
        document.getElementById("f" + i).focus();
        return false;
      }
    }
  }

  for (let temp = 1; temp < langcounter; temp++) {
    var lan = document.getElementById("lang" + temp).value;
    if (lan == "select") {
      alert("select language");
      document.getElementById("lang" + temp).focus();
      return false;
    } else {
      var read = document.getElementById("re" + temp);
      var write = document.getElementById("wr" + temp);
      var speack = document.getElementById("se" + temp);
      if (
        read.checked == false &&
        write.checked == false &&
        speack.checked == false
      ) {
        alert("check any value");
        document.getElementById("re" + temp).focus();
        return false;
      }
    }
  }

  for (let i = 1; i < techcounter; i++) {
    var y = document.getElementById("tech" + i).value;
    if (y == "select") {
      alert("select technology");
      document.getElementById("tech" + i).focus();
      return false;
    } else {
      var a = document.getElementById("be" + i);
      var z = document.getElementById("mi" + i);
      var w = document.getElementById("ex" + i);
      if (a.checked == false && z.checked == false && w.checked == false) {
        alert("select technology experience");

        return false;
      }
    }
  }

  var re = document.getElementById("np").value;
  if (re == "" || re == null) {
    document.getElementById("np").innerHTML = "can not be blank";

    alert("enter Notice period");
    document.getElementById("np").focus();
    return false;
  }
  var re = document.getElementById("rename1").value;
  if (re == "" || re == null) {
    document.getElementById("rename1").innerHTML = "can not be blank";

    alert("enter name");
    document.getElementById("rename1").focus();
    return false;
  }

  var re = document.getElementById("renum1").value;
  if (re == "" || re == null) {
    document.getElementById("renum1").innerHTML = "can not be blank";

    alert("enter contect number");
    document.getElementById("renum1").focus();
    return false;
  }
  var re = document.getElementById("rerela1").value;
  if (re == "" || re == null) {
    document.getElementById("rerela1").innerHTML = "can not be blank";

    alert("enter relation");
    document.getElementById("rerela1").focus();
    return false;
  }
  var re = document.getElementById("rename2").value;
  if (re == "" || re == null) {
    document.getElementById("rename2").innerHTML = "can not be blank";

    alert("enter name");
    document.getElementById("rename2").focus();
    return false;
  }
  var re = document.getElementById("renum2").value;
  if (re == "" || re == null) {
    document.getElementById("renum2").innerHTML = "can not be blank";

    alert("enter contect number");
    document.getElementById("renum2").focus();
    return false;
  }
  var re = document.getElementById("rerela2").value;
  if (re == "" || re == null) {
    document.getElementById("rerela2").innerHTML = "can not be blank";

    alert("enter relation");
    document.getElementById("rerela2").focus();
    return false;
  }
  var re = document.getElementById("e_ctc").value;
  if (re == "" || re == null) {
    document.getElementById("e_ctc").innerHTML = "can not be blank";

    alert("enter expected ctc");
    document.getElementById("e_ctc").focus();
    return false;
  }
  var re = document.getElementById("c_ctc").value;
  if (re == "" || re == null) {
    document.getElementById("c_ctc").innerHTML = "can not be blank";

    alert("enter current ctc");
    document.getElementById("c_ctc").focus();
    return false;
  }

  var y = document.getElementById("f1");
  var valid_size = 1 * 1000 * 3000;
  if (y.files.length != 0) {
    file_size = file.files[0].size;

    if (file_size > valid_size) {
      alert("file size should be less then 1 mb");
      return false;
    }
  }
}
