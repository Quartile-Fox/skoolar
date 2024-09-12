"use client";
import { useState } from "react";
import SideBar from "../../../../components/parent/Sidebar";
import Link from "next/link";
import { getSchoolAnnouncement } from "../action";

export default async function ParentAnnouncement() {
  const GeneralAnnouncement = await getSchoolAnnouncement();
  const AnnouncementData = GeneralAnnouncement.data;

  return (
    <>
      <div className="flex gap-3 px-5 py-10 h-screen bg-[#F1F7FE]">
        <SideBar />
        <div className="flex w-full">
          <div className=" bg-white w-[30rem] h-full border-r border-neutral-200 rounded-2xl rounded-tr-none rounded-br-none overflow-y-auto overflow-x-hidden">
            <header className="flex items-center p-3 pb-4  gap-3 h-[11%]  text-[#006bf8] border-b border-neutral-300 ">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#006bf8"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="none"
                    stroke="#006bf8"
                    strokeWidth="1.512"
                    d="M11,15 C14,15 19,19 19,19 L19,3 C19,3 14,7 11,7 C11,7 11,15 11,15 Z M5,15 L8,23 L12,23 L9,15 M19,14 C20.657,14 22,12.657 22,11 C22,9.343 20.657,8 19,8 M11,19 C11.9999997,18.9999994 14,18 14,16 M2,11 C2,7.88888889 3.7912,7 6,7 L11,7 L11,15 L6,15 C3.7912,15 2,14.1111111 2,11 Z"
                  />
                </g>
              </svg>
              <span className="text-[1.5rem] text-black font-medium lg:text-nowrap">
                School Announcemennt
              </span>
            </header>
            <div className="h-[86%] w-full overflow-y-auto px-4">
              <div className="flex mt-5 flex-col gap-4 overflow-y-auto">
                {AnnouncementData?.map((el, index) => (
                  <Link
                    href={`/dashboard/parent/announcement/${el.title}`}
                    key={index}
                  >
                    <div className="flex justify-start items-start gap-3 w-full h-[5rem] border-neutral-200 border-b-[0.3px]">
                      <section className="h-full flex items-start py-2">
                        <section className="w-4 h-4 rounded-full bg-blue-400"></section>
                      </section>
                      <section className="flex-1 relative justify-center">
                        <span className="text-black text-[15px] font-medium">
                          {el.title}
                        </span>
                        <span className="text-[#006bf8] text-[12px] absolute right-0 top-0">
                          17.30
                        </span>
                        <p className="text-neutral-600 text-[12px] line-clamp-2 mt-1 leading-normal">
                          {el.content}
                        </p>
                      </section>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full bg-white ml-0 rounded-2xl rounded-l-none">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-3xl font-bold text-neutral-300">
                Open Announcement
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
