const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const port = process.env.PORT || 3005;
var app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "JOB_DB",
  port: "3306",
});

//url encoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set path for public dir
app.use(express.static(path.join(__dirname, "/public")));

//set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// jobApp page render
app.get("/", (req, res) => {
  res.render("jobApp");
});

app.get("/view", (req, res) => {
  let viewId = req.query.id;
  // console.log(viewId);

  let finalviewquery =
    "SELECT * FROM job_application INNER JOIN edu_detail ON job_application.job_id = edu_detail.job_id INNER JOIN lang_known ON job_application.job_id = lang_known.job_id INNER JOIN tech_known ON job_application.job_id = tech_known.job_id INNER JOIN preferences ON job_application.job_id = preferences.job_id INNER JOIN work_exp ON job_application.job_id = work_exp.job_id INNER JOIN reference_contact ON job_application.job_id = reference_contact.job_id WHERE job_application.job_id = " +
    viewId;
  // console.log(finalviewquery);

  connection.query(finalviewquery, function (err, results) {
    console.log(results); // results contains rows returned by server
    res.render("view", { data: results });
  });
});

app.get("/delete", (req, res) => {
  let deleteId = req.query.id;

  let deletestr = "";

  deletestr =
    "DELETE job_application,edu_detail,lang_known,tech_known,preferences,work_exp,reference_contact FROM job_application INNER JOIN edu_detail ON job_application.job_id = edu_detail.job_id INNER JOIN lang_known ON job_application.job_id = lang_known.job_id INNER JOIN tech_known ON job_application.job_id = tech_known.job_id INNER JOIN preferences ON job_application.job_id = preferences.job_id INNER JOIN work_exp ON job_application.job_id = work_exp.job_id INNER JOIN reference_contact ON job_application.job_id = reference_contact.job_id WHERE job_application.job_id = " +
    deleteId;

  // console.log(deletestr);

  connection.query(deletestr, function (err, results) {
    res.render("delete");
    // console.log("deleted");
  });
});

app.get("/show", (req, res) => {
  connection.query(
    "SELECT * FROM `job_application`",
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      res.render("show", { data: results });
    }
  );
});

app.get("/update", (req, res) => {
  let updateId = req.query.id;
  let updatestr =
    "SELECT * FROM job_application WHERE  job_application.job_id = " + updateId;
  connection.query(updatestr, function (err, results) {
    connection.query(
      `SELECT * FROM edu_detail WHERE  edu_detail.job_id = ${updateId}`,
      function (err, results2) {
        connection.query(
          `SELECT * FROM work_exp WHERE  work_exp.job_id = ${updateId}`,
          function (err, results3) {
            connection.query(
              `SELECT * FROM reference_contact WHERE  reference_contact.job_id = ${updateId}`,
              function (err, results4) {
                connection.query(
                  `SELECT * FROM preferences WHERE  preferences.job_id = ${updateId}`,
                  function (err, results5) {
                    connection.query(
                      `SELECT *  FROM lang_known WHERE  lang_known.job_id = ${updateId}`,
                      function (err, results6) {
                        console.log(results6);
                        connection.query(
                          `SELECT * FROM tech_known WHERE tech_known.job_id = ${updateId}`,
                          function (err, results7) {
                            res.render("update", {
                              data: results,
                              id: updateId,
                              data2: results2,
                              data3: results3,
                              data4: results4,
                              data5: results5,
                              data6: results6,
                              data7: results7,
                            });
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  });
});

app.post("/jobupdate", (req, res) => {
  let updateId = req.query.id;
  let fnm = req.body.fname;
  let lname = req.body.lname;
  let deg = req.body.deg;
  let add1 = req.body.add1;
  let email = req.body.email;
  let add2 = req.body.add2;
  let phn_no = req.body.phn_no;
  let state = req.body.state;
  let city = req.body.city;
  let gen = req.body.gen;
  let zipcode = req.body.zipcode;
  let rela = req.body.rela;
  let bod = req.body.bod;

  let newstr = "";

  newstr =
    " UPDATE job_application SET first_name= '" +
    fnm +
    "', last_name= '" +
    lname +
    "' ,designation= '" +
    deg +
    "' , email= '" +
    email +
    "' ,city='" +
    city +
    "', state= '" +
    state +
    " ',gender= '" +
    gen +
    " ',zip_code= '" +
    zipcode +
    " ',phone_number= '" +
    phn_no +
    "' ,relation_status= '" +
    rela +
    " ',date_of_birth=' " +
    bod +
    " ',addr1= '" +
    add1 +
    " ',addr2= '" +
    add2 +
    "' WHERE job_id = " +
    updateId;

  let deletestr = "";

  deletestr =
    "DELETE edu_detail,lang_known,tech_known,preferences,work_exp,reference_contact FROM job_application INNER JOIN edu_detail ON job_application.job_id = edu_detail.job_id INNER JOIN lang_known ON job_application.job_id = lang_known.job_id INNER JOIN tech_known ON job_application.job_id = tech_known.job_id INNER JOIN preferences ON job_application.job_id = preferences.job_id INNER JOIN work_exp ON job_application.job_id = work_exp.job_id INNER JOIN reference_contact ON job_application.job_id = reference_contact.job_id WHERE job_application.job_id = " +
    updateId;
  console.log(deletestr);

  connection.query(newstr, function (err, results) {
    // console.log(results);
  });

  connection.query(deletestr, function (err, results) {
    // console.log(results);
  });
  // ================================================================
  let ecounter = req.body.ecounter;
  let wcounter = req.body.wcounter;
  let lcounter = req.body.lcounter;
  let tcounter = req.body.tcounter;
  let edustr = "";
  edustr =
    "INSERT INTO `edu_detail`( `course`,`university`, `passingyear`, `percentage`, `job_id`)  VALUES ";
  let eduquery = "";

  for (let i = 1; i < ecounter; i++) {
    eduquery += "('" + req.body["course" + i] + "',";
    eduquery += "'" + req.body["uni" + i] + "',";
    eduquery += "'" + req.body["pss" + i] + "',";
    eduquery += "'" + req.body["per" + i] + "',";
    eduquery += "'" + updateId + "'),";
  }

  eduquery = eduquery.slice(0, eduquery.length - 1);

  let finaleduquery = edustr + eduquery;
  console.log(finaleduquery);

  connection.query(finaleduquery, function (err, results) {
    console.log(results);
  });
  // ---------------------------------------------------------------

  let workstr = "",
    workquery = "",
    finalworkquery = "";

  workstr =
    "INSERT INTO `work_exp`(`c_name`, `designation`, `from_date`, `end_date`, `job_id`) VALUES ";

  for (let i = 1; i <= wcounter; i++) {
    workquery += "('" + req.body["c_nm" + i] + "',";
    workquery += "'" + req.body["design" + i] + "',";
    workquery += "'" + req.body["from" + i] + "',";
    workquery += "'" + req.body["tp" + i] + "',";
    workquery += "'" + updateId + "'),";
  }

  workquery = workquery.slice(0, workquery.length - 1);

  finalworkquery = workstr + workquery;
  // console.log(finalworkquery);

  connection.query(finalworkquery, function (err, results) {
    // console.log(results);
  });

  // -----------------------------------------------------------

  let langstr = "",
    langquery = "",
    finallangquery = "";

  langstr =
    "INSERT INTO `lang_known`(`lang`,`readdata`, `writedata`, `speakdata`,`job_id`) VALUES  ";

  for (let i = 1; i <= lcounter; i++) {
    langquery += "('" + req.body["lang" + i] + "',";
    langquery += "'" + req.body["read" + i] + "',";
    langquery += "'" + req.body["write" + i] + "',";
    langquery += "'" + req.body["speak" + i] + "',";
    langquery += "'" + updateId + "'),";
  }

  langquery = langquery.slice(0, langquery.length - 1);

  finallangquery = langstr + langquery;
  // console.log(finalworkquery);

  connection.query(finallangquery, function (err, results) {
    if (err) throw err;
    // console.log(results);
  });

  // --------------------------------------------------------------------

  let techstr =
    "   INSERT INTO `tech_known`(`techname`, `techmode`, `job_id`) VALUES ";
  let techquery = "",
    finaltechquery = "";

  for (let i = 1; i <= tcounter; i++) {
    techquery += "('" + req.body["tech" + i] + "',";
    techquery += "'" + req.body["teh" + i] + "',";
    techquery += "'" + updateId + "'),";
  }

  techquery = techquery.slice(0, techquery.length - 1);

  finaltechquery = techstr + techquery;
  // console.log(finaltechquery, " gvvhvh");

  connection.query(finaltechquery, function (err, results) {
    if (err) throw err;
    // console.log(results);
  });
  //=======================================================

  let refstr =
    " INSERT INTO `reference_contact`(`ref_name`, `contact_number`, `relation`, `job_id`) VALUES " +
    " ('" +
    req.body.refre +
    "'," +
    req.body.contect_no +
    ",'" +
    req.body.relation1 +
    "'," +
    updateId +
    "),('" +
    req.body.refre2 +
    "'," +
    req.body.contect_no2 +
    ",'" +
    req.body.relation2 +
    "'," +
    updateId +
    ")";
  console.log(refstr);
  connection.query(refstr, function (err, results) {
    // console.log(results);
  });
  //====================================================================

  let prestr =
    "INSERT INTO `preferences`( `notice_period`, `expected_ctc`, `current_ctc`, `department`, `prefered_location`, `job_id`) VALUES ('" +
    req.body.n_per +
    "','" +
    req.body.e_ctc +
    "','" +
    req.body.c_ctc +
    "','" +
    req.body.dept +
    "','" +
    req.body.loca +
    "','" +
    updateId +
    " ')";
  console.log(prestr);

  connection.query(prestr, function (err, results) {
    // console.log(results);
  });
  // ==================================================================

  connection.query(
    "SELECT * FROM `job_application`",
    function (err, results, fields) {
      res.render("show", { data: results });
    }
  );
});

//for the post jobApp form
app.post("/jobAppAction", (req, res) => {
  let fnm = req.body.fname;
  let lname = req.body.lname;
  let deg = req.body.deg;
  let add1 = req.body.add1;
  let email = req.body.email;
  let add2 = req.body.add2;
  let phn_no = req.body.phn_no;
  let state = req.body.state;
  let city = req.body.city;
  let gen = req.body.gen;
  let zipcode = req.body.zipcode;
  let rela = req.body.rela;
  let bod = req.body.bod;
  let jobstr;

  let ecounter = req.body.ecounter;
  let wcounter = req.body.wcounter;
  let lcounter = req.body.lcounter;
  let tcounter = req.body.tcounter;

  jobstr =
    "INSERT INTO job_application (last_name, first_name, designation,email,city, state, zip_code, gender, phone_number, relation_status,date_of_birth,addr1, addr2) VALUES ('" +
    lname +
    "','" +
    fnm +
    "','" +
    deg +
    "','" +
    email +
    "','" +
    city +
    "','" +
    state +
    "','" +
    zipcode +
    "','" +
    gen +
    "','" +
    phn_no +
    "','" +
    rela +
    "','" +
    bod +
    "','" +
    add1 +
    "','" +
    add2 +
    "')";

  connection.query(jobstr, function (err, results) {
    let lastId = results.insertId;
    let edustr =
      "INSERT INTO `edu_detail`( `course`,`university`, `passingyear`, `percentage`, `job_id`)  VALUES ";
    let eduquery = "";

    for (let i = 1; i < ecounter; i++) {
      eduquery += "('" + req.body["course" + i] + "',";
      eduquery += "'" + req.body["uni" + i] + "',";
      eduquery += "'" + req.body["pss" + i] + "',";
      eduquery += "'" + req.body["per" + i] + "',";
      eduquery += "'" + lastId + "'),";
    }

    eduquery = eduquery.slice(0, eduquery.length - 1);

    let finaleduquery = edustr + eduquery;
    console.log(finaleduquery);

    connection.query(finaleduquery, function (err, results) {
      // console.log(results);
    });
    // ---------------------------------------------------------------

    let workstr = "",
      workquery = "",
      finalworkquery = "";

    workstr =
      "INSERT INTO `work_exp`(`c_name`, `designation`, `from_date`, `end_date`, `job_id`) VALUES ";

    for (let i = 1; i < wcounter; i++) {
      workquery += "('" + req.body["c_nm" + i] + "',";
      workquery += "'" + req.body["design" + i] + "',";
      workquery += "'" + req.body["from" + i] + "',";
      workquery += "'" + req.body["tp" + i] + "',";
      workquery += "'" + lastId + "'),";
    }

    workquery = workquery.slice(0, workquery.length - 1);

    finalworkquery = workstr + workquery;
    // console.log(finalworkquery);

    connection.query(finalworkquery, function (err, results) {
      // console.log(results);
    });

    // -----------------------------------------------------------

    let langstr = "",
      langquery = "",
      finallangquery = "";

    langstr =
      "INSERT INTO `lang_known`(`lang`,`readdata`, `writedata`, `speakdata`,`job_id`) VALUES  ";

    for (let i = 1; i < lcounter; i++) {
      langquery += "('" + req.body["lang" + i] + "',";
      langquery += "'" + req.body["read" + i] + "',";
      langquery += "'" + req.body["write" + i] + "',";
      langquery += "'" + req.body["speak" + i] + "',";
      langquery += "'" + lastId + "'),";
    }

    langquery = langquery.slice(0, langquery.length - 1);

    finallangquery = langstr + langquery;
    // console.log(finalworkquery);

    connection.query(finallangquery, function (err, results) {
      // console.log(results);
    });

    // --------------------------------------------------------------------

    let techstr =
      "   INSERT INTO `tech_known`(`techname`, `techmode`, `job_id`) VALUES ";
    let techquery = "",
      finaltechquery = "";

    for (let i = 1; i < tcounter; i++) {
      techquery += "('" + req.body["tech" + i] + "',";
      techquery += "'" + req.body["teh" + i] + "',";
      techquery += "'" + lastId + "'),";
    }

    techquery = techquery.slice(0, techquery.length - 1);

    finaltechquery = techstr + techquery;
    // console.log(finaltechquery, " gvvhvh");

    connection.query(finaltechquery, function (err, results) {
      // console.log(results);
    });
    //=======================================================

    let refstr =
      " INSERT INTO `reference_contact`(`ref_name`, `contact_number`, `relation`, `job_id`) VALUES " +
      " ('" +
      req.body.refre +
      "'," +
      req.body.contect_no +
      ",'" +
      req.body.relation1 +
      "'," +
      lastId +
      "),('" +
      req.body.refre2 +
      "'," +
      req.body.contect_no2 +
      ",'" +
      req.body.relation2 +
      "'," +
      lastId +
      ")";
    console.log(refstr);
    connection.query(refstr, function (err, results) {
      // console.log(results);
    });
    //====================================================================

    let prestr =
      "INSERT INTO `preferences`( `notice_period`, `expected_ctc`, `current_ctc`, `department`, `prefered_location`, `job_id`) VALUES ('" +
      req.body.n_per +
      "','" +
      req.body.e_ctc +
      "','" +
      req.body.c_ctc +
      "','" +
      req.body.dept +
      "','" +
      req.body.loca +
      "','" +
      lastId +
      " ')";
    console.log(prestr);

    connection.query(prestr, function (err, results) {
      // console.log(results);
    });
    //-------------------------------------------------------------------
    connection.query(
      "SELECT * FROM `job_application`",
      function (err, results, fields) {
        // console.log(results); // results contains rows returned by server
        res.render("show", { data: results });
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
