// app/dashboard/teacher/assignment/add-assignment/page.tsx

import { createCourseWork, getCourse } from "./action";
import { auth, signIn } from "../../../../../auth";
import { getSession } from "./action";
import { getToken } from "./action";
import { redirect } from "next/navigation";
export default async function Page() {
  const token = await getToken();

  if (!token) {
    redirect("/login");
  }

  const session = await auth();
  // const session = await getSession();

  let courses;
  if (!session) {
    return (
      <>
        <h1>Youve not logged in yet</h1>
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button type="submit">Sign In from Google</button>
        </form>
      </>
    );
  } else {
    courses = await getCourse();
  }

  return (
    <>
      <form action={createCourseWork}>
        <div className="flex flex-col">
          <label htmlFor="title">Title CourseWork</label>
          <input type="text" name="title" placeholder="Title" />
          <label htmlFor="description">Description CourseWork</label>
          <input type="text" name="description" placeholder="Description" />
          <label htmlFor="duedate">Due To Date</label>
          <input type="date" name="duedate" />
          <label htmlFor="duetime">Due To Time</label>
          <input type="time" name="duetime" />
          <label htmlFor="course">Course:</label>
          <select name="course" id="course">
            {courses?.map((course) => {
              if (course.courseState === "ACTIVE") {
                return (
                  <option value={[course.id, course.name]} key={course.id}>
                    {course.name}
                  </option>
                );
              }
            })}
          </select>
          <button type="submit">Add Course</button>
        </div>
      </form>
    </>
  );
}
