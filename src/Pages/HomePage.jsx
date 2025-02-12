import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ProfilePic1 from "../assets/img/profilepic1.jpg";
import ProfilePic2 from "../assets/img/profilepic2.jpg";
import ProfilePic3 from "../assets/img/profilepic3.jpg";
import BlogPost1 from "../assets/img/BlogPost1.png";
import BlogPost2 from "../assets/img/BlogPost2.png";
import BlogPost3 from "../assets/img/BlogPost3.png";
import BlogPost4 from "../assets/img/BlogPost4.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const categories = [
    {
      name: "for you",
      posts: [
        {
          id: 1,
          ProfilePic: ProfilePic1,
          ProfileLinkTitle: "Arnold Gunter",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost1,
          BlogPostTitle:
            "Crush Your UX Interview by Perfectly Explaining User-Centered Design",
          BlogPostDis:
            "JavaScript can be a little tricky sometimes, even when you’re dealing with simple-looking problems.",
          date: "Aug25",
          LkeCount: 390,
          CommentCount: 25,
        },
        {
          id: 2,
          ProfilePic: ProfilePic2,
          ProfileLinkTitle: "Hayk Si",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost2,
          BlogPostTitle: "7 Simple Button Design Tips That Make a Big Impact",
          BlogPostDis:
            "While working on design projects, I have developed a set of practical tips that help me maintain design standards throughout the process.",
          date: "Oct10",
          LkeCount: 220,
          CommentCount: 235,
        },
        {
          id: 3,
          ProfilePic: ProfilePic3,
          ProfileLinkTitle: "Arnold Gunter",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost3,
          BlogPostTitle:
            "If You Can Answer These 7 Questions Correctly You’re Decent at JavaScript",
          BlogPostDis:
            "JavaScript can be a little tricky sometimes, even when you’re dealing with simple-looking problems.",
          date: "Aug25",
          LkeCount: 390,
          CommentCount: 25,
        },
        {
          id: 1,
          ProfilePic: ProfilePic3,
          ProfileLinkTitle: "Arnold Gunter",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost3,
          BlogPostTitle:
            "If You Can Answer These 7 Questions Correctly You’re Decent at JavaScript",
          BlogPostDis:
            "JavaScript can be a little tricky sometimes, even when you’re dealing with simple-looking problems.",
          date: "Aug25",
          LkeCount: 390,
          CommentCount: 25,
        },
        {
          id: 2,
          ProfilePic: ProfilePic1,
          ProfileLinkTitle: "Hayk Simonyan",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost1,
          BlogPostTitle: "7 Simple Button Design Tips That Make a Big Impact",
          BlogPostDis:
            "While working on design projects, I have developed a set of practical tips that help me maintain design standards throughout the process.",
          date: "Oct10",
          LkeCount: 220,
          CommentCount: 235,
        },
        {
          id: 1,
          ProfilePic: ProfilePic1,
          ProfileLinkTitle: "Arnold Gunter",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost1,
          BlogPostTitle:
            "Crush Your UX Interview by Perfectly Explaining User-Centered Design",
          BlogPostDis:
            "JavaScript can be a little tricky sometimes, even when you’re dealing with simple-looking problems.",
          date: "Aug25",
          LkeCount: 390,
          CommentCount: 25,
        },
        {
          id: 1,
          ProfilePic: ProfilePic1,
          ProfileLinkTitle: "Arnold Gunter",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost1,
          BlogPostTitle:
            "Crush Your UX Interview by Perfectly Explaining User-Centered Design",
          BlogPostDis:
            "JavaScript can be a little tricky sometimes, even when you’re dealing with simple-looking problems.",
          date: "Aug25",
          LkeCount: 390,
          CommentCount: 25,
        },
        {
          id: 1,
          ProfilePic: ProfilePic1,
          ProfileLinkTitle: "Arnold Gunter",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost1,
          BlogPostTitle:
            "Crush Your UX Interview by Perfectly Explaining User-Centered Design",
          BlogPostDis:
            "JavaScript can be a little tricky sometimes, even when you’re dealing with simple-looking problems.",
          date: "Aug25",
          LkeCount: 390,
          CommentCount: 25,
        },
        {
          id: 1,
          ProfilePic: ProfilePic1,
          ProfileLinkTitle: "Arnold Gunter",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost1,
          BlogPostTitle:
            "Crush Your UX Interview by Perfectly Explaining User-Centered Design",
          BlogPostDis:
            "JavaScript can be a little tricky sometimes, even when you’re dealing with simple-looking problems.",
          date: "Aug25",
          LkeCount: 390,
          CommentCount: 25,
        },
      ],
    },
    {
      name: "following",
      posts: [
        {
          id: 1,
          ProfilePic: ProfilePic3,
          ProfileLinkTitle: "Arnold Gunter",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost3,
          BlogPostTitle:
            "If You Can Answer These 7 Questions Correctly You’re Decent at JavaScript",
          BlogPostDis:
            "JavaScript can be a little tricky sometimes, even when you’re dealing with simple-looking problems.",
          date: "Aug25",
          LkeCount: 390,
          CommentCount: 25,
        },
        {
          id: 2,
          ProfilePic: ProfilePic1,
          ProfileLinkTitle: "Hayk Simonyan",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost1,
          BlogPostTitle: "7 Simple Button Design Tips That Make a Big Impact",
          BlogPostDis:
            "While working on design projects, I have developed a set of practical tips that help me maintain design standards throughout the process.",
          date: "Oct10",
          LkeCount: 220,
          CommentCount: 235,
        },
      ],
    },
    {
      name: "Programming",
      posts: [
        {
          id: 1,
          ProfilePic: ProfilePic3,
          ProfileLinkTitle: "Asad Gunter",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost4,
          BlogPostTitle: "Become a Better Coder: 10 Tips",
          BlogPostDis: "Follow these laws or get fired.",
          date: "Aug25",
          LkeCount: 390,
          CommentCount: 25,
        },
        {
          id: 2,
          ProfilePic: ProfilePic1,
          ProfileLinkTitle: "Hayk Simonyan",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost1,
          BlogPostTitle: "7 Simple Button Design Tips That Make a Big Impact",
          BlogPostDis:
            "While working on design projects, I have developed a set of practical tips that help me maintain design standards throughout the process.",
          date: "Oct10",
          LkeCount: 220,
          CommentCount: 235,
        },
      ],
    },
    {
      name: "React",
      posts: [
        {
          id: 1,
          ProfilePic: ProfilePic1,
          ProfileLinkTitle: "Arnold Gunter",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost1,
          BlogPostTitle:
            "If You Can Answer These 7 Questions Correctly You’re Decent at JavaScript",
          BlogPostDis:
            "JavaScript can be a little tricky sometimes, even when you’re dealing with simple-looking problems.",
          date: "Aug25",
          LkeCount: 390,
          CommentCount: 25,
        },
        {
          id: 2,
          ProfilePic: ProfilePic2,
          ProfileLinkTitle: "Hayk Simonyan",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost2,
          BlogPostTitle: "7 Simple Button Design Tips That Make a Big Impact",
          BlogPostDis:
            "While working on design projects, I have developed a set of practical tips that help me maintain design standards throughout the process.",
          date: "Oct10",
          LkeCount: 220,
          CommentCount: 235,
        },
      ],
    },
    {
      name: "Web development",
      posts: [
        {
          id: 1,
          ProfilePic: ProfilePic3,
          ProfileLinkTitle: "Arnold Gunter",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost3,
          BlogPostTitle:
            "If You Can Answer These 7 Questions Correctly You’re Decent at JavaScript",
          BlogPostDis:
            "JavaScript can be a little tricky sometimes, even when you’re dealing with simple-looking problems.",
          date: "Aug25",
          LkeCount: 390,
          CommentCount: 25,
        },
        {
          id: 2,
          ProfilePic: ProfilePic1,
          ProfileLinkTitle: "Hayk Simonyan",
          LevelLinktiltile: "Level Up Coding",
          BlogPostPic: BlogPost1,
          BlogPostTitle: "7 Simple Button Design Tips That Make a Big Impact",
          BlogPostDis:
            "While working on design projects, I have developed a set of practical tips that help me maintain design standards throughout the process.",
          date: "Oct10",
          LkeCount: 220,
          CommentCount: 235,
        },
      ],
    },
  ];

  const StafData = [
    {
      ProfilePIc: ProfilePic1,
      FirstName: "Tim Lou, PhD",
      LastName: "Towards Data Science",
      ShortDis: "The Science Behind AI’s First Nobel Prize",
    },
    {
      ProfilePIc: ProfilePic2,
      FirstName: "Doug Brown",
      LastName: "The Narrative Arc",
      BookSvg: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mt-1"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="#437AFF"
              d="M15.163 8c0 .65-.459 1.144-.863 1.575-.232.244-.471.5-.563.719s-.086.543-.092.875c-.006.606-.018 1.3-.49 1.781-.47.481-1.15.494-1.744.5-.324.006-.655.013-.857.094s-.465.337-.704.575c-.422.412-.906.881-1.542.881-.637 0-1.12-.469-1.543-.881-.239-.238-.49-.482-.704-.575-.214-.094-.532-.088-.857-.094-.593-.006-1.273-.019-1.744-.5s-.484-1.175-.49-1.781c-.006-.332-.012-.669-.092-.875-.08-.207-.33-.475-.563-.719-.404-.431-.863-.925-.863-1.575s.46-1.144.863-1.575c.233-.244.472-.5.563-.719.092-.219.086-.544.092-.875.006-.606.019-1.3.49-1.781s1.15-.494 1.744-.5c.325-.006.655-.012.857-.094.202-.081.465-.337.704-.575C7.188 1.47 7.671 1 8.308 1s1.12.469 1.542.881c.239.238.49.481.704.575s.533.088.857.094c.594.006 1.273.019 1.745.5.47.481.483 1.175.49 1.781.005.331.011.669.091.875s.33.475.563.719c.404.431.863.925.863 1.575"
            ></path>
            <path
              fill="#fff"
              d="M7.328 10.5c.195 0 .381.08.519.22.137.141.215.331.216.53 0 .066.026.13.072.177a.24.24 0 0 0 .346 0 .25.25 0 0 0 .071-.177c.001-.199.079-.389.216-.53a.73.73 0 0 1 .519-.22h1.959c.13 0 .254-.053.346-.146a.5.5 0 0 0 .143-.354V6a.5.5 0 0 0-.143-.354.49.49 0 0 0-.346-.146h-1.47c-.324 0-.635.132-.865.366-.23.235-.359.552-.359.884v2.5c0 .066-.025.13-.071.177a.24.24 0 0 1-.346 0 .25.25 0 0 1-.072-.177v-2.5c0-.332-.13-.65-.359-.884A1.21 1.21 0 0 0 6.84 5.5h-1.47a.49.49 0 0 0-.346.146A.5.5 0 0 0 4.88 6v4c0 .133.051.26.143.354a.49.49 0 0 0 .347.146z"
            ></path>
          </svg>
        </>
      ),
      ShortDis: "My Hurricane Helene Strength Training Program",
    },
    {
      ProfilePIc: ProfilePic3,
      FirstName: "Ally Sprague",
      LastName: "Session Notes",
      ShortDis: "The Science Behind AI’s First Nobel Prize",
    },
  ];

  const RecomendedTopics = [
    { TopicName: "Data Science" },
    { TopicName: "Self Improvment" },
    { TopicName: "Writing" },
    { TopicName: "Techonology" },
    { TopicName: "RelashionShips" },
    { TopicName: "CryptoCurruncy" },
    { TopicName: "Politics" },
  ];

  const FollowData = [
    {
      Name: "Lorenz Hofmann",
      dis: "👨‍💻 Software Eng at Cresta. 🇦🇹, lived in NYC, Berlin & now",
      ProfilePic: ProfilePic1,
    },
    {
      Name: "ITNEXT",
      SubTitile: "Publication",
      dis: "Coding, Tutorials, News, UX, UI and much more related to...",
      ProfilePic: ProfilePic2,
    },
    {
      Name: "Madza",
      dis: "🔥Little brother teaches front-end and AI online🌈.",
      ProfilePic: ProfilePic3,
    },
  ];

  const navigate=useNavigate()
  const BlogDetails=()=>{
    navigate('/DetailPage')
  }
  return (
    <>
<Navbar/>

      <div className="w-full">
        <div className="flex h-auto relative  py-4 px-4 w-full">
          <div className="lg:w-[70%] w-full h-auto    lg:py-4 lg:px-20 ">
            <div className="w-full">
              <TabGroup>
                <TabList className="flex gap-8 border-b overflow-x-auto">
                  <span className="py-4 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#6B6B6B]"
                      width="19"
                      height="19"
                    >
                      <path
                        fill-rule="#6B6B6B"
                        d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9z"
                      ></path>
                    </svg>
                  </span>
                  {categories.map((category, idx) => (
                    <Tab
                      key={idx}
                      onClick={() => setSelectedTab(idx)}
                      className={`${
                        selectedTab === idx ? "border-b-2" : "text-[#6b6b6b]"
                      } border-black text-start  font-SohneNormal capitalize py-2 text-[15px] font-normal whitespace-nowrap focus:outline-none `}
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels className="mt-3">
                  {categories.map(({ name, posts }) => (
                    <TabPanel
                      key={name}
                      className="rounded-xl text-[#6B6B6B] p-3"
                    >
                      <ul>
                        {posts.map((post) => (
                          <li
                            key={post.id}
                            className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                          >
                            <div className="w-full h-auto flex  ">
                              <div className="w-[100%] ">
                                <div className="w-full h-[10%] flex ">
                                  <img
                                    src={post.ProfilePic}
                                    alt=""
                                    className="w-8 h-8 rounded-full object-cover"
                                  />
                                  <p className="w-full flex items-center  flex-wrap  lg:px-2 px-0 lg:-mt-0 -mt-1">
                                    <a
                                      href="#"
                                      className="px-1 text-[13px] hover:underline cursor-pointer text-[#242424]"
                                    >
                                      {post.ProfileLinkTitle}
                                    </a>
                                    in{" "}
                                    <a
                                      href="#"
                                      className="px-1 text-[#242424] text-[13px] hover:underline cursor-pointer"
                                    >
                                      {post.LevelLinktiltile}
                                    </a>
                                  </p>
                                </div>
                                <div className="flex lg:-mt-0  lg:items-center items-start ">
                                  <p>
                                    <p onClick={BlogDetails} className="text-[#242424] text-[22px] cursor-pointer font-SohneBold w-[90%] lg:h-auto h-38 overflow-hidden   py-6 ">
                                      {post.BlogPostTitle}
                                    </p>

                                    <p className="text-[#6B6B6B] font-SohneNormal w-[90%] lg:h-auto h-12 overflow-hidden lg:-mt-0 -mt-4">
                                      {post.BlogPostDis}
                                    </p>
                                  </p>
                                  <img
                                    src={post.BlogPostPic}
                                    alt="blogPost"
                                    className="lg:w-[40%] w-[30%] lg:h-28 h-auto lg:object-cover lg:mt-0 mt-8 ml-2 object-cover"
                                  />
                                </div>
                                <div className="w-full flex justify-between mt-4 lg:hidden md:hidden flex">
                                  <span className="flex space-x-4 items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="none"
                                      viewBox="0 0 64 64"
                                    >
                                      <path
                                        fill="#FFC017"
                                        d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                                      ></path>
                                    </svg>
                                    <span>{post.date}</span>
                                  </span>

                                  <span className="flex space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      className="text-[#6b6b6b] hover:text-black cursor-pointer"
                                    >
                                      <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 12h7.5"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      className="text-[#6b6b6b] hover:text-black cursor-pointer"
                                    >
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M4.385 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41m5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59s-.58.86-.58 1.41m5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59s1.03-.2 1.42-.59.58-.86.58-1.41-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59s-.58.86-.58 1.41"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="lg:flex md:flex hidden flex-wrap w-full  items-center mt-2">
                                  <div className="w-[40%]  h-[10vh]  flex space-x-2  items-center">
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        viewBox="0 0 64 64"
                                      >
                                        <path
                                          fill="#FFC017"
                                          d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                                        ></path>
                                      </svg>
                                    </span>
                                    <span>{post.date}</span>
                                    <span className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        viewBox="0 0 16 16"
                                      >
                                        <path
                                          fill="#6B6B6B"
                                          fill-rule="evenodd"
                                          d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                      <span>{post.LkeCount}</span>
                                    </span>
                                    <span className="flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="#6B6B6B"
                                        viewBox="0 0 16 16"
                                      >
                                        <path
                                          fill="#6B6B6B"
                                          d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"
                                        ></path>
                                      </svg>
                                      <span>{post.CommentCount}</span>
                                    </span>
                                  </div>

                                  <div className="w-[30%]  flex   space-x-2 items-center  ml-0">
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="text-[#6b6b6b] hover:text-black cursor-pointer"
                                      >
                                        <path
                                          stroke="currentColor"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 12h7.5"
                                        ></path>
                                      </svg>
                                    </span>
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="text-[#6b6b6b] hover:text-black cursor-pointer"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"
                                        ></path>
                                      </svg>
                                    </span>
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="text-[#6b6b6b] hover:text-black cursor-pointer"
                                      >
                                        <path
                                          fill="currentColor"
                                          fill-rule="evenodd"
                                          d="M4.385 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41m5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59s-.58.86-.58 1.41m5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59s1.03-.2 1.42-.59.58-.86.58-1.41-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59s-.58.86-.58 1.41"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                                {/* <span className="lg:w-[30%] w-full bg-sky-900 mt-6 h-full justify-center flex items-center">
                               
                              </span> */}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>
            </div>
          </div>
          {/* RightSection */}
          <div className="w-[30%]  	 relative   lg:flex hidden border-l bg-gray-30  -mt-4">
            <div className="py-5 px-8  ">
              <p className="font-Sohne text-[16px]">Staff Picks</p>
              {StafData.map((val, idx) => (
                <div key={idx}>
                  <div className="flex mt-5">
                    <img
                      src={val.ProfilePIc}
                      className="rounded-full h-6 w-6"
                      alt=""
                    />
                    <p className="font-Sohne text-sm px-2 flex text-[13px] items-center text-[#242424]">
                      {val.FirstName} in
                      {val.BookSvg && (
                        <span className="px-1">{val.BookSvg}</span>
                      )}
                      {val.LastName}
                    </p>
                  </div>
                  <p className="font-SohneBold text-[16px] mt-2 text-[#242424]">
                    {val.ShortDis}
                  </p>
                </div>
              ))}
              <p className="text-green-600 text-[14px] font-Sohne  py-4 cursor-pointer">
                See the full list
              </p>
              <div className="mt-4">
                <p className="font-Sohne">Recommended topics</p>
                <div className="w-72 -ml-3">
                  {RecomendedTopics.map((val, idx) => (
                    <button
                      key={idx}
                      className="rounded-full bg-[#f2f2f2] ml-2 mt-4 text-[#242424] text-[14px] px-3 py-2 mt-2 font-SohneNormal"
                    >
                      {val.TopicName}
                    </button>
                  ))}
                </div>
                <p className="text-green-600 text-[14px] font-Sohne  py-4 cursor-pointer ">
                  See more{" "}
                </p>
              </div>

              <div className="sticky top-6">
                <div className="sticky  ">
                  <p className="font-Sohne text-[#242424] text-[16px] mt-8">
                    Who to follow
                  </p>
                  {FollowData.map((val, idx) => (
                    <div className="w-full flex py-4">
                      <span className="py-1">
                        <img
                          src={val.ProfilePic}
                          alt=""
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </span>
                      <div className="px-3 w-[70%] ">
                        <h3 className="text-[#242424] font-Sohne block">
                          {val.Name}
                          {val.SubTitile && (
                            <span className="text-[#242424] py-1 block text-[13px]">
                              {val.SubTitile}
                            </span>
                          )}
                        </h3>
                        <p className="text-[#6b6b6b] font-SohneNormal text-[13px] overflow-hidden ">
                          {val.dis}
                        </p>
                      </div>
                      <span className="h-8 w-[22%] text-center py-1 font-SohneNormal text-black text-[13px] rounded-full border border-black ">
                        Follow
                      </span>
                    </div>
                  ))}
                  <p className="text-green-600 text-[14px] font-Sohne  py-4 cursor-pointer">
                    See more suggestions
                  </p>
                </div>
              </div>

              {/* Footer */}

              {/* <div className="mt-8">

  <h2 className="text-[#242424] font-Sohne text-[16px]">Reading list</h2>
  <div className="text-[#6b6b6b] text-[16px] flex border"> <p className="flex">
    <span className="w-20 h-4">Click</span><svg xmlns="http://www.w3.org/2000/svg" width="45" height="25" fill="none" viewBox="0 0 25 25" ><path fill="currentColor" d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .805.396L12.5 17l5.695 4.396A.5.5 0 0 0 19 21v-8.5a.5.5 0 0 0-1 0v7.485l-5.195-4.012a.5.5 0 0 0-.61 0L7 19.985z"></path></svg> on any story to easily add it to your reading list or a custom list that you can share.
    </p>
    
    </div>
</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
