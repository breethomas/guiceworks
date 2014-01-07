poma.debounce = (fn, wait, immediate) ->
  timeout = undefined
  ->
    context = this
    args = arguments
    later = ->
      timeout = null
      fn.apply(context, args) unless immediate

    call_now = immediate and not timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    fn.apply(context, args)  if call_now

