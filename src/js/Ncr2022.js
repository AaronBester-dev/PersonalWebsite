import React from "react";
import Navbar from "../jsx/Navbar";
import "../css/Page.css";
import ncrlogo from "../files/ncr.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Ncr2022() {
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
            The first skill that I would like to learn during my time at NCR is
            how to use the React JS Framework. While I have already learned
            Javascript in a previous course at the University of Guelph, more
            and more companies are moving away from pure Javascript and towards
            frameworks like React and Vue. Learning these more modern frameworks
            will allow me to make websites more easily and become more
            employable in front end jobs in the future.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            My plan to learn React includes taking as many tasks at my job that
            involve our API Toolkit UI which is built on React. NCR also
            provides access to LinkedIn Learning, which contains various React
            courses, which I will also utilise to learn. In my free time I will
            also remake my current personal website using React, in order to not
            only improve my skills but to make myself more employable.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            I will know I have achieved my goal when I have remade my personal
            website using React. By recreating my website using React, it will
            prove that I know how to create an entire simple website from
            scratch using React.
          </p>
        </div>
        <br></br>

        <h3> Learning Goal 2</h3>
        <div className="textbox">
          <p>
            The second skill I want to learn during my time at NCR is learning
            about UI design best practices. For most of my development career I
            have worked on backend development. This has left me not knowing
            much about front end design, or how to make a good looking design.
            If I want to continue down the path of being a full-stack developer,
            it will be integral for my career to understand how to create a
            simple and clean design.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            My plan to learn more about design best practices is by performing
            my own research about design. For example, NCR has a learning
            website dedicated to learning about programming knowledge so I will
            use that website as well as gain help from more knowledgeable
            co-workers. I will also use some of my free time to look up
            information online about testing and try to learn more about
            different testing methodologies and which one is best in which
            situation. I am also certain that at NCR I will have to write and
            conduct different types of tests for the code I create so I will be
            able to put my learning in practice there.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            I will know I have completed my goal when I have created a personal
            website that has an attractive and usable user interface.
          </p>
        </div>
        <br></br>

        <h3> Learning Goal 3</h3>
        <div className="textbox">
          <p>
            The third and final skill I want to learn is how to create automated
            tests for UI applications. So far I have only created automated
            tests for back end applications with no interface, which, while
            important, doesn't cover how to test all types of programs. By
            learning how to create automated tests for UI applications, I will
            be able to better debug and ensure my programs meet a certain
            standard of quality.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            My plan is to learn more about how to create automated tests for a
            user interface while working at NCR. NCR uses TestCafe to create
            automated UI tests and I will learn a lot about it by utilising it
            at NCR. I will also be updating my personal website in React so I
            can implement UI tests on my personal website so I will learn from
            that experience as well.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            I will know I have learned about automated tests for a user
            interface when I have implemented automated tests into my personal
            website.
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
                  NCR is how to use the React JS Framework. While I have already
                  learned Javascript in a previous course at the University of
                  Guelph, more and more companies are moving away from pure
                  Javascript and towards frameworks like React and Vue. Learning
                  these more modern frameworks will allow me to make websites
                  more easily and become more employable in front end jobs in
                  the future.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  The second skill I want to learn during my time at NCR is
                  learning about UI design best practices. For most of my
                  development career I have worked on backend development. This
                  has left me not knowing much about front end design, or how to
                  make a good looking design. If I want to continue down the
                  path of being a full-stack developer, it will be integral for
                  my career to understand how to create a simple and clean
                  design.
                </p>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan to learn React includes taking as many tasks at my job
                  that involve our API Toolkit UI which is built on React. NCR
                  also provides access to LinkedIn Learning, which contains
                  various React courses, which I will also utilise to learn. In
                  my free time I will also remake my current personal website
                  using React, in order to not only improve my skills but to
                  make myself more employable.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan to learn more about design best practices is by
                  performing my own research about design. For example, NCR has
                  a learning website dedicated to learning about programming
                  knowledge so I will use that website as well as gain help from
                  more knowledgeable co-workers. I will also use some of my free
                  time to look up information online about testing and try to
                  learn more about different testing methodologies and which one
                  is best in which situation. I am also certain that at NCR I
                  will have to write and conduct different types of tests for
                  the code I create so I will be able to put my learning in
                  practice there.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have achieved my goal when I have remade my
                  personal website using React. By recreating my website using
                  React, it will prove that I know how to create an entire
                  simple website from scratch using React.
                </p>
              </div>
              <br></br>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have completed my goal when I have created a
                  personal website that has an attractive and usable user
                  interface.
                </p>
              </div>
              <br></br>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3> Learning Goal 3</h3>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  The third and final skill I want to learn is how to create
                  automated tests for UI applications. So far I have only
                  created automated tests for back end applications with no
                  interface, which, while important, doesn't cover how to test
                  all types of programs. By learning how to create automated
                  tests for UI applications, I will be able to better debug and
                  ensure my programs meet a certain standard of quality.
                </p>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan is to learn more about how to create automated tests
                  for a user interface while working at NCR. NCR uses TestCafe
                  to create automated UI tests and I will learn a lot about it
                  by utilising it at NCR. I will also be updating my personal
                  website in React so I can implement UI tests on my personal
                  website so I will learn from that experience as well.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have learned about automated tests for a user
                  interface when I have implemented automated tests into my
                  personal website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Ncr2022">
      <header className="PageHeader">
        <br></br>
        <div className="titlefont">NCR Work Report 2022</div>
        <Navbar></Navbar>
        <br></br>
        <img src={ncrlogo} className="image" alt="NCR Logo" />
        <br></br>
        <div className="textbox">
          <p>
            This is my work term report for my hybrid remote in person work term
            at NCR in Waterloo which lasted from May 2022 to September 2022. I
            sincerely hope by the time you finish reading this work report you
            will understand both what I learned and what I achieved during my 4
            month work term at NCR.
          </p>
        </div>
        <br></br>
        <h2>About NCR</h2>
        <br></br>
        <div className="textbox">
          <p>
            NCR is an American software, management and professional services,
            consulting and technology company that was founded in 1884 in
            Atlanta, Georgia. At first NCR was created to sell and produce the
            first ever mechanical cash register, but since then has grown into a
            gigantic multinational corporation that is famous in the financial
            space. Now NCR not only sells and produces cash registers, but also
            ATMS, self-service kiosks, barcode scanners and even point of sale
            terminals. NCR not only produces the physical parts for those
            machines but also the software, which is the area of NCR I worked in
            during this term. NCR is by far one of the biggest companies in the
            financial world and I am very happy I was privileged to work there
            this term.
          </p>
        </div>
        <br></br>

        {isMobile() ? getMobileLearningGoals() : getDesktopLearningGoals()}

        <br></br>
        <h2>Did I Achieve My Goals</h2>
        <br></br>
        <div className="textbox">
          <p>
            I managed to complete all of the three learning goals for this work
            term. The three learning goals I set for this work term were
            learning how to utilise the ReactJS framework, learn best practices
            for UI design, and learn how to make tests for a user interface. I
            learned a lot about all three of those topics and have reached my
            learning goals without any problems. Due to working on the front end
            for API Toolkit, which uses React JS, I learned how to use React JS
            on a massive scale. By building the website you are reading this
            report on I also learned how to create and deploy a small website. I
            also learned a lot about creating a nice clean UI from working on
            the API Toolkit UI. I often had to develop new features that had to
            fit into the already existing UI. This forced me to follow the
            already existing UI design patterns in order to properly complete my
            work. Finally, I created multiple UI tests for the web pages that I
            designed.
          </p>
        </div>
        <br></br>
        <h2>Job Description</h2>
        <br></br>
        <div className="textbox">
          <p>
            At NCR the official title for my role was Full Stack Software
            Developer and I was in the API Toolkit Draft team. The API Toolkit
            Draft team is responsible for creating APIS, the API Toolkit
            software that is utilised by NCR to create APIS for their banking
            services. By using API Toolkit one can quickly outline an api's
            endpoints using the Open API specification. One can then easily
            write the code for said endpoints using NCR’s own API Toolkit syntax
            that uses Yaml as a base. The API Toolkit software uses React JS for
            its frontend user interface and it also uses Java and Spring Boot
            for its backend. In this team, I was responsible for adding new
            features to and fixing bugs within APIT.
          </p>
        </div>
        <br></br>
        <h2>Projects I Worked On</h2>
        <br></br>

        <h3>Copy Fields</h3>

        <br></br>
        <div className="textbox">
          <p>
            Copy fields was a feature that I added to APIT’s debugger. On API
            Toolkit one can go through their created API’s line by line in order
            to debug their API. As part of this debugger you can see all of the
            fields and their values at each line in the API. Users complained
            that it was hard to copy and paste the field and each of its values
            so I was tasked to create a button that took the current values and
            fields and put it into your clipboard in two different formats. One
            being just a basic string representation of the current values and
            fields and the other being a JSON representation. In order to do
            this I had to create a button on the React JS frontend that popped
            up an option to select either copying in the JSON format or the
            string format and then I had to implement a function to copy from
            the fields to the clipboard. The string format was easy to implement
            as I could simply create a function in Javascript to take the value
            data and concatenate it into a nice string. The JSON format was much
            harder to make and I had to figure out how to make a call between
            the ReactJS frontend and the Java backend, as the Java backend
            already had a function to create a nice JSON representation of the
            fields. This was my first project at the job and was also my first
            time using React so while it seemed simple at first it actually
            became quite difficult and complicated. Overall though, I am happy
            with the results as I ended up making a feature that was useful to a
            lot of people.
          </p>
        </div>
        <br></br>
        <h3>Security Fast Cache</h3>
        <br></br>
        <div className="textbox">
          <p>
            Security Fast Cache was a feature of APIT's security library. APIT
            uses a lot of security tokens that are used to authenticate users to
            the various online services integrated within APIT. All of these
            tokens are stored in a cache that is created at startup. The only
            problem is that the tokens do eventually expire and need to be
            recreated. This recreation process took a while and significantly
            hampered the performance of APIT. To fix this I had to
            asynchronously refetch the tokens and recreate the cache whenever
            the cache expired and a call was made that needed the cache. While
            the cache was being recreated asynchronously, the old expired cache
            would continue to be used until the new cache was recreated,
            improving performance. In order to implement this I had to figure
            out how to perform operations asynchronously using Java and Spring
            Boot. Spring Boot thankfully had lots of built-in functions like
            monos and fluxes to make asynchronous development a lot simpler than
            it would have been using default Java.
          </p>
        </div>
        <br></br>

        <h3>Improving Git On APIT</h3>
        <br></br>
        <div className="textbox">
          <p>
            APIT had GIT integration built into it allowing one to push changes
            made on the APIT UI to any GIT repository. The only problem was that
            the feature was quite buggy and confusing to use. I was tasked with
            figuring out what needed to be fixed as well as creating solutions
            on how to fix it. While I never got to implement my solutions, as
            this was one of my final projects I worked on at NCR, I did get to
            use my problem solving skills to figure out solutions as well as my
            testing skills to find the problems.
          </p>
        </div>
        <br></br>

        <h2>Skills I Needed For The Job</h2>
        <br></br>
        <div className="textbox">
          <p>
            Throughout my 2nd term at NCR I used skills that I learned
            throughout my programming career as well as skills that I learned at
            school. The first skill I had to learn for this job was using React
            JS and web development as a whole. While I have used Javascript and
            have made some extremely rudimentary websites, I had never used
            React and I definitely had never made a complex reactive web program
            like APIT before, which meant there was a lot for me to learn. I
            first had to learn how React worked and what exactly it added to
            Javascript and then I had to learn how to properly use CSS and HTML
            to style and layout a page. It was a lot to learn but it was not too
            difficult thanks to the numerous online tutorials for React, as well
            as good examples already in APIT, that I could follow. Another skill
            I learned at this job was how to create a good graphical and
            technical design for a project. During this job I not only had to
            create features that looked good and were readable but also features
            that were technically sound. While I had to design features before,
            I usually had some basis for a design. On this job, more than any
            other, I was left to develop a feature with minimal help from the
            ground up. This was also the first time I had to design something
            with a user interface. I have previously only worked on backend
            features that had no graphical user interface so I had to learn how
            to design one that looked good and fit in with the design of other
            features.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            There were also skills that I needed but thankfully already had
            because of my time at school. One major skill that is important to
            every programmer is problem-solving. In any programming job, being
            able to understand and find solutions to complex problems is an
            absolute necessity, but it was especially important in this job.
            More than ever I was working on a feature by myself and while I did
            receive help, I never had a partner with me for the whole feature
            like I did in other jobs. This really put my problem solving skills
            to the test as I no longer had someone that was there helping design
            and finding solutions. While it was more difficult, it did cause me
            to learn a lot more than I did at other jobs, and it also provided
            more satisfaction when I finally did come up with a solution.
            Another skill that I used were my communication skills. At NCR I
            worked in a team of 6 people and I often had to ask questions in
            order to fully understand a problem. This forced me to learn how to
            communicate and learn how to explain my problems in an effective way
            so I could get answers to all of my questions. One other skill I
            needed but already had, was my knowledge of programming languages
            like Java and Javascript and programs used at NCR like APIT. I used
            Java and Javascript a lot at this job for both backend and frontend
            programming. While I learned much at the job about both of those
            languages I had a good basis already, making it easy to pick up and
            start working immediately. I also worked on APIT and because I
            worked at NCR in the past, I already had knowledge of APIT and how
            it worked, which helped a lot this work term.
          </p>
        </div>
        <br></br>
        <h2>Academic Relation</h2>
        <br></br>
        <div className="textbox">
          <p>
            My second work term at NCR has been absolutely amazing and what I
            have learned during this time will help me in the academic world in
            the future. One skill that I have learned at this job that will help
            me in my academics was learning both front end and back end
            development. At NCR I worked as a fullstack developer which gave me
            experience in doing front end development, which I previously had
            very little experience with. As my school term goes on, more and
            more classes will be based on larger team based projects that
            require a team to create a whole program from nothing. All aspects
            of the program will need to be implemented including both backend
            and frontend. Having knowledge of both aspects will mean that I can
            more easily complete these projects as well as become a more useful
            member of my team. Having knowledge of both front end and back end
            will also help in my non-academic career because I will be able to
            apply for full stack, back end and front end which greatly broadens
            my job opportunities. Another skill that will help me in my
            academics will be my communication skills. As I enter the later
            years of university, there are more and more classes that are solely
            team based, where I will need to work in a team and communicate
            effectively in order to get a good mark. Therefore, my communication
            skills that have improved over the course of working in a team at
            NCR this work term, will be an invaluable asset to my future
            academic career. Overall, the skills I have learned over this work
            term will be a huge benefit to me for my next study term at the
            University Of Guelph.
          </p>
        </div>
        <br></br>
        <h2>Conclusion</h2>
        <br></br>
        <div className="textbox">
          <p>
            Overall, the job was fantastic and thank you for reading! I hope you
            learned a lot about what I learned during the work term, and my
            highlights of working at NCR as a Full Stack Software Developer.
          </p>
        </div>
        <br></br>
        <h2>Acknowledgments</h2>
        <br></br>
        <div className="textbox">
          <p>
            Thank you to NCR for allowing me to come back for my third work
            term. My job at NCR was absolutely fantastic and was even better
            than my last work term with them. I want to thank all the amazing
            people I worked with at NCR, especially my fellow teammates on the
            APIT draft team as well as the other co-ops I worked with. Everyone
            I worked with was really awesome and I made many great friends from
            the experience! Finally, I want to thank the University Of Guelph
            for teaching me all of the skills I needed to succeed during my
            co-op term as well as supporting me throughout the co-op process.
          </p>
        </div>
        <br></br>
      </header>
    </div>
  );
}

export default Ncr2022;
