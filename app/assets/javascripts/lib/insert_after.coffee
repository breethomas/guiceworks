poma.insertAfter = (newElement, targetElement) ->

  #target is what you want it to go after. Look for this elements parent.
  parent = targetElement.parentNode

  #if the parents lastchild is the targetElement...
  if parent.lastchild is targetElement

    #add the newElement after the target element.
    parent.appendChild newElement
  else

    # else the target has siblings, insert the new element between the target and it's next sibling.
    parent.insertBefore newElement, targetElement.nextSibling


