#Section-5:
    ## Communicating between components
      ### Property and event binding is also possible on compponents also


      ### Setting custom property binding between components (Binding to custom Properties)
        #### By default, any property in a component is accessible by that component only no parent components can access it,
          By parent component, I mean the component which has the selector of the component in consideration

        #### One may do it like this:
            define a property in CC.
            add the selector of CC to PC
            Try to add a property binding syntax [el]="pel"

            CC = Child Component
            PC = Parent Component
            el = property in CC
            pel = property in PC
        
        This wont because by default properties of a child component or for that sake any component are not accessible to outside world by default.

        To actually do this, Input() decorator should be added before el


    __Property Binding is used when we want to pass data from parent to child component__
    __Event Binding when we want to pass data from child to parent component __