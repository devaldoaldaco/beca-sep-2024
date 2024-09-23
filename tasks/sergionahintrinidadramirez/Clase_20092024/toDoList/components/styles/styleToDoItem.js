import { css } from "lit";

export const styleToDoListItem = css`
  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px; 
    background-color: #ffffff; 
    border-radius: 8px; 
    margin-bottom: 10px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    transition: transform 0.2s ease, box-shadow 0.2s ease; 
  }
  .task:hover {
    transform: translateY(-2px); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }
  .task span {
    flex: 1;
    font-size: 16px; 
    color: #495057; 
  }
  .task input {
    flex: 1;
    padding: 8px; 
    border: 1px solid #ced4da; 
    border-radius: 6px; 
    font-size: 16px; 
    margin-right: 10px; 
  }
  .buttons {
    display: flex;
    gap: 5px;
  }
  button {
    padding: 5px 10px; 
    border: none;
    border-radius: 6px; 
    cursor: pointer;
    transition: background-color 0.3s ease; 
  }
  .buttons button {
    background-color: #007bff; 
    color: white;
  }
  .buttons button:hover {
    background-color: #0056b3; 
  }
  .buttons button:last-child {
    background-color: #dc3545; 
  }
  .buttons button:last-child:hover {
    background-color: #c82333; 
  }
`;
