# img-cube

[Three.js](https://threejs.org/) を使用して構築された、自動回転する3DキューブのWebコンポーネントです。

## デモ

[**ライブデモ**](~~https://code4fukui.github.io/img~~ *(unavailable)*-cube/)

![赤い背景に4つの暗灰色の3Dキューブが回転しているデモ](~~https://code4fukui.github.io/img~~ *(unavailable)*-cube/demo.gif)

## 特徴

- **シンプルな使い方:** ビルドステップなしで動作する自己完結型のWebコンポーネントです。
- **軽量:** 最小限のコードで、シンプルに回転する3Dキューブをレンダリングします。
- **CSSでカスタマイズ可能:** 標準のCSSを使用して、キューブのコンテナサイズを調整できます。

## 使い方

1.  HTMLファイルに**スクリプトを追加**します。jsDelivrなどのCDNからモジュールを直接リンクできます。

    ```html
    <script type="module" src="https://cdn.jsdelivr.net/gh/code4fukui/img-cube/img-cube.js"></script>
    ```

2.  キューブを表示したい場所に**要素を追加**します。

    ```html
    <img-cube></img-cube>
    ```

### カスタマイズ

CSSを使用してコンポーネントの表示サイズを変更できます。

```html
<!-- キューブを大きくする -->
<style>
  img-cube.large {
    width: 500px;
    height: 500px;
  }
</style>

<img-cube class="large"></img-cube>
```

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
