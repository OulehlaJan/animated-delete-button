# :recycle: DeleteButton Component

The `DeleteButton` is a reusable React component that provides an animated button for deleting items. This component allows for visually appealing interactions during item removal and includes the ability to control the animation state from the external component.

## :white_check_mark: Features

- **Animation**: The component includes an internal animation that is triggered on click. The animation lasts for 2050 ms, during which the external `onClick` function call is delayed until the animation completes.
- **Customization**: The `className` prop allows for customizing the button styles.
- **Flexibility**: The `children` prop allows for flexible button content, including the possibility of animating individual characters if `children` is a string.

## Props

- `onClick` (Function): Function to be called after the animation completes.
- `children` (node): Content displayed on the button. If it's a string, each character is animated separately.
- `className` (String): Optional. CSS classes for customizing the button appearance.
- `onAnimationEnd` (Function): Optional. Function called at the start and end of the animation.

## Installation

Add `DeleteButton.js` and `DeleteButton.scss` to your project in the `src/components` directory.

Import `DeleteButton` into your component:

```jsx
import DeleteButton from './path/to/DeleteButton';
```

# :computer: Usage Example

```jsx
<DeleteButton 
  onClick={() => console.log("Item deleted!")}
  className="custom-delete-button"
  onAnimationEnd={(animating) => console.log("Animation state:", animating)}>
  Delete Item
</DeleteButton>
```
The example above demonstrates how to implement the DeleteButton in an application. onClick is a function that is triggered after the button's animation completes, and onAnimationEnd is called with a boolean indicating whether the animation is starting or ending.
