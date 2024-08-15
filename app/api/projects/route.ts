// app/api/projects/route.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Process the request and create a project (demo data)
  const projectData = {
    projectId: '123',
    projectName: 'Demo Project',
    projectDescription: 'This is a demo project.',
    completionStatus: 'In Progress',
  };

  // Respond with the project data
  res.status(200).json(projectData);
};
