var propAppend = function (property, target, formatter, placeholder1, placeholder2) {
    for (var i in property) {
        var value = property[i];
        var data = formatter.replace(placeholder1, i)
            .replace(placeholder2, value);
        $(target).append(data);
    }
};

var objAppend = function (array, target, formatter, placeholder) {
    for (var i in array) {
        $(target).append(formatter.replace(placeholder, array[i]));
    }
};


var bio = {
    "name": "John Doe",
    "role": "Fornt-end developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "john.doe@email.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "Kiev"
    },
    "welcomeMessage": "Some welcome here!!",
    "skills": ["can type without looking at the keyboard", "can flip an omelet", "proficient in Facebook  and Twitter", "cracking joints"],
    "bioPic": "images/james.jpg",
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        propAppend(bio.contacts, '#topContacts', HTMLcontactGeneric, '%contact%', '%data%');

        propAppend(bio.contacts, '#footerContacts', HTMLcontactGeneric, '%contact%', '%data%');

        var pic = HTMLbioPic.replace("%data%", bio.bioPic);
        $('#header').append(pic);

        var msg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $('#header').append(msg).append(HTMLskillsStart);

        objAppend(bio.skills, "#skills", HTMLskills, "%data%");
    }
}

var education = {
    "schools": [
        {
            "name": "National Aviation University",
            "location": "Kiev, Ukraine",
            "degree": "Bachelors",
            "majors": ["CS"],
            "dates": 2015,
            "url": "http://www.icit.nau.edu.ua/"
        },
        {
            "name": "International Technological University",
            "location": "San Jose, CA",
            "degree": "Masters",
            "majors": ["CS"],
            "dates": 2017,
            "url": "itu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-end nanodegree",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    "display": function () {
        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            for (i in education.schools) {
                $("#education").append(HTMLschoolStart);

                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                $(".education-entry:last").append(formattedSchoolLocation);
                $(".education-entry:last").append(formattedSchoolMajor);
            }

            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (i in education.onlineCourses) {
                    $("#education").append(HTMLschoolStart);
                    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                    $(".education-entry:last").append(formattedOnlineTitle);
                    $(".education-entry:last").append(formattedOnlineSchool);
                    $(".education-entry:last").append(formattedOnlineURL);
                }
            }

        }
    }
}

var work = {
    "jobs": [
        {
            "employer": "Itera Ukraine",
            "title": "Automation QA Engineer",
            "location": "Kiev, Ukraine",
            "dates": "2013 - 2014",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna               aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "employer": "Abzooba Inc",
            "title": "QA Engineer",
            "location": "Kolkata – 700 091, West Bengal, India",
            "dates": "2015 - now",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna               aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }

    ],
    "display": function () {
        if (work.jobs.length > 0) {

            $("#workExperience").append(HTMLworkStart);

            for (i in work.jobs) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

                var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

                $(".work-entry:last").append(formattedEmployerWorkTitle);
                $(".work-entry:last").append(formattedWorkLocation);
                $(".work-entry:last").append(formattedDatesWorked);
                $(".work-entry:last").append(formattedWorkDescription);
            }

        }
    }
}

var projects = {
    "projects": [
        {
            "title": "Project 1",
            "dates": "2014",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna               aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": [
                "http://place-hold.it/500x300&text=Project 1",
                "http://place-hold.it/500x300&text=Project 1"
            ]
        }
    ],
    "display": function () {
        if (projects.projects.length > 0) {
            for (i in projects.projects) {
                $("#projects").append(HTMLprojectStart);

                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

                $(".project-entry:last").append(formattedProjectTitle);
                $(".project-entry:last").append(formattedProjectDates);
                $(".project-entry:last").append(formattedProjectDescription);

                for (img in projects.projects[i].images) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                    $(".project-entry:last").append(formattedProjectImage);
                }


            }
        }
    }
}


bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);


//var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
//$("#topContacts").append(formattedMobile);
//
//var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
//$("#topContacts").append(formattedEmail);
//
//var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);


//if(bio.skills.length > 0) {
//    $("#header").append(HTMLskillsStart);
//
//    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//    $("#skills").append(formattedSkill);
//    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//    $("#skills").append(formattedSkill);
//    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
//    $("#skills").append(formattedSkill);
//    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
//    $("#skills").append(formattedSkill);
//};