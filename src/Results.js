import React from 'react';

const Results = ({ results }) => {
  const { processes, avgWaitingTime, avgTurnaroundTime, ganttChart } = results;

  return (
    <div className="results">
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>PID</th>
            <th>Arrival</th>
            <th>Burst</th>
            <th>Waiting</th>
            <th>Turnaround</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((p) => (
            <tr key={p.pid}>
              <td>{p.pid}</td>
              <td>{p.arrival}</td>
              <td>{p.burst}</td>
              <td>{p.waiting}</td>
              <td>{p.turnaround}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Average Waiting Time: {avgWaitingTime}</p>
        <p>Average Turnaround Time: {avgTurnaroundTime}</p>
        <p>Gantt Chart: {ganttChart}</p>
      </div>
    </div>
  );
};

export default Results;