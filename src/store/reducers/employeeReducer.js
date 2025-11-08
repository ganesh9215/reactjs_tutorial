import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from "../actions/employeeActions";

const initialState = {
  employees: [
    { id: 1, name: "John Doe", department: "Finance" },
    { id: 2, name: "Jane Smith", department: "IT" },
  ],
};

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export default employeeReducer;
