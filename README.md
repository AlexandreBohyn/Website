## README file with the necessary instructions
A markdown cheatsheet is available [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) on Github.

### Command line
To launch the command line use windowd + R and input
```
cmd
```
To launche the visual code editor from the cmd use
```
code [filename]
```
in the right directory. 
All available options are available [here](https://code.visualstudio.com/docs/editor/command-line) 
### Setup

#### Ceate a new project with all the p5 libraries:

To create a new project, I can use the cmd and p5 manager
if I type
```
p5 generate --bundle [project_name]
```
It generates:

- libraries folder
- sketch.js file
- index.html file

and my p5 project is ready to run.

#### Launch a Local server

To launch a local server on my computer that will render the javascript files,
I have to input the following command into my cmd line 

```
python -m http.server
```

and then the server is available at [this web adress.](localhost:8000).
The directory in which this file is open is the one that will open up on the server page.