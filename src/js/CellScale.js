import React from "react";
import Navbar from "../jsx/Navbar";
import "../css/Page.css";
import cellscaleLogo from "../files/cellscale.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function CellScale() {
  function isMobile() {
    const { innerWidth: width } = window;
    console.log(width);
    if (width < 576) {
      return true;
    } else {
      return false;
    }
  }

  function getMobileLearningGoals() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Goals</h2>
        <br></br>
        <h3>Learning Goal 1</h3>
        <div className="textbox">
          <p>
            The first skill that I would like to learn during my time at
            CellScale Biomaterials Testing is how to program in C++. C++ is the
            language of choice used at CellScale Biomaterials Testing and in
            order to succeed as a software application developer there I will
            need to become familiar with it. I have also just always wanted to
            learn C++ ever since I learnt C. C++ is also used by a wide variety
            of different companies for a wide variety of different applications
            where performance is a priority such as compilers, video games, and
            operating systems so it will be a valuable tool to know for various
            future jobs.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            My plan to learn C++ is to take as many tasks that require C++ at my
            job at CellScale Biomaterials Testing. By doing tasks at my job that
            utilise C++ I will be able to learn the language while also gaining
            real-world experience in C++. It will also be useful to learn C++
            while at work, as my co-workers will be available to answer whatever
            questions I have about C++. I am also planning to take some online
            courses related to C++ in my free time in order to further expand my
            knowledge.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            I will know I have achieved my goal when I have created a fully
            featured, useful, real-world application in C++, whether that be at
            my job or in my free time. By creating a useful application in C++,
            I will be able to demonstrate all that I have learned about C++,
            while also creating a final product that I can write on my resume.
          </p>
        </div>
        <br></br>

        <h3> Learning Goal 2</h3>
        <div className="textbox">
          <p>
            The second skill I want to learn during my time at CellScale
            Biomaterials Testing, is learning about best practices for how to
            create efficient and readable C++ code. While finding a solution is
            important when coding, what is even more important is making a
            solution that is efficient and easy for any coder to understand.
            While I am generally good at coming up with a solution, I sometimes
            find my code to be hard to read for others so I would like to fix
            that. It will especially be a problem with C++, which from what I
            have heard, has a lot of ways to do something and I want to ensure I
            am using the best and most efficient way. If I want to continue to
            work as a software developer, it will be integral for my career to
            understand how to create efficient, readable code.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            My plan to learn more about C++ best practices and design is to have
            my code reviewed by other members of my team. During code reviews,
            my fellow teammates will look over my code, and if they notice any
            problems they will make sure to tell me so I can learn from my
            mistakes. I will also look into C++ style guides and best practices
            so I can understand the generally accepted best way to do things. I
            will also look into more general advice for making clean and
            efficient code, as generally there are best practices that apply to
            all languages that I would like to ensure I know.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            I will know I have completed my goal when the code that I have
            produced for CellScale Biomaterials Testing is well-made, readable,
            and efficient.
          </p>
        </div>
        <br></br>

        <h3> Learning Goal 3</h3>
        <div className="textbox">
          <p>
            Finally, I want to improve my communication skills about technical
            aspects of my job. While I am generally good at communicating to
            people about non technical aspects, whenever I talk in more
            technical terms I find my explanations can be lacking, causing
            others to be confused about what I mean. Being able to explain your
            code to others is a big part of being a developer, as you often have
            to demo your work to people who are not familiar with what you have
            done. Therefore, improving my skills at simplifying technical terms
            would be a major asset to my future as a software developer.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            My plan to improve my technical communication skills is to simply
            try to explain my code to people whenever I am given the
            opportunity. I will take any and all opportunities to speak about my
            work at my job to ensure I have plenty of time to practise my
            communication skills. As I am coding, I will try to think of how I
            would explain my code to other people as I am writing it so I can
            even practise my communication skills when there is no one to
            communicate with. If I know I will be demoing my work I will try to
            create a basic script of what I am going to say so my explanations
            are well thought out, rather than just communicating off the top of
            my head.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            I will know I have improved my technical communication skills when
            the majority of the time I explain my work to others, they
            understand what I am thinking without needing to ask too many
            questions.
          </p>
        </div>
        <br></br>
        <h3>Learning Goal 4</h3>
        <div className="textbox">
          <p>
            For my second work term at CellScale I really want to improve my UI
            design skills. At CellScale a majority of my job involves creating
            new UI’s for their desktop software. I know the basics of UI design
            and can create an usable design. But there is still a lot for me to
            learn, especially when it comes to making a UI that is visually
            appealing while still remaining usable. This is a very important
            skill to learn as nearly every modern program has some sort of UI.
            If I could learn how to create better UI’s it would significantly
            expand my future job prospects in the software industry.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            My plan to improve my UI design skills is to read books and watch
            videos online about good UI design. There is a lot of information
            about UI design on the internet and I plan to leverage that
            knowledge in my free time when I am not working. I also plan on
            getting feedback and advice on my UI from my co-workers. Some of my
            co-workers have been creating UI’s for years and they have a lot of
            great knowledge and advice to someone who is just starting to create
            UI's.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            I will know I have improved my UI design skills when the software
            that I have created for CellScale has a great UI design that is
            approved of by all of my co-workers.
          </p>
        </div>
        <br></br>

        <h3> Learning Goal 5</h3>
        <div className="textbox">
          <p>
            Another skill I want to continue improving on is my knowledge of
            C++. During the first half of my work term at CellScale I learned a
            lot about C++.I went from someone who had never used C++ to someone
            who is decently well versed in it. I could learn more about the
            language's deepest aspects. C++ is one of the most popular
            programming languages around so being able to understand it would be
            a big help for getting a future job. C++ is also used in a lot of
            different areas such as video games and robotics, so learning C++
            will increase my chances of landing a job in various areas.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            My plan to improve my C++ skills is to simply program in C++ and
            finish creating my C++ data analysis app for work as well as
            creating personal applications at home for fun in C++. I will also
            do some online research on C++ in my free time, but most of my
            learning will be done by simply programming. I also want to try
            doing some online programming problems from websites such as
            LeetCode in C++.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            I will know I have improved my C++ skills when I create a well
            designed and clean application in C++ and can answer various
            difficult questions from LeetCode in C++.
          </p>
        </div>
        <br></br>

        <h3> Learning Goal 6</h3>
        <div className="textbox">
          <p>
            Finally, I want to learn how to effectively manage my time. At
            CellScale I have been tasked with creating a data analysis tool from
            scratch with minimal help from my supervisor. Since I am the only
            one working on the project, I must be able to manage my time
            effectively to ensure that the project is completed on time and all
            of its requirements are met. In the past I have had difficulty with
            time management and have missed deadlines and requirements for both
            school and work projects. This is an area I know I need to improve
            in and will be beneficial to me in my future career. Being able to
            effectively manage my time will allow me to complete more work in a
            limited time, which makes me a stronger candidate for future jobs.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            My action plan to learn more about time management is to seek advice
            from my coworkers. Many of my co-workers have been working and
            managing projects for years, so advice from them will greatly help
            me learn about time management. I also plan to read books and watch
            online videos about time management skills.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            I will know I have learned time management skills when I have
            completed the data analysis tool for CellScale and is released to
            CellScale’s users on time.
          </p>
        </div>
        <br></br>
      </div>
    );
  }

  function getDesktopLearningGoals() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Goals </h2>
        <br></br>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h3>Learning Goal 1</h3>
            </div>

            <div className="col">
              <h3> Learning Goal 2</h3>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  The first skill that I would like to learn during my time at
                  CellScale Biomaterials Testing is how to program in C++. C++
                  is the language of choice used at CellScale Biomaterials
                  Testing and in order to succeed as a software application
                  developer there I will need to become familiar with it. I have
                  also just always wanted to learn C++ ever since I learnt C.
                  C++ is also used by a wide variety of different companies for
                  a wide variety of different applications where performance is
                  a priority such as compilers, video games, and operating
                  systems so it will be a valuable tool to know for various
                  future jobs.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  The second skill I want to learn during my time at CellScale
                  Biomaterials Testing, is learning about best practices for how
                  to create efficient and readable C++ code. While finding a
                  solution is important when coding, what is even more important
                  is making a solution that is efficient and easy for any coder
                  to understand. While I am generally good at coming up with a
                  solution, I sometimes find my code to be hard to read for
                  others so I would like to fix that. It will especially be a
                  problem with C++, which from what I have heard, has a lot of
                  ways to do something and I want to ensure I am using the best
                  and most efficient way. If I want to continue to work as a
                  software developer, it will be integral for my career to
                  understand how to create efficient, readable code.
                </p>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan to learn C++ is to take as many tasks that require C++
                  at my job at CellScale Biomaterials Testing. By doing tasks at
                  my job that utilise C++ I will be able to learn the language
                  while also gaining real-world experience in C++. It will also
                  be useful to learn C++ while at work, as my co-workers will be
                  available to answer whatever questions I have about C++. I am
                  also planning to take some online courses related to C++ in my
                  free time in order to further expand my knowledge.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan to learn more about C++ best practices and design is
                  to have my code reviewed by other members of my team. During
                  code reviews, my fellow teammates will look over my code, and
                  if they notice any problems they will make sure to tell me so
                  I can learn from my mistakes. I will also look into C++ style
                  guides and best practices so I can understand the generally
                  accepted best way to do things. I will also look into more
                  general advice for making clean and efficient code, as
                  generally there are best practices that apply to all languages
                  that I would like to ensure I know. I will know I have
                  completed my goal when the code that I have produced for
                  CellScale Biomaterials Testing is well-made, readable, and
                  efficient.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have achieved my goal when I have created a
                  fully featured, useful, real-world application in C++, whether
                  that be at my job or in my free time. By creating a useful
                  application in C++, I will be able to demonstrate all that I
                  have learned about C++, while also creating a final product
                  that I can write on my resume.
                </p>
              </div>
              <br></br>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have completed my goal when the code that I have
                  produced for CellScale Biomaterials Testing is well-made,
                  readable, and efficient.
                </p>
              </div>
              <br></br>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Learning Goal 3</h3>
            </div>

            <div className="col">
              <h3> Learning Goal 4</h3>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  Finally, I want to improve my communication skills about
                  technical aspects of my job. While I am generally good at
                  communicating to people about non technical aspects, whenever
                  I talk in more technical terms I find my explanations can be
                  lacking, causing others to be confused about what I mean.
                  Being able to explain your code to others is a big part of
                  being a developer, as you often have to demo your work to
                  people who are not familiar with what you have done.
                  Therefore, improving my skills at simplifying technical terms
                  would be a major asset to my future as a software developer.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  For my second work term at CellScale I really want to improve
                  my UI design skills. At CellScale a majority of my job
                  involves creating new UI’s for their desktop software. I know
                  the basics of UI design and can create an usable design. But
                  there is still a lot for me to learn, especially when it comes
                  to making a UI that is visually appealing while still
                  remaining usable. This is a very important skill to learn as
                  nearly every modern program has some sort of UI. If I could
                  learn how to create better UI’s it would significantly expand
                  my future job prospects in the software industry.
                </p>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan to improve my technical communication skills is to
                  simply try to explain my code to people whenever I am given
                  the opportunity. I will take any and all opportunities to
                  speak about my work at my job to ensure I have plenty of time
                  to practise my communication skills. As I am coding, I will
                  try to think of how I would explain my code to other people as
                  I am writing it so I can even practise my communication skills
                  when there is no one to communicate with. If I know I will be
                  demoing my work I will try to create a basic script of what I
                  am going to say so my explanations are well thought out,
                  rather than just communicating off the top of my head.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan to improve my UI design skills is to read books and
                  watch videos online about good UI design. There is a lot of
                  information about UI design on the internet and I plan to
                  leverage that knowledge in my free time when I am not working.
                  I also plan on getting feedback and advice on my UI from my
                  co-workers. Some of my co-workers have been creating UI’s for
                  years and they have a lot of great knowledge and advice to
                  someone who is just starting to create UI's.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have improved my technical communication skills
                  when the majority of the time I explain my work to others,
                  they understand what I am thinking without needing to ask too
                  many questions.
                </p>
              </div>
              <br></br>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have improved my UI design skills when the
                  software that I have created for CellScale has a great UI
                  design that is approved of by all of my co-workers.
                </p>
              </div>
              <br></br>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Learning Goal 5</h3>
            </div>

            <div className="col">
              <h3> Learning Goal 6</h3>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  Another skill I want to continue improving on is my knowledge
                  of C++. During the first half of my work term at CellScale I
                  learned a lot about C++.I went from someone who had never used
                  C++ to someone who is decently well versed in it. I could
                  learn more about the language's deepest aspects. C++ is one of
                  the most popular programming languages around so being able to
                  understand it would be a big help for getting a future job.
                  C++ is also used in a lot of different areas such as video
                  games and robotics, so learning C++ will increase my chances
                  of landing a job in various areas.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  Finally, I want to learn how to effectively manage my time. At
                  CellScale I have been tasked with creating a data analysis
                  tool from scratch with minimal help from my supervisor. Since
                  I am the only one working on the project, I must be able to
                  manage my time effectively to ensure that the project is
                  completed on time and all of its requirements are met. In the
                  past I have had difficulty with time management and have
                  missed deadlines and requirements for both school and work
                  projects. This is an area I know I need to improve in and will
                  be beneficial to me in my future career. Being able to
                  effectively manage my time will allow me to complete more work
                  in a limited time, which makes me a stronger candidate for
                  future jobs.
                </p>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan to improve my C++ skills is to simply program in C++
                  and finish creating my C++ data analysis app for work as well
                  as creating personal applications at home for fun in C++. I
                  will also do some online research on C++ in my free time, but
                  most of my learning will be done by simply programming. I also
                  want to try doing some online programming problems from
                  websites such as LeetCode in C++.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  My action plan to learn more about time management is to seek
                  advice from my coworkers. Many of my co-workers have been
                  working and managing projects for years, so advice from them
                  will greatly help me learn about time management. I also plan
                  to read books and watch online videos about time management
                  skills.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have improved my C++ skills when I create a well
                  designed and clean application in C++ and can answer various
                  difficult questions from LeetCode in C++.
                </p>
              </div>
              <br></br>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have learned time management skills when I have
                  completed the data analysis tool for CellScale and is released
                  to CellScale’s users on time.
                </p>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Cellscale">
      <header className="PageHeader">
        <br></br>
        <div className="titlefont">CellScale Work Term</div>
        <Navbar></Navbar>
        <br></br>
        <img src={cellscaleLogo} className="image" alt="CellScale Logo" />
        <br></br>
        <div className="textbox">
          <p>
            This is my work term report for my in person work term at CellScale
            Biomaterials Testing in Waterloo, which lasted from January 2023 to
            August 2023. I sincerely hope by the time you finish reading this
            work report you will understand both what I learned and what I
            achieved during my 8 month work term at CellScale.
          </p>
        </div>
        <br></br>
        <h2>About CellScale</h2>
        <br></br>
        <div className="textbox">
          <p>
            CellScale is a Canadian company that creates mechanical devices to
            test various biomaterials. CellScale was founded in 2005 in
            Waterloo, Canada by a couple of University Of Waterloo alumni and
            has grown immensely in the past 18 years. CellScale began by selling
            a biaxial test system called the Biotester. Since then they have
            created many different machines: the MicroTester, UniVert, and the
            MechanoCulture that are all used to test different properties of
            various biomaterials. CellScale is one of the largest companies in
            the biomaterial testing field and have sold their products to
            various universities across the globe. I am very lucky to have
            worked with them for a co-op term.
          </p>
        </div>
        <br></br>

        {isMobile() ? getMobileLearningGoals() : getDesktopLearningGoals()}

        <br></br>
        <h2>Did I Achieve My Goals</h2>
        <br></br>
        <div className="textbox">
          <p>
            I managed to complete all of the six learning goals I created for
            this eight month long work term. The six learning goals I set for
            this work term were learning C++, improving my code quality,
            improving my communication skills, improving my UI design skills,
            improving my time management skills, and improving my C++ skills.
            During my time at CellScale I was able to learn about each and every
            one of these topics and became a more well rounded programmer.
          </p>
        </div>
        <br></br>
        <h2>Job Description</h2>
        <br></br>
        <div className="textbox">
          <p>
            At CellScale my job title was Software Developer and I was part of
            the CellScale software team. The software team is responsible for
            creating the software that is used to control the various material
            testing devices sold by CellScale. On this team I was responsible
            for two projects: creating a brand new installer package for their
            products and creating a whole new data analysis software that is
            used to analyse the test data from their testing machines.
          </p>
        </div>
        <br></br>
        <h2>Projects I Worked On</h2>
        <br></br>
        <h3>New Inno Setup Installer</h3>
        <br></br>
        <div className="textbox">
          <p>
            The first project I worked on at CellScale was a new installer for
            their device software. Previously they were using the InstallShield
            software to make their installers, on but the free version of the
            software was being discontinued and they needed a replacement. To
            remedy this I made a new installer using the open source Inno Setup
            which is a installer framework where you can make GUI installers for
            Windows using the Pascal programming language. This new installer
            was a major improvement on the previous installer, as it was able to
            automatically detect which testing device the user had and install
            only the necessary files for their machine. The previous installer
            also contained many annoying popups that would constantly interrupt
            the installation to ask for user input. However, with my new
            installer the installation process was simpler and required little
            to no user input. Doing all of this was not easy, since I had to
            learn how Inno Setup worked and had to learn the Pascal programming
            language. Thankfully the Inno Setup documentation is great, which
            allowed me to quickly make an entirely new installer and have it
            uploaded on their website in only 3 weeks.
          </p>
        </div>
        <br></br>

        <h3>Data Analysis Tool</h3>
        <br></br>
        <div className="textbox">
          <p>
            The other project I was given during my work term was to create a
            data analysis tool. The CellScale material testing machines output
            all of their test data into a massive Excel spreadsheet and many
            users complained that the data was too difficult to understand and
            parse through using just Excel. My job was to take this massive
            Excel spreadsheet and create a tool that could read the data,
            display it graphically, allow the user to filter through the data,
            create curve fits on the data, and compare the data between tests.
            The machines also took images of the specimen throughout the tests,
            and the software also had to display these images, and perform image
            tracking on the specimen. This data analysis tool was created in C++
            using Microsoft’s MFC GUI framework which made the process of
            creating the software quite difficult as MFC is quite old and
            documentation and help for it online is limited. The software took 7
            months to complete and required me to learn not only about C++ and
            MFC, but also about material testing in general.
          </p>
        </div>
        <br></br>

        <h2>Skills I Needed For The Job</h2>
        <br></br>
        <div className="textbox">
          <p>
            Throughout my 2nd term at CellScale, I used skills that I learned
            throughout my programming career as well as skills that I learned at
            school. The first skill I had to learn for this job was using C++
            and MFC. While I have used C before, C++ is basically a completely
            new language that only uses C as its basis so I had to learn about
            its new object oriented features. I had also never used MFC before,
            which took a lot of trial and error to perfect due to the nature of
            it being an older and underutilised GUI framework. Thankfully my
            supervisor had been using MFC and C++ for years and was there to
            help me along the way but it was quite difficult at first. I also
            had to learn how to design a clean and readable UI using MFC. I have
            previously created GUI’s for school projects and for some of my
            other work terms, but those designs were usually for a tiny feature
            or a single page. For this work term I had to design an entire
            application which included many pages and popups and each one had to
            be readable by an average user. It was more design work than I am
            used to, but it was a lot of fun to create and implement the UI as I
            usually performed more of a backend role in my other work terms.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            One major skill that is important to every programmer is
            problem-solving. In any programming job, being able to understand
            and find solutions to complex problems is an absolute necessity, but
            it was especially important in this job. More than ever I was
            working on a feature by myself and while I did receive help from my
            supervisor, I never had a partner with me for the whole feature like
            I did in other jobs. This really put my problem solving skills to
            the test, as I no longer had someone that was there helping design
            and finding solutions. While it was more difficult, it did cause me
            to learn more than I did at other jobs, and it also provided more
            satisfaction when I finally did come up with a solution. Another
            skill that I used was my research skills. Since I was using such an
            old GUI framework there was little to no online help besides some
            forum posts from 10 years ago. This forced me to put my research
            skills to the test as I would often have to scour the entire
            internet for an answer to my question. Thankfully my supervisor
            often had the answers to any questions I had and if he didn’t have
            the answer usually someone on the internet did.
          </p>
        </div>
        <br></br>
        <h2>Academic Relation</h2>
        <br></br>
        <div className="textbox">
          <p>
            My work term at CellScale has been wonderful and what I have learned
            during this time will help me in the academic world in the future.
            One skill that I have learned at this job that will help me in my
            academics is learning more about GUI development. Throughout this
            term at CellScale I put much time and effort into learning how to
            create well designed GUI that are both appealing and functional. GUI
            development is an important skill now that I am in my fourth year at
            the University Of Guelph as classes will be more and more focused on
            creating full applications rather than simple small programs. For
            these classes I will need to be able to develop an entire
            application from scratch, either by myself or with a team of
            students. One very important part of creating an application is the
            GUI development and design, so my time at CellScale will be
            invaluable for those courses. Another skill that will help me in my
            academics will be my time management skills. As I enter my fourth
            year, I know courses are going to be more difficult and the
            deadlines are going to be more strict. Because I improved my time
            management skills throughout this work term, I will be able to meet
            those stricter deadlines and get more work done in the time I have.
            Overall, the skills I have learned over this work term will be a
            huge benefit to me for my next study term at the University Of
            Guelph.
          </p>
        </div>
        <br></br>
        <h2>Conclusion</h2>
        <br></br>
        <div className="textbox">
          <p>
            Overall, the job was amazing and I hope you enjoyed reading about my
            experiences! I hope you learned much about what I learned during the
            work term, and my highlights of working at CellScale as a Software
            Developer.
          </p>
        </div>
        <br></br>
        <h2>Acknowledgments</h2>
        <br></br>
        <div className="textbox">
          <p>
            Thank you to CellScale for hiring me for an amazing 8 month long
            work term. My job at CellScale was absolutely wonderful and it was a
            great way to end my co-op experience. I want to thank every single
            person at CellScale for making this a fantastic experience and for
            helping me every step of the way. Special shoutouts to my supervisor
            Jim who was wonderful to work with and always made me look forward
            to coming to work every day. Everyone I worked with was fantastic
            and I learnt a lot from each and every one of them! Finally, I want
            to thank the University Of Guelph for teaching me all of the skills
            I needed to succeed during my co-op term as well as supporting me
            throughout the co-op process.
          </p>
        </div>
        <br></br>
      </header>
    </div>
  );
}

export default CellScale;
