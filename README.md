# 餐館官網
運用 CSS、SASS 純手刻的 landing page。目的是透過製作此網頁，練習切版技巧以及響應式設計。網頁的 UI 部分，主要參考國外[模板主題](http://www.themezaa.com/html/leadgen/demo/restaurant/index.html)，並另行額外刪減，做些微調整。

## DEMO
[前往頁面](https://wangyiwei0108.github.io/react-restaurant-website/)

## 使用技術
- HTML / CSS / JS
- SASS
- React

## 實現功能
- Navbar：根據畫面尺寸隱藏或顯示漢堡選單
- Menu：可藉由點擊 Menu 的種類，更換菜色
- Gallery：將多張照片以不同大小整齊排列；點選可放大顯示
- Chefs：以輪播方式呈現所有廚師的介紹

## 學習記錄
- 透過 window.inner 來設定 Navbar 漢堡選單隱藏或顯示的斷點
- 以 useState 的值（true / false），作為控制 className 變換的開關
- 透過 :target 設定，解決因為 fixed Navbar 而產生錨點偏移的問題
- 運用 CSS Grid 實現收納不同尺寸照片的 gallery
- 藉由 react-responsive-carousel 實現輪播
- 以 gh-pages 部署至 Github

![GITHUB](https://github.com/wangyiwei0108/react-restaurant-website/blob/master/src/assets/res.png)
