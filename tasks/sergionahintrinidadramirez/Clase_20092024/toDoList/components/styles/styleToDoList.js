import { css } from "lit";

export const styleToDoList = css`
  .container {
    width: 400px; 
    margin: 50px auto; 
    padding: 20px;
    border-radius: 15px; 
    background: linear-gradient(135deg, #f8f9fa, #e9ecef); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }
  h1 {
    text-align: center;
    color: #333; 
    font-family: 'Arial', sans-serif; 
    margin-bottom: 20px;
  }
  .input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 8px; 
    font-size: 16px; 
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); 
  }
  button {
    padding: 10px 15px; 
    background-color: #28a745; 
    color: white;
    border: none;
    border-radius: 8px; 
    cursor: pointer;
    transition: background-color 0.3s ease; 
  }
  button:hover {
    background-color: #218838; 
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
