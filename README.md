## cardform2
***

Testing more with express using mysql

[Git respository](https://github.com/ronyn0/cardform2/)

[Diagram site](https://app.diagrams.net/)

### To-Do List:
1. Get the mysql data into pug - **done**
2. Translate the dndcards into pug - **done**
3. Make tables for dndcards and normalize character info (with models) - **done**
4. Make dndcards data driven - **done**
    - CharacterInfo - **done**
    - Background - **done**
    - Features - **done**
    - Lineage - **done**
    - Skill Proficiencies - **done**
5. Make the form for characters - in progress
    - Handle validation in sequelize - in progress
    - Make form template better - **done**
    - CharacterInfo form - **done**
    - Background form - 
    - Lineage form - **done**
    - Skill form - 
    - Class Feature form - 
    - Make a generic create lineage section - might not be necessary
    - Include links to the forms for characters that have empty sections - later on
6. Create a home page that shows a random character
    - Make a card select page for CharacterInfo index
7. Make a login and account section, assign owners to characters
    - Owner, group all permission structure, all can view
    - Admin group can edit all the pages
8. Deploy to a server
    - Get an SSL cert
9. Re-format readme - **done**

### Reminders: 
To format code press ctrl+shift+i (like css)
To preview readme press ctrl+shift+v

To launch the application do $npm run devstart
if node says the port is in use do $ lsof -i tcp:3000 to find the process
and use $ kill -9 PID to end it

Big problems become small problems, small problems become nothing.