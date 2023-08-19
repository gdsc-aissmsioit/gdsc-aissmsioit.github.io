import React from "react";

import "./Blogdetails.css";

import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../footer/ScrollToTop";

const LeadApplication = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Details - GDSC</title>
        <meta name="title" content="Blog Details - GDSC" />
        <meta
          name="description"
          content="Hi everyone! I’m Prarthana Chandak, the founder and the Lead at Google Developer Student Clubs, AISSMS IOIT. I started GDSC at my campus for the very first time and this blog is a complete guide on the entire process that I followed and you can follow while applying. Index - What is a GDSC? Benefits of being a GDSC Lead My motivation to run a community Criteria to become a GDSC Lead"
        />
        <meta
          name="keywords"
          content="gdsc blogs lead application guide, gdsc aissms blogs lead application guide, gdsc aissms ioit blogs lead application guide, dsc, dsc aissms blogs lead application guide, dsc aissms ioit blogs lead application guide, gdsc ioit blogs lead application guide, dsc ioit blogs lead application guide, ioit dsc blogs lead application guide, aissms dsc blogs lead application guide, aissms ioit dsc blogs lead application guide, aissms ioit gdsc blogs lead application guide, gdsc-aissms-ioit blogs lead application guide, gdsc-ioit blogs lead application guide, dsc-aissms-ioit blogs lead application guide, dsc-ioit blogs lead application guide"
        />
      </Helmet>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor=".example-selector"
        data-aos-anchor-placement="top-center"
        className="row"
      >
        <div id="Events" className="span_headings">
          <span>Blog Details</span>
        </div>
      </div>

      <div className="events-container">
        <div className="blogs-card">
          <div
            className="events-header blogs-header"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <a title="Blog Image" target="_blank" rel="noreferrer" href="#0">
              <img
                src="https://i.ibb.co/5M763g9/Lead-Application.jpg"
                alt="Events_Image"
                className="events-image blogs-image"
              />
            </a>
          </div>

          <div
            className="blogs-main"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <>
              <div className="blog-post-content max-width-2 m-auto my-2 m-auto">
                <h1 className="font1">Guide to become a GDSC Lead</h1>
                <div className="blogpost-meta">
                  <div className="author-info">
                    <div>
                      <b>Prarthana Chandak: Lead - GDSC, AISSMS IOIT</b>
                    </div>
                    <div>31st March 2022 | 10 mins</div>
                  </div>
                  <div className="social">
                    <a
                      href={`mailto:prarthanachandak@gmail.com`}
                      target="_blank"
                      rel="noreferrer"
                      className="mr-3"
                      title="Mail"
                    >
                      <i className="fa fa-envelope blog-mail"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/prarthana-chandak-2a84b81b7"
                      target="_blank"
                      rel="noreferrer"
                      title="LinkedIn"
                    >
                      <i className="fa fa-linkedin ico-link"></i>
                    </a>
                  </div>
                </div>
                <div className="font1">
                  <p>
                    Hi everyone! I’m Prarthana Chandak, the founder and the Lead
                    at Google Developer Student Clubs, AISSMS IOIT. I started
                    GDSC at my campus for the very first time and this blog is a
                    complete guide on the entire process that I followed and you
                    can follow while applying.
                  </p>
                  <ol>
                    <li>What is a GDSC?</li>
                    <li>Benefits of being a GDSC Lead</li>
                    <li>My motivation to run a community</li>
                    <li>Criteria to become a GDSC Lead</li>
                    <li>Application process</li>
                    <li>My journey with GDSC</li>
                    <li>Perks and Benefits</li>
                  </ol>
                  <h3>What is a GDSC?</h3>
                  <ul>
                    <li>
                      - Google Developer Student Clubs are university based
                      community groups for students interested in Google
                      developer technologies.
                    </li>
                    <li>
                      - Students from all undergraduate or graduate programs
                      with an interest in growing as a developer are welcome.
                    </li>
                    <li>
                      - By joining a GDSC, students grow their knowledge in a
                      peer-to-peer learning environment and build solutions for
                      local businesses and their community.
                    </li>
                  </ul>
                  <p>
                    Read more here - <a
                      href="https://gdsc.community.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary"
                    >
                      https://gdsc.community.dev/
                    </a>
                  </p>

                  <h3>What are the benefits of being a GDSC Lead?</h3>
                  <p>
                    GDSC Leads are the student leaders who are passionate
                    towards technology and want to change the world with
                    technology. Here are some of the benefits that I got from
                    being a lead.
                  </p>
                  <ul>
                    <li> - Network growth and instance exposure.</li>
                    <li>
                      - Community of people who are doing great in their fields.
                    </li>
                    <li> - Technical knowledge and project building.</li>
                    <li> - Confidence and personality building.</li>
                    <li> - Ability to take quicker and accurate decisions.</li>
                    <li>
                      - Cool schwags and goodies (that’s the last thing we
                      should look upto, but yes it adds in motivation!)
                    </li>
                  </ul>
                  <p>
                    My onboarding kit - <a
                      href="https://bit.ly/3wLFbPX"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary"
                    >
                      https://bit.ly/3wLFbPX
                    </a>
                  </p>

                  <h3>What was my motivation to run a GDSC?</h3>
                  <p>
                    Start with this blog -
                    <NavLink
                      onClick={scrollToTop}
                      to="/blogs/1/"
                      className="text-primary"
                    >
                      My Coding Journey And How I Became A Lead At GDSC
                    </NavLink>
                  </p>
                  <ul>
                    <li>
                      - Looking around in my college, I felt like we all
                      students are really keen to explore new things and learn,
                      but maybe aren’t aware of what’s around.
                    </li>
                    <li>
                      - Google Developer technologies being widely used in the
                      market, I felt like Google Developer Student Club at our
                      college can really bring a revolution and help as many
                      people learn and explore their interests.
                    </li>
                    <li>
                      - Also, I wanted to explore as much as I can in college -
                      try out public speaking, interacting with people, build my
                      network and join an amazing community of developers.
                    </li>
                  </ul>
                  <p>
                    My onboarding kit - <a
                      href="https://bit.ly/3wLFbPX"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary"
                    >
                      https://bit.ly/3wLFbPX
                    </a>
                  </p>

                  <h3>What are the prerequisites to become a GDSC Lead?</h3>
                  <ul>
                    <li>- Have a minimum of one year left until graduation.</li>
                    <li>
                      - Enrolled in an undergraduate or graduate program at a
                      college or university.
                    </li>
                    <li> - Can commit to program for one year.</li>
                    <li> - Passionate about creating impact in community.</li>
                    <li>
                      - Strong technical understanding of computer programming
                      and/or software engineering.
                    </li>
                    <li>
                      - Have experience with event planning or leading a team.
                    </li>
                    <li>
                      - Have some connection to the local developer community.
                    </li>
                    <li>
                      - Host an event ideally once a month, and at least every 3
                      months.
                    </li>
                  </ul>

                  <h3>How to apply?</h3>
                  <p>- Applications open till 15th April, 2022.</p>
                  <p>Steps:</p>
                  <ol>
                    <li>
                      Fill an application form - <a
                        href="https://gdsc.advocu.com/home/applications/form"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                      >
                        https://gdsc.advocu.com/home/applications/form/
                      </a>
                    </li>
                    <ul>
                      <li>
                        - Select country and the name of your GDSC (if exists),
                        or add new chapter.
                      </li>
                      <li> - Share your social media profiles.</li>
                      <li>
                        - If you have been given a referral code, make sure to
                        mention it. (Referral code doesn’t guarantee your
                        selection and even the students without the code can get
                        selected.)
                      </li>
                      <li>
                        - Write about all the experiences you had being a part
                        of the community. Mention if you’ve been a member/core
                        team member of GDSC. Describe your experience and
                        motivation to run a community.
                      </li>
                      <li>
                        - Write about your leadership experience, what
                        challenges did you face and how you overcame them. This
                        part should describe you as a perfect leader. You can
                        also talk about your projects where you led the team.
                      </li>
                      <li>
                        - The next part describes how technically strong you
                        are. You don’t need to be an expert. You should just
                        have an exposure and interest towards development. Any
                        basic project is fine.
                      </li>
                      <li>
                        <strong>
                          Tip - Even if you are working on the project, mention
                          it and resume working on it even after submitting the
                          application. You can showcase it later in your
                          interview. Also, if you have a project on dsa or any
                          simple project, try building an interface for it. One
                          page interface is fine too.
                        </strong>
                      </li>
                    </ul>
                    <li>
                      Record a video of yourself describing why you want to
                      become a lead.
                    </li>
                    <ul>
                      <li>Keep the video not longer than 1 and half minute.</li>
                      <li>
                        For the first half, rather than introducing yourself in
                        detail, mention only the brief points that describe your
                        leadership experience/skills and technical knowledge.
                      </li>
                      <li>
                        Second half should describe the reason you want to
                        become a lead and what you’ll do after getting selected.
                      </li>
                      <li>
                        If you already have a GDSC at your campus, mention how
                        it has helped students and how you can help create a
                        greater impact. If not, mention why you want to start
                        one.
                      </li>
                    </ul>
                    <li>
                      30 minute interview round with a representative from
                      Google.
                    </li>
                    <ul>
                      <li>
                        - If your application gets selected, you’ll be invited
                        for the interview round.
                      </li>
                      <li>
                        - Select a time slot quickly, else most of the slots get
                        booked.
                      </li>
                      <li>
                        - Select a slot not too early, not too late - somewhere
                        in the middle.
                      </li>
                      <li>
                        <strong>Tips for the interview - </strong>
                      </li>
                      <li>
                        - Be happy and relaxed during the interview as the
                        interviewers are usually very friendly. Greet them when
                        they join the call.
                      </li>
                      <li>
                        - Prepare your introduction properly as this can be the
                        first question asked.
                      </li>
                      <li>
                        - Mention every detail that makes you eligible to become
                        the lead. Avoid adding unnecessary details.
                      </li>
                      <li>
                        - Be prepared with your plan of running the club after
                        getting selected.
                      </li>
                      <li>
                        - Be ready to speak about your technical projects. Start
                        with the best ones. Even if you are working on it,
                        mention your plan to complete it. Make sure to push the
                        code on github as you might be required to share it.
                      </li>
                      <li>
                        - Keep all the links handy. (it can be your club
                        profiles, project repository and anything that you’ll be
                        mentioning in the interview.)
                      </li>
                      <li>
                        - Last few minutes can be informal talk, you can add to
                        the points the interviewer discusses with you, or
                        atleast make sure you are listening carefully to them.
                      </li>
                      <li>
                        Don’t interrupt the interviewer when they’re speaking to
                        you.
                      </li>
                      <li>
                        <strong>Imp</strong> - At the end, you’ll be asked if
                        you want to ask anything to the interviewer. Make sure
                        you are prepared before-hand with your questions. Never
                        reply with No.
                      </li>
                    </ul>
                  </ol>
                  <h3>My experience while applying - </h3>
                  <ol>
                    <li>
                      I was already a member of GDSC AISSMS COE before we had
                      one in our college therefore I knew what GDSC is.
                    </li>
                    <li>
                      I was in touch with the lead of AISSMS COE - Ankita Ugale,
                      who guided me a lot during my application process. I also
                      got in touch with K.S. Wagh Sir during the application
                      process. He was very supportive and motivated all of us to
                      apply for the post and start a GDSC at our campus.
                    </li>
                    <li>
                      I prepared very well with my answers in my application. I
                      spent 2 days reviewing my answer and removing unnecessary
                      details. Around 7-8 folks from our class applied for the
                      position.
                    </li>
                    <li>
                      As I was already working on 2 projects, I wrote about the
                      tech-stack I know and what I’ve done and planning to do
                      for my projects. Also, I mentioned my problem solving
                      skills.
                    </li>
                    <li>
                      I noted down all the points I have to speak while
                      recording the video. I watched a few youtube videos by
                      ex-leads that gave me an idea. But, your video should
                      always be original. It took me 4 to 5 takes to shoot a
                      decent video. I wore a 30 Days of GCP T-shirt while
                      recording the video that displayed my experience with the
                      club. Check out my video here - <a
                        href="https://www.youtube.com/watch?v=FWHR9CxuQLA"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                      >
                        https://www.youtube.com/watch?v=FWHR9CxuQLA
                      </a>
                    </li>
                    <li>
                      It took almost a month to hear back from them, and I was
                      very excited and nervous when I received an invitation for
                      the interview round. 2 of my friends were also selected
                      and they were equally eligible for the post and hence I
                      was a little nervous, but we 3 were excited to have a GDSC
                      at our campus.
                    </li>
                    <li>
                      I went through almost all the articles on the internet
                      where ex-leads had shared their experiences and tips for
                      the interview round.
                    </li>
                    <li>
                      Interview round was exactly the same as I have described
                      in the previous section. The interviewers were very
                      friendly and made sure I’m comfortable. A little
                      nervousness always kicks in which made me miss an
                      important point in the introduction. Also, I described my
                      hobby as writing and mentioned my writing profile. I
                      didn’t expect the interviewer to ask about my profile
                      link. I wasn’t ready with it and hence he asked me to mail
                      it to him after the interview. So along with the link, I
                      also mailed that important point that I had missed. I
                      wasn’t sure if I should do that or not but it’s at least
                      better than having regrets. Therefore keep all your
                      profiles and links handy.
                    </li>
                  </ol>
                  <h3>My experience as a GDSC Lead- </h3>
                  <ol>
                    <li>The Selection Day-</li>
                    <ul>
                      <li>
                        So it was a rainy evening in the month of August. It was
                        raining heavily which caused a power cut. I was at home
                        and we were having a good family time, enjoying the rain
                        and talking about our old days.
                      </li>
                      <li>
                        My phone rang and I went to my room to pick up the call
                        and the moment I was going to shut my phone off, I saw
                        an email notification from Advocu - GDSC. Even before I
                        opened it, my heart had already started pumping.
                      </li>
                      <li>
                        I read the first line and I was so damn excited that I
                        couldn’t even sit patiently to read the entire email. I
                        reread the first line and jumped out of excitement. So
                        much excitement that I didn’t even notice the tears of
                        joy flowing out of my eyes. I ran towards the living
                        room, shared the news and that was probably the best day
                        of my college life.
                      </li>
                      <li>
                        Here is a glimpse of the mail that I received - <a
                          href="https://bit.ly/3wO0T5I"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary"
                        >
                          https://bit.ly/3wO0T5I
                        </a>
                      </li>
                      <li>
                        Although, I was also sad for 2 of my equally capable
                        friends who gave the interviews. But they were happy
                        too, at least we now had a GDSC at our campus.
                      </li>
                    </ul>
                    <li>Further steps - </li>
                    <ul>
                      <li>
                        We had an amazing introductory session by GDSC India
                        where I got to connect with all the leads around the
                        country.
                      </li>
                      <li>
                        Now the next step was to introduce GDSC to the college
                        and identify a core team of passionate leaders. With
                        guidance of Wagh SirFaculty Advisor of our GDSC) and
                        permission of Principal Sir, I had to organize an intro
                        event and this was the very first time I was going to
                        deliver/host an event to the public in the college. I
                        was nervous but excited. I didn’t expect a huge audience
                        of 250+ students who came up for the event. That was the
                        day when my public speaking skills got a boost and I
                        became more confident than ever. I was nervous but yes,
                        I had my friends supporting me throughout.
                      </li>
                      <li>
                        From organizing 30 Days of Google Cloud, Android Study Jams, Flutter Festivals to Workshops on Github, Heroku, ML, Web, and a National Level Hackathon, I and my team have had a super dooper amazing journey throughout! We approached sponsors and luckily had the tech giant - Tech Mahindra as our sponsor for the hackathon, which had been our best event till date. Following which, we recently organized a series of workshops on various technologies.
                      </li>
                      <li>
                        The best part was building our own website, for which
                        the Web Team of GDSC worked really hard! A competition
                        BloggerSpace was conducted on our own website which is a
                        matter of pride for us. Website not only brags about the
                        achievements of the club but also lets the community
                        share their experiences and inspire people, and I think
                        that’s the best part about our website.
                      </li>
                      <li>
                        Check it out - <a
                          href="https://gdsc-aissmsioit.github.io/#/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary"
                        >
                          https://gdsc-aissmsioit.github.io/#/
                        </a>
                      </li>
                    </ul>
                    <li>
                      One of the important steps was also creating a Volunteers
                      Team of fresh minds from 1st year who will secure the
                      future of GDSC at our college.
                    </li>
                  </ol>
                  <h3>
                    What have I achieved being a GDSC Lead? - Perks and Benefits
                  </h3>
                  <ol>
                    <li>
                      <strong>A strong personality - </strong>decision making,
                      public speaking, handling critical situations, binding the
                      team together, helping everyone thrive as leaders.
                    </li>
                    <li>
                      <strong>Insane network growth - </strong>GDSC gave me an
                      opportunity to connect better with people, Leads all over
                      India and the Globe.
                    </li>
                    <p>
                      Check out this post - <a
                        href="https://www.instagram.com/p/CYJX1B3g8Lb/?utm_medium=copy_link"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                      >
                        https://www.instagram.com/p/CYJX1B3g8Lb/?utm_medium=copy_link
                      </a>
                    </p>
                    <li>
                      Amazing core team to work with - I didnt even know these
                      folks before, but GDSC has built the friendship and the
                      trust between us. For all of the tough decisions, we have
                      stood together as one team. Honesty and loyalty towards
                      the club is what makes you a perfect team member, and my
                      core team has proved that.
                    </li>
                    <li>Technical knowledge and exposure.</li>
                    <li>Cool goodies and rewards.</li>
                    <li>New year dinner party.</li>
                    <li>
                      Collaborative events with other GDSCs and lots of cool
                      friends.
                    </li>
                  </ol>
                  <p>
                    It’s beyond words what GDSC has given to me. And that’s why
                    I am keen towards continuing the legacy and have a more
                    powerful and amazing Lead and the Core team for the year
                    2022-23! For any doubts regarding the applications, reach
                    out to me here - <a
                      href="https://www.linkedin.com/in/prarthana-chandak-2a84b81b7/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary"
                    >
                      https://www.linkedin.com/in/prarthana-chandak-2a84b81b7/
                    </a>
                  </p>
                  <p className="text-right"> - Thanks :)</p>
                </div>
                <div className="font1"></div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadApplication;
