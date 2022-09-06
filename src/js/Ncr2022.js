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
        <h1>Goals</h1>
        <br></br>
        <h2>Learning Goal 1</h2>
        <div className="textbox">
          <p>
            The first skill that I would like to learn during my time at NCR is
            how to create APIs. I personally would like to learn more about APIs
            as APIs are now an integral part of software development. Learning
            about not only what APIs are but how they work and how to create
            them will be important to my future as a programmer.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            My plan to learn more about APIs will start with completing NCR’s
            training on APIs. After completing the API training I will be
            working on NCR’s Core Integration team which works on creating APIs
            that their customers use; while working at NCR I will learn more
            about APIs. I also intend to try to create my own APIs in my own
            free time in order to truly understand how to create an API and how
            it works.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            I will know I have achieved my goal when I have created my own API.
            In order to create your own API you need to know every aspect of an
            API such as what it is, how to make one, and how to use it so it is
            by far the best way to show what I have learned.
          </p>
        </div>
        <br></br>

        <h2> Learning Goal 2</h2>
        <div className="textbox">
          <p>
            The second skill I want to learn during my time at NCR is learning
            about different testing methodologies. I want to learn about
            different types of tests as testing is an extremely important part
            of development. Learning about the different types of tests and how
            to create them using tools like Cucumber will be invaluable to my
            future.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            To learn more about different types of software tests is to learn
            about testing methodologies like end-to-end tests, unit tests, and
            integration tests from different sources at NCR. For example, NCR
            has a learning website dedicated to learning about programming
            knowledge so I will use that website as well as help from more
            knowledgeable co-workers. I will also use some of my free time to
            research information online about testing and try to learn more
            about different testing methodologies and which one is best in which
            situation. I am also certain that at NCR I will have to write and
            conduct different types of tests for the code I create so I will be
            able to put my learning into practice there.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            I will know I have completed my goal when during my time at NCR I
            have debugged my own programs using different testing methodologies.
          </p>
        </div>
        <br></br>

        <h2> Learning Goal 3</h2>
        <div className="textbox">
          <p>
            The third and final skill I want to learn during my time at NCR is
            agile software development as most companies have moved away from
            the classic waterfall development cycle and moved on to agile.
            Because of this change, I believe knowledge about how agile
            development works and how one uses agile to create software
            efficiently will be useful for my future career.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            My plan to learn more about agile methodology is to learn while
            using it at NCR. NCR follows the agile development methodology so
            while I am working there I will undoubtedly learn what agile
            development is by using it every single day I work there. I have
            already received training on Agile and I will continue to learn more
            simply by working at NCR. If I ever feel confused about Agile
            methodology then I will either ask my co-workers about it or consult
            the internet.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            I will know I have learned about Agile development when I have
            reached the end of my work term at NCR and all of my assigned tasks
            for each sprint have been completed by me. NCR's development process
            closely follows the Agile methodology so if I can complete my work
            term and complete all of my assigned tasks I will have followed
            Agile methodology properly.
          </p>
        </div>
        <br></br>
      </div>
    );
  }

  function getDesktopLearningGoals() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Goals </h1>
        <br></br>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h2>Learning Goal</h2>
            </div>

            <div className="col">
              <h2> Learning Goal 2</h2>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  The first skill that I would like to learn during my time at
                  NCR is how to create APIs. I personally would like to learn
                  more about APIs as APIs are now an integral part of software
                  development. Learning about not only what APIs are but how
                  they work and how to create them will be important to my
                  future as a programmer.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  The second skill I want to learn during my time at NCR is
                  learning about different testing methodologies. I want to
                  learn about different types of tests as testing is an
                  extremely important part of development. Learning about the
                  different types of tests and how to create them using tools
                  like Cucumber will be invaluable to my future.
                </p>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan to learn more about APIs will start with completing
                  NCR’s training on APIs. After completing the API training I
                  will be working on NCR’s Core Integration team which works on
                  creating APIs that their customers use; while working at NCR I
                  will learn more about APIs. I also intend to try to create my
                  own APIs in my own free time in order to truly understand how
                  to create an API and how it works.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  To learn more about different types of software tests is to
                  learn about testing methodologies like end-to-end tests, unit
                  tests, and integration tests from different sources at NCR.
                  For example, NCR has a learning website dedicated to learning
                  about programming knowledge so I will use that website as well
                  as help from more knowledgeable co-workers. I will also use
                  some of my free time to research information online about
                  testing and try to learn more about different testing
                  methodologies and which one is best in which situation. I am
                  also certain that at NCR I will have to write and conduct
                  different types of tests for the code I create so I will be
                  able to put my learning into practice there.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have achieved my goal when I have created my own
                  API. In order to create your own API you need to know every
                  aspect of an API such as what it is, how to make one, and how
                  to use it so it is by far the best way to show what I have
                  learned.
                </p>
              </div>
              <br></br>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have completed my goal when during my time at
                  NCR I have debugged my own programs using different testing
                  methodologies.
                </p>
              </div>
              <br></br>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2> Learning Goal 3</h2>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  The third and final skill I want to learn during my time at
                  NCR is agile software development as most companies have moved
                  away from the classic waterfall development cycle and moved on
                  to agile. Because of this change, I believe knowledge about
                  how agile development works and how one uses agile to create
                  software efficiently will be useful for my future career.
                </p>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan to learn more about agile methodology is to learn
                  while using it at NCR. NCR follows the agile development
                  methodology so while I am working there I will undoubtedly
                  learn what agile development is by using it every single day I
                  work there. I have already received training on Agile and I
                  will continue to learn more simply by working at NCR. If I
                  ever feel confused about Agile methodology then I will either
                  ask my co-workers about it or consult the internet.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have learned about Agile development when I have
                  reached the end of my work term at NCR and all of my assigned
                  tasks for each sprint have been completed by me. NCR's
                  development process closely follows the Agile methodology so
                  if I can complete my work term and complete all of my assigned
                  tasks I will have followed Agile methodology properly.
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
        <img src={ncrlogo} className='image' alt="NCR Logo" />
        <br></br>
        <div className="textbox">
          <p>
            This is my work term report for my remote work term at NCR in
            Waterloo which lasted from September 2021 to December 2021. I
            sincerely hope by the time you finish reading this work report you
            will understand both what I learned and what I achieved during my 4
            month work term at NCR.
          </p>
        </div>
        <br></br>
        <h1>About NCR</h1>
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
        <h1>Did I Achieve My Goals</h1>
        <br></br>
        <div className="textbox">
          <p>
            I managed to complete all of the three learning goals for this work
            term. The three learning goals I set for this work term were
            learning about APIs, different testing methodologies and the agile
            workflow. I learned a lot about all three of those topics and have
            reached my learning goals without any problems. While before I
            didn’t know anything about any of the three topics I can now say I
            know what an API is and how to create one, I know each different
            testing methodology and what they are used for, and I know the
            different steps of the Agile workflow and how to work in the Agile
            model.
          </p>
        </div>
        <br></br>
        <h1>Job Description</h1>
        <br></br>
        <div className="textbox">
          <p>
            At NCR the official title for my role was Software Developer and I
            was in the core integration team. The core integration team at NCR
            is responsible for creating APIS that act as a middle point between
            the financial core, where all the user data is stored, and the
            instructions about how to manipulate that data. For example, if the
            user wants to deposit 100 dollars at the ATM the ATM would make a
            request to our deposit API containing all the needed information to
            make a 100 dollar deposit. Then our API will take that information
            and use it to create an API request that the deposit financial core
            will understand and then send that request to the financial core.
            Finally, we get the response back from the deposit financial core
            API whether it be that the request was successful or failed , and
            send that message back to the user. In this team, I was responsible
            for creating, designing, debugging, and presenting said APIS.
          </p>
        </div>
        <br></br>
        <h1>Projects I Worked On</h1>
        <br></br>

        <h2>Account Inquiry</h2>

        <br></br>
        <div className="textbox">
          <p>
            Account inquiry was a feature that allowed a teller to search for
            and retrieve information about all of a customer’s accounts such as
            the balance and type of the account.
          </p>
        </div>
        <br></br>
        <h2>Mixed Media Deposit</h2>
        <br></br>
        <div className="textbox">
          <p>
            Mixed media deposit was a feature that I developed that allowed the
            user to deposit both cash and check amounts into an account in a
            single deposit. I also had to create all of the integration tests
            and end-to-end tests for the feature.
          </p>
        </div>
        <br></br>
        <h1>Skills I Needed For The Job</h1>
        <br></br>
        <div className="textbox">
          <p>
            Throughout my time at NCR I used the skills I learned throughout my
            programming career as well as learned a couple of new skills. The
            first skill I had to learn throughout this job was working with
            APIS. I had never used or created API’S before so I had to learn a
            lot about what APIS are, how to use them, the different kinds of
            APIS, like soap and rest APIs, and the different kinds of requests
            you can make with them like GET, PUT, or POST requests. To actually
            program these APIS, NCR uses their own programming framework called
            API toolkit that uses a combination of the YAML format and the Java
            programming language to make APIS. I had never used the YAML format
            so I had to figure out how it works as well as learning the unique
            syntax of API toolkit. I also learned how to use the postman program
            to send requests to test APIS. The second skill I had to learn was
            how to create integration tests and end-to-end tests. For
            integration tests, NCR uses the spring boot testing framework so I
            had to learn how to create contract and mapping files to create
            integration tests for all the APIs I created. For end-to-end tests,
            NCR uses the Cucumber testing framework, so I had to learn how to
            create Cucumber feature files to make end-to-end tests. The third
            and final skill I had to learn at the job was how to properly
            present and explain my work to others. Every time I finished a
            project I had to present the work that I had done to the product
            owner to ensure that the feature included everything they wanted. I
            actually never had to present my programming work before, whether
            that be at a job or during university, so I didn’t have much
            practice doing presentations for work. Because of this, I had to
            learn a lot about how to properly present my ideas without leaving
            my audience confused. While I haven’t exactly perfected my
            presentation skills, I feel I have learned a lot about presenting at
            NCR and now I am far less nervous during presentations.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            While I did have to learn a lot of new skills for this job there
            were also many skills that I had already learned previously that
            greatly helped me during this work term. One such skill was my
            problem-solving skills. In programming, you always need good
            problem-solving skills in order to create solutions for the various
            programming problems you encounter during a job. Thankfully I have
            honed my problem-solving skills during my time at University which
            helped me during my time at NCR. The next skill that helped me at
            NCR was my knowledge of the Java programming language. The API
            toolkit framework uses Java as a base, so knowing Java made it a lot
            easier to get used to and understand the framework.
          </p>
        </div>
        <br></br>
        <h1>Academic Relation</h1>
        <br></br>
        <div className="textbox">
          <p>
            This work term at NCR has been absolutely amazing and I believe I
            have learned a lot that will help me in my academic learning in the
            near future. One thing that I have improved upon at this job that
            will undoubtedly help me in school is my ability to quickly learn
            and adapt to new situations. For example, at NCR I had to quickly
            learn how to use their proprietary API Toolkit framework which was
            unlike any other framework I had known before in order to do my job.
            Not only did I need to learn it but I also needed to learn it
            quickly as I only had 4 months in my work term and I couldn’t have
            spent most of it just learning API Toolkit. Through this experience,
            I have improved my ability to quickly pick up and master new skills.
            Another skill I learned at this job that will help me during my
            academic career is how to work in an Agile workflow. Working in an
            Agile environment really helped me understand how to properly break
            down tasks into smaller, more manageable chunks and how to properly
            manage your time while working on a task. Obviously both of those
            skills are extremely important to have at school as good time
            management ensures you have enough time to properly complete each
            school project to the best of your ability. As one can see my term
            at NCR will help me greatly in my future endeavours whether they be
            educational or otherwise.
          </p>
        </div>
        <br></br>
        <h1>Conclusion</h1>
        <br></br>
        <div className="textbox">
          <p>
            Overall, the job was fantastic and thank you for reading! I hope you
            learned a lot about what I learned during the work term, and my
            highlights of working at NCR as a Software Developer.
          </p>
        </div>
        <br></br>
        <h1>Acknowledgments</h1>
        <br></br>
        <div className="textbox">
          <p>
            Thank you to the NCR for giving me an incredible second work term.
            My job at NCR was absolutely fantastic and was one of the best work
            experiences I have ever had. I want to thank all the amazing people
            I worked with at NCR. Everyone I worked with was amazing and they
            all helped me be the best NCR employee I could be! Finally, I want
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

export default Ncr2022;
