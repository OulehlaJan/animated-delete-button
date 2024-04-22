import DeleteButton from './components/DeleteButton';

const App = () => {
  return <div>
    <DeleteButton
      onClick={() => console.log("Item deleted!")}
      className="custom-delete-button"
      onAnimationEnd={(animating) => console.log("Animation state:", animating)}>Delete
    </DeleteButton>
  </div>
}

export default App