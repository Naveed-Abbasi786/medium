import React, { useState } from "react";
import ProfilePic1 from "../assets/img/profilepic1.jpg";
import ProfilePic2 from "../assets/img/profilepic2.jpg";
import ProfilePic3 from "../assets/img/profilepic3.jpg";
import ProfilePic4 from "../assets/img/ProfilePic4.png";
import ProfilePic5 from "../assets/img/ProfilePic5.png";
import ProfilePic6 from "../assets/img/ProfilePic6.jpg";
import ProfilePic7 from "../assets/img/ProfilePic7.jpg";
import BlogPostPic from "../assets/img/BlogPost5.png";
import Navbar from "../Components/Navbar";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
export default function DetailPage() {
  const LeadersData = [
    {
      Svg: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="24"
            fill="none"
            viewBox="0 0 64 64"
            class="afb cb tp dx"
          >
            <path
              fill="#FFC017"
              d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
            ></path>
          </svg>
        </>
      ),
      Titile: "Access all member-only stories on Medium",
    },
    {
      Svg: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="24"
            fill="none"
            viewBox="0 0 64 64"
            class="afb cb tp dx"
          >
            <path
              fill="#FFC017"
              d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
            ></path>
          </svg>
        </>
      ),
      Titile: "Become an expert in your areas of interest",
    },
    {
      Svg: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="24"
            fill="none"
            viewBox="0 0 64 64"
            class="afb cb tp dx"
          >
            <path
              fill="#FFC017"
              d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
            ></path>
          </svg>
        </>
      ),
      Titile: "Get in-depth answers to thousands of questions about technical",
    },
    {
      Svg: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="24"
            fill="none"
            viewBox="0 0 64 64"
            class="afb cb tp dx"
          >
            <path
              fill="#FFC017"
              d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
            ></path>
          </svg>
        </>
      ),
      Titile: "Grow your career or build a new one",
    },
  ];
  const LeadersProfile = [
    {
      ProfilePic: ProfilePic1,
      Name: "Marc-André Giroux",
      Passion: "Sr. Software Developer Netflix",
    },
    {
      ProfilePic: ProfilePic2,
      Name: "Carlos Arguelles",
      Passion: "Sr. Staff Engineer Google",
    },
    { ProfilePic: ProfilePic3, Name: "Tony Yiu", Passion: "Director Nasdaq" },
    {
      ProfilePic: ProfilePic6,
      Name: "Brandeis Marshall",
      Passion: "CEO DataedX",
    },
    {
      ProfilePic: ProfilePic5,
      Name: "Cassie Kozyrkov",
      Passion: "Chief Decision Scientist Google",
    },
    {
      ProfilePic: ProfilePic6,
      Name: "Memo Akten",
      Passion: "Asst. Professor UCSD",
    },
    {
      ProfilePic: ProfilePic7,
      Name: "Vitali Zaidman",
      Passion: "Software Architect Meta",
    },
    {
      ProfilePic: ProfilePic2,
      Name: "Carlos Arguelles",
      Passion: "Sr. Staff Engineer Google",
    },
  ];
  const [Save, SetSave] = useState(false);
  const [Like, SetLike] = useState(false);

  return (
    <>
      <Navbar />
      <div className="w-full h-[100vh] flex justify-center">
        <div className="bg-sky-60 lg:w-[50%] w-[100%] h-[80%] px-4">
          {/* heading */}
          <div className="flex items-center py-8  h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 64 64"
              class="px jw"
            >
              <path
                fill="#FFC017"
                d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
              ></path>
            </svg>
            <p className="font-SohneNormal text-[#6b6b6b] text-[14px]">
              Member-only story
            </p>
          </div>

          <h1 className="font-SohneBold  lg:text-[42px] text-[36px] text-[#242424] leading-[52px] ">
            High-Level System Architecture of Booking.com
          </h1>

          {/* Profile */}

          <div className="flex mt-8">
            <img
              src={ProfilePic1}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="px-4  w-full flex flex-col gap-2">
              <div className="h-8  flex gap-2">
                <span className="hover:underline cursor-pointer text-[#242424] text-[16px] font-SohneNormal">
                  Talha Sahin
                </span>
                <span className="text-[#6b6b6b] text-[16px] -mt-1">.</span>
                <span className="text-[#156d12] text-[16px] font-SohneNormal hover:text-black cursor-pointer">
                  Follow
                </span>
              </div>
              <div className="-mt-3 flex gap-2">
                <span className="text-[#6b6b6b] text-[14px] font-SohneNormal">
                  8 min read
                </span>
                <span className="text-[#6b6b6b] text-[16px] -mt-1">.</span>
                <span className="text-[#6b6b6b] text-[14px] font-SohneNormal">
                  Jan 10, 2024
                </span>
              </div>
            </div>
          </div>

          {/* icons */}

          <div className="border-b border-t mt-6 gap-4  flex justify-between py-2">
            {/* LikeAndComment */}
            <div className="flex  gap-2 ">
              {/* like */}
              <div className="flex items-center gap-2">
                {Like ? (
                  <svg
                    onClick={() => SetLike(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="clap"
                    className="cursor-pointer "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.37.828 12 3.282l.63-2.454zM15.421 1.84l-1.185-.388-.338 2.5zM9.757 1.452l-1.184.389 1.523 2.112zM20.253 11.84 17.75 7.438c-.238-.353-.57-.584-.93-.643a.96.96 0 0 0-.753.183 1.13 1.13 0 0 0-.443.695c.014.019.03.033.044.053l2.352 4.138c1.614 2.95 1.1 5.771-1.525 8.395a7 7 0 0 1-.454.415c.997-.13 1.927-.61 2.773-1.457 2.705-2.704 2.517-5.585 1.438-7.377M12.066 9.01c-.129-.687.08-1.299.573-1.773l-2.062-2.063a1.123 1.123 0 0 0-1.555 0 1.1 1.1 0 0 0-.273.521z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M14.741 8.309c-.18-.267-.446-.455-.728-.502a.67.67 0 0 0-.533.127c-.146.113-.59.458-.199 1.296l1.184 2.503a.448.448 0 0 1-.236.755.445.445 0 0 1-.483-.248L7.614 6.106A.816.816 0 1 0 6.459 7.26l3.643 3.644a.446.446 0 1 1-.631.63L5.83 7.896l-1.03-1.03a.82.82 0 0 0-1.395.577.81.81 0 0 0 .24.576l1.027 1.028 3.643 3.643a.444.444 0 0 1-.144.728.44.44 0 0 1-.486-.098l-3.64-3.64a.82.82 0 0 0-1.335.263.81.81 0 0 0 .178.89l1.535 1.534 2.287 2.288a.445.445 0 0 1-.63.63l-2.287-2.288a.813.813 0 0 0-1.393.578c0 .216.086.424.238.577l4.403 4.403c2.79 2.79 5.495 4.119 8.681.931 2.269-2.271 2.708-4.588 1.342-7.086z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    onClick={() => SetLike(true)}
                    className="text-text-[#191919] cursor-pointer  hover:text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="clap"
                  >
                    <path
                      fill="currentColor"
                      d="M11.37.828 12 3.282l.63-2.454zM13.916 3.953l1.523-2.112-1.184-.39zM8.589 1.84l1.522 2.112-.337-2.501zM18.523 18.92c-.86.86-1.75 1.246-2.62 1.33a6 6 0 0 0 .407-.372c2.388-2.389 2.86-4.951 1.399-7.623l-.912-1.603-.79-1.672c-.26-.56-.194-.98.203-1.288a.7.7 0 0 1 .546-.132c.283.046.546.231.728.5l2.363 4.157c.976 1.624 1.141 4.237-1.324 6.702m-10.999-.438L3.37 14.328a.828.828 0 0 1 .585-1.408.83.83 0 0 1 .585.242l2.158 2.157a.365.365 0 0 0 .516-.516l-2.157-2.158-1.449-1.449a.826.826 0 0 1 1.167-1.17l3.438 3.44a.363.363 0 0 0 .516 0 .364.364 0 0 0 0-.516L5.293 9.513l-.97-.97a.826.826 0 0 1 0-1.166.84.84 0 0 1 1.167 0l.97.968 3.437 3.436a.36.36 0 0 0 .517 0 .366.366 0 0 0 0-.516L6.977 7.83a.82.82 0 0 1-.241-.584.82.82 0 0 1 .824-.826c.219 0 .43.087.584.242l5.787 5.787a.366.366 0 0 0 .587-.415l-1.117-2.363c-.26-.56-.194-.98.204-1.289a.7.7 0 0 1 .546-.132c.283.046.545.232.727.501l2.193 3.86c1.302 2.38.883 4.59-1.277 6.75-1.156 1.156-2.602 1.627-4.19 1.367-1.418-.236-2.866-1.033-4.079-2.246M10.75 5.971l2.12 2.12c-.41.502-.465 1.17-.128 1.89l.22.465-3.523-3.523a.8.8 0 0 1-.097-.368c0-.22.086-.428.241-.584a.847.847 0 0 1 1.167 0m7.355 1.705c-.31-.461-.746-.758-1.23-.837a1.44 1.44 0 0 0-1.11.275c-.312.24-.505.543-.59.881a1.74 1.74 0 0 0-.906-.465 1.47 1.47 0 0 0-.82.106l-2.182-2.182a1.56 1.56 0 0 0-2.2 0 1.54 1.54 0 0 0-.396.701 1.56 1.56 0 0 0-2.21-.01 1.55 1.55 0 0 0-.416.753c-.624-.624-1.649-.624-2.237-.037a1.557 1.557 0 0 0 0 2.2c-.239.1-.501.238-.715.453a1.56 1.56 0 0 0 0 2.2l.516.515a1.556 1.556 0 0 0-.753 2.615L7.01 19c1.32 1.319 2.909 2.189 4.475 2.449q.482.08.971.08c.85 0 1.653-.198 2.393-.579.231.033.46.054.686.054 1.266 0 2.457-.52 3.505-1.567 2.763-2.763 2.552-5.734 1.439-7.586z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                )}{" "}
                <span className="text-[#191919] text-[13px] font-SohneNormal ">
                  6,061
                </span>
              </div>
              {/* Comments */}
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-[#6b6b6b] cursor-pointer"
                >
                  <path
                    fill="currentColor"
                    d="M18.006 16.803c1.533-1.456 2.234-3.325 2.234-5.321C20.24 7.357 16.709 4 12.191 4S4 7.357 4 11.482c0 4.126 3.674 7.482 8.191 7.482.817 0 1.622-.111 2.393-.327.231.2.48.391.744.559 1.06.693 2.203 1.044 3.399 1.044.224-.008.4-.112.486-.287a.49.49 0 0 0-.042-.518c-.495-.67-.845-1.364-1.04-2.057a4 4 0 0 1-.125-.598zm-3.122 1.055-.067-.223-.315.096a8 8 0 0 1-2.311.338c-4.023 0-7.292-2.955-7.292-6.587 0-3.633 3.269-6.588 7.292-6.588 4.014 0 7.112 2.958 7.112 6.593 0 1.794-.608 3.469-2.027 4.72l-.195.168v.255c0 .056 0 .151.016.295.025.231.081.478.154.733.154.558.398 1.117.722 1.659a5.3 5.3 0 0 1-2.165-.845c-.276-.176-.714-.383-.941-.59z"
                  ></path>
                </svg>
                <span className="text-[13px] font-SohneNormal text-[#156d12]">
                  47
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              {Save ? (
                <>
                  <svg
                    onClick={() => SetSave(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="cursor-pointer"
                  >
                    <path
                      fill="#000"
                      d="M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                </>
              ) : (
                <svg
                  onClick={() => SetSave(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-[#6b6b6b] hover:text-black cursor-pointer"
                >
                  <path
                    fill="currentColor"
                    d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"
                  ></path>
                </svg>
              )}

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
                  d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m3.376 10.416-4.599 3.066a.5.5 0 0 1-.777-.416V8.934a.5.5 0 0 1 .777-.416l4.599 3.066a.5.5 0 0 1 0 .832"
                  clip-rule="evenodd"
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
                  d="M15.218 4.931a.4.4 0 0 1-.118.132l.012.006a.45.45 0 0 1-.292.074.5.5 0 0 1-.3-.13l-2.02-2.02v7.07c0 .28-.23.5-.5.5s-.5-.22-.5-.5v-7.04l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.79a.42.42 0 0 1 .068.498m-.106.138.008.004v-.01zM16 7.063h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11c-1.1 0-2-.9-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.15.5.5 0 0 1 .15.35.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9v-10.2c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <Menu>
                <MenuButton>
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
                  <ChevronDownIcon className="size-4 fill-white/60" />
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-52 origin-top-right bg-[#ffff] shadow-lg  rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 text-black rounded-lg py-1.5 px-3 data-[focus]:bg-gray-200">
                      <PencilIcon className="size-4 fill-black" />
                      Edit
                      <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">
                        ⌘E
                      </kbd>
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button className="group flex w-full items-center  text-black gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-200">
                      <Square2StackIcon className="size-4 fill-black" />
                      Duplicate
                      <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">
                        ⌘D
                      </kbd>
                    </button>
                  </MenuItem>
                  <div className="my-1 h-px bg-gray-200" />
                  <MenuItem>
                    <button className="group flex w-full items-center  text-black gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-200">
                      <ArchiveBoxXMarkIcon className="size-4 fill-black" />
                      Archive
                      <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">
                        ⌘A
                      </kbd>
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 text-black rounded-lg py-1.5 px-3 data-[focus]:bg-gray-200">
                      <TrashIcon className="size-4 fill-black" />
                      Delete
                      <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">
                        ⌘D
                      </kbd>
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>

          {/* ShortDiscript */}
          <p className="text-[#242424] text-[20px] leading-[32px] font-Source mt-8">
            Hello everyone! In this article, we will take an in-depth look at
            the possible high-level architecture of Booking.com, one of the
            world’s leading travel and hospitality platforms.
          </p>

          <img
            src={BlogPostPic}
            alt="BlogPostPic"
            className="w-full h-[70%] object-contain mt-6  ml-0 lg:-ml-5"
          />

          {/* Discrption */}
          <div className="py-8">
            <h1 className="text-[#242424] text-[24px] font-SohneBold ">
              Introduction
            </h1>
            <p className="font-Source text-[#242424] text-[20px] leading-[32px] py-4">
              Serving millions of users worldwide, Booking.com has a dynamic
              system architecture to meet ever-changing customer expectations
              and integrate technological innovations. Starting with
              Booking.com’s system requirements, the purpose of this paper is to
              discuss how the platform was designed, how its main components
              function.
            </p>

            <p className="font-Source text-[#242424] text-[20px] leading-[32px] py-4">
              Like other leading companies in the industry, Booking.com needs
              complex and scalable architectures to continuously improve user
              experience, increase efficiency and maintain a competitive
              advantage in the market. In this paper, we will try to understand
              the technological processes behind such a platform and propose a
              basic high-level architecture. Whether you are a software
              developer, a systems engineer or just a tech-savvy person, we hope
              that this article will give you a better understanding of
              Booking.com’s technological structure.
            </p>

            <div className="opacity-50">
              <h1 className="text-[32px] font-SohneBold text-[#919191]">
                System Requirements
              </h1>
              <p className="font-Source text-[#242424] text-[20px] leading-[32px] text-[#919191]">
                The system architecture of Booking.com is crafted to accommodate
                the extensive demands of its platform. In 2019, the platform was
                handling over 1,500,000+ experiences booked every 24 hours…
              </p>
            </div>
          </div>

          {/*industryLeaders  */}

          <div className="mt-8 h-[120vh]">
            <h1 className="text-center font-Super text-[28px]">
              Read the best stories from industry leaders on Medium.
            </h1>
            <p className="text-[#242424] text-[13px] w-[90%] lg:ml-10 ml-0 font-SohneNormal text-center py-4">
              The author made this story available to Medium members only.
              Upgrade to instantly unlock this story plus other member-only
              benefits.
            </p>

            {LeadersData.map((val, idx) => (
              <div className="flex gap-4 py-2 items-center lg:ml-32 ml-0 leading-[20px]">
                <span>{val.Svg}</span>
                <p
                  className="text-[14px] text-[#242424
] font-SohneNormal"
                >
                  {val.Titile}
                </p>
              </div>
            ))}

            {/* LeaderProfile */}
            <div className="flex w-[100%]  bg-sky-70 gap-4 flex-wrap mt-8 items-center justify-center">
              {LeadersProfile.map((val, idx) => (
                <div className="w-[23%] lg:h-[22vh] h-[37vh]  flex flex-col items-center">
                  <img
                    src={val.ProfilePic}
                    alt="profile"
                    className="w-16 h-16 rounded-full object-cover lg:mt-2 -mt-4"
                  />
                  <p className="text-[#242424] text-[14px] text-center font-SohneNormal">
                    {val.Name}
                  </p>
                  <p className="text-[#6b6b6b] font-SohneNormal text-center w-[80%] text-[11px]">
                    {val.Passion}
                  </p>
                </div>
              ))}
            </div>
            <button className="bg-[#868484]  lg:ml-[43%] ml-[36%] mt-4  text-white text-[14px] font-SohneNormal py-2 px-5 rounded-full justify-center">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
