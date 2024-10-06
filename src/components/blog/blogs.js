const BlogAbout = (props) => {
  return props.content
    .split(" @#$& ")
    .map((para, index) => <p key={index}>{para}</p>);
};

const BlogResources = (props) => {
  const resources = Object.entries(props.resources).map((resource, index) => (
    <div key={index}>
      <span className="font-weight-bold d-inline-block my-1">
        {resource[0]}
      </span>
      :
      <a href={resource[1]} className="m-2" target="_blank" rel="noreferrer">
        {resource[1]}
      </a>
    </div>
  ));

  return (
    <>
      <h3 className="mt-5">Resources</h3>
      {resources}
    </>
  );
};

const blogs = [
  {
    id: "leadguide_by_prarthanachandak",
    tag: "GDSC Lead Application",
    name: "Guide to become a GDG Lead",
    email: "prarthanachandak@gmail.com",
    linkedin: "https://www.linkedin.com/in/prarthana-chandak-2a84b81b7",
    date: "31st March 2022",
    day: "Thursday",
    shortDescription: `Hi everyone! I’m Prarthana Chandak, the founder and the Lead at
    Google Developer Groups, AISSMS IOIT. I started GDG at
    my campus for the very first time and this blog is a complete
    guide on the entire process that I followed and you can follow
    while applying. Index - What is a GDG? Benefits of being a GDG
    Lead My motivation to run a community Criteria to become a GDG
    Lead`,
    about: "",
    author: "Prarthana Chandak: Lead - GDG, AISSMS IOIT",
    imageSrc: "https://i.ibb.co/5M763g9/Lead-Application.jpg",
    category: "Technical",
    fade: "right",
    read: "8 mins",
  },
  {
    id: 1,
    tag: "GDSC Lead",
    name: "My Coding Journey and How I became a Lead at GDG",
    email: "prarthanachandak@gmail.com",
    linkedin: "https://www.linkedin.com/in/prarthana-chandak-2a84b81b7",
    date: "13th Feb 2022",
    day: "Sunday",
    shortDescription: `Hi everyone! I’m Prarthana Chandak, Lead and Founder at Google Developer Groups,
    AISSMS Institute of Information Technology. Currently, I’m also interning at Reliance Jio. I’m very
    excited to share with you all about how I started my journey with coding and became the Lead at
    GDG.
    So, I hated computers during my school days. I knew this .`,
    about: (
      <BlogAbout
        content="
        Hi everyone! I’m Prarthana Chandak, Lead and Founder at Google Developer Groups,
        AISSMS Institute of Information Technology. Currently, I’m also interning at Reliance Jio. I’m very
        excited to share with you all about how I started my journey with coding and became the Lead at
        GDG. @#$& So, I hated computers during my school days. I knew this was the last time that I was studying
        computers.. When the whole class got excited about computer practicals, I was the one who would
        prefer sitting in the class. Those HTML tags would really terrify me to the core.
        I gave my JEE and CET attempt in class 12 and I still didn’t know what branch I’m gonna take. So, to
        help me choose a branch, my mom and dad took me to a college in my hometown. We visited all the
        labs, discussed with HODs of different branches, and I finally thought that Mechanical and
        Computer(AI) would be good. But I still didn’t have that motivation to choose one single branch.
        So one day, my mom casually suggested that I join a C language class in my hometown, because no
        matter what branch I choose, it will have a programming language in the first year. So, we agreed
        upon it and started finding good classes. After trying 3-4 classes, I found a class where instead of
        teaching, they would make us solve problems, and give one-to-one guidance. And I loved that.
        Initially I would sit there for 1-2 hours, Sir would give me problems, I would try solving. Later I found a
        friend who enjoyed solving as much as I did, and we used to sit in the class for around 7 to 8 hours,
        solving Hackerrank problems. And that’s when I got that kick, I was 100% sure that I’m gonna choose
        the computer branch. So, that’s when my programming journey started. In my first year of college, I
        started with python and kept solving various problems. That really made me more confident and I
        enjoyed it as well. @#$& Now, as I couldn’t really do very well in JEE, I had this in my mind that I want to explore as much as I
        can in college, and try everything to my best. That’s how, while exploring, I came across this 30 Days
        of Google Cloud Program by GDG AISSMS COE in my 2nd year. I joined the club, completed all the
        challenges and really enjoyed it. I used to wonder why we don’t have a GDG in our college and
        that’s when I decided to start a club at our college. It was back in April, 2021 when the applications for
        Lead position at Google Developer Groups opened. I along with a few classmates applied for
        the same. We were supposed to fill out an application form, and an introductory video. Results were
        out in a few days, and I along with my 2 friends got selected for the interview round. @#$& I was very nervous as we three had equal chances of getting selected, and this was going to be my
        first interview. We had to book slots for the interview, and my interview day finally came. I was
        nervous but very excited. I had prepared well about my projects, my motivation to start a GDG and I
        knew I had to do my best for the interview. It was August 5, when I saw a letter in my mailbox,
        congratulating me for getting selected as the Lead at Google Developer Groups. Establishing a
        GDG at our campus wasn’t possible without constant support of Principal Sir, teachers and faculty
        advisor of GDG, Wagh Sir. And that’s how the journey began. @#$& I would encourage everyone reading this to apply for such programs. It really gives a boost to your
        confidence, public speaking, handling critical situations at last moments, managing a team and a lot
        more. It helps you build your personality overall. @#$& This was a brief about my journey, but in upcoming blogs, I’ll share more about resources to practice
        coding and DSA, and will share a detailed article which will help you apply for the GDG Lead
        position. I hope you enjoyed this blog!
      "
      />
    ),
    author: "Prarthana Chandak: Lead - GDG, AISSMS IOIT",
    imageSrc:
      "https://res.cloudinary.com/dqf1zqrr9/image/upload/v1644744738/blogs/yrs4m4qxhphlbktmmej1.jpg",
    category: "Technical",
    fade: "left",
    read: "8 mins",
  },
  {
    id: 2,
    tag: "Web",
    name: "My Journey Towards Full Stack !!",
    email: "ashishpatil96579@gmail.com",
    linkedin: "https://www.linkedin.com/in/ashish-patil-ab2879192/",
    date: "20th Jan 2022",
    day: "Thursday",
    shortDescription: `
      Hello Developers,
      This is Ashish Patil, working as Web Development Lead at GDG, AISSMS IOIT. In this blog, I will be sharing my entire journey of how I started working as a Full Stack Web Developer.
  
      So, let's get started!!!!
  
      I will start from the beginning when I was totally blank and was not aware of how coding and development work. In the first year, we had one subject called PPS and at that time I become acquainted with what exactly p. 
      `,
    about: (
      <BlogAbout content="Hello Developers, @#$& This is Ashish Patil, working as Web Development Lead at GDG, AISSMS IOIT. In this blog, I will be sharing my entire journey of how I started working as a Full Stack Web Developer. @#$& So, let's get started!!!! @#$& I will start from the beginning when I was totally blank and was not aware of how coding and development work. In the first year, we had one subject called PPS and at that time I become acquainted with what exactly python and coding is 😅. But unfortunately, due to the rise in Covid-19 cases, entire India was locked and our syllabus was not completed 😥. But I decided not to waste time and started taking benefit of each and every second in lockdown 🎯. @#$& Buckle up guys, now my coding journey has started 😁. @#$& So first of all, I started learning Python from basic to advanced. And I assure you guys that there is no other platform as best as *YouTube* for beginners. Then In my second year, I got introduced to C++, DSA, Competitive Coding. Then I started learning C++, Data Structures, and Algorithms. Practicing questions from coding platforms like HackerRank and CodeChef. Up till now, I had not specifically decided to work in any domain. I was just practicing python, C++, basic HTML/CSS projects in order to build my programming and development skills. But I was sure that I have to develop my career in Python Language only, because of its simplicity, powerful libraries, lot of opportunities available, and of course it was my first programming language that dive me into the coding journey. @#$& After that, I came across Django which is a web framework of Python. I was fascinated by this framework 🤩, due to its features like rapid development, clean and pragmatic design, orm, security, admin panel, csrf middleware, celery, channels, etc. And this is how my journey to *Full Stack Development* started. @#$& I had completed almost all the features of Django by applying for various courses, youtube, documentation, and projects in the span of 4-5 months. After that, I spent time learning Django REST Framework which is widely used for creating REST APIs. At the same time, I started working with a Start-Up named *Search-In* which is location-based service provider, enhancing user engagement in indoor spaces. From that day onwards, precious time had begun💎. It was golden opportunity which I got in my life, where I have developed many applications in Django and Django rest framework. As per the need, I started learning and deploying applications on Heroku and AWS. And that's how my cloud computing journey was also started 💫. Subsequently, I got into MERN Stack and started working on client-side rendering. Needless to say, if you want to work on client-side rendering then *JavaScript is the most important scripting language*, you must be cleared with. That being the case I learned all the key concepts of JavaScript and then proceeded with Node, Express, React, and MongoDB. @#$& At the same time, I have also applied for Django Mentorship at REGex Software Services, a software company in Jaipur that provides Training and IT-related services. Fortunately, I got selected for this position and I have worked with them for 3 months where I helped a lot of students and led different teams on different projects. @#$& Henceforth, I applied for a Web Development Internship at Studentpeeps, a platform where university students get exclusive student discounts when they shop. Where I have worked on the development and deployment of their website. @#$& Quality time started, I applied for the position in the core team at Google Developer Student  Club in our college. And guess what, I got selected as Web Lead 🤩. Where we have organised many Events, Workshops and shared valuable knowledge with each other. Still, I am enjoying working  with this great team 🌀. After that, I worked at TCS iON Digital Learning Hub as Python Intern where I developed Plagiarism Seeker Web App. @#$& Yet my journey is not completed 🏋️. I continued developing applications and now I am learning complex concepts of AWS, DevOps, Linux, and System Design. @#$& I hope, this blog will help you a bit in your vast and never-ending development journey 😊." />
    ),
    resources: (
      <BlogResources
        resources={{
          "Search-In": "https://searchin.co.in/",
          "REGex Software Services": "https://www.regexsoftware.com/",
          Studentpeeps: "https://studentpeeps.club/",
          "TCS iON Digital Learning Hub":
            "https://learning.tcsionhub.in/iDH/India/",
          GitHub: "https://github.com/Ashish2831",
        }}
      />
    ),
    author: "Ashish Patil: Web Lead - GDG, AISSMS IOIT",
    imageSrc:
      "https://res.cloudinary.com/dqf1zqrr9/image/upload/v1643207608/blogs/FullStack_dkrske.png",
    category: "Technical",
    fade: "left",
    read: "8 mins",
  },
  {
    id: 3,
    tag: "Machine Learning",
    name: "Machine Learning",
    email: "akshada3654@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshada-bhandari-16bb90192/",
    date: "18th Jan 2022",
    day: "Tuesday",
    shortDescription:
      "The pace of growing artificial intelligence is incredibly fast. It has its influence in all the fields like healthcare, banking, agriculture, business, e-commerce, space, and many more. Artificial Intelligence, Machine Learning, Computer Vision, Robotics will be the ever-evolving fields in the coming decades. There are lot many opportunities available in these fields. Extensive research opportunities are the core reason for the development in this field.",
    about: (
      <BlogAbout content="The pace of growing artificial intelligence is incredibly fast. It has its influence in all the fields like healthcare, banking, agriculture, business, e-commerce, space, and many more. Artificial Intelligence, Machine Learning, Computer Vision, Robotics will be the ever-evolving fields in the coming decades. There are lot many opportunities available in these fields. Extensive research opportunities are the core reason for the development in this field. Thus I feel that one should surely think about pursuing their career in Artificial Intelligence due to its exposure and plethora of opportunities. @#$& It gives me immense pleasure in writing this blog. I would like to highlight my journey in selecting this technology as my career. I had got an opportunity from my college in 11th grade to visit ISRO, Ahmedabad to study satellites. I was so fascinated by the working of satellites, their automation, and the artificial intelligence research going in the space technology for India. Returning from the journey I had already planned my career in the field of artificial intelligence. @#$& And the hunt started ………..!!! @#$& I started researching about degrees in AI in India, but to my vain, there were not that many courses available in the destined field. I spoke to various industry persons and then came to conclusion about pursuing BE in Computer Engineering. This made me land in the AISSMS Institute of Information Technology. Being a sophomore I was unaware of the programming languages. After, my first sem I joined DISHA classes to get cleared with my concepts for C, C++. Within a year I had nearly mastered C, C++, Python along-with DSA. @#$& In my second year during my mid-vacations, I had attended the workshop conducted by Machine Learning India at Ai-adventures, Pune. And my journey towards ML started. Building projects, practising python programming, reading books and references started. I started learning from various youtube channels - Edureka, codewithharry, and many live sessions. But these were not enough. Machine learning is not a one day thing. @#$& Having many resources but not the best was the problem. During the covid pandemic I came across the ML Masters course by iNeuron.ai. It was indeed one of the best course I came across. The course started from basic python programming and ended with NLP, DL. It had various modules like database management, API, EDA, ML pipelines, Deep Learning and NLP. The course was not just theoretical but practical too. I had build a couple of projects too. Meanwhile I got selected as ML lead at GDG and MLASC. @#$& After completing this course I interned at the same company as a ML intern. I had a major contribution in data researching, data analysing, data preprocessing and writing python scripts. After this, I started interning as a Developer at Apartmint solutions wherein my major tasks included scraping the data from real estate website and integrating it with postgresql using python scripts. @#$& There is a no complete roadmap for being a ML engineer. One needs to start self learning, practise and take advice from seniors, learn from mistakes and stop procrastinating. I would like to share some resources too. @#$& Reading blogs on medium, wire" />
    ),
    resources: (
      <BlogResources
        resources={{
          "MLDL Masters": "https://courses.ineuron.ai/MLDL",
        }}
      />
    ),
    author: "Akshada Bhandari: ML Lead - GDG, AISSMS IOIT",
    imageSrc: "https://i.ibb.co/ZWqPPn0/Artificial-Intelligence-v1.png",
    category: "Technical",
    fade: "right",
    read: "6 mins",
  },

  {
    id: 4,
    tag: "Android",
    name: "My Journey to the App Store  !",
    email: "parthraj1001@gmail.com",
    linkedin: "https://www.linkedin.com/in/parth-desai-021027",
    date: "21th Jan 2022",
    day: "Tuesday",
    shortDescription: `
    Every month, approximately 20,000 new apps are added to the Google Play store.
    The number of iPhone app downloads exceeds 30 billion, while Android app downloads total 15 billion.
    We've gotten to the point where we can't imagine how our forefathers got by without the convenience of Apps.
    We don't go a day without using an app, whether it's to calculate something on a simple Calculator app, check .
.
    
      `,
    about: (
      <BlogAbout content="Every month, approximately 20,000 new apps are added to the Google Play store . The number of iPhone app downloads exceeds 30 billion, while Android app downloads total 15 billion. @#$& We've gotten to the point where we can't imagine how our forefathers got by without the convenience of Apps. @#$& We don't go a day without using an app, whether it's to calculate something on a simple Calculator app, check stock prices on UpStox, or order something from Amazon.We've all wondered how these apps worked at some point.This is exactly where I began my journey as an app developer.The key here is to never stop wondering. @#$& I began by considering how Google Pay manages all of these accounts, complete with payment history, rewards, and other features.Googling about it, well, tbh, it got me nowhere. But one day (finally!!) I discovered that Google Pay was created in Flutter. That piqued my curiosity. I couldn't figure out how a chubby-looking bird could be used to create such a complex application. Go check out Flutter’s logo if you didn’t understand the above quip @#$& Further research revealed that, in addition to Google Pay, a plethora of applications were being developed in Flutter, which was rapidly gaining popularity. That's when I decided to learn as much as I could about Flutter from the internet. @#$& I started with an Udemy Flutter course, but that only taught me the fundamentals. There was still a lot to learn, but no online course could help me with that. Every course I've taken has left me with a lot more to learn and discover. I began reading the Flutter documentation at all hours of the day and night, practicing more and more as the days passed. @#$& Then there was my first project. It was a billing site for a clothing store. I wasn't sure how I'd manage because it still required a lot of things I didn't know, but I decided to give it a shot. But, despite my best efforts, I was unable to meet the client's expectations and it was rejected. @#$& But I knew this was only the beginning, and there was a lot more ground to cover. And I was back to work on some personal projects to hone my resume. I even did a few of my juniors’ college projects ;). @#$& It had been a month and there had been no new clients. So clearly, freelancing was not working. There sprang an idea for a startup, doing the same things I used to do but under a different name. @#$& But there still was one major issue. Being a coder, I didn't have the creativity for designing.(I mean duh, even a Hello World application looks great to me). I'd heard about a fantastic UI/UX designer in our own college, who turned out to be our very own Design Lead. @#$& As a startup, we quickly got our first project. @#$& After a few sleepless nights of coding @#$& The app was finally done! We were astounded that we could deliver in such a short period of time. @#$& And so AppCentric's journey began with just one coder and one designer. @#$& Fast forward 8 months, and we've served a large number of clients and are now operating as a successful startup. @#$& This has been my adventure. I can't tell you what to refer to at what point in time because figuring it out on our own is an exciting part of the journey" />
    ),
    resources: (
      <BlogResources
        resources={{
          Udemy:
            "https://www.udemy.com/share/101Xwi3@abuyjkBEjHOGKY8nL9jwGCjU15yfJsv45eQ8W2OYCQ1FKXxwCJloL3aTL9obIKYJ/",
          Flutter: "https://docs.flutter.dev/",
        }}
      />
    ),
    author: "Parth Desai: Android Lead - GDG, AISSMS IOIT",
    imageSrc:
      "https://res.cloudinary.com/dqf1zqrr9/image/upload/v1643649387/blogs/erblti475ntbksl3arpu.jpg",
    category: "Technical",
    fade: "left",
    read: "5 mins",
  },
  {
    id: 5,
    tag: "Machine Learning",
    name: "Machine Learning: An Overview",
    email: "adityagandhamal1327@gmail.com",
    linkedin: "https://www.linkedin.com/in/aditya-gandhamal-3750b9209/",
    date: "25th Jan 2022",
    day: "Tuesday",
    shortDescription: `
    Machine Learning has been a buzzword for the past few years and rightly so given the availability of data that is being generated these days. But the origin of the notion of Machine Learning or take Artificial Intelligence in general dates back to the 1950s. It was in the early 2010s when AI applications started shaping our world. Remember the first time you heard about Siri? It was in the year 2011 when for the first time ,
      `,
    about: (
      <BlogAbout content="Machine Learning has been a buzzword for the past few years and rightly so given the availability of data that is being generated these days. But the origin of the notion of Machine Learning or take Artificial Intelligence in general dates back to the 1950s. It was in the early 2010s when AI applications started shaping our world. Remember the first time you heard about Siri? It was in the year 2011 when for the first time Apple released an iPhone integrated with Siri. It was the iPhone 4s. And now ML is used in every possible field, be it for predicting weather patterns to recommending your next YouTube video. Can’t imagine a day in life influenced without it. But if you take a deeper look, you deserve a pat on your back because of the data you are generating for these AI systems to work so effectively to bring you an experience like no other. It’s a cycle of events, you generate data, you get what you want! @#$& So, you put forward your data as your digital identity to the world (think about it!) and in return, you get satisfaction from the content you are consuming. Finally, it all boils down to the crux of Machine Learning which is DATA. @#$& Machine Learning came into the picture with an approach to getting insights from data. Applications like Facebook, Instagram, and YouTube use your data to provide you with your desired content whilst making money by advertising, and Machine Learning plays an important role in this system. @#$& According to Wikipedia, “Machine Learning is the study of computer algorithms that can improve automatically through experience and by the use of data”. Breaking down, this definition is composed of three main parts. Algorithms, Experience, and Data, three of which form an integral part of Machine Learning. @#$& Algorithms are programs having a statistical approach towards having a conclusion. These algorithms often revolve around Linear Algebra, Probability, and Calculus. Algorithms are fed on data to get insights from it. A Machine Learning model tries to understand (or learn) the underlying pattern hidden inside the data whilst following a statistical approach. @#$& Experience in the sense, an algorithm processes data multiple times to get better insights from it. This can be understood by the following example. @#$& Let's take the example of predicting flight ticket fares. You have this data wherein several features are affecting the flight fare. (E.g. Source, Destination, TravelDistance, TravelTime, FlightName, PassengerClass, TotalFare, etc.) Usually, the features are denoted by X and the thing which we want to predict, often considered as a target label, is denoted by Y. So the machine learning model is fed upon this data of observations to learn the mappings from X to Y over several times until it gets better at predicting the TotalFare. For this sole purpose, we divide our original data into training and testing (validation) sets to evaluate the performance of the model as it tries to learn the data. This evaluation tells us about the experience of our model with the data which is fed to it to learn and predict the flight fare. @#$& Talking about Artificial Intelligence, Machine Learning is just a subset of it. The same goes with Deep Learning and Data Science. @#$& The one good point to differentiate Machine Learning and Deep Learning is the amount of data. Deep Learning algorithms perform well only if you have tons of data to train on and also the more advanced AI applications like Computer Vision, Speech Recognition, GANs, etc involve deep learning concepts. @#$&  Machine Learning addresses three types of problems in general. @#$&  1) Supervised Learning @#$& 2) Unsupervised Learning @#$& 3) Reinforcement Learning @#$& Supervised Learning :  Supervised Learning involves a model to learn patterns and mappings in data. You have a dataset containing a set of features X and target labels Y. The model’s job is to learn the mapping function Y=f(X). The function (f) acts as a supervisor for the model. The above-discussed example of flight fare prediction is an example of Supervised Learning. @#$& There are two main types of problems in Supervised Learning viz. Regression and Classification. Regression involves predicting a number whereas Classification involves predicting a category of data. @#$& Unsupervised Learning : Unsupervised Learning involves a model to learn the data by itself. Unlike supervised learning, you don't have X and Y. The model is given just the data, with no target label and its job is to extract patterns from it. @#$& Reinforcement Learning : Reinforcement Learning is a problem where an agent experiences an environment and based on the reward it receives, it optimizes its policy of exploring the environment. Agent, Environment and Rewards form three crucial aspects of a Reinforcement Learning problem. @#$& Lex Fridman has given a brilliant analogy saying “Supervised Learning is learning by example whereas Reinforcement Learning is learning by experience”. @#$& Now that you have gone through the overview of Machine Learning, you might be wondering how to even get started with it? @#$& Well, that's the point right. The first step is always the most difficult step. Where to start….? @#$& To be honest, there’s no specific way or plan as such. Rather, the best possible way is to explore the domain itself. That’s how you get an idea about it. Unless and until you won’t explore it, you won’t get the actual experience of studying it. Take that Reinforcement Learning (no pun intended!). @#$& But to give a headstart, refer to blogs on Medium, Machine Learning Mastery, and Kdnuggets. They have some awesome content right from beginner level to advanced. You can also take a course from Coursera if you wish to have a structured plan for learning AI/ML. @#$& Wish you all the best!" />
    ),
    resources: (
      <BlogResources
        resources={{
          GitHub: "https://github.com/adityagandhamal",
        }}
      />
    ),
    author: "Aditya Gandhamal: ML Co Lead - GDG, AISSMS IOIT",
    imageSrc:
      "https://res.cloudinary.com/dqf1zqrr9/image/upload/v1643209543/blogs/bymc2ept7yivcqfrwacx.jpg",
    category: "Technical",
    fade: "left",
    read: "5 mins",
  },
  {
    id: 6,
    tag: "Cloud",
    name: "Journey to the Cloud",
    email: "skhond32@gmail.com",
    linkedin: "https://www.linkedin.com/in/shriniwas-khond-906329209/",
    date: "20th Jan 2022",
    day: "Tuesday",
    shortDescription: `
    Hi everyone, I am Shriniwas Khond and here I would be talking about my journey as a Cloud domain lead at a GDG and Blockchain developer intern. 
The genesis of my Cloud Computing journey was the Google Cloud Ready Facilitator (GCRF) program which was scheduled from 10th of April,2021 through the 10th of June,2021. The registration period for this campaign was around the end of March, the very same period when I had started hunting for internship.
    
      `,
    about: (
      <BlogAbout
        content="Hi everyone, I am Shriniwas Khond and here I would be about talking my journey as a Cloud domain lead at a GDG and Blockchain developer intern. @#$& The genesis of my Cloud Computing journey was the Google Cloud Ready Facilitator (GCRF) program which was scheduled from 10th of April,2021 through the 10th of June,2021. The registration period for this campaign was around the end of March, the very same period when I had started hunting for internships. This was a 2-month long campaign, it was a totally new experience for me as I was a complete fresher in the field of cloud computing at that time. There were 4 learning tracks, each of which was perfectly designed to build an individual’s knowledge and gain experience while working on the Google Cloud Platform, similarly I went for Microsoft learn cloud skills challenge. @#$& As I progressed through this campaign, I kept taking notes of various products and services offered by Google cloud platform, throughout this campaign. It was during this campaign I was able to fetch an internship as a blockchain developer intern at a startup named “Richedu Co.”. I was a complete fresher in the field of blockchain, attracted by the then buzzword “cryptocurrency”. I had disciplined myself to one strategy i.e., “Jack of all trades, master of none, but oftentimes better than a master of none”. @#$& Thus, I started exploring the field of blockchain through Microsoft Learn, cybersecurity through Cisco Networking Academy. After the GCRF campaign ended, I was more focused towards my work at the startup, mostly dealing with Smart Contracts and networking with other interns, most of them are now my mentors. They used to share various resources and their tips and tricks with me, as I was the youngest amongst the interns. I came across the concept of learning platforms like Coursera, EDX, NPTEL and etc. which offered introductory courses for free. I exploited the “free courses” feature from various e-learning platforms and I used to gather as much knowledge as I could. Most of my motivation comes from scrolling on my LinkedIn feed. @#$& Then one day, a certain announcement was made on the college group regarding the establishment of Google Developer Students Club, and the fact that there was an opening for Cloud domain lead caught my attention, and then I applied for the position, which eventually help to me become a Cloud domain Lead at GDG, AISSMS IOIT.
      "
      />
    ),
    // resources: <BlogResources resources={{}} />,
    author: "Shriniwas Khond: Cloud Lead - GDG, AISSMS IOIT",
    imageSrc:
      "https://res.cloudinary.com/dqf1zqrr9/image/upload/v1643644432/blogs/lrt2x6uj38ntipav5nhq.jpg",
    category: "Technical",
    fade: "left",
    read: "5 mins",
  },
  {
    id: 7,
    tag: "Andriod",
    name: "Background of Application Development",
    email: "aniruddhkarekar.1@gmail.com",
    linkedin: "https://www.linkedin.com/in/aniruddh-karekar-5711531a4/",
    date: "25th Jan 2022",
    day: "Tuesday",
    shortDescription: `From the past 5-6 years, application development has been growing rapidly. The users tend to use mobile applications more than typical desktop websites. They spend more of their time using mobile phones, so it becomes obvious and natural for them to use more of things that can come up with mobile phones. So mobile applications have become a common thing in their day-to-day life. 
Coming to the application`,
    about: (
      <BlogAbout
        content="
      From the past 5-6 years, application development has been growing rapidly. The users tend to use mobile applications more than typical desktop websites. They spend more of their time using mobile phones, so it becomes obvious and natural for them to use more of things that can come up with mobile phones. So mobile applications have become a common thing in their day-to-day life. @#$& Coming to the application development part, there are many options or tools for developing mobile apps. First, we must look at the platforms for developing the mobile apps there are three major platforms that developers target the most. These are Android, iOS, and Windows. @#$& Android is supported by Google, iOS is supported by Apple Inc, and Windows is supported by Microsoft. All three platforms are reliable and supported by tech giants. Although If we focus on the majority of users then Android and iOS come out on top compared to the windows applications. @#$& Android development is done majorly in countries like India, and other Asian countries, but in the end, we can’t be that specific. iOS development Is done In less amount as It has some limitations like, you have to equip a macBook (A mac OS-based PC developed by Apple) to develop an iOS app. If you don’t have a macBook then you cannot develop an iOS application on it. That’s the restriction applied by Apple Inc for their security concerns. This can be a reason for less iOS development compared to Android. Android is an open-source platform provided by Google and for developing an android application we just need to have a Windows PC that’s all. Android development Is done In far more amount compared to iOS, as It Is very easy and requires few pre-requisites. @#$& The Actual Application Development - @#$& Coming to the development part, we will focus on the major platforms that are Android and Apple. @#$& For developing the Android application we have the following options - @#$& 1) Android Studio + Java / Kotlin (Native) @#$& 2) Flutter + Dart (Cross Platform) @#$& 3) React native + JavaScript (Cross Platform) @#$& 4)Ionic (Cross Platform) @#$& For developing the iOS application we have the following options - @#$& 1)Xcode + Swift + Objective C (Native) @#$& 2)Flutter + Dart (Cross Platform) @#$& 3)React native + JavaScript (Cross Platform) @#$&  4)Ionic (Cross Platform) @#$& Personal Experience - @#$& My name is Aniruddh  Karekar. I am from Sangli, Maharashtra. I have completed my polytechnic diploma in Computer Engineering from Sangli and currently, I’m pursuing my third year In computer science and engineering from Aissms IOIT, Pune. I’m interested in Software development, AR, Computer Networks. @#$& From here on, I will share my own experience in the journey of application development. So let’s get started !. In the beginning, when I was In my second year of diploma, I have started learning Android development as my project for Software testing subject. @#$& I was learning it by watching the youtube tutorials. At first, It seemed to be very confusing. And the Android studio software is heavy and It lags a lot If your PC does not have sufficient RAM, So the beginning was very frustrating because the software was lagging and I was not able to understand the code and the software also. @#$& Eventually, I’ve managed to learn the Android studio and was able to develop a few applications. Currently, I have two apps published on the play store which are developed completely in the Android studio and with the help of Firebase.If you ask me, In 2022, If you wish to learn application development from scratch, I would suggest you learn either from Flutter or React. @#$& Why? Because learning native development in 2022 has no sense unless you have any particular kind of interest in native Android development. If you are a native android developer and you will stand next to a cross-platform developer, he will win the game without any second thought as he has the skill that you have, also, he has one more skill that you don’t. So It Is quite simple, If any company Is looking for a native android developer, still they will go for the cross-platform developer, and It Is not even surprising because why will they settle for less when they can get more. @#$& Learning cross-platform development is also beneficial to you in terms of the range of skills, flexibility, and variety of tools. @#$& Here are some advantages and disadvantages of learning native android development, (based on personal experience) - @#$& Advantages - @#$& 1) You will learn the XML (Extensible Markup Language). @#$& 2)You will learn how to add third-party libraries in the project. @#$& 3)You will learn to debug the code. If you can debug the code in the android studio then you will find debugging easy elsewhere. Debugging the android code is not that simple (for beginners and sometimes for experienced too). @#$& 4)You will get less apk size as compared to the apk size that flutter generates. @#$& 5)You will know about Android SDKs and features that support to the specific android versions. @#$& Disadvantages - @#$& 1)Complex IDE, difficult to understand for beginners. @#$& 2)Heavy software, requires more RAM. @#$& 3)Native. @#$& 4)It’s a bit hard to find and correct the error. (Especially SDK errors). @#$& Published Android Applications - @#$& 1) Venki - The Healthcare Chatbot - Apps on Google Play @#$& 2) Wildlife Explorer @#$& Choosing the right tool for development - @#$& Now the question Is why I switched to the flutter instead of sticking to the Android and developing the native mobile applications. Developing android applications seems cool and It’s really cool unless you realize that your application will not run in iOS or If your friend or anyone with an iPhone asks you to show your application on their phone. A true developer will find this situation really awkward and disappointing. This Is the same situation I was been through. I really wanted to run my application on an iOS device and personally, I like the components that Apple has. It’s called the Cupertino components. @#$& So later on, I thought of learning React for cross-platform development. For this, I have developed a simple “hello world” application on React and ran it on my sister’s iPhone. It seemed very satisfying to me at that time and the code was also seeming very friendly. Later on, I was thinking about my upcoming project in React, for that I was watching one project which was built In React. While looking at that code I found that code a little bit complex, Later I took another project and had a brief look at It. This time also I found the code a little bit messy, hard to read, and complex as well. The same thing happened with me for the next couple of projects. I was completely confused about what to do next, some of my friends told me to go on with React, but I was unsure about it. @#$& Meanwhile, I read the article about flutter somewhere. Previously I had already heard about flutter as well but didn’t know what It was used for. So I had done research on the flutter and Its usage. I found the flutter code very clean and composed. It was well documented and supported by Google as well. So from there on, I’ve decided to learn flutter for cross-platform development. @#$& The Flutter Way - @#$& Flutter uses dart as Its programming language so I have learned dart from the JavaTPoint website. It took me 1 week to learn the complete dart with all the major concepts. It took just 1 week for me to learn dart because I had already known the languages like Java, Python, etc. You will learn dart very quickly If you know these languages already, else learn any of these languages before switching to dart, It’s my personal advice so that you will find dart and flutter both very easy. @#$& For learning flutter, I have completed the course on Flutter which I bought from Udemy for 400 INR. The course is a self-paced course and you have lifetime access to It. There are 43 hours of online lecture material. According to me Its the best course you can get on Udemy. In that course, I have built 5 beautiful flutter apps. Personally, I would say, building a User Interface Is lot easier in flutter as compared to Android studio. Flutter is very flexible, convenient, and has clean code. @#$& Personally, I found flutter more reliable than React and Android studio as It has some great features as compared to other ones. @#$& In the end, flutter code is converted into a javascript code so basically flutter is built as the bridge between javascript and user. @#$& My Flutter Applications till now - @#$& Flutter projects @#$& Here are some advantages and disadvantages of learning native android development, (based on personal experience) - @#$& Advantages - @#$& 1) Fast and reliable. @#$& 2) Well documented and supported by Google. @#$& 3) Wide variety of widgets. @#$& 4) Flutter updates the only part of the screen that needs to be updated instead of reloading the whole screen which affects the performance of the application. @#$& 5) Flexible and reliable @#$& You can call native Android/ iOS code from the flutter code. @#$& Disadvantages - @#$& 1) Large apk size as compared to Android and React. @#$& 2) You have to write new code whenever the new flutter version is released. @#$& I hope you found this article helpful

      "
      />
    ),
    resources: (
      <BlogResources
        resources={{
          "Android Developers": "https://developer.android.com/",
          Flutter: "https://docs.flutter.dev/",
          "React Native": "https://reactnative.dev/",
          "Ionic Framework": "https://ionicframework.com/",
          "Xcode + Swift + Objective C (Native)":
            "https://developer.apple.com/xcode/",
          "Venki - The Healthcare Chatbot - Apps on Google Play":
            "https://play.google.com/store/apps/details?id=shindejayesharun.com.chatbot2&hl=en&gl=US",
          "Wildlife Explorer":
            "https://play.google.com/store/apps/details?id=com.aniruddh.wild&hl=en&gl=US",
          "Flutter projects":
            "https://drive.google.com/drive/folders/1d_ywT991jkGM3fOX9Kyo-_czASZdlNmi?usp=sharing",
        }}
      />
    ),
    author: "Aniruddh Karekar: Android Member - GDG, AISSMS IOIT",
    imageSrc:
      "https://res.cloudinary.com/dqf1zqrr9/image/upload/v1643651023/blogs/bexi6u1apjrfwwhil8ik.png",
    category: "Technical",
    fade: "left",
    read: "5 mins",
  },
  {
    id: 8,
    tag: "Non-Tech",
    name: "My journey as a Management Lead",
    email: "omkar.danave@aissmsioit.org",
    linkedin: "https://www.linkedin.com/in/omdanave/",
    date: "14th Feb 2022",
    day: "Tuesday",
    shortDescription: `Hello guys!
    I’m Omkar Danave, Management Lead at GDG AISSMS IOIT.
    My journey as a Management Lead is not as easy as it seems. I was very shy at first when I
    entered college, thinking if I would be able to mix up with people, or match their vibes, make
    myself stand out from others. But then came the first opportunity to showcase myself, that was
    DESSA! I was not sure about the interview, but somehow I `,
    about: (
      <BlogAbout
        content="
        Hello guys!
        I’m Omkar Danave, Management Lead at GDG AISSMS IOIT.
        My journey as a Management Lead is not as easy as it seems. I was very shy at first when I
        entered college, thinking if I would be able to mix up with people, or match their vibes, make
        myself stand out from others. But then came the first opportunity to showcase myself, that was
        DESSA! @#$& I was not sure about the interview, but somehow I built up the courage and appeared for the
        interview. And it was a turning point in my college life! I got selected as ‘Technical Secretary’.
        This provided me with the opportunities to overcome the nervousness. @#$& I started socializing with not only my batchmates, but also my seniors and faculty members. @#$& I was no longer shy and could easily interact with people. As I entered 2nd year, I took the responsibility which no one was willing to take, I became the Class Representative. This taught me patience and problem solving skills. @#$& During 3rd year, I got to know that a new club was being introduced in our college, The Google
        Developer Student Club. Applications were rolled out for various positions. Given my
        experience till now, I decided to apply for the Management Lead. While I was nervous before
        the interview, I felt pretty confident once I was done with it. I was sure that I had given my 100%.
        And thus I earned another feather in my cap. I was appointed as Management Lead.
        Suddenly, I wasn’t managing a team, I was managing a community! Managing people with
        different mindset was indeed a challenge. It improved my leadership skills. Also I got an
        opportunity to network with people across India. @#$& Soon, another club was introduced in our college, The Microsoft Learn Students
        Ambassador’s Club. I was appointed as the Secretary for the MLSA Club.
        Apart from this, I was also active in committees like IEEE, ACM, ITSA.
        Here, I got the opportunity to manage the committees as well as to mentor my juniors. Overall, I
        have had a great experience so far. I worked with Amazing people! @#$& One thing I learned in my journey is “Jugaad pe Duniya kayam hai!” ;-)
      "
      />
    ),

    author: "Omkar Danave",
    imageSrc:
      "https://res.cloudinary.com/dqf1zqrr9/image/upload/v1644918411/blogs/omkar_blog_img_wdmlmd.jpg",
    category: "Non- Technical",
    fade: "left",
    read: "4 mins",
  },
];

export default blogs;
