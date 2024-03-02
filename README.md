# Auto resize directive for <u>Angular textarea</u>

## Description

<b>ngx-auto-resize</b> is an Angular package that provides a directive for auto-resizing textarea element in Angular 17 or above projects.

## Installation

You can install the ngx-autoresize package using npm:

```
npm install ngx-auto-resize
```

## How to use

### step 1: importing the directive

Just import the directive in TS file of the component like this.

```javascript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AutoResize],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

<br/>

### step 2: Using the directive

```html
<textarea AutoResize></textarea>
```

<br/>

#### And you are all set. ❤️‍🔥
