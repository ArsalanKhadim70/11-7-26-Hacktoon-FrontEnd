import React, { useState } from 'react';
import "./bulb.css";

const Bulb = () => {

    return (
        <div className="marksheet">
            <div className="header">
                <h1>Tech Pakistan Institute</h1>
                <h2>Student Marksheet</h2>
            </div>

            <div className="student-info">
                <p><strong>Student Name:</strong> Ahmed Ali</p>
                <p><strong>Roll Number:</strong> 2026001</p>
                <p><strong>Class:</strong> 10th Grade</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Total Marks</th>
                        <th>Obtained Marks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Math</td>
                        <td>100</td>
                        <td>88</td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td>100</td>
                        <td>82</td>
                    </tr>
                    <tr>
                        <td>Urdu</td>
                        <td>100</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>Physics</td>
                        <td>100</td>
                        <td>85</td>
                    </tr>
                    <tr>
                        <td>Science</td>
                        <td>100</td>
                        <td>95</td>
                    </tr>
                </tbody>
            </table>

            <div className="result">
                <p><strong>Total Marks:</strong> 500</p>
                <p><strong>Obtained Marks:</strong> 440</p>
                <p><strong>Percentage:</strong> 88%</p>
                <p><strong>Grade:</strong> A+</p>
            </div>
        </div>
    );
};

export default Bulb;