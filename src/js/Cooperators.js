import React from "react";
import Navbar from "../jsx/Navbar";
import "../css/Page.css";
import cooperatorslogo from "../files/cooperators.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Cooperators() {
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
            I would like to improve my ability to work in a team with my
            co-workers. Being able to properly communicate and work with your
            co-workers is vital for working in the programming world as they
            often work together in teams. Whenever I’m not busy, I will make
            sure to message my co-workers to ask if there is anything that I can
            help them with. I will also message my co-workers if I am stuck on
            something and need their help to solve the problem. I will also try
            to voice my opinion more often to my co-workers in order to provide
            a new point of view on a problem that will hopefully help us all
            come to a better solution.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            My action plan is to immediately start trying to communicate more
            with my team members. I will communicate with my team whenever I run
            into a pitfall during development that I can’t seem to get out of. I
            will also try to help my team members when they reach a difficult
            roadblock while trying to solve a problem. I will also voice my
            ideas during team meetings in order to make sure every option has
            been thought through before picking the best one.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            I will know my goal has been achieved when I reach the end of the
            work term and most if not all of the work we have been assigned has
            been completed. I know that our team can only finish all of our work
            if we learn how to properly work together so logically if we have
            completed all of the work then we have learned how to work as a
            team.
          </p>
        </div>
        <br></br>

        <h3> Learning Goal 2</h3>
        <div className="textbox">
          <p>
            I would like to learn how to properly use the Guidewire Suite.
            Learning Guidewire would be very useful in the future if I ever want
            to work at Co-operators or another insurance company as most use
            Guidewire’s tools. It would be useful to have the Guidewire
            certificate to show that I am able and willing to learn whatever is
            necessary for the job. In order to achieve this goal, I will
            complete the Guidewire training modules required to become a
            certified Guidewire developer. I will know I have completed my goal
            when I pass the final Guidewire Developer exam and become certified.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            My action plan is to complete all of the required Guidewire training
            for the Guidewire Developer Certificate. Then once I have completed
            all of the training, I will set up the date for the certification
            exam. Before the exam, I will take time to study all of the
            necessary material for the exam in order to ensure I have the best
            possible chances of passing the exam. Then I will finally take the
            exam and hopefully, if everything works out, I will pass.
          </p>
        </div>
        <br></br>
        <div className="textbox">
          <p>
            The measure of success for this learning goal is to pass the final
            Guidewire Developer training course and receive my Guidewire
            Developer certification.
          </p>
        </div>
        <br></br>

        <h3> Learning Goal 3</h3>
        <div className="textbox">
          <p>
            I would like to improve my information retention skills. I sometimes
            find that after a meeting I often forget some important points and I
            then need someone else to explain it to me again. This is obviously
            a detriment as having to get someone to repeat something to me
            wastes not only my time but my co-workers’ time as well. In order to
            fix this issue, I will take notes at every meeting in order to
            ensure I don’t miss anything. I will also try to take a more active
            approach to listening by asking relevant questions.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            My plan to complete this learning goal is to take notes during each
            and every meeting. I will compile an online notebook filled with
            important information from each meeting in order to ensure I miss
            nothing. I will also be sure to stay focused during every meeting.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            I will know I have completed my goal when I have a complete notebook
            of important notes by the end of my work term.
          </p>
        </div>
        <br></br>

        <h3> Learning Goal 4</h3>
        <div className="textbox">
          <p>
            During this work term, I would like to learn more about
            Object-Oriented programming. Object-Oriented Programming is a
            valuable skill as it is by far the most used programming paradigm of
            the modern world and is necessary to learn for most jobs. In order
            to learn more about Object Oriented programming, I will spend some
            of my free time after work learning object-oriented concepts and
            trying to solve problems using those concepts. At work, I will also
            put those concepts into practice in a real-world situation during
            this work term in order to improve my skills.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            My plan of action is to spend time outside of work reading up on
            object-oriented concepts as well as completing object-oriented
            programming problems. Once I learn about object-oriented practices,
            I will also try to put them to use in real-life situations during my
            work term.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            I will know I will have succeeded in my goal when by the end of the
            work term I will be able to complete object-oriented problems and an
            object-oriented test. At the end of the work term, I will check my
            object-oriented knowledge by completing a couple of online tests on
            the subject and completing programming challenges specifically
            designed around object-oriented programming.
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
              <h3>Learning Goal</h3>
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
                  I would like to improve my ability to work in a team with my
                  co-workers. Being able to properly communicate and work with
                  your co-workers is vital for working in the programming world
                  as they often work together in teams. Whenever I’m not busy, I
                  will make sure to message my co-workers to ask if there is
                  anything that I can help them with. I will also message my
                  co-workers if I am stuck on something and need their help to
                  solve the problem. I will also try to voice my opinion more
                  often to my co-workers in order to provide a new point of view
                  on a problem that will hopefully help us all come to a better
                  solution.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  I would like to learn how to properly use the Guidewire Suite.
                  Learning Guidewire would be very useful in the future if I
                  ever want to work at Co-operators or another insurance company
                  as most use Guidewire’s tools. It would be useful to have the
                  Guidewire certificate to show that I am able and willing to
                  learn whatever is necessary for the job. In order to achieve
                  this goal, I will complete the Guidewire training modules
                  required to become a certified Guidewire developer. I will
                  know I have completed my goal when I pass the final Guidewire
                  Developer exam and become certified.
                </p>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  My action plan is to immediately start trying to communicate
                  more with my team members. I will communicate with my team
                  whenever I run into a pitfall during development that I can’t
                  seem to get out of. I will also try to help my team members
                  when they reach a difficult roadblock while trying to solve a
                  problem. I will also voice my ideas during team meetings in
                  order to make sure every option has been thought through
                  before picking the best one.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  My action plan is to complete all of the required Guidewire
                  training for the Guidewire Developer Certificate. Then once I
                  have completed all of the training, I will set up the date for
                  the certification exam. Before the exam, I will take time to
                  study all of the necessary material for the exam in order to
                  ensure I have the best possible chances of passing the exam.
                  Then I will finally take the exam and hopefully, if everything
                  works out, I will pass.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know my goal has been achieved when I reach the end of
                  the work term and most if not all of the work we have been
                  assigned has been completed. I know that our team can only
                  finish all of our work if we learn how to properly work
                  together so logically if we have completed all of the work
                  then we have learned how to work as a team.
                </p>
              </div>
              <br></br>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  The measure of success for this learning goal is to pass the
                  final Guidewire Developer training course and receive my
                  Guidewire Developer certification.
                </p>
              </div>
              <br></br>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3> Learning Goal 3</h3>
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
                  I would like to improve my information retention skills. I
                  sometimes find that after a meeting I often forget some
                  important points and I then need someone else to explain it to
                  me again. This is obviously a detriment as having to get
                  someone to repeat something to me wastes not only my time but
                  my co-workers’ time as well. In order to fix this issue, I
                  will take notes at every meeting in order to ensure I don’t
                  miss anything. I will also try to take a more active approach
                  to listening by asking relevant questions.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  During this work term, I would like to learn more about
                  Object-Oriented programming. Object-Oriented Programming is a
                  valuable skill as it is by far the most used programming
                  paradigm of the modern world and is necessary to learn for
                  most jobs. In order to learn more about Object Oriented
                  programming, I will spend some of my free time after work
                  learning object-oriented concepts and trying to solve problems
                  using those concepts. At work, I will also put those concepts
                  into practice in a real-world situation during this work term
                  in order to improve my skills.
                </p>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan to complete this learning goal is to take notes during
                  each and every meeting. I will compile an online notebook
                  filled with important information from each meeting in order
                  to ensure I miss nothing. I will also be sure to stay focused
                  during every meeting.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="columntextbox">
                <p>
                  My plan of action is to spend time outside of work reading up
                  on object-oriented concepts as well as completing
                  object-oriented programming problems. Once I learn about
                  object-oriented practices, I will also try to put them to use
                  in real-life situations during my work term.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I have completed my goal when I have a complete
                  notebook of important notes by the end of my work term.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="columntextbox">
                <p>
                  I will know I will have succeeded in my goal when by the end
                  of the work term I will be able to complete object-oriented
                  problems and an object-oriented test. At the end of the work
                  term, I will check my object-oriented knowledge by completing
                  a couple of online tests on the subject and completing
                  programming challenges specifically designed around
                  object-oriented programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Cooperators">
      <header className="PageHeader">
        <br></br>
        <div className="titlefont">Co-operators Work Report</div>
        <Navbar></Navbar>
        <br></br>
        <img src={cooperatorslogo} className='image' alt="NCR Logo" />
        <br></br>
        <div className="textbox">
          <p>
            This is my work term report for my remote work term at the
            Co-operators in Guelph which lasted from May 2021 to September 2021.
            Once you read this work report you will understand what I learned
            from my time at Co-operators and what I achieved at Co-operators.
          </p>
        </div>
        <br></br>
        <h2>About Co-operators</h2>
        <br></br>
        <div className="textbox">
          <p>
            The Co-operators is a Canadian insurance co-operative that was
            founded in 1945 in Saskatchewan. Since then Co-operators has grown
            into one of the leading insurance providers in Canada, providing all
            types of insurance from auto insurance to life insurance.
            Co-operators is now headquartered in Guelph which also contains the
            University Of Guelph which is the University I attend. Due to their
            focus on insurance, the technical side of the company focuses on
            creating insurance web applications to help Co-operator insurers
            create and manage a variety of different insurance policies for
            their customers.
          </p>
        </div>
        <br></br>

        {isMobile() ? getMobileLearningGoals() : getDesktopLearningGoals()}

        <br></br>
        <h2>Did I Achieve My Goals</h2>
        <br></br>
        <div className="textbox">
          <p>
            I managed to complete two of the four learning goals I had for this
            work term. The two I managed to complete were learning goal 4, about
            improving my object-oriented programming skills, and learning goal
            1, about improving my ability to work in a team. The two I failed to
            complete were learning goal 2 about learning how to properly use the
            Guidewire Suite and learning goal 3 about improving my memory
            retention skills. The reason I failed to learn how to properly use
            the Guidewire Suite was because I failed to effectively manage my
            time. I was given ample time to learn about the Guidewire Suite and
            study for my Guidewire certification exam, but due to failing to
            manage my time effectively, I was never able to use that time to
            study, instead using that time to complete projects. I did manage to
            get some time near the end of the work term to study and learn but
            by that time it was too late and I could not schedule a time to
            write the exam. If I had managed my time more effectively I could
            have studied and completed the Guidewire certification exam early on
            and still would have had plenty of time to complete my projects. The
            reason I failed to improve my memory retention skills was because I
            realized that my action plan, which was to write down notes for
            every meeting, didn’t work for me. After creating that learning goal
            I attempted to take notes at every meeting but I soon found it too
            challenging to try to keep up with the meeting and take notes.
            Oftentimes I would be too focused on taking notes so I couldn’t keep
            up with the meeting and missed important information. Once I stopped
            trying to take notes, I found that I was able to understand and
            remember a lot more about the meeting than I ever did with the
            notes. Even though I did fail to meet my specific measure of success
            I still feel that over time I did remember a lot more during each
            meeting than I did at the start of the work term.
          </p>
        </div>
        <br></br>
        <h2>Job Description</h2>
        <br></br>
        <div className="textbox">
          <p>
            At the Co-operators the official title for my role was Junior
            Systems Developer. As a Junior Systems Developer my task was to
            repair, enhance, and add features to the Co-operators insurance
            software in order to make it more stable and easier to use. I didn’t
            do this job alone though as I worked in a team with 7 other students
            some developers and some were business system analysts. The work we
            received was often work that was stuck in other team’s backlogs for
            a long time that nobody had time to work on anymore. It was our job
            to take said work, gather requirements for the work, develop a
            solution to complete the work, test the solution, and then finally
            upload the solution so it’s included in the next release of their
            software.
          </p>
        </div>
        <br></br>
        <h2>Highlights Of The Job</h2>
        <br></br>
        <div className="textbox">
          <p>
            The first highlight of the job was the first-ever project that me
            and my team worked on which was fixing smoke tests on each one of
            the developer environments. Smoke tests are small tests that are
            used to check for small errors that can cause a software release to
            be rejected. These smoke tests were failing for various reasons,
            some being very simple, such as the smoke test testing a feature
            that no longer existed so we just simply had to delete the test.
            Other times, we either had to alter the smoke test as it wasn’t
            testing what we expected or had to alter what the smoke test was
            checking as the feature it was testing was broken. In the case of
            either situation, it caused us to have to go deep into the code and
            spend time not only fixing but trying to understand the code.
            Thankfully Co-operators use GOSU which is a modified version of Java
            and since I knew Java well because of my object-oriented programming
            classes at University, I had no problem understanding the language.
            We often had to reach out to other teams that created the smoke test
            or feature and ask them questions so we could better understand how
            each feature worked. While at first, it was quite difficult and
            stressful to have a massive list of smoke tests to fix, I quickly
            got the hang of it and soon enough we had fixed most if not all of
            the smoke tests on every development environment. It was also during
            this project that I started to learn how to work as a team. During
            my time at the University Of Guelph I never really got to work in a
            team environment as most of the time I worked on projects by myself.
            At first, it was awkward working with other people as I didn’t
            really know how to effectively communicate with my team and how to
            properly divide the work. This caused some people to be left with
            nothing to do or to be confused about their responsibilities. As we
            continued with the project, we quickly learned how to effectively
            communicate with each other and divide up work so everyone could be
            working at once. By the time we completed the project I felt an
            amazing sense of triumph as I completed my first big project at the
            job and learned a ton while doing it.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            The second highlight of my job was creating a brand new feature for
            their web application called Renewal Hold. Renewal Hold was a
            feature that allowed you to automatically hold every policy that met
            certain criteria. This project forced me to use and learn about the
            Guidewire suite of software which Co-operators bases all of their
            insurance software on. This forced me to learn how to use Guidewire
            to create web pages, how to add input fields to those pages, and
            then how to take the information from the input fields and use it
            elsewhere. This project also forced me to learn how to communicate
            as I was the main programmer on the project because I was the
            furthest along in my Guidewire training. Due to my role as lead
            programmer, I had to learn how to properly communicate with the
            project leaders in order to ensure I fulfilled all of their
            requirements and that the feature was up to their standards. Most of
            the skills I needed for this project had to be learned on the spot
            as Guidewire has their own way of doing things that isn’t
            transferable to most other things. Thankfully a lot of the project
            had been started for me by other teams so I had examples of how to
            do it properly. Overall, working on Renewal Hold was a fantastic
            part of my job and I learned a ton on how to properly communicate
            with other people on a project and how to quickly adapt to a new
            programming system.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            The third and final highlight of the job was the final project me
            and my team worked on. The final project I worked on was upgrading
            all of the pre-existing unit tests from Guidewire 7.0 to Guidewire
            10.0. Near the end of the work term, my manager told our team that
            they were upgrading their version of Guidewire from 7.0 to 10.0 and
            they wanted us to update all 500 of their unit tests. This was by
            far the biggest and most important project we ever took on and it
            required weeks of work with all of us working on it at the same
            time. We each individually took our own section of unit tests,
            verified them for errors, and then fixed them. Some errors were
            quite simple such as changing a variable name from being lowercase
            to capitalized as Guidewire 7.0 was not case sensitive while
            Guidewire 10.0 was. Some errors were much bigger; sometimes a
            specific function no longer existed, causing us to have to find the
            new replacement function and figure out how to use it without
            breaking the functionality of the code. Thankfully, while it was a
            massive project, it was also probably my favorite as it was near the
            end of my term and I had a very solid grasp of GOSU and the weird
            intricacies of the Guidewire software so we were able to complete it
            without much help. Occasionally, there were a couple of errors that
            were beyond our understanding so I had to use the communication
            skills that I developed over the work term to ask our project
            supervisors for some help. Other than those slight communication
            problems though the project was completed with flying colors and
            everyone in my team learned a ton from the project.
          </p>
        </div>
        <br></br>

        <div className="textbox">
          <p>
            Overall, the job was by far the best job I have ever had and I
            learned a lot. Because of this job I learned how to properly
            communicate and work within a team, how to use the Guidewire
            InsuranceSuite software, and how to use the GOSU language. I also
            enhanced the pre-existing skills I learned at the University of
            Guelph, such as my Java skills since GOSU is very similar to Java,
            my object-oriented programming skills, and my problem-solving
            skills.
          </p>
        </div>

        <br></br>
        <h2>Academic Relation</h2>
        <br></br>
        <div className="textbox">
          <p>
            This job thoroughly enhanced my academic experience as I learned a
            ton from it that I can now use during my next study term and during
            my next work terms. This job improved my problem-solving skills as I
            had to quickly learn to devise a solution to whatever problem
            Co-operators threw at me. I also had to learn how to communicate and
            work with my fellow coworkers in order to complete the work given to
            our team. Both problem-solving skills and communication skills are
            extremely valuable assets to programmers. Programmers need
            problem-solving skills to create efficient and effective solutions
            to a variety of problems. Programmers also often don’t work alone
            and need to be able to properly communicate and work with others in
            order to complete their work. Therefore improving my problem solving
            and communication skills at Co-operators will undoubtedly help me as
            a programmer not only at university but in my future work terms.
          </p>
        </div>
        <br></br>
        <h2>Conclusion</h2>
        <br></br>
        <div className="textbox">
          <p>
            Overall, the job was fantastic and thank you for reading about my
            job, what I learned during the work term, and my highlights of
            working at Co-operators as a Junior Systems Developer.
          </p>
        </div>
        <br></br>
        <h2>Acknowledgments</h2>
        <br></br>
        <div className="textbox">
          <p>
            Thank you to the Co-operators for giving me an amazing first work
            term. My job at the Co-operators was easily the best I have ever had
            and I have made great friends and memories by working there. I also
            want to thank every person I worked with at the Co-operators,
            especially my fellow co-op students as they were all extremely
            helpful and kind to me. Finally, I want to thank the University Of
            Guelph for teaching me all of the skills I needed to succeed during
            my co-op term as well as supporting me throughout the co-op process.
          </p>
        </div>
        <br></br>
      </header>
    </div>
  );
}

export default Cooperators;
