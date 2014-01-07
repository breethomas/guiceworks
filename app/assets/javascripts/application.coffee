#= require mkitt-probe
#= require mkitt-poma
#= require modeset-bindable

#= require_tree ./lib
#= require_tree ./components
#= require_tree ./controllers
#= require_tree ./views


window.$ = window.poma unless window.$
guiceworks.bindable = new Bindable().bindAll()
new guiceworks.MediaQueryMonitor

