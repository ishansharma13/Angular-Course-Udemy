# Section-5:
   ## Communicating between components
   ### Property and event binding is also possible on compponents


   ### Setting custom property binding between components (Binding to custom Properties)
   #### By default, any property in a component is accessible by that component only no parent components can access it. By parent component, I mean the component which has the selector of the component in consideration

   #### One may do it like this:
      ```define a property in CC.
            add the selector of CC to PC
            Try to add a property binding syntax [el]="pel"

            CC = Child Component
            PC = Parent Component
            el = property in CC
            pel = property in PC
        ```
  __This wont because by default properties of a child component or for that sake any component are not accessible to outside world by default.__

  _To actually do this, Input() decorator should be added before el


  __Property Binding is used when we want to pass data from parent to child component__
  __Event Binding when we want to pass data from child to parent component by adding a listener to PC__
_
  ### Local References can be passed by adding #refname inside any html element and that variable is accessible only in the html template NOT in the typescript code

  ### There are two ways in which we can access local references:
      1. Pass the element to the method when it is to be used
      2. using viewChild, when we want to access the element from typescript before calling the method
        2.1. Dont try to change the value of element value using viewChild (not recommended), better methods do exist to achieve the same

  ### ng-content in angular is equivalent to props.children in react


  
