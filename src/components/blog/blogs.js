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
    id: 1,
    tag: "Machine Learning",
    name: "Machine Learning",
    email: "akshada3654@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshada-bhandari-16bb90192/",
    date: "18th Jan 2022",
    day: "Tuesday",
    shortDescription:
      "The pace of growing artificial intelligence is incredibly fast. It has its influence in all the fields like healthcare, banking, agriculture, business, e-commerce, space, and many more. Artificial Intelligence, Machine Learning, Computer Vision, Robotics will be the ever-evolving fields in the coming decades. There are lot many opportunities available in these fields. Extensive research opportunities are the core reason for the development in this field. Thus I feel that one should surely think about pursuing their career in Artificial Intelligence due to its exposure and plethora of opportunities. It gives me immense pleasure in writing this blog. I would like to highlight my journey in selecting this technology as my career. I had got an opportunity from my college in 11th grade to visit ISRO, Ahmedabad to study satellites.",
    about: (
      <BlogAbout content="The pace of growing artificial intelligence is incredibly fast. It has its influence in all the fields like healthcare, banking, agriculture, business, e-commerce, space, and many more. Artificial Intelligence, Machine Learning, Computer Vision, Robotics will be the ever-evolving fields in the coming decades. There are lot many opportunities available in these fields. Extensive research opportunities are the core reason for the development in this field. Thus I feel that one should surely think about pursuing their career in Artificial Intelligence due to its exposure and plethora of opportunities. @#$& It gives me immense pleasure in writing this blog. I would like to highlight my journey in selecting this technology as my career. I had got an opportunity from my college in 11th grade to visit ISRO, Ahmedabad to study satellites. I was so fascinated by the working of satellites, their automation, and the artificial intelligence research going in the space technology for India. Returning from the journey I had already planned my career in the field of artificial intelligence. @#$& And the hunt started ………..!!! @#$& I started researching about degrees in AI in India, but to my vain, there were not that many courses available in the destined field. I spoke to various industry persons and then came to conclusion about pursuing BE in Computer Engineering. This made me land in the AISSMS Institute of Information Technology. Being a sophomore I was unaware of the programming languages. After, my first sem I joined DISHA classes to get cleared with my concepts for C, C++. Within a year I had nearly mastered C, C++, Python along-with DSA. @#$& In my second year during my mid-vacations, I had attended the workshop conducted by Machine Learning India at Ai-adventures, Pune. And my journey towards ML started. Building projects, practising python programming, reading books and references started. I started learning from various youtube channels - Edureka, codewithharry, and many live sessions. But these were not enough. Machine learning is not a one day thing. @#$& Having many resources but not the best was the problem. During the covid pandemic I came across the ML Masters course by iNeuron.ai. It was indeed one of the best course I came across. The course started from basic python programming and ended with NLP, DL. It had various modules like database management, API, EDA, ML pipelines, Deep Learning and NLP. The course was not just theoretical but practical too. I had build a couple of projects too. Meanwhile I got selected as ML lead at GDSC and MLASC. @#$& After completing this course I interned at the same company as a ML intern. I had a major contribution in data researching, data analysing, data preprocessing and writing python scripts. After this, I started interning as a Developer at Apartmint solutions wherein my major tasks included scraping the data from real estate website and integrating it with postgresql using python scripts. @#$& There is a no complete roadmap for being a ML engineer. One needs to start self learning, practise and take advice from seniors, learn from mistakes and stop procrastinating. I would like to share some resources too. @#$& Reading blogs on medium, wire" />
    ),
    resources: (
      <BlogResources
        resources={{
          "MLDL Masters": "https://courses.ineuron.ai/MLDL",
        }}
      />
    ),
    author: "Akshada Bhandari: ML Lead - GDSC, AISSMS IOIT",
    imageSrc: "https://i.ibb.co/ZWqPPn0/Artificial-Intelligence-v1.png",
    category: "Technical",
    fade: "right",
    read: "6 min",
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
      This is Ashish Patil, working as Web Development Lead at GDSC, AISSMS IOIT. In this blog, I will be sharing my entire journey of how I started working as a Full Stack Web Developer.
  
      So, let's get started!!!!
  
      I will start from the beginning when I was totally blank and was not aware of how coding and development work. In the first year, we had one subject called PPS and at that time I become acquainted with what exactly python and coding is 😅. But unfortunately, due to the rise in Covid-19 cases, entire India was locked and our syllabus was not completed 😥. But I decided not to waste time and started taking benefit of each and every second in lockdown 🎯. 
      `,
    about: (
      <BlogAbout content="Hello Developers, @#$& This is Ashish Patil, working as Web Development Lead at GDSC, AISSMS IOIT. In this blog, I will be sharing my entire journey of how I started working as a Full Stack Web Developer. @#$& So, let's get started!!!! @#$& I will start from the beginning when I was totally blank and was not aware of how coding and development work. In the first year, we had one subject called PPS and at that time I become acquainted with what exactly python and coding is 😅. But unfortunately, due to the rise in Covid-19 cases, entire India was locked and our syllabus was not completed 😥. But I decided not to waste time and started taking benefit of each and every second in lockdown 🎯. @#$& Buckle up guys, now my coding journey has started 😁. @#$& So first of all, I started learning Python from basic to advanced. And I assure you guys that there is no other platform as best as *YouTube* for beginners. Then In my second year, I got introduced to C++, DSA, Competitive Coding. Then I started learning C++, Data Structures, and Algorithms. Practicing questions from coding platforms like HackerRank and CodeChef. Up till now, I had not specifically decided to work in any domain. I was just practicing python, C++, basic HTML/CSS projects in order to build my programming and development skills. But I was sure that I have to develop my career in Python Language only, because of its simplicity, powerful libraries, lot of opportunities available, and of course it was my first programming language that dive me into the coding journey. @#$& After that, I came across Django which is a web framework of Python. I was fascinated by this framework 🤩, due to its features like rapid development, clean and pragmatic design, orm, security, admin panel, csrf middleware, celery, channels, etc. And this is how my journey to *Full Stack Development* started. @#$& I had completed almost all the features of Django by applying for various courses, youtube, documentation, and projects in the span of 4-5 months. After that, I spent time learning Django REST Framework which is widely used for creating REST APIs. At the same time, I started working with a Start-Up named *Search-In* which is location-based service provider, enhancing user engagement in indoor spaces. From that day onwards, precious time had begun💎. It was golden opportunity which I got in my life, where I have developed many applications in Django and Django rest framework. As per the need, I started learning and deploying applications on Heroku and AWS. And that's how my cloud computing journey was also started 💫. Subsequently, I got into MERN Stack and started working on client-side rendering. Needless to say, if you want to work on client-side rendering then *JavaScript is the most important scripting language*, you must be cleared with. That being the case I learned all the key concepts of JavaScript and then proceeded with Node, Express, React, and MongoDB. @#$& At the same time, I have also applied for Django Mentorship at REGex Software Services, a software company in Jaipur that provides Training and IT-related services. Fortunately, I got selected for this position and I have worked with them for 3 months where I helped a lot of students and led different teams on different projects. @#$& Henceforth, I applied for a Web Development Internship at Studentpeeps, a platform where university students get exclusive student discounts when they shop. Where I have worked on the development and deployment of their website. @#$& Quality time started, I applied for the position in the core team at Google Developer Student  Club in our college. And guess what, I got selected as Web Lead 🤩. Where we have organised many Events, Workshops and shared valuable knowledge with each other. Still, I am enjoying working  with this great team 🌀. After that, I worked at TCS iON Digital Learning Hub as Python Intern where I developed Plagiarism Seeker Web App. @#$& Yet my journey is not completed 🏋️. I continued developing applications and now I am learning complex concepts of AWS, DevOps, Linux, and System Design. @#$& I hope, this blog will help you a bit in your vast and never-ending development journey 😊." />
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
    author: "Ashish Patil: Web Lead - GDSC, AISSMS IOIT",
    imageSrc: "https://i.ibb.co/Y2tnV7N/Full-Stack.png",
    category: "Technical",
    fade: "left",
    read: "8 min",
  },
];

export default blogs;
