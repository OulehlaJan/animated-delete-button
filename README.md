![GitHub License](https://img.shields.io/github/license/oulehlajan/animated-delete-button?style=for-the-badge)

<!-- Created by, animated text -->
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Noto+Sans&weight=600&size=32&duration=3300&pause=4800&color=79C0FF&center=true&vCenter=true&random=false&width=435&lines=%F0%9F%91%8B%2C+Created+by+%40OulehlaJan" />
</p>
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=noto&weight=600&size=22&duration=4000&pause=4350&color=FFA657&center=true&vCenter=true&random=false&width=910&lines=a+self-taught+passionate+Web+developer+from+Czechia" />
</p>

# :recycle: DeleteButton Component

The `DeleteButton` is a reusable React component that provides an animated button for deleting items. This component allows for visually appealing interactions during item removal and includes the ability to control the animation state from the external component.

# 💻 Demo
[![Netlify Status](https://api.netlify.com/api/v1/badges/795431f2-67e2-4ada-b4c0-65480a362f10/deploy-status)](https://app.netlify.com/sites/animated-delete-button-oulehlajan/deploys) <br />

<!-- Demo Link -->
<p align="center">
  <a href="https://animated-delete-button-oulehlajan.netlify.app/">Animated Delete Button</a>:point_left: <br />
</p>

<!-- GIF -->
<p align="center">
  <img src="https://github.com/OulehlaJan/animated-delete-button/assets/128754127/43d42e05-4fb0-4dfd-a38d-e78078ecd84c" />
</p>

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

# :pushpin: Usage Example

```jsx
<DeleteButton 
  onClick={() => console.log("Item deleted!")}
  className="custom-delete-button"
  onAnimationEnd={(animating) => console.log("Animation state:", animating)}>
  Delete
</DeleteButton>
```
The example above demonstrates how to implement the DeleteButton in an application. onClick is a function that is triggered after the button's animation completes, and onAnimationEnd is called with a boolean indicating whether the animation is starting or ending.
