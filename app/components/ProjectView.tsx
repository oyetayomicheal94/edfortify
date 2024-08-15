"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PaperClipIcon } from '@heroicons/react/solid';

const ProjectViewComponent = (data) => {
    const findProject = (blueprint_name, project) => {
        console.log(blueprint_name);
        console.log(project);
        // Use bracket notation to access the property dynamically
        const value = project[blueprint_name];
        return value;
    };
    const { project_id } = data;
    // Form state
    const [project, setProject] = useState({});
    const [blueprints, setBlueprints] = useState([]);

    // useEffect to fetch the list of projects when the component mounts
    useEffect(() => {
        // Simulate fetching data from an API
        const fetchData = async () => {
            try {
                // Replace this with your actual API endpoint
                const response = await fetch('http://localhost:8000/api/blueprint');
                const data = await response.json();
                setBlueprints(data);
            } catch (error) {
                console.error('Error fetching blueprint:', error);
            }
        };

        fetchData();
    }, []);

    // useEffect to fetch the list of projects when the component mounts
    useEffect(() => {
        // Simulate fetching data from an API
        const fetchData = async () => {
            try {
                // Replace this with your actual API endpoint
                const response = await fetch('http://localhost:8000/api/project/'+project_id+'/user/'+1);
                const data = await response.json();
                setProject(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div>
            <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Project Information</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Project details and blueprint.</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Project Name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ project?.project_name }</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Project Description</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        { project?.project_description }
                    </dd>
                </div>
                { blueprints && blueprints.length > 0 ? (
                    <div>
                    <h2>Blueprints:</h2>
                    <ul>
                        {blueprints.map((blueprint) => (
                        <li key={blueprint.blueprint_id}>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    { blueprint.blueprint_name }
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    { blueprint.blueprint_description }
                                </dd>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    { findProject(blueprint.blueprint_name, project) }
                                </dd>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <Link href={'/dashboard/1/'+blueprint.blueprint_name+'/edit'}>edit</Link>
                                </dd>
                            </div>
                            {/* Add similar blocks for other blueprint details */}
                        </li>
                        ))}
                    </ul>
                    </div>
                ) : (
                    <p>No blueprints found.</p>
                )}
            </dl>
            </div>
        </div>
    </div>
  );
};
export default ProjectViewComponent;
