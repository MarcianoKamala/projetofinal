
const {Router} = require('express')
const routes = new Router()

const agendaconsulta = require("./app/controllers/agendaControllers")

routes.get("/agendaconsulta", agendaconsulta.index)

routes.get("/agendaconsulta/:id", agendaconsulta.show)

routes.post("/agendaconsulta", agendaconsulta.create)

routes.put("/agendaconsulta/:id", agendaconsulta.update)

routes.delete("/agendaconsulta/:id", agendaconsulta.destroy)

module.exports = new routes
