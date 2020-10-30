import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'kkk@gmail.com',
    password: '5555555',
    techs: [
      'Node', 
      'ReactJS', 
      'React Native',
      {title: 'JavaScript', experience: 100}
    ]
  });

  console.log(user.name);
  

  return response.json({ message: 'Hello World'})
}