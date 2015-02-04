var bio = {
  "name" : "Jane Sheppard",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "773.405.0989",
    "email" : "janemsheppard@gmail.com",
    "github" : "heyjane",
    "twitter" : "botajuste",
    "location" : "Chicago"
  },
  "welcomeMessage" : '<br>"Good design is making something intelligible \
  and memorable.<br>  Great design is making something memorable and \
  meaningful." <br>- Dieter Rams',
  "skills" : [
  "JavaScript", "HTML5", "CSS", "Python", "UX", "Integration"
  ],
  "biopic" : "images/janeBioPic.png"
}

var education = {
  "schools": [
    {
      "name": "University of Illinois",
      "location": "Urbana-Champaign",
      "degree": "Bachelor of Science in Engineering",
      "majors": "Engineering with a Concentration in Marketing and Management",
      "dates": "1982",
      "url" : "http://engineering.illinois.edu/",
    }
  ],

  "onlineCourses" : [
   {
      "title" : "Front-End Developer Nanodegree",
      "school" : "Udacity",
      "date" : "2015",
      "url" : "http://www.udacity.com/course/nd001"
    },
     {
      "title" : "Object-Oriented JavaScript",
      "school" : "Udacity",
      "date" : "2015",
      "url" : "http://www.udacity.com/course/ud015"
    },
    {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "date" : "2015",
      "url" : "http://www.udacity.com/course/ud804"
    },
    {
      "title" : "Intro to jQuery",
      "school" : "Udacity",
      "date" : "2015",
      "url" : "http://www.udacity.com/course/ud245"
    },
    {
      "title" : "Intro to HTML and CSS",
      "school" : "Udacity",
      "date" : "2014",
      "url" : "http://www.udacity.com/course/ud304"
    },
    {
      "title" : "How to Use Git and GitHub",
      "school" : "Udacity",
      "date" : "2014",
      "url" : "http://www.udacity.com/course/ud775"
    },
    {
      "title" : "Introduction to Computer Science",
      "school" : "Udacity",
      "date" : "2012",
      "url" : "http://www.udacity.com/course/cs101"
    }
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "JS Consulting",
      "title" : "Independent Consultant",
      "location" : "Chicago, IL",
      "dates" : "2011-present",
      "description" : "Evolved early stage businesses from ideation to execution.  \
      Strategized and implemented transformational solutions in marketing \
      automation, performance management, goal alignment, project management, \
      CRM, sales pipeline management, systems integration, mobile and web-based \
      productivity tools, workflow management, and process efficiency.  \
      Reduced expenses and increased functional productivity or in small business \
      clients across multiple industries."
    },
    {
      "employer" : "Sheppard Homeschool",
      "title" : "Curriculum Developer/Home Educator",
      "location" : "Chicago, IL",
      "dates" : "1993-2013",
      "description" : "Researched, developed, and implemented curricula for pre-K \
      through grade 12. Provided consulting services to charter schools to \
      define scope and content for accelerated learning programs.  \
      Managed home school education outreach programs in partnership with \
      Lyric Opera of Chicago, Chicago Symphony Orchestra, and the Art Institute \
      of Chicago.  Successful students include a University of Chicago full \
      academic scholarship graduate."
    },
    {
      "employer" : "Digital Equipment Corporation",
      "title" : "Sales Support Account Manager",
      "location" : "Elk Grove Village, IL",
      "dates" : "1986-1993",
      "description" : "Managed technical sales support for the Quaker Oats \
      account in Chicago.  Developed strategic plans, prepared proposals, \
      delivered technical training to internal sales teams and external clients, \
      and managed customer technology support.  Created and implemented \
      software development project schedules and technical documentation plans.  \
      Drafted, edited, and published marketing and technical documentation \
      for software and hardware product releases."
    },
    {
      "employer" : "Airfone, Inc.",
      "title" : "Software Systems Engineer",
      "location" : "Oak Brook, IL",
      "dates" : "1984-1986",
      "description" : "Evaluated software design proposals for system \
      compatibility and feasibility.  Delivered in-flight testing, flight \
      crew training, and system maintenance for a public in-flight \
      telephone service.  Wrote and implemented a detailed pilot system \
      evaluation plan.  Developed and delivered a national field technician \
      training seminar.  Created detailed design specifications for a \
      public telephone system for rail travel between New York and Washington, D.C"
    },
    {
      "employer" : "University of Illinois at Urbana-Champaign",
      "title" : "Instructor",
      "location" : "Urbana-Champaign, IL",
      "dates" : "1984",
      "description" : "Taught Engineering Graphics and Design.  \
      Supervised a design and drafting laboratory.  \
      Cited in UIUC list of excellent professors and instructors."
    },
    {
      "employer" : "Arthur Andersen & Co.",
      "title" : "Systems Consultant",
      "location" : "Chicago, IL",
      "dates" : "1983-1984",
      "description" : "Delivered system analyst and consulting services \
      to corporate clients.  Developed a Project Control System for client \
      billing and time management.  Organized a nationwide training \
      seminar for Information Processing Systems."
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "Mockup to Website",
      "dates" : "December 2014",
      "description" : "Replicated a design mockup (PDF-file) in HTML \
      and CSS as part of Udacity's Front-End Web Developer Nanodegree coursework.",
      "images" :"images/mug.png",
      /* NOTE:  I used one image per project instead of an array to accomodate my
      formatting of three projects across the page.
      */
      "url" : "https://github.com/heyjane/Udacity-FrontEnd-Project-One.git"
    },
    {
      "title" : "Southeast Asia Tour Blog",
      "dates" : "December 2012 - January 2013",
      "description" : "Created a travel blog to share backpacking \
      travels in Southeast Asia as part of a homeschool abroad trip.",
      "images" : "images/tripography.png",
      "url" : "http://www.tripography.weebly.com/"
    },
    {
      "title" : "Botajuste",
      "dates" : "March 2014",
      "description" : "Designed a website to explore the market \
      potential for petite-sized boots.  Website includes a forms survey and blog.",
      "images" : "images/boot.jpg",
      "url" : "http://www.botajuste.com/"
    }
  ]
};


/* The menuOptions function displays the top nav bar that stays fixed
on the top right corner of each page even as the user scrolls around in
the resume.  This feature allows the user to quickly jump to the main
resume sections easily.  Note that the nav bar is responsive in that
it will not be displayed for very small screens.
*/
    function menuOptions() {
      var formattedProfile = HTMLmenuOptions.replace("#", "#header").replace("%data%", "images/profile.png");
      var formattedWork = HTMLmenuOptions.replace("#", "#workExperience").replace("%data%", "images/work.png");
      var formattedEdu = HTMLmenuOptions.replace("#", "#education").replace("%data%", "images/edu.png");
      var formattedProjects = HTMLmenuOptions.replace("#", "#projects").replace("%data%", "images/projects.png");
      $("#menuOptions").append(formattedProfile);
      $("#menuOptions").append(formattedWork);
      $("#menuOptions").append(formattedEdu);
      $("#menuOptions").append(formattedProjects);
    }

    menuOptions();

 /*  The bio.display function creates a display function within the
 bio object wo display user profile information in the header and
 footer.
 */


    bio.display = function() {
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
      var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
      var formattedFooterMobile = HTMLfooter.replace("%imageSource%", "images/footerMobile.png").replace("%data%", bio.contacts.mobile);
      var formattedFooterEmail = HTMLfooter.replace("%imageSource%", "images/footerEmail.png").replace("%data%", bio.contacts.email);
     var formattedFooterGithub = HTMLfooter.replace("%imageSource%", "images/footerGit.png").replace("%data%", bio.contacts.github);
      $("#header").prepend(formattedRole);
      $("#header").prepend(formattedName);
      $("#header").append(formattedPic);
      $("#topContacts").append(formattedMobile);
      $("#topContacts").append(formattedEmail);
      $("#topContacts").append(formattedGithub);
      $("#topContacts").append(formattedLocation);
      $("#footerContacts").append(formattedFooterMobile);
      $("#footerContacts").append(formattedFooterEmail);
      $("#footerContacts").append(formattedFooterGithub);
      $("#header").append(formattedWelcomeMsg);
    }

    bio.display();

/*  The bio.skills.display function displays the skills array in the header.
*/


    bio.skills.display = function() {
      $("#header").append(HTMLskillsStart);
      var formattedSkill;
      var len = bio.skills.length;
      for (var i = 0; i < len; i++) {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }

    if (bio.skills.length > 0) {
      bio.skills.display();
    }

/*  The work.display function formats and displays the work experience
resume section.  I went back and changed the iterations that I created
in the js class from a "for job in jobs" structure to the counter
variable to conform to the style guide standards for iterations
over arrays.
*/


    work.display = function() {
      var len = work.jobs.length;
      for (var i = 0; i < len; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedEmployerDetails = formattedEmployer + formattedTitle + formattedLocation + formattedDates +formattedDescription;
        $(".work-entry:last").append(formattedEmployerDetails);
      }
    }

    work.display();

 /*  The education.display function formats and displays both brick and mortar and online education.  I included links to both the school (UIUC) and the Udacity classes.
 */

     education.display = function() {
      var len = education.schools.length;
      for (var i = 0; i< len; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("#", education.schools[i].url).replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var formattedSchoolDetails = formattedSchool + formattedDegree + formattedDates + formattedLocation + formattedMajors;
        $(".education-entry:last").append(formattedSchoolDetails);
      }
      var onlineLen = education.onlineCourses.length;
      if (onlineLen > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var i = 0; i < onlineLen; i++){
          var formattedTitle = HTMLonlineTitle.replace("#", education.onlineCourses[i].url).replace("%data%", education.onlineCourses[i].title);
          var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
          var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);

          var formattedOnlineDetails = formattedTitle + formattedSchool + formattedDates;
          $(".education-entry:last").append(formattedOnlineDetails);
        }
      }
    }

    education.display();

/* The projects.display function displays projects in a three-column
format for larger screens, and a single full-width column for smaller
screens.
*/

    projects.display = function() {
      var projectLen = projects.projects.length;
      for (var i = 0; i < projectLen; i++) {
      $("#projectSample").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("#", projects.projects[i].url).replace("%data%", projects.projects[i].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(formattedDescription);

      var formattedImage = HTMLprojectImage.replace("#", projects.projects[i].url).replace("%data%", projects.projects[i].images);
      $(".project-entry:last").append(formattedImage);
    }
  }

  projects.display();



