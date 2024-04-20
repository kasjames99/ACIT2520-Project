const passport = require("passport")


let adminController = {
    list: (req, res) => {
      const session = req.sessionStore.sessions
      const sessionData = Object.keys(session).map((sessionID) => {
        const sessionInfo = JSON.parse(session[sessionID]);
        return {
          sessionID: sessionID,
          userID: sessionInfo.passport ? sessionInfo.passport.user : "Guest",
        }
      })
    },
    delete: (req, res) => {
      const sessionID = req.body.sessionID;
      console.log(sessionID)
      req.sessionStore.destroy(sessionID, (err) => {
        if (err) {
          console.error("There was an error.", err);
          res.status(500);
        } else {
          console.log("Session destroyed")
          res.redirect("/reminder")
        }
      })
    }
  }
  
module.exports = { adminController }