#= require mkitt-probe
#= require mkitt-poma
#= require dijon

#= require ./config

#= require_tree ./lib
#= require_tree ./components
#= require_tree ./models
#= require_tree ./views



class guiceworks.Application
  startup: ->
    system = new dijon.System()
    system.mapValue("system", system)
    system.mapOutlet("system")

    system.injectInto(new guiceworks.Config())

    system.notify("Application:startup")
    system.notify("Application:startupComplete")

## -----------

window.$ = window.poma unless window.$
guiceworks.app = new guiceworks.Application
guiceworks.app.startup()

# guiceworks.bindable = new Bindable().bindAll()
# new guiceworks.MediaQueryMonitor

