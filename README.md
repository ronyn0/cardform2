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
5. Make the form for characters - **done**
    - Handle validation in sequelize - **done**
    - Make form template better - **done**
    - CharacterInfo form - **done**
        - Change class to dropdown to add defaults (saves/profs)
        - Add levels to characters - **done**
    - Background form - **done**
    - Lineage form - **done**
        - Make a generic create lineage section (might not be necessary)
    - Skill form - **done**
        - add support for expertise (model/form/view)
    - Class Feature form - **done**
    - Include links to the forms for characters that have empty sections - **done**
    - Make for data driven (don't hard code data pull from db)
6. Create a home page that shows a random character - in progress
    - Make a card select page for CharacterInfo index - **done**
7. Make a login and account section, assign owners to characters - in progress
    - Implement [connect-session-sequelize
](https://www.npmjs.com/package/express-mysql-session) - **done**
    - Make model for accounts - **done**
    - Add account creation
    - Secure password storing
    - Associate accounts with characterinfo
    - Owner-group-all permission structure (Owner can edit, Admin group can edit all the pages)
    - Make sure username is displayed on every page - in progress
8. Deploy to a server
    - Look into [Railway](https://railway.app/) hosting
    - Get an SSL cert - **done**
9. Re-format readme - **done**

***
### Reminders: 
To format code press ctrl+shift+i (like css)
To preview readme press ctrl+shift+v

To launch the application do 
```
$ npm run devstart
```
if node says the port is in use do 
```
$ lsof -i :3000 -t | xargs kill
```

Big problems become small problems, small problems become nothing.