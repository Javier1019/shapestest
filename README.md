# React 3D Shapes

This is a React application that allows you to view and interact with various 3D shapes. The application uses the `@react-three/fiber` and `@react-three/drei` libraries to create and render the 3D shapes. You can select different categories of shapes and see them rotating in the canvas.
Live Demo: [https://javier1019.github.io/shapestest/](https://javier1019.github.io/shapestest/)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/Javier1019/react-3d-shapes.git
   ```

2. Navigate to the project directory:

   ```
   cd react-3d-shapes
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Run the development server:

   ```
   npm start
   ```

   This will start the React development server and open the application in your default browser.

## Usage

Once the application is running, you can interact with it as follows:

- **Shape Selection**: Click on the buttons in the category selector to choose a specific shape category. The selected shape will be displayed in the canvas and start rotating.

- **Rotation**: The selected shape will continuously rotate along the x and y axes.

## Components

The application is composed of the following main components:

- **RotatingCube**: Renders a rotating cube.
- **RotatingSphere**: Renders a rotating sphere.
- **RotatingPyramid**: Renders a rotating pyramid.
- **RotatingCuboid**: Renders a rotating cuboid.
- **RotatingCylinder**: Renders a rotating cylinder.
- **RotatingPrism**: Renders a rotating custom prism shape.
- **RotatingCone**: Renders a rotating cone.

These components utilize the `useFrame` hook from `@react-three/fiber` to perform the rotation animation.

## Store

The application uses the `zustand` library to manage the active category state. The active category is stored in the `useStore` hook and can be updated by calling the `setActiveCategory` function.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgements

The application is built using the following libraries:

- [React](https://reactjs.org)
- [react-three/fiber](https://github.com/pmndrs/react-three-fiber)
- [react-three/drei](https://github.com/pmndrs/drei)
- [zustand](https://github.com/pmndrs/zustand)

## Author

[Javier Nazario](https://github.com/Javier1019)
