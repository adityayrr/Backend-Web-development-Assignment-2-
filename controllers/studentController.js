let students = [
  { id: 1, name: "Aditya", age: 18, course: "Mathematics" },
  { id: 2, name: "Rohan", age: 22, course: "Physics" },
  { id: 3, name: "Neha", age: 19, course: "Mathematics" },
  { id: 4, name: "Aryan", age: 20, course: "Physics" }];
let nextId = 1;

const createStudent = (req, res, next) => {
  try {
    const { name, age, grade } = req.body;

    if (!name || age === undefined || !grade) {
      const error = new Error("Missing required fields: name, age, and grade are all required.");
      error.statusCode = 400;
      return next(error);
    }

    const newStudent = { id: nextId++, name, age, grade };
    students.push(newStudent);

    res.status(201).json({
      success: true,
      message: "Student created successfully.",
      data: newStudent,
    });
  } catch (err) {
    next(err);
  }
};

const getAllStudents = (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (err) {
    next(err);
  }
};

const getStudentById = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const student = students.find((s) => s.id === id);

    if (!student) {
      const error = new Error(`Student with ID ${id} not found.`);
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (err) {
    next(err);
  }
};

const updateStudent = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name, age, grade } = req.body;

    if (!name || age === undefined || !grade) {
      const error = new Error("Missing required fields: name, age, and grade are all required.");
      error.statusCode = 400;
      return next(error);
    }

    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
      const error = new Error(`Student with ID ${id} not found.`);
      error.statusCode = 404;
      return next(error);
    }

    students[index] = { id, name, age, grade };

    res.status(200).json({
      success: true,
      message: "Student updated successfully.",
      data: students[index],
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudent = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
      const error = new Error(`Student with ID ${id} not found.`);
      error.statusCode = 404;
      return next(error);
    }

    const removed = students.splice(index, 1);

    res.status(200).json({
      success: true,
      message: "Student deleted successfully.",
      data: removed[0],
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
