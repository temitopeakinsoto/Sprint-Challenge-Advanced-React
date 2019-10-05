- [ ] Why would you use class component over function components (removing hooks from the question)?

ANS:
We would use react class components because they offer several lifecycle methods for the mounting, updating, and unmounting of the component life cycle. In addition to this, all the internal React Component logic comes from the extends React.Component via object-oriented inheritance that is used in the class component.


- [ ] Name three lifecycle methods and their purposes.
ANS:
A component, after being created, goes through life cycle methods on its way to being inserted into the DOM.
3 examples of such methods,for a class component, are:

Constructor()
The constructor for a React component is called before it is mounted. When implementing the constructor for a React.
Component subclass, we usually call super(props) before any other statement. Otherwise, this.props will be ndefined in the constructor, which can lead to bugs.

Render()
This method is defined in every component and is responsible for returning or rendering a HTML element/displaying UI to the user.
When called, the render() method examines this.props and this.state and uses them to render JSX elements to the DOM
 

componentDidMount() - This is invoked immediately after a component gets rendered and placed on the DOM. 
componentDidMount is similar to useEffect Hook of funtional components, and allows us to make ajax/axios call and any other side effect we wish.


- [ ] What is the purpose of a custom hook?
ANS: 
A custom hook is an hook which build ourselvesWith for the purpose of extracting and re-using stateful logic among different
components within our application.


- [ ] Why is it important to test our apps?
ANS: 
Testing our ensures that the different functionalities/components of our application are working as expected and producing the desired output. 

Testing also helps us and other developers working on a project from disrupting or breaking existing unctionalities either knowingly or unknowingly. 

Writing tests give us high confidence that our components and app functionalities are working for our users the way we designed them to.