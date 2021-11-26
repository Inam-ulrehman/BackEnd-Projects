const http = require('http')
const { readFileSync } = require('fs')

const homePage =readFileSync('./public/index.html')
const contactPage =readFileSync('./public/contact.html')
const aboutPage =readFileSync('./public/about.html')
const projectsPage =readFileSync('./public/projects.html')
const styleSheet =readFileSync('./public/styleSheet.css')
const javascript =readFileSync('./public/javascript.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  
  // About page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(aboutPage)
    res.end()
  } 
  // Contact page
  else if (url === '/contact') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(contactPage)
    res.end()
  }
  else if (url === '/projects') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(projectsPage)
    res.end()
  }
  else if (url === '/styleSheet.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(styleSheet)
    res.end()
  }
  else if (url === '/javascript.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(javascript)
    res.end()
  }
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(4280);