# Crimson ProgressBar

A simple fully customizable responsive stylish progress bar.

# Example

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/responsive.gif)

# Function Help

`renderProgressBar` takes two parameters minimum the rest is optional:

 - currentValue
 - totalValue
 - progressColor
 - backgroundColor
 - progressSymbol (one char max)
 - backgroundSymbol (one char max)
 - renderContainer (show [] around progress bar = bool)
 - progressSize (string see below)

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

# Progess Bar Size

Here are the sizes you can pass to the `progressSize` they will all be responsive

 - "xsmall"
 - "small"
 - "medium"
 - "large"
 - "xlarge"


# Code Example

to render one line simplys do the following:

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(50, 100);
```

![Example of Progress Bar](https://raw.githubusercontent.com/crimson-med/Crimson-ProgressBar/master/res/progress.gif)

```js
const crimsonProgressBar = require("crimson-progressbar");
crimsonProgressBar.renderProgressBar(50, 100, "magenta", "cyan", "|", "|", false, "large");
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
