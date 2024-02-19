import React from 'react'
import './Home.css'
import RegisterTask from '../../components/RegisterTasks/RegisterTask';

const Home = () => {
  const tasks = [
    {
      _id: 0,
      description: "ACRUEX",
      createDate: "2017-07-04T12:06:28",
      estimatedDate: "2022-10-27T03:29:55",
      finishedDate: "2014-11-29T12:38:56"
    },
    {
      _id: 1,
      description: "PULZE",
      createDate: "2017-06-21T04:04:24",
      estimatedDate: "2022-03-31T01:48:30",
      finishedDate: "2021-07-21T07:46:39"
    },
    {
      _id: 2,
      description: "NEPTIDE",
      createDate: "2014-03-28T09:37:55",
      estimatedDate: "2019-07-26T10:38:59",
      finishedDate: "2018-06-10T06:23:05"
    },
    {
      _id: 3,
      description: "EXTRAGENE",
      createDate: "2019-10-19T04:01:45",
      estimatedDate: "2014-08-25T03:07:41",
      finishedDate: "2016-10-31T10:38:53"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

    return formattedDate;
  }

  return (
    <div id='container'>
      <table id='customers'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Create date</th>
            <th>Estimated date</th>
            <th>Finished date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.description}</td>
              <td>{formatDate(task.createDate)}</td>
              <td>{formatDate(task.estimatedDate)}</td>
              <td>{formatDate(task.finishedDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <RegisterTask/>
    </div>
  )
}

export default Home