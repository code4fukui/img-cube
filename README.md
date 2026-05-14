# img-cube

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A self-rotating 3D cube Web Component built with [Three.js](https://threejs.org/).

## Demo

[**Live Demo**](https://code4fukui.github.io/img-cube/)


![A demo of four dark gray 3D cubes rotating on a red background.](https://code4fukui.github.io/img-cube/demo.gif)


## Features

- **Simple to Use:** A self-contained Web Component that works without any build steps.
- **Lightweight:** Renders a simple, rotating 3D cube with minimal code.
- **CSS-Customizable:** Adjust the size of the cube's container using standard CSS.

## Usage

1.  **Include the script** in your HTML file. You can link directly to the module from a CDN like jsDelivr.

    ```html
    <script type="module" src="https://cdn.jsdelivr.net/gh/code4fukui/img-cube/img-cube.js"></script>
    ```

2.  **Add the element** where you want the cube to appear.

    ```html
    <img-cube></img-cube>
    ```

### Customization

You can change the display size of the component using CSS.

```html
<!-- Make the cube larger -->
<style>
  img-cube.large {
    width: 500px;
    height: 500px;
  }
</style>

<img-cube class="large"></img-cube>
```

## License

MIT License — see [LICENSE](LICENSE).