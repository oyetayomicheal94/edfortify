// import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const UpdateProjectPage = (data) => {
    const router = useRouter();
    const { project_id, blueprint_name } = data;

    const apidata = {
      [blueprint_name]: 'Your value here',
    };
    // Form state
    const [project_description, setDescription] = useState('');
    const [user_input, setUserInput] = useState('');

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assume you have an API endpoint for project creation
    try {
      const user_id = 1;
      const apidata = {
        [blueprint_name]: project_description,
      };
      const response = await fetch('http://localhost:8000/api/project/'+project_id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apidata),
      });
      console.log(response);

      if (response.ok) {
        // Parse response to get the project ID
        const { project_id } = await response.json();

        // Show success modal
        setShowModal(true);

        // Redirect to the project dashboard
        // if (!showModal) {
        //   router.push(`/dashboard/${project_id}`);
        // }
        
      } else {
        // Handle error response
        console.error('Project creation failed');
      }
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  // Function to handle form submission
  const handleConversation = async (e) => {
    e.preventDefault();

    // Assume you have an API endpoint for project creation
    
  };

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* <CreateProject></CreateProject> */}
            <div className="container mx-auto mt-8">
              <div className="flex space-x-4">
              {/* First Form */}
                <form onSubmit={handleConversation} className="flex-1 max-w-md">

                    <div className="mb-4">
                      <label htmlFor="project_description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      id="user_input"
                      name="user_input"
                      disabled="disabled"
                      value={user_input}
                      onChange={(e) => setUserInput(e.target.value)}
                      required
                      className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Ask an Assistant
                      </button>
                    </div>
                </form>

              {/* Second Form */}
              <form onSubmit={handleSubmit} className="flex-1 max-w-md">
                <div className="mb-4">
                  <label htmlFor="project_description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="project_description"
                  name="project_description"
                  value={project_description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Update Project
                  </button>
                </div>
              </form>
            </div>
              
              

              {/* Success Modal */}
              {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto" role="dialog" aria-labelledby="modal-title" aria-modal="true">
                  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                      &#8203;
                    </span>

                    {/* Modal */}
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                            {/* Checkmark icon */}
                            <svg
                              className="h-6 w-6 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                              Project Updated Successfully!
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">You can now view your project in the dashboard.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          onClick={() => {
                            setShowModal(false); 
                            router.push(`/dashboard/${project_id}`);
                          }}
                          type="button"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
  );
};

export default UpdateProjectPage;
