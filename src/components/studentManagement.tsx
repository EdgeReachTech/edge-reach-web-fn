"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_BASE_URL } from "../config/BASE_API";


interface Student {
  createdAt:string|number|Date
  updatedAt: string | number | Date;
  _id: string;
  full_name: string;
  email: string;
  phone: string;
  location: string
  course: string;
}



const StudentManagement: React.FC = () => {

  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [openView, setOpenView] = useState(false);
 


 ;



  const fetchStudents = async () => {
    try {
      const response = await axios.get<Student[]>(`${API_BASE_URL}/students`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      const sortedStudents = response.data.sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
      setStudents(sortedStudents);
    } catch (error) {
      console.error("Error fetching student data:", error);
    } finally {
    }
  };




  useEffect(() => {
    fetchStudents()

  }, []);


  const handleView = (student: Student) => {
    setOpenView(true);
    setSelectedStudent(student);
  };
  const handleDisableView = () => {
    setOpenView(false);
    setSelectedStudent(null);
  };





  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };






  const renderActionButtons = (student: Student) => {
    return (
      <>
        <button
          onClick={() => handleView(student)}
          className="text-indigo-600 font-extrabold hover:text-indigo-900 mr-3"
        >
          VIEW
        </button>


        <button
        
          className="text-red-600 ml-3 font-extrabold hover:text-red-900"
        >
          DELETE
        </button>

      </>
    )
    
  }




  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-4 lg:p-6 w-full">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-50 flex flex-col sm:flex-row justify-between items-center shadow-md rounded-lg p-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
            STUDENTS
          </h2>


        </div>
       

        <div className="p-4 space-y-4">
         

          <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 mx-14 lg:mx-0 ">
                <thead className="bg-gray-50 overflow-y-hidden">
                  <tr className="overflow-y-hidden">
                    
                    <th
                      scope="col"
                      className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Course
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                    >
                      Phone
                    </th>
                    
                    <th
                      scope="col"
                      className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell"
                    >
                     Location
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student, index) => (
                    <tr key={student._id}>
                    
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {student.full_name}
                        </div>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {student.course}
                        </div>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-sm text-gray-900">
                          {student.phone}
                        </div>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-sm text-gray-900">
                          {student.location}
                        </div>
                      </td>


                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex  gap-2">
                          {renderActionButtons(student)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


          {selectedStudent && openView && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg ">
                <div className="bg-gray-50 p-6 h-96 overflow-scroll">
                  <h3 className="text-lg font-extrabold text-center text-gray-900">
                    STUDENT DETAILS
                  </h3>
                  <div className="mt-4 space-y-2">
                    <p className="flex">
                      <span className="font-extrabold w-28">NAME</span>{" "}
                      <span> {selectedStudent.full_name} </span>
                    </p>
                    <p className="flex">
                      <span className="font-extrabold  w-28 ">EMAIL</span>{" "}
                      <span> {selectedStudent.email}</span>
                    </p>
                    <p className="flex">
                      <span className="font-extrabold w-28 ">PHONE</span>{" "}
                      <span> {selectedStudent.phone}</span>
                    </p>

                    <p className="flex">
                      <span className="font-extrabold w-28 ">COURSE</span>{" "}
                      <span>{selectedStudent.course}</span>
                    </p>


                    <p className="flex">
                      <span className="font-extrabold w-28 ">APPLIED</span>{" "}
                      <span>{formatDate(selectedStudent.createdAt as string)}</span>
                    </p>



                  </div>
                </div>
                <div className="bg-gray-50 p-4 flex justify-end">
                  <button
                    onClick={() => handleDisableView()}
                    className="inline-flex justify-center px-4 py-2 text-sm  text-black font-extrabold hover:text-white  bg-red-300 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>




    </div>
  );
};

export default StudentManagement;
