#!/usr/bin/env node
// Install dependencies: npm install inquirer chalk
import inquirer from 'inquirer';
import chalk from 'chalk';
const students = [];
async function main() {
    while (true) {
        const { choice } = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Select an operation:',
                choices: ['Add Student', 'View Students', 'Exit'],
            },
        ]);
        switch (choice) {
            case 'Add Student':
                await addStudent();
                break;
            case 'View Students':
                viewStudents();
                break;
            case 'Exit':
                console.log(chalk.green('Goodbye!'));
                process.exit(0);
        }
    }
}
async function addStudent() {
    const studentInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter student name:',
        },
        {
            type: 'input',
            name: 'grade',
            message: 'Enter student grade:',
        },
    ]);
    const newStudent = {
        id: students.length + 1,
        name: studentInput.name,
        grade: studentInput.grade,
    };
    students.push(newStudent);
    console.log(chalk.green('Student added successfully!'));
}
function viewStudents() {
    console.log(chalk.yellow('Student List:'));
    students.forEach((student) => {
        console.log(`ID: ${student.id}, Name: ${student.name}, Grade: ${student.grade}`);
    });
}
main();
