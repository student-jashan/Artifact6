import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import "./profile.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const user1 = {
  name: "John Doe",
  email: "johndoe@example.com",
  role: "Employee",
  totalCourses: 4,
};

const courses2 = [
  {
    name: "Advanced Database Management System",
    status: "Active",
    modules: 6,
    totalModules: 10,
    quizzes: 3,
    totalQuizzes: 5,
  },
  {
    name: "Computer Networks",
    status: "Completed",
    modules: 10,
    totalModules: 10,
    quizzes: 5,
    totalQuizzes: 5,
  },
  {
    name: "Advanced Python",
    status: "Active",
    modules: 4,
    totalModules: 10,
    quizzes: 2,
    totalQuizzes: 5,
  },
  {
    name: "Backend using Django",
    status: "Completed",
    modules: 8,
    totalModules: 8,
    quizzes: 4,
    totalQuizzes: 4,
  }
];

const Profile2 = () => {
  const completedCourses = courses2.filter(course => course.status === "Completed").length;
  const activeCourses = courses2.length - completedCourses;

  // Pie Chart Data
  const pieData = {
    labels: ["Completed", "In Progress"],
    datasets: [{
      data: [completedCourses, activeCourses],
      backgroundColor: ["#28a745", "#007bff"]
    }]
  };

  // Bar Chart Data
  const barData = {
    labels: courses2.map(course => course.name),
    datasets: [{
      label: "Module Completion (%)",
      data: courses2.map(course => (course.modules / course.totalModules) * 100),
      backgroundColor: "rgba(0, 123, 255, 0.6)",
      borderColor: "rgba(0, 123, 255, 1)",
      borderWidth: 1
    }]
  };

  return (
    <div className="containernew">
      <h2>User Details</h2>
      <div className="Userdata">
        <p><strong>Name:</strong> {user1.name}</p>
        <p><strong>Email:</strong> {user1.email}</p>
        <p><strong>Role:</strong> {user1.role}</p>
        <p><strong>Total Courses Enrolled:</strong> {user1.totalCourses}</p>
      </div>

      <h2>Visualisation</h2>
      <table className="CourseList">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Status</th>
            <th>Completion</th>
          </tr>
        </thead>
        <tbody>
          {courses2.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>
                <button className={`status-button ${course.status === "Completed" ? "completed-button" : "active-button"}`}>
                  {course.status}
                </button>
              </td>
              <td>
                <div className="ProGress">
                  <div className="progess-bar" style={{ width: `${(course.modules / course.totalModules) * 100}%` }}>
                    {((course.modules / course.totalModules) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="proGressData">
                  Modules: {course.modules}/{course.totalModules} ({((course.modules / course.totalModules) * 100).toFixed(0)}%),
                  Quizzes: {course.quizzes}/{course.totalQuizzes} ({((course.quizzes / course.totalQuizzes) * 100).toFixed(0)}%)
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="ChartContainer1">
        <h2>Completed vs. In Progress</h2>
        <Pie data={pieData} />
      </div>

      <div className="Proformance">
        <h3>Performance Overview</h3>
        {courses2.map((course, index) => (
          <div className="CourseProformance3" key={index}>
            <h4>{course.name}</h4>
            <div className="performance-item">
              <p>Milestone: Completed {course.modules} out of {course.totalModules} Modules</p>
              <div className="performanceBar">
                <div className="performanceProgress" style={{ width: `${(course.modules / course.totalModules) * 100}%` }}></div>
                <div className="performanceLabel">{((course.modules / course.totalModules) * 100).toFixed(0)}%</div>
              </div>
            </div>
            <div className="performance-item">
              <p>Quiz Performance: {course.quizzes}/{course.totalQuizzes}</p>
              <div className="performanceBar">
                <div className="performanceProgress" style={{ width: `${(course.quizzes / course.totalQuizzes) * 100}%` }}></div>
                <div className="performanceLabel">{((course.quizzes / course.totalQuizzes) * 100).toFixed(0)}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="ChartContainer1">
        <h2>Course Performance</h2>
        <Bar data={barData} options={{ scales: { y: { beginAtZero: true, max: 100 } } }} />
      </div>
    </div>
  );
};

export default Profile2;
