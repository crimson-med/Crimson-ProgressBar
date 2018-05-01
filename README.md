# Crimson-ProgressBar

A simple node stylish progress bar for the console

# Example

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/progress.gif)

# Function Help

`renderProgressBar` takes two parameters minimum the rest is optional:

 - currentValue
 - totalValue
 - progressColor
 - backgroundColor
 - progressSymbol (one char max)
 - backgroundSymbol (one char max)

# Colors Available

 - black
 - red
 - green
 - yellow
 - blue
 - magenta
 - cyan
 - white
 - gray
 - grey

# Code Example

to render one line simplys do the following:

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(50, 100);
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/progress.gif)

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(50, 100, "magenta", "cyan", "|", "|");
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/progress_style.gif)

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(50, 100, "red", "grey", "-", "=");
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/progress_style2.gif)

# Styling Examples

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(currentValue, totalValue, "magenta", "cyan", "|", "᎒", false);
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/style1.gif)

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(currentValue, totalValue, "magenta", "cyan", "᎘", "᎗", false);
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/style2.gif)

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(currentValue, totalValue, "magenta", "cyan", "↬", "↫", false);
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/style3.gif)

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(currentValue, totalValue, "magenta", "cyan", "⌻", "⌷", false);
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/style4.gif)

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(currentValue, totalValue, "cyan", "cyan", "⍜", "⍛", false);
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/style5.gif)

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(currentValue, totalValue, "green", "red", "▓", "░", false);
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/style6.gif)

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(currentValue, totalValue, "green", "red", "■", "□", false);
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/style7.gif)

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(currentValue, totalValue, "green", "red", "◉", "◎", false);
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/style8.gif)

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(currentValue, totalValue, "green", "red", "⬥", "⬦", false);
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/style9.gif)
