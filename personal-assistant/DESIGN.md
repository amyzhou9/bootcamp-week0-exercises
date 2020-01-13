### Proposal
For the to-do page I would need to implement a search bar, an add todo function, some way to store it, and a functionality to both delete individual to-dos and to clear all to-dos. 

Functionality that I would like to add is to be able to add tags to the to-dos that can categorize them. I would also like to add a due date field. This way we can display by date, and the different categories of to-dos can have different colors. With the due date function, I would then be able to put the to-dos into a planner/calendar. I also would like to be able to create recurring todos and search past todos. 

### Components
Components Hierarchy:
- App
    - Main App
        - Todos
            - Search Bar 
                - Search results 
            - Add Todos
                - Button
                - Date
                - Tags
            - Clear All To-dos
                - Button
            - List of To-dos
                - clear button
                - nav to edit page


- Main app will store the arrays for the todos, past todos, and current tags/colors
- Search will search by substring using the array of todos as a prop, and using boolean short cuts will selectively render by substring. 
- Add todos with its subcomponents will add todos with any relevant tags and dates 
- The list of todos will display the list of todos, color coordinated by their tags, listed by due date.
- The clear button will delete the specific todo from the visible list and add it to the past todos list

### Passing Data
Data will be passed from parent to child as props. The state of the todos and the set-state of the todos will be passed down which will allow the children component to edit the arrays held in Todos. 

